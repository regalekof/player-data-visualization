"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, LabelList } from "recharts"

const data = [
  { club: "Santos", goals: 123, assists: 79, apps: 204 },
  { club: "Barcelona", goals: 105, assists: 77, apps: 186 },
  { club: "Paris SG", goals: 118, assists: 77, apps: 173 },
  { club: "Al-Hilal", goals: 1, assists: 3, apps: 5 },
]

export function ClubComparison() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Club-by-Club Stats</CardTitle>
        <p className="text-sm text-muted-foreground">Total contributions at each club</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="club" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Legend />
            <Bar dataKey="goals" fill="oklch(0.45 0.18 230)" name="Goals">
              <LabelList dataKey="goals" position="top" fill="hsl(var(--foreground))" fontSize={12} />
            </Bar>
            <Bar
              dataKey="assists"
              fill="oklch(0.70 0.15 215)"
              stroke="oklch(0.45 0.18 230)"
              strokeWidth={2}
              name="Assists"
            >
              <LabelList dataKey="assists" position="top" fill="hsl(var(--foreground))" fontSize={12} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
