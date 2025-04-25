/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const ExperienceBlock = ({ data }: { data: any[] }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {data.map((exp, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle className="text-lg">{exp.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {exp.company} • {exp.location}
                </CardDescription>
              </div>
              <div className="text-xs text-gray-400 mt-2 md:mt-0">
                {exp.dates}
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-gray-700 space-y-2">
            <ul className="list-disc list-inside space-y-1">
              {exp.bullets.map((bullet: string, idx: number) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ExperienceBlock
