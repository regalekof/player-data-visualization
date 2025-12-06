"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const radarData = [
  {
    metric: "Goals/90",
    santos: 80,
    barcelona: 70,
    psg: 95,
  },
  {
    metric: "Assists",
    santos: 70,
    barcelona: 85,
    psg: 75,
  },
  {
    metric: "Dribbles",
    santos: 90,
    barcelona: 85,
    psg: 80,
  },
  {
    metric: "Key Passes",
    santos: 75,
    barcelona: 90,
    psg: 85,
  },
  {
    metric: "Shot Accuracy",
    santos: 70,
    barcelona: 80,
    psg: 85,
  },
  {
    metric: "Chance Creation",
    santos: 75,
    barcelona: 95,
    psg: 80,
  },
]

export function PerformanceRadar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics Comparison</CardTitle>
        <CardDescription>Comparing key performance metrics across clubs (normalized to 100)</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={radarData}>
            <PolarGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <PolarAngleAxis dataKey="metric" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
            <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "hsl(var(--muted-foreground))" }} />
            <Legend />
            <Radar name="Santos" dataKey="santos" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
            <Radar name="Barcelona" dataKey="barcelona" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
            <Radar name="PSG" dataKey="psg" stroke="#1e40af" fill="#1e40af" fillOpacity={0.3} />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
