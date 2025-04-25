/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Badge } from "@/components/ui/badge"

const TopBlock = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center p-6">

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        {data.fullName}
      </h1>


      <div className="text-sm text-muted-foreground flex flex-col items-center space-y-1">
        <p>{data.phone}</p>
        <p>
          <a
            href={`mailto:${data.mail}`}
            className="hover:underline text-blue-600"
          >
            {data.mail}
          </a>
        </p>
      </div>


      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {data.links.map((link: string, index: number) => (
          <Badge
            key={index}
            variant="secondary"
            className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
            onClick={() => window.open(`https://${link}`, "_blank")}
          >
            {link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default TopBlock
