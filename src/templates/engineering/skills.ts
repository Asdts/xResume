export const skills = (skillsObj: Record<string, string[]>, interests: string[]) => `
\\section{Skills}
\\begin{onecolentry}

${Object.entries(skillsObj).map(([title, values]) => `\\textbf{${title}}{: ${values.join(', ')}} \\end{onecolentry}
\\begin{onecolentry} \\\\`).join('\n') }
  \\textbf{Interests:} ${interests.join(', ')}
\\end{onecolentry}
`;
