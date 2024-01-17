import type { LensConfig } from "@lens-protocol/react-web";
import { LensProvider, production } from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { WagmiProvider } from "wagmi";
import { polygon } from "wagmi/chains";

import { Routing } from "./routes";
import "./styles.css";

const config = getDefaultConfig({
  appName: "Bubble",
  projectId: "5e4531891e23ab5f92f02c6fad0bc20b",
  chains: [polygon],
});

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: production,
};
const queryClient = new QueryClient();

function IndexPopup() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          <LensProvider config={lensConfig}>
            <MemoryRouter>
              <Routing />
            </MemoryRouter>
          </LensProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default IndexPopup;
