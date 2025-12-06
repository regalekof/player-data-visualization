import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Target, Activity, Award } from "lucide-react"

const stats = [
  {
    label: "Total Club Appearances",
    value: "568",
    icon: Activity,
    trend: "+5 from last update",
    color: "text-chart-1",
  },
  {
    label: "Total Career Goals",
    value: "347",
    icon: Target,
    trend: "Top 50 all-time",
    color: "text-chart-2",
  },
  {
    label: "Total Assists",
    value: "235",
    icon: TrendingUp,
    trend: "Elite playmaker",
    color: "text-chart-3",
  },
  {
    label: "Peak Goals/90",
    value: "1.10",
    icon: Award,
    trend: "2017/18 Season",
    color: "text-chart-4",
  },
]

export function StatsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.trend}</p>
                </div>
                <div className={`rounded-lg bg-muted p-3 ${stat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
