import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const seasonData = [
  {
    season: "2009",
    club: "Santos",
    apps: 48,
    goals: 14,
    assists: 11,
    goalsPer90: 0.35,
    notes: "-",
  },
  {
    season: "2010",
    club: "Santos",
    apps: 60,
    goals: 42,
    assists: 25,
    goalsPer90: 0.8,
    notes: "-",
  },
  {
    season: "2011",
    club: "Santos",
    apps: 47,
    goals: 24,
    assists: 21,
    goalsPer90: 0.6,
    notes: "-",
  },
  {
    season: "2012",
    club: "Santos",
    apps: 49,
    goals: 43,
    assists: 22,
    goalsPer90: 1.0,
    notes: "Peak Season",
  },
  {
    season: "2013/14",
    club: "Barcelona",
    apps: 41,
    goals: 15,
    assists: 15,
    goalsPer90: 0.45,
    notes: "Adaptation Period",
  },
  {
    season: "2014/15",
    club: "Barcelona",
    apps: 51,
    goals: 39,
    assists: 11,
    goalsPer90: 0.85,
    notes: "Treble Winner",
  },
  {
    season: "2015/16",
    club: "Barcelona",
    apps: 49,
    goals: 31,
    assists: 25,
    goalsPer90: 0.7,
    notes: "-",
  },
  {
    season: "2016/17",
    club: "Barcelona",
    apps: 45,
    goals: 20,
    assists: 26,
    goalsPer90: 0.52,
    notes: "-",
  },
  {
    season: "2017/18",
    club: "Paris SG",
    apps: 30,
    goals: 28,
    assists: 16,
    goalsPer90: 1.1,
    notes: "Peak Efficiency",
  },
  {
    season: "2018/19",
    club: "Paris SG",
    apps: 28,
    goals: 23,
    assists: 13,
    goalsPer90: 0.98,
    notes: "Metatarsal Injury",
  },
  {
    season: "2019/20",
    club: "Paris SG",
    apps: 27,
    goals: 19,
    assists: 12,
    goalsPer90: 0.8,
    notes: "-",
  },
  {
    season: "2020/21",
    club: "Paris SG",
    apps: 31,
    goals: 17,
    assists: 11,
    goalsPer90: 0.65,
    notes: "Minor Injuries",
  },
  {
    season: "2021/22",
    club: "Paris SG",
    apps: 28,
    goals: 13,
    assists: 8,
    goalsPer90: 0.55,
    notes: "Ankle Injury",
  },
  {
    season: "2022/23",
    club: "Paris SG",
    apps: 29,
    goals: 18,
    assists: 17,
    goalsPer90: 0.7,
    notes: "Ankle Injury",
  },
  {
    season: "2023/24",
    club: "Al-Hilal",
    apps: 5,
    goals: 1,
    assists: 3,
    goalsPer90: 0.3,
    notes: "ACL Tear",
  },
]

export function SeasonTable() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Season-by-Season Statistics</CardTitle>
        <p className="text-sm text-muted-foreground">Complete breakdown of all competitions</p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Season</TableHead>
                <TableHead className="font-bold">Club</TableHead>
                <TableHead className="text-right font-bold">Apps</TableHead>
                <TableHead className="text-right font-bold">Goals</TableHead>
                <TableHead className="text-right font-bold">Assists</TableHead>
                <TableHead className="text-right font-bold">Goals/90</TableHead>
                <TableHead className="font-bold">Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {seasonData.map((row) => (
                <TableRow key={row.season}>
                  <TableCell className="font-semibold">{row.season}</TableCell>
                  <TableCell>{row.club}</TableCell>
                  <TableCell className="text-right">{row.apps}</TableCell>
                  <TableCell className="text-right font-semibold text-chart-1">{row.goals}</TableCell>
                  <TableCell className="text-right font-semibold text-chart-2">{row.assists}</TableCell>
                  <TableCell className="text-right font-mono">{row.goalsPer90.toFixed(2)}</TableCell>
                  <TableCell>
                    {row.notes !== "-" ? (
                      <Badge variant="secondary" className="text-xs">
                        {row.notes}
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
