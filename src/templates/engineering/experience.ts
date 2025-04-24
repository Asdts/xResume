export const experience = (items) => `
\\section{Experience}
${items.map(item => `
\\begin{twocolentry}{${item.dates}}
  \\textbf{${item.title}}, ${item.company} -- ${item.location}
\\end{twocolentry}
\\begin{onecolentry}
  \\begin{highlights}
    ${item.highlights.map(line => `\\item ${line}`).join('\n')}
  \\end{highlights}
\\end{onecolentry>`).join('\n')}
`;
