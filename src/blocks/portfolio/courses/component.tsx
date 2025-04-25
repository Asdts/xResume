/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const CourseBlock = ({ data }: { data: any[] }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((course, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">{course.name}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {course.institution}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-gray-700 space-y-2">
            <p>{course.description}</p>
            <p className="text-xs text-gray-400">
              {new Date(course.date).toLocaleDateString('en-GB', {
                month: "short",
                year: "numeric",
              })}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default CourseBlock

