"use client"

import TopBlock from "@/blocks/portfolio/about/component"
import EducationBlock from "@/blocks/portfolio/education/component"
import ExperienceBlock from "@/blocks/portfolio/experience/component"
import ProjectsBlock from "@/blocks/portfolio/project/component"
import SkillsBlock from "@/blocks/portfolio/skills/component"
import CourseBlock from "@/blocks/portfolio/courses/component"


const componentMap: Record<string, React.FC<{ data: any }>> = {
  top: TopBlock,
  education: EducationBlock,
  experience: ExperienceBlock,
  projects: ProjectsBlock,
  skills: SkillsBlock,
  courses: CourseBlock,
}

const BlockRenderer = ({ type, data }: { type: string; data: any }) => {
  const Component = componentMap[type]
  if (!Component) return <div className="text-red-500 font-semibold">⚠ Unknown block: {type}</div>
  return <Component data={data} />
}

export default BlockRenderer
