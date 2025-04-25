"use client"

import { Badge } from "@/components/ui/badge"

const SkillsBlock = ({ data }: { data: { skillsObj: Record<string, string[]>, interests: string[] } }) => {
  const { skillsObj, interests } = data

  return (
    <div className="space-y-6">
        
      {Object.entries(skillsObj).map(([category, skills], index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold mb-2">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <Badge key={idx} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}

      {interests.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, idx) => (
              <Badge key={idx} variant="outline">
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SkillsBlock
