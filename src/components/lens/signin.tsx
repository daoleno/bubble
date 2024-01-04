import { useLogin } from "@lens-protocol/react-web";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

interface SignInButtonProps {
  address: string;
}

const SignInButton: React.FC<SignInButtonProps> = ({ address }) => {
  const { execute, loading, data, error } = useLogin();
  const navigate = useNavigate();
  const [signInError, setSignInError] = useState<string | null>(null);

  const handleClick = async () => {
    setSignInError(null);

    if (loading) {
      return;
    }

    try {
      const result = await execute({ address });

      if (result.isFailure()) {
        // Handle the different type of errors as per your requirement.
        setSignInError(result.error.name);
        return;
      }

      // Login is successful, redirecting to home page.
      // navigate("/");
    } catch (err) {
      console.log(err);
      setSignInError(err.message);
    }
  };

  return (
    <>
      <Button onClick={handleClick}>
        {loading ? "Signing in..." : "Sign in with Lens"}
      </Button>
      {signInError && <p style={{ color: "red" }}>{signInError}</p>}
    </>
  );
};

export default SignInButton;
