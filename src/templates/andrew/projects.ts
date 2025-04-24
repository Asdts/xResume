export const projects = (projectList: any[]) => `
\\section{Extracurricular Activities \\& Projects}
\\resumeSubHeadingListStart
${projectList.map(proj => `
\\resumeSubheading
  {${proj.title}}{${proj.dates}}
  {${proj.organization}}{}
  \\resumeItemListStart
    ${proj.bullets.map((b: string) => `\\resumeItem{${b}}`).join('\n')}
  \\resumeItemListEnd`).join('\n')}
\\resumeSubHeadingListEnd
`;
