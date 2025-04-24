export const certification = (certs) => `
\\section{Certifications}
\\begin{onecolentry}
  ${certs.map(cert => `\\item ${cert}`).join('\n')}
\\end{onecolentry}
`;
