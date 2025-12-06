import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

const injuries = [
  {
    season: "2018/19",
    injury: "Metatarsal Injury",
    missed: "~20 games",
    severity: "high",
  },
  {
    season: "2020/21",
    injury: "Various minor injuries",
    missed: "Multiple periods",
    severity: "medium",
  },
  {
    season: "2021/22",
    injury: "Ankle Injury",
    missed: "~15 games",
    severity: "high",
  },
  {
    season: "2022/23",
    injury: "Ankle Injury",
    missed: "End of season",
    severity: "medium",
  },
  {
    season: "2023/24",
    injury: "ACL Tear",
    missed: "Majority of season",
    severity: "critical",
  },
]

const severityColors = {
  critical: "bg-destructive text-destructive-foreground",
  high: "bg-chart-4 text-background",
  medium: "bg-accent text-accent-foreground",
}

export function InjuryTimeline() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-destructive" />
          Major Injury Timeline
        </CardTitle>
        <p className="text-sm text-muted-foreground">Injuries that impacted performance</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {injuries.map((injury, index) => (
            <div key={index} className="flex items-start gap-4 rounded-lg border border-border p-4">
              <div className={`rounded-md px-3 py-1 text-xs font-semibold ${severityColors[injury.severity]}`}>
                {injury.season}
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-semibold text-sm">{injury.injury}</p>
                <p className="text-xs text-muted-foreground">Missed: {injury.missed}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
