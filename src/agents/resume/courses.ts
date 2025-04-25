import { BaseAgent } from "@/agents/baseAgent";

export class CoursesAgent extends BaseAgent {
    static NAME = "CoursesAgent";
    NAME = CoursesAgent.NAME;

    protected authPrompt(courses: string): string {
        return `
You are an ATS optimization agent focused on the "Courses" section of resumes. 
You will be provided with a LaTeX code snippet of the Courses section. 

Your tasks are:
- Make it more **space-efficient** (e.g., shorten course names if needed).
- Ensure it is **ATS-friendly** (clear, simple wording).
- **Remove unnecessary or repetitive information**.
- **Do not modify** any LaTeX structural commands like \\section{}, \\begin{itemize}, etc.
- **Do not add** or **remove** new lines or spacing that could cause formatting inconsistencies.

Focus on improving the course list while preserving LaTeX structure.

Here is the provided LaTeX snippet:
\`\`\`
${courses}
\`\`\`

##Output format:
Only respond with the cleaned-up LaTeX code snippet inside triple backticks.
Do not add any commentary or explanation.

\`\`\`
<Your updated LaTeX code snippet here>
\`\`\`
        `.trim();
    }
}
