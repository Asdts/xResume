/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const EducationBlock = ({ data }: { data: any[] }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((edu, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">{edu.degree}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {edu.institution} • {edu.location}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-gray-700 space-y-2">
            <div className="flex items-center justify-between">
              <span>
                {new Date(edu.startDate).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'short',
                })} - {new Date(edu.endDate).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'short',
                })}
              </span>
              <span className="text-xs text-gray-400">
                CGPA: {edu.cgpa}
              </span>
            </div>
            <p className="text-sm text-gray-600">{edu.highlights}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default EducationBlock
