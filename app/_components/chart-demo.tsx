"use client"

import * as React from "react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"

const barData = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 5800 },
  { month: "Mar", revenue: 4900 },
  { month: "Apr", revenue: 7200 },
  { month: "May", revenue: 6100 },
  { month: "Jun", revenue: 8400 },
]

const areaData = [
  { month: "Jan", ios: 2400, mac: 1800 },
  { month: "Feb", ios: 3100, mac: 2200 },
  { month: "Mar", ios: 2800, mac: 2600 },
  { month: "Apr", ios: 4200, mac: 3100 },
  { month: "May", ios: 3800, mac: 2900 },
  { month: "Jun", ios: 5100, mac: 3700 },
]

const barConfig = {
  revenue: { label: "Revenue", color: "var(--color-primary)" },
} satisfies ChartConfig

const areaConfig = {
  ios: { label: "iOS", color: "hsl(211 100% 50%)" },
  mac: { label: "Mac", color: "hsl(211 100% 70%)" },
} satisfies ChartConfig

export function ChartDemo() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-6">
      <ChartContainer config={barConfig} className="h-48">
        <BarChart data={barData} barCategoryGap="30%">
          <CartesianGrid vertical={false} strokeDasharray="0" />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="revenue" fill="var(--color-primary)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ChartContainer>

      <ChartContainer config={areaConfig} className="h-48">
        <AreaChart data={areaData}>
          <defs>
            <linearGradient id="fillIos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(211 100% 50%)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="hsl(211 100% 50%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="fillMac" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(211 100% 70%)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="hsl(211 100% 70%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Area dataKey="ios" type="natural" fill="url(#fillIos)" stroke="hsl(211 100% 50%)" stackId="a" />
          <Area dataKey="mac" type="natural" fill="url(#fillMac)" stroke="hsl(211 100% 70%)" stackId="a" />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}
