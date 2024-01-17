import type { LensConfig } from "@lens-protocol/react-web";
import { LensProvider, production } from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import { MemoryRouter } from "react-router-dom";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { Routing } from "./routes";
import "./styles.css";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygon],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Bubble",
  projectId: "5e4531891e23ab5f92f02c6fad0bc20b",
  chains,
});

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors,
  // connectors: [
  //   new InjectedConnector({
  //     options: {
  //       shimDisconnect: false, // see https://github.com/wagmi-dev/wagmi/issues/2511
  //     },
  //   }),
  // ],
});

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: production,
};

function IndexPopup() {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains} modalSize="compact">
        <LensProvider config={lensConfig}>
          <MemoryRouter>
            <Routing />
          </MemoryRouter>
        </LensProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default IndexPopup;
