"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, TrendingUp, Award, MapPin } from "lucide-react"
import RunForm from "./run-form"
import RecentRuns from "./recent-runs"
import RunStats from "./run-stats"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Running Dashboard</h1>
          <p className="text-gray-500 mt-1">Track your runs and monitor your progress</p>
        </div>
        <Button className="mt-4 md:mt-0 bg-emerald-500 hover:bg-emerald-600">Log New Run</Button>
      </div>

      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="log">Log Run</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Distance"
              value="124.5 km"
              description="Last 30 days"
              icon={<MapPin className="h-5 w-5 text-emerald-500" />}
            />
            <StatCard
              title="Total Time"
              value="12h 30m"
              description="Last 30 days"
              icon={<Clock className="h-5 w-5 text-emerald-500" />}
            />
            <StatCard
              title="Avg. Pace"
              value="5:30 /km"
              description="Last 30 days"
              icon={<TrendingUp className="h-5 w-5 text-emerald-500" />}
            />
            <StatCard
              title="Best Run"
              value="10.2 km"
              description="April 15, 2025"
              icon={<Award className="h-5 w-5 text-emerald-500" />}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest runs</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentRuns />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>This Month</CardTitle>
                <CardDescription>April 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-4">
                  <Calendar className="h-24 w-24 text-gray-400" />
                </div>
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Runs</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Distance</span>
                    <span className="font-medium">42.5 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Time</span>
                    <span className="font-medium">4h 12m</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="log">
          <Card>
            <CardHeader>
              <CardTitle>Log Your Run</CardTitle>
              <CardDescription>Record your latest running activity</CardDescription>
            </CardHeader>
            <CardContent>
              <RunForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats">
          <Card>
            <CardHeader>
              <CardTitle>Running Statistics</CardTitle>
              <CardDescription>Your performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <RunStats />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function StatCard({ title, value, description, icon }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </CardContent>
    </Card>
  )
}
