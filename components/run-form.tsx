"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function RunForm() {
  const [effortLevel, setEffortLevel] = useState(5)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input id="date" type="date" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Time of Day</Label>
          <Input id="time" type="time" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="distance">Distance (km)</Label>
          <Input id="distance" type="number" step="0.01" min="0" placeholder="5.0" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration-hours">Duration</Label>
          <div className="grid grid-cols-2 gap-2">
            <Input id="duration-hours" type="number" min="0" placeholder="Hours" required />
            <Input id="duration-minutes" type="number" min="0" max="59" placeholder="Minutes" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="run-type">Type of Run</Label>
          <Select>
            <SelectTrigger id="run-type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="easy">Easy Run</SelectItem>
              <SelectItem value="tempo">Tempo Run</SelectItem>
              <SelectItem value="interval">Interval Training</SelectItem>
              <SelectItem value="long">Long Run</SelectItem>
              <SelectItem value="race">Race</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Effort Level: {effortLevel}/10</Label>
        <Slider defaultValue={[5]} max={10} step={1} onValueChange={(value) => setEffortLevel(value[0])} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="route">Route</Label>
        <Select>
          <SelectTrigger id="route">
            <SelectValue placeholder="Select route" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="park-loop">Park Loop</SelectItem>
            <SelectItem value="river-trail">River Trail</SelectItem>
            <SelectItem value="neighborhood">Neighborhood</SelectItem>
            <SelectItem value="track">Track</SelectItem>
            <SelectItem value="custom">Custom Route</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" placeholder="How did your run feel? Any observations?" />
      </div>

      <div className="space-y-2">
        <Label>Weather Conditions</Label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <Button type="button" variant="outline" className="flex items-center gap-2">
            ☀️ Sunny
          </Button>
          <Button type="button" variant="outline" className="flex items-center gap-2">
            ☁️ Cloudy
          </Button>
          <Button type="button" variant="outline" className="flex items-center gap-2">
            🌧️ Rainy
          </Button>
          <Button type="button" variant="outline" className="flex items-center gap-2">
            💨 Windy
          </Button>
        </div>
      </div>

      <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
        Save Run
      </Button>
    </form>
  )
}
