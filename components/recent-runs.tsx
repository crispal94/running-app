"use client"

import { Calendar, Clock, MapPin, TrendingUp } from "lucide-react"

// Sample data - in a real app, this would come from a database
const recentRuns = [
  {
    id: 1,
    date: "Apr 18, 2025",
    distance: 5.2,
    duration: "28:45",
    pace: "5:31",
    route: "Park Loop",
    effort: 7,
  },
  {
    id: 2,
    date: "Apr 15, 2025",
    distance: 10.2,
    duration: "55:12",
    pace: "5:25",
    route: "River Trail",
    effort: 8,
  },
  {
    id: 3,
    date: "Apr 12, 2025",
    distance: 3.5,
    duration: "18:30",
    pace: "5:17",
    route: "Neighborhood",
    effort: 6,
  },
  {
    id: 4,
    date: "Apr 10, 2025",
    distance: 8.0,
    duration: "44:20",
    pace: "5:32",
    route: "Park Loop",
    effort: 7,
  },
]

export default function RecentRuns() {
  return (
    <div className="space-y-4">
      {recentRuns.map((run) => (
        <div
          key={run.id}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center mb-2 sm:mb-0">
            <div className="bg-emerald-100 p-2 rounded-full mr-4">
              <Calendar className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <h3 className="font-medium">{run.date}</h3>
              <p className="text-sm text-gray-500">{run.route}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full sm:w-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin className="h-3 w-3 mr-1" />
                Distance
              </div>
              <span className="font-medium">{run.distance} km</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-3 w-3 mr-1" />
                Time
              </div>
              <span className="font-medium">{run.duration}</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center text-gray-500 text-sm">
                <TrendingUp className="h-3 w-3 mr-1" />
                Pace
              </div>
              <span className="font-medium">{run.pace}/km</span>
            </div>
          </div>

          <div className="mt-2 sm:mt-0 w-full sm:w-auto flex items-center">
            <div className="mr-2 text-sm">Effort:</div>
            <div className="w-full sm:w-24 bg-gray-200 rounded-full h-2">
              <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${(run.effort / 10) * 100}%` }}></div>
            </div>
            <span className="ml-2 text-sm font-medium">{run.effort}/10</span>
          </div>
        </div>
      ))}
    </div>
  )
}
