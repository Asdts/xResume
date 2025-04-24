export const project = (items) => `
\\section{Projects}
${items.map(item => `
\\begin{twocolentry}{\\href{${item.link}}{${item.link}}}
  \\textbf{${item.title}}
\\end{twocolentry}
\\begin{onecolentry}
  \\begin{highlights}
    ${item.highlights.map(line => `\\item ${line}`).join('\n')}
  \\end{highlights}
\\end{onecolentry>`).join('\n')}
`;
