export const skills = (data) => `
\\section{Skills}
\\begin{onecolentry}
  \\textbf{Languages:} ${data.languages.join(', ')}
\\end{onecolentry}
\\begin{onecolentry}
  \\textbf{Technologies:} ${data.technologies.join(', ')}
\\end{onecolentry}
`;
