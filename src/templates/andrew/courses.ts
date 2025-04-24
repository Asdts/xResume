export const courses = (courses: string[]) => `
\\section{Courses}
\\begin{itemize}[leftmargin=0.15in, label={}]
  \\small{\\item{
    \\textbf{Courses}{: ${courses.join(', ')}}
  }}
\\end{itemize}
`;
