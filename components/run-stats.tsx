"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RunStats() {
  const [timeframe, setTimeframe] = useState("month")

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Tabs defaultValue="distance" className="w-full sm:w-auto">
          <TabsList>
            <TabsTrigger value="distance">Distance</TabsTrigger>
            <TabsTrigger value="pace">Pace</TabsTrigger>
            <TabsTrigger value="time">Time</TabsTrigger>
          </TabsList>
        </Tabs>

        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Last 7 days</SelectItem>
            <SelectItem value="month">Last 30 days</SelectItem>
            <SelectItem value="year">Last 12 months</SelectItem>
            <SelectItem value="all">All time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-80 w-full bg-gray-50 border rounded-lg flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p className="mb-2">Chart visualization would appear here</p>
          <p className="text-sm">
            Showing{" "}
            {timeframe === "week"
              ? "weekly"
              : timeframe === "month"
                ? "monthly"
                : timeframe === "year"
                  ? "yearly"
                  : "all time"}{" "}
            statistics
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Distance" value="124.5 km" change="+12.3%" positive={true} />
        <StatCard title="Average Pace" value="5:30 /km" change="-0:15 /km" positive={true} />
        <StatCard title="Total Time" value="12h 30m" change="+2h 15m" positive={false} />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Personal Records</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <RecordCard distance="5K" time="22:45" date="Mar 15, 2025" />
          <RecordCard distance="10K" time="48:30" date="Feb 28, 2025" />
          <RecordCard distance="Half Marathon" time="1:52:15" date="Jan 12, 2025" />
          <RecordCard distance="Marathon" time="4:05:30" date="Nov 5, 2024" />
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, change, positive }) {
  return (
    <div className="bg-white p-4 rounded-lg border">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="text-2xl font-bold mt-1">{value}</div>
      <div className={`text-sm mt-1 ${positive ? "text-green-600" : "text-red-600"}`}>
        {change} {positive ? "↑" : "↓"}
      </div>
    </div>
  )
}

function RecordCard({ distance, time, date }) {
  return (
    <div className="bg-white p-4 rounded-lg border">
      <div className="text-sm font-medium text-gray-500">{distance}</div>
      <div className="text-xl font-bold mt-1">{time}</div>
      <div className="text-xs text-gray-500 mt-1">{date}</div>
    </div>
  )
}
