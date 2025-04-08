import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function StatsPage() {
  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Running Statistics</h1>
          <p className="text-gray-500 mt-1">Analyze your performance over time</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <StatCard title="Total Distance" value="345.8 km" change="+12.3%" positive={true} />
        <StatCard title="Total Runs" value="42" change="+8" positive={true} />
        <StatCard title="Average Pace" value="5:30 /km" change="-0:15 /km" positive={true} />
        <StatCard title="Total Time" value="42h 30m" change="+5h 15m" positive={true} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription>Track your progress over time</CardDescription>
              </div>
              <Select defaultValue="month">
                <SelectTrigger className="w-[180px]">
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
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="distance">
              <TabsList className="mb-4">
                <TabsTrigger value="distance">Distance</TabsTrigger>
                <TabsTrigger value="pace">Pace</TabsTrigger>
                <TabsTrigger value="time">Time</TabsTrigger>
                <TabsTrigger value="effort">Effort</TabsTrigger>
              </TabsList>
              <TabsContent value="distance" className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p>Distance chart visualization would appear here</p>
                </div>
              </TabsContent>
              <TabsContent value="pace" className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p>Pace chart visualization would appear here</p>
                </div>
              </TabsContent>
              <TabsContent value="time" className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p>Time chart visualization would appear here</p>
                </div>
              </TabsContent>
              <TabsContent value="effort" className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p>Effort chart visualization would appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Personal Records</CardTitle>
            <CardDescription>Your best performances</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <RecordCard distance="5K" time="22:45" date="Mar 15, 2025" />
              <RecordCard distance="10K" time="48:30" date="Feb 28, 2025" />
              <RecordCard distance="Half Marathon" time="1:52:15" date="Jan 12, 2025" />
              <RecordCard distance="Marathon" time="4:05:30" date="Nov 5, 2024" />
              <RecordCard distance="Longest Run" time="3:15:20" date="Dec 18, 2024" distance2="32.4 km" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Distribution</CardTitle>
            <CardDescription>When you run the most</CardDescription>
          </CardHeader>
          <CardContent className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <p>Weekly distribution chart would appear here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Route Analysis</CardTitle>
            <CardDescription>Performance by route</CardDescription>
          </CardHeader>
          <CardContent className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <p>Route analysis chart would appear here</p>
            </div>
          </CardContent>
        </Card>
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

function RecordCard({ distance, time, date, distance2 }) {
  return (
    <div className="bg-white p-4 rounded-lg border">
      <div className="flex justify-between items-center">
        <div className="text-sm font-medium">{distance}</div>
        <div className="text-xs text-gray-500">{date}</div>
      </div>
      <div className="text-xl font-bold mt-1">{time}</div>
      {distance2 && <div className="text-sm text-gray-500">{distance2}</div>}
    </div>
  )
}
