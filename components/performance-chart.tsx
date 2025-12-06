"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { season: "2009", goals: 14, assists: 11, goalsper90: 0.35 },
  { season: "2010", goals: 42, assists: 25, goalsper90: 0.8 },
  { season: "2011", goals: 24, assists: 21, goalsper90: 0.6 },
  { season: "2012", goals: 43, assists: 22, goalsper90: 1.0 },
  { season: "13/14", goals: 15, assists: 15, goalsper90: 0.45 },
  { season: "14/15", goals: 39, assists: 11, goalsper90: 0.85 },
  { season: "15/16", goals: 31, assists: 25, goalsper90: 0.7 },
  { season: "16/17", goals: 20, assists: 26, goalsper90: 0.52 },
  { season: "17/18", goals: 28, assists: 16, goalsper90: 1.1 },
  { season: "18/19", goals: 23, assists: 13, goalsper90: 0.98 },
  { season: "19/20", goals: 19, assists: 12, goalsper90: 0.8 },
  { season: "20/21", goals: 17, assists: 11, goalsper90: 0.65 },
  { season: "21/22", goals: 13, assists: 8, goalsper90: 0.55 },
  { season: "22/23", goals: 18, assists: 17, goalsper90: 0.7 },
  { season: "23/24", goals: 1, assists: 3, goalsper90: 0.3 },
]

export function PerformanceChart() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Season Performance Trends</CardTitle>
        <p className="text-sm text-muted-foreground">Goals, assists, and efficiency across career</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="season" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="goals" stroke="hsl(var(--chart-1))" strokeWidth={2} name="Goals" />
            <Line type="monotone" dataKey="assists" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Assists" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
