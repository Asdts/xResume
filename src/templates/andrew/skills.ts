export const skills = (skillsObj: Record<string, string[]>, interests: string[]) => `
\\section{Skills \\& Interests}
\\begin{itemize}[leftmargin=0.15in, label={}]
  \\small{\\item{
${Object.entries(skillsObj).map(([title, values]) => `\\textbf{${title}}{: ${values.join(', ')}} \\\\`).join('\n')}
\\textbf{Interests}{: ${interests.join(', ')}}
  }}
\\end{itemize}
`;
