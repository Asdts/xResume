export const course = (courses) => `
\\section{Courses}
\\begin{onecolentry}
  \\textbf{Coursework:} ${courses.join(', ')}
\\end{onecolentry}
`;
