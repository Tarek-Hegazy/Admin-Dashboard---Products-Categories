import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

// @ts-ignore: side-effect import for global CSS
import "./styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "./components/ui";
import { ErrorBoundary } from "./components/providers/ErrorBoundary";

// Theme Persistence
const savedTheme = localStorage.getItem("ui-store");

if (savedTheme) {
  const parsedTheme = JSON.parse(savedTheme);

  if (parsedTheme.state.theme === "dark") {
    document.documentElement.classList.add("dark");
  }
}

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
        <Toaster richColors position="top-right" closeButton />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
