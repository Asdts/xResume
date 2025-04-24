export const top = (data) => `
\\begin{document}
\\begin{header}
  \\fontsize{25 pt}{25 pt}\\selectfont ${data.fullName}
  \\vspace{5 pt}
  \\normalsize
  ${data.location}%
  \\kern 5.0 pt%
  $|$ \\href{mailto:${data.email}}{${data.email}}%
  \\kern 5.0 pt%
  $|$ \\href{tel:${data.phone}}{${data.phone}}%
  ${
  data.links.map((link)=>`\\kern 5.0 pt%
  $|$ \\href{${link}}{${link}}%`)
  }
\\end{header}
`;
