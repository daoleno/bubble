import "../enableDevHmr";

import { LensConfig, LensProvider, production } from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { createHashRouter } from "react-router-dom";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";
import "../../index.css";
import App from "./App";
import Publication from "./publication";

const { publicClient, webSocketPublicClient } = configureChains(
  [polygon],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new InjectedConnector({
      options: {
        shimDisconnect: false, // see https://github.com/wagmi-dev/wagmi/issues/2511
      },
    }),
  ],
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
]);

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <LensProvider config={lensConfig}>
        <RouterProvider router={router} />
      </LensProvider>
    </WagmiConfig>
  </React.StrictMode>
);
