export const education = (items) => `
\\section{Education}
${items.map(item => `
\\begin{twocolentry}{${item.dates}}
  \\textbf{${item.institution}}, ${item.degree}
\\end{twocolentry}
\\begin{onecolentry}
  \\begin{highlights}
    ${item.highlights.map(line => `\\item ${line}`).join('\n')}
  \\end{highlights}
\\end{onecolentry>`).join('\n')}
`;
