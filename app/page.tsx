import { StatsOverview } from "@/components/stats-overview"
import { PerformanceChart } from "@/components/performance-chart"
import { ClubComparison } from "@/components/club-comparison"
import { InjuryTimeline } from "@/components/injury-timeline"
import { CareerMilestones } from "@/components/career-milestones"
import { SeasonTable } from "@/components/season-table"
import Image from "next/image"
import { PerformanceRadar } from "@/components/performance-radar"
import { GoalHeatmap } from "@/components/goal-heatmap"
import { ClubCountryComparison } from "@/components/club-country-comparison"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-[1600px] px-4 py-6 md:px-8">
          <div className="flex items-center gap-6">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-primary/20">
              <Image
                src="/neymar-jr-professional-football-player-portrait.jpg"
                alt="Neymar Jr."
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight text-balance">Neymar Jr. Career Analytics</h1>
              <p className="text-muted-foreground mt-1">Comprehensive performance dashboard · 2009-2024</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-[1600px] px-4 py-8 md:px-8">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="relative h-48 overflow-hidden rounded-lg border border-border">
            <Image
              src="/neymar-santos-celebrating-goal-brazil.jpg"
              alt="Neymar at Santos"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-sm font-medium text-muted-foreground">Peak Performance</p>
              <p className="text-lg font-bold">Santos Era</p>
            </div>
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg border border-border">
            <Image src="/neymar-barcelona-action-shot.jpg" alt="Neymar at Barcelona" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-sm font-medium text-muted-foreground">Treble Winner</p>
              <p className="text-lg font-bold">Barcelona</p>
            </div>
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg border border-border">
            <Image
              src="/neymar-paris-saint-germain-celebration.jpg"
              alt="Neymar at PSG"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-sm font-medium text-muted-foreground">Record Transfer</p>
              <p className="text-lg font-bold">Paris SG</p>
            </div>
          </div>
        </div>

        {/* Stats Overview Cards */}
        <StatsOverview />

        {/* Performance Chart */}
        <div className="mt-8">
          <PerformanceChart />
        </div>

        {/* Club Comparison and Injury Timeline */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <ClubComparison />
          <InjuryTimeline />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <PerformanceRadar />
          <GoalHeatmap />
        </div>

        <div className="mt-8">
          <ClubCountryComparison />
        </div>

        <div className="mt-8">
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-2xl font-bold mb-6">Trophy Cabinet</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-3">
                  <Image
                    src="/uefa-champions-league-trophy-gold.jpg"
                    alt="Champions League"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">UEFA Champions League</p>
                <p className="text-sm text-muted-foreground">2015</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-3">
                  <Image src="/la-liga-trophy-spanish-football.jpg" alt="La Liga" fill className="object-contain" />
                </div>
                <p className="font-semibold">La Liga</p>
                <p className="text-sm text-muted-foreground">2x (2015, 2016)</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-3">
                  <Image src="/ligue-1-trophy-french-football.jpg" alt="Ligue 1" fill className="object-contain" />
                </div>
                <p className="font-semibold">Ligue 1</p>
                <p className="text-sm text-muted-foreground">5x (2018-2022)</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-3">
                  <Image
                    src="/copa-america-trophy-south-american-football.jpg"
                    alt="Copa America"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">Copa América</p>
                <p className="text-sm text-muted-foreground">2021</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-3">
                  <Image
                    src="/fifa-confederations-cup-trophy.jpg"
                    alt="Confederations Cup"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">Confederations Cup</p>
                <p className="text-sm text-muted-foreground">2013</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-3">
                  <Image
                    src="/copa-libertadores-trophy-south-american.jpg"
                    alt="Copa Libertadores"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">Copa Libertadores</p>
                <p className="text-sm text-muted-foreground">2011</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-3">
                  <Image
                    src="/copa-del-rey-trophy-spanish-cup.jpg"
                    alt="Copa del Rey"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">Copa del Rey</p>
                <p className="text-sm text-muted-foreground">3x (2015, 2016, 2017)</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-3">
                  <Image
                    src="/olympic-gold-medal-football-soccer.jpg"
                    alt="Olympic Gold"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">Olympic Gold Medal</p>
                <p className="text-sm text-muted-foreground">2016</p>
              </div>
            </div>
          </div>
        </div>

        {/* Individual Awards Section */}
        <div className="mt-8">
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-2xl font-bold mb-6">Individual Awards</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-3">
                  <Image src="/ballon-dor-trophy-golden-ball.jpg" alt="Ballon d'Or" fill className="object-contain" />
                </div>
                <p className="font-semibold">Ballon d'Or</p>
                <p className="text-sm text-muted-foreground">3rd Place: 2015, 2017</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-3">
                  <Image src="/fifa-puskas-award-best-goal.jpg" alt="Puskas Award" fill className="object-contain" />
                </div>
                <p className="font-semibold">FIFA Puskás Award</p>
                <p className="text-sm text-muted-foreground">2011</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-3">
                  <Image
                    src="/copa-america-golden-ball-award.jpg"
                    alt="Copa America Golden Ball"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">Copa América Golden Ball</p>
                <p className="text-sm text-muted-foreground">2021</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-3">
                  <Image
                    src="/south-american-footballer-year-trophy.jpg"
                    alt="South American Footballer"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">South American Footballer of the Year</p>
                <p className="text-sm text-muted-foreground">3x (2011, 2012, 2015)</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-3">
                  <Image
                    src="/samba-gold-award-brazilian-league.jpg"
                    alt="Samba Gold"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">Samba Gold</p>
                <p className="text-sm text-muted-foreground">2x (2011, 2012)</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-3">
                  <Image
                    src="/ligue-1-player-year-trophy.jpg"
                    alt="Ligue 1 Player of the Year"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">Ligue 1 Player of the Year</p>
                <p className="text-sm text-muted-foreground">3x (2018, 2020, 2021)</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-3">
                  <Image
                    src="/confederations-cup-golden-ball.jpg"
                    alt="Confederations Cup Golden Ball"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">FIFA Confederations Cup Golden Ball</p>
                <p className="text-sm text-muted-foreground">2013</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 mb-3">
                  <Image
                    src="/uefa-champions-league-golden-boot.jpg"
                    alt="Champions League Top Scorer"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">UCL Top Scorer</p>
                <p className="text-sm text-muted-foreground">2015 (10 goals)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Milestones */}
        <div className="mt-8">
          <CareerMilestones />
        </div>

        {/* Season by Season Table */}
        <div className="mt-8">
          <SeasonTable />
        </div>
      </main>
    </div>
  )
}
