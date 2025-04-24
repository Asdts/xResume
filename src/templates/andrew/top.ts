export const top = (user) => `
\\begin{document}

\\begin{center}
    \\textbf{\\Huge \\scshape ${user.fullName}} \\\\ \\vspace{0.5em}
\\end{center}

\\begin{center}
\\small ${user.phone} $|$ \\href{mailto:${user.mail}}{\\underline{${user.mail}}} ${
user.links.map((link)=>{
    return `$|$ \\href{https://www.${link}}{\\underline{${link}}}`
})
} %-----------use $|$ \\href{}{} for any other links-----------
\\end{center}`