import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Calendar, TrendingUp, AlertTriangle } from "lucide-react"

const milestones = [
  {
    year: "2012",
    title: "Peak at Santos",
    description: "Best goal-scoring season with 43 goals in 49 appearances",
    icon: Trophy,
    color: "text-chart-2",
  },
  {
    year: "2014",
    title: "World Cup Injury",
    description: "Missed 7-1 semi-final after injury, returned stronger next season",
    icon: AlertTriangle,
    color: "text-destructive",
  },
  {
    year: "2014/15",
    title: "Treble Winner",
    description: "Peak season at Barcelona with 39 goals, 10 in Champions League",
    icon: Trophy,
    color: "text-chart-1",
  },
  {
    year: "2017",
    title: "World Record Transfer",
    description: "Moved to PSG for €222M, became the main star",
    icon: TrendingUp,
    color: "text-chart-3",
  },
  {
    year: "2017/18",
    title: "Peak Efficiency",
    description: "Highest goals/90 rate at 1.10 in first PSG season",
    icon: Trophy,
    color: "text-chart-4",
  },
  {
    year: "2021",
    title: "Brazil Record",
    description: "Surpassed Pelé's Brazil national team goal record (75+ goals)",
    icon: Calendar,
    color: "text-chart-2",
  },
  {
    year: "2023",
    title: "ACL Tear",
    description: "Major injury halted European career, moved to Saudi Arabia",
    icon: AlertTriangle,
    color: "text-destructive",
  },
]

export function CareerMilestones() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Career Milestones</CardTitle>
        <p className="text-sm text-muted-foreground">Key moments that defined the career</p>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              return (
                <div key={index} className="relative flex gap-4 pl-0">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-muted ${milestone.color}`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-sm font-bold text-muted-foreground">{milestone.year}</span>
                      <h3 className="text-lg font-bold">{milestone.title}</h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
