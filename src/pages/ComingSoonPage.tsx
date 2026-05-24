import { Link } from "react-router-dom";

import { ArrowLeft, Clock3, Sparkles } from "lucide-react";

import { Button, Card, CardContent, Badge } from "@/components/ui";

interface ComingSoonPageProps {
  title: string;

  description?: string;
}

export function ComingSoonPage({
  title,
  description = "This feature is currently under development and will be available in a future update.",
}: ComingSoonPageProps) {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6">
      <Card className="w-full max-w-2xl overflow-hidden rounded-[2rem] border-border/50 bg-card/70 shadow-2xl backdrop-blur-sm">
        <CardContent className="relative flex flex-col items-center justify-center gap-8 p-10 text-center md:p-14">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

          {/* Icon */}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] border border-primary/10 bg-primary/10 shadow-lg">
            <Clock3 className="h-11 w-11 text-primary" />
          </div>

          {/* Content */}
          <div className="relative space-y-4">
            <Badge
              variant="secondary"
              className="rounded-full border border-border/50 px-4 py-1 text-xs tracking-wide"
            >
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Coming Soon
            </Badge>

            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                {title}
              </h1>

              <p className="mx-auto max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                {description}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="relative flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="h-11 rounded-2xl px-5 shadow-md">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
