import Layout from "@/components/layout";
import { Card } from "@/components/ui/card";
import { shortString } from "@/lib/utils";
import {
  useLazyProfile,
  useLogin,
  useOwnedHandles,
} from "@lens-protocol/react-web";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

const Login: React.FC = () => {
  const { address, connector, isConnected } = useAccount();
  const { execute: fetchProfile } = useLazyProfile();
  const { data, loading, error } = useOwnedHandles({
    for: address || "",
  });
  const { execute, loading: loginLoading } = useLogin();
  const navigate = useNavigate();
  const [signInError, setSignInError] = useState<string | null>(null);

  const handleClick = async (addr: string, profileHandle: string) => {
    setSignInError(null);

    if (loading) {
      return;
    }

    try {
      const profileResult = await fetchProfile({ forHandle: profileHandle });

      if (profileResult.isFailure()) {
        setSignInError(profileResult.error.message);
        return;
      }

      const profile = profileResult.value;

      const result = await execute({
        address: addr,
        profileId: profile.id,
      });

      if (result.isFailure()) {
        // Handle the different type of errors as per your requirement.
        setSignInError(result.error.name);
        return;
      }

      // Login is successful, redirecting to home page.
      navigate("/");
    } catch (err) {
      console.log(err);
      setSignInError(err.message);
    }
  };

  return (
    <Layout>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {loginLoading ? (
          <div>Sign in...</div>
        ) : address ? (
          // <SignInButton address={address} /> :
          data && data?.length > 0 ? (
            data?.map((handle) => (
              <Card
                key={handle.id}
                className="flex flex-col items-center justify-center p-3 hover:cursor-pointer"
                onClick={() => handleClick(address, handle.fullHandle)}
              >
                <div className="font-bold">{handle.fullHandle}</div>
                <div className="text-muted-foreground">
                  {shortString(handle.id)}
                </div>
              </Card>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center gap-3">
              <ConnectButton label="Change Wallet" />
              <div className="font-bold">No handles found</div>
            </div>
          )
        ) : (
          <ConnectButton />
        )}
        {signInError && <div className="text-red-500">{signInError}</div>}
      </div>
    </Layout>
  );
};

export default Login;
