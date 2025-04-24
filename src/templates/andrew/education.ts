export const education = (educationList: any[]) => `
\\section{Education}
\\resumeSubHeadingListStart
${educationList.map(ed => `
\\resumeSubheading
  {${ed.institution}}{${ed.location}}
  {${ed.degree}, CGPA: ${ed.cgpa}}{${ed.dates}}`).join('\n')}
\\resumeSubHeadingListEnd
`;
