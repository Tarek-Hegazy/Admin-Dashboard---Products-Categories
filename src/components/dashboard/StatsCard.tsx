import { TrendingUp, TrendingDown } from "lucide-react";

import { Card, CardContent } from "@/components/ui";

interface StatsCardProps {
  title: string;

  value: string | number;

  icon: any;

  trend: string;

  trendUp: boolean;

  color: string;
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  trendUp,
  color,
}: StatsCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="relative overflow-hidden p-6">
        <div className="flex items-start justify-between">
          <div
            className={`rounded-2xl border border-white/10 p-3 shadow-sm backdrop-blur-sm ${color}`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div
            className={`flex items-center gap-1 rounded-full border border-border/50 bg-background/60 px-2.5 py-1 text-xs font-semibold shadow-sm ${
              trendUp ? "text-emerald-600" : "text-rose-600"
            }`}
          >
            {trendUp ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}

            {trend}
          </div>
        </div>
        <div className="mt-4">
          <p className="text-3xl font-bold tracking-tight">{value}</p>
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            {title}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
