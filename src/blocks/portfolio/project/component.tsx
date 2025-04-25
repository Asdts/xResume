/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ProjectsBlock = ({ data }: { data: any[] }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {data.map((proj, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                {/* Project Title with Link */}
                <CardTitle className="text-lg">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-600"
                  >
                    {proj.title}
                  </a>
                </CardTitle>
                <p className="text-xs text-gray-400">
                  {new Date(proj.date).toLocaleDateString('en-GB', {
                    year: "numeric",
                    month: "short",
                  })}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {proj.stacks.map((stack: string, idx: number) => (
                  <Badge key={idx} variant="secondary">
                    {stack}
                  </Badge>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-gray-700 space-y-2">

            <ul className="list-disc list-inside space-y-1">
              {proj.bullets.map((bullet: string, idx: number) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ProjectsBlock
