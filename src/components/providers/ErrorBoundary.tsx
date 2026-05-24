import React, { Component, ErrorInfo, ReactNode } from "react";

import { Button } from "@/components/ui";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): State {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error Boundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-center">
          <h1 className="text-3xl font-bold">Something went wrong</h1>

          <p className="max-w-md text-muted-foreground">
            An unexpected error occurred. Please try refreshing the page.
          </p>

          <Button onClick={this.handleReload}>Reload Page</Button>
        </div>
      );
    }

    return this.props.children;
  }
}
