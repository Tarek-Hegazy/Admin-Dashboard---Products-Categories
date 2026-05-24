import { Link } from "react-router-dom";

import { AlertTriangle, ArrowLeft, Home } from "lucide-react";

import { Button, Card, CardContent } from "@/components/ui";

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <Card className="w-full max-w-2xl overflow-hidden rounded-[2rem] border-border/50 bg-card/70 shadow-2xl backdrop-blur-sm">
        <CardContent className="relative flex flex-col items-center justify-center gap-8 p-10 text-center md:p-14">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-primary/5" />

          {/* Error Code */}
          <div className="relative space-y-3">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] border border-destructive/10 bg-destructive/10 shadow-lg">
              <AlertTriangle className="h-11 w-11 text-destructive" />
            </div>

            <div>
              <h1 className="bg-gradient-to-b from-foreground to-muted-foreground/60 bg-clip-text text-7xl font-black tracking-tight text-transparent md:text-8xl">
                404
              </h1>

              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                Page Not Found
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="relative max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
            The page you are looking for does not exist, may have been moved, or
            is temporarily unavailable.
          </p>

          {/* Actions */}
          <div className="relative flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="h-11 rounded-2xl px-5 shadow-md">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>

            <Button asChild variant="outline" className="h-11 rounded-2xl px-5">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
