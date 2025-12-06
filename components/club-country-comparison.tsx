"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const comparisonData = [
  { year: "2009", club: 14, country: 3 },
  { year: "2010", club: 42, country: 9 },
  { year: "2011", club: 24, country: 14 },
  { year: "2012", club: 43, country: 8 },
  { year: "2013", club: 15, country: 11 },
  { year: "2014", club: 39, country: 4 },
  { year: "2015", club: 31, country: 8 },
  { year: "2016", club: 20, country: 5 },
  { year: "2017", club: 28, country: 6 },
  { year: "2018", club: 23, country: 6 },
  { year: "2019", club: 19, country: 5 },
  { year: "2020", club: 17, country: 4 },
  { year: "2021", club: 13, country: 8 },
  { year: "2022", club: 18, country: 7 },
  { year: "2023", club: 1, country: 3 },
]

export function ClubCountryComparison() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Club vs Country Goals</CardTitle>
        <CardDescription>Comparing goals scored for club and Brazil national team by year</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="year" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
            <YAxis tick={{ fill: "hsl(var(--foreground))" }} />
            <Legend />
            <Bar dataKey="club" fill="#3b82f6" name="Club Goals" radius={[8, 8, 0, 0]}>
              <LabelList dataKey="club" position="top" fill="hsl(var(--foreground))" fontSize={10} />
            </Bar>
            <Bar dataKey="country" fill="#93c5fd" name="Brazil Goals" radius={[8, 8, 0, 0]}>
              <LabelList dataKey="country" position="top" fill="hsl(var(--foreground))" fontSize={10} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
