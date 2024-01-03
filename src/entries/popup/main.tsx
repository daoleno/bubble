import { LensConfig, LensProvider, production } from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";
import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";
import "../../index.css";
import "../enableDevHmr";
import App from "./App";

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

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/comments/:postId",
//     element: <Comment />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <LensProvider config={lensConfig}>
        <App />
      </LensProvider>
    </WagmiConfig>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
