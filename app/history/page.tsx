import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar, Filter, Search } from "lucide-react"

export default function HistoryPage() {
  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Run History</h1>
          <p className="text-gray-500 mt-1">View and filter your past runs</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Calendar View</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Search and Filter</CardTitle>
          <CardDescription>Find specific runs in your history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="Search by route, notes..." className="pl-8" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Input type="date" placeholder="From date" />
              <Input type="date" placeholder="To date" />
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="">Distance</option>
                <option value="0-5">0-5 km</option>
                <option value="5-10">5-10 km</option>
                <option value="10+">10+ km</option>
              </select>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="">Run Type</option>
                <option value="easy">Easy Run</option>
                <option value="tempo">Tempo Run</option>
                <option value="interval">Interval</option>
                <option value="long">Long Run</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <RunHistoryItem key={index} index={index} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="mx-2">
          Previous
        </Button>
        <Button variant="outline" className="mx-2">
          Next
        </Button>
      </div>
    </div>
  )
}

function RunHistoryItem({ index }) {
  // Helper function to calculate pace
  const calculatePace = (durationStr, dist) => {
    const parts = durationStr.split(":")
    const minutes = Number.parseInt(parts[0], 10)
    const seconds = Number.parseInt(parts[1], 10)
    const totalMinutes = minutes + seconds / 60
    return (totalMinutes / dist).toFixed(2)
  }

  // Generate some sample data
  const date = new Date()
  date.setDate(date.getDate() - index * 3)
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  const distances = [5.2, 8.4, 3.7, 10.1, 6.5]
  const distance = distances[index % distances.length]

  const durations = ["28:45", "45:12", "19:30", "55:20", "35:15"]
  const duration = durations[index % durations.length]

  const routes = ["Park Loop", "River Trail", "Neighborhood", "Track", "Forest Path"]
  const route = routes[index % routes.length]

  const types = ["Easy Run", "Tempo Run", "Interval Training", "Long Run", "Recovery"]
  const type = types[index % types.length]

  const efforts = [6, 8, 5, 7, 4]
  const effort = efforts[index % efforts.length]

  return (
    <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex items-start gap-4">
          <div className="bg-emerald-100 text-emerald-800 font-bold rounded-full w-12 h-12 flex items-center justify-center">
            {distance.toFixed(1)}
          </div>
          <div>
            <div className="flex items-center">
              <h3 className="font-medium">{formattedDate}</h3>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-600">{type}</span>
            </div>
            <p className="text-sm text-gray-500">{route}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4 md:mt-0">
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500">Distance</span>
            <span className="font-medium">{distance} km</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500">Time</span>
            <span className="font-medium">{duration}</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500">Pace</span>
            <span className="font-medium">{calculatePace(duration, distance)} min/km</span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-sm mr-2">Effort:</span>
          <div className="w-24 bg-gray-200 rounded-full h-2">
            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${(effort / 10) * 100}%` }}></div>
          </div>
          <span className="ml-2 text-sm">{effort}/10</span>
        </div>

        <div>
          <Button variant="ghost" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </div>
  )
}
