import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ShoppingCartProvider} from "./ShoppingCartContext";

const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container);
//root.render(<App />);
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ShoppingCartProvider>
                <App />
            </ShoppingCartProvider>
        </QueryClientProvider>
    </React.StrictMode>
)
