export const experience = (experiences: any[]) => `
\\section{Experience}
\\resumeSubHeadingListStart
${experiences.map(exp => `
\\resumeSubheading
  {${exp.company}}{${exp.location}}
  {${exp.title}}{${exp.dates}}
  \\resumeItemListStart
    ${exp.bullets.map((b: string) => `\\resumeItem{${b}}`).join('\n')}
  \\resumeItemListEnd`).join('\n')}
\\resumeSubHeadingListEnd
`;
