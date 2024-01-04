import "../enableDevHmr";

import { LensConfig, LensProvider, production } from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { createHashRouter } from "react-router-dom";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import "../../index.css";
import App from "./App";
import Login from "./login";
import Publication from "./publication";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

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

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/publication/:id",
    element: <Publication />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains} modalSize="compact">
        <LensProvider config={lensConfig}>
          <RouterProvider router={router} />
        </LensProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
