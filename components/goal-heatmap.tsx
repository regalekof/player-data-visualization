"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const goalZones = [
  { zone: "top-left", goals: 45, label: "Top Left" },
  { zone: "top-center", goals: 32, label: "Top Center" },
  { zone: "top-right", goals: 38, label: "Top Right" },
  { zone: "mid-left", goals: 68, label: "Mid Left" },
  { zone: "mid-center", goals: 52, label: "Mid Center" },
  { zone: "mid-right", goals: 61, label: "Mid Right" },
  { zone: "low-left", goals: 28, label: "Low Left" },
  { zone: "low-center", goals: 18, label: "Low Center" },
  { zone: "low-right", goals: 25, label: "Low Right" },
]

const maxGoals = Math.max(...goalZones.map((z) => z.goals))

function getIntensityClass(goals: number) {
  const intensity = goals / maxGoals
  if (intensity >= 0.8) return "bg-[#3b82f6] text-white" // Hard blue
  if (intensity >= 0.6) return "bg-[#60a5fa] text-white"
  if (intensity >= 0.4) return "bg-[#93c5fd] text-gray-900"
  if (intensity >= 0.2) return "bg-[#bfdbfe] text-gray-900"
  return "bg-[#dbeafe] text-gray-900"
}

export function GoalHeatmap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Goal Location Heatmap</CardTitle>
        <CardDescription>Distribution of goals scored by zone (career total)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-[16/10] rounded-lg border-2 border-border bg-gradient-to-b from-green-900/20 to-green-700/20 p-4">
          {/* Goal area outline */}
          <div className="absolute inset-0 m-4">
            <div className="grid h-full grid-rows-3 gap-2">
              {/* Top Row */}
              <div className="grid grid-cols-3 gap-2">
                {goalZones.slice(0, 3).map((zone) => (
                  <div
                    key={zone.zone}
                    className={`flex flex-col items-center justify-center rounded-lg border-2 border-border p-4 transition-all hover:scale-105 ${getIntensityClass(zone.goals)}`}
                  >
                    <div className="text-3xl font-bold">{zone.goals}</div>
                    <div className="text-xs font-medium mt-1">{zone.label}</div>
                  </div>
                ))}
              </div>
              {/* Middle Row */}
              <div className="grid grid-cols-3 gap-2">
                {goalZones.slice(3, 6).map((zone) => (
                  <div
                    key={zone.zone}
                    className={`flex flex-col items-center justify-center rounded-lg border-2 border-border p-4 transition-all hover:scale-105 ${getIntensityClass(zone.goals)}`}
                  >
                    <div className="text-3xl font-bold">{zone.goals}</div>
                    <div className="text-xs font-medium mt-1">{zone.label}</div>
                  </div>
                ))}
              </div>
              {/* Bottom Row */}
              <div className="grid grid-cols-3 gap-2">
                {goalZones.slice(6, 9).map((zone) => (
                  <div
                    key={zone.zone}
                    className={`flex flex-col items-center justify-center rounded-lg border-2 border-border p-4 transition-all hover:scale-105 ${getIntensityClass(zone.goals)}`}
                  >
                    <div className="text-3xl font-bold">{zone.goals}</div>
                    <div className="text-xs font-medium mt-1">{zone.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-4 w-8 rounded bg-[#dbeafe] border border-border" />
            <span className="text-muted-foreground">Low</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-8 rounded bg-[#93c5fd] border border-border" />
            <span className="text-muted-foreground">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-8 rounded bg-[#3b82f6] border border-border" />
            <span className="text-muted-foreground">High</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
