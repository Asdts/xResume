export const projects = (projectList: any[]) => `
\\section{Extracurricular Activities \\& Projects}
\\resumeSubHeadingListStart
${projectList.map(proj => `
\\resumeSubheading
  \\href{${proj.links}}{${proj.title}}{${proj.dates}}
  {${proj.stacks}}{}
  \\resumeItemListStart
    ${proj.bullets.map((b: string) => `\\resumeItem{${b}}`).join('\n')}
  \\resumeItemListEnd`).join('\n')}
\\resumeSubHeadingListEnd
`;
