import { BaseAgent } from "@/agents/baseAgent";

export class SkillsAgent extends BaseAgent {
    static NAME = "SkillsAgent";
    NAME = SkillsAgent.NAME;

    protected authPrompt(skills: string): string {
        return `
You are an ATS optimization agent focused on the "Skills" and "Interests" section of resumes.
You will be provided with a LaTeX code snippet of the Skills section.

Your tasks are:
- **Organize skills clearly**: group similar skills together if needed.
- **Shorten very long skill names** while keeping them clear.
- **Remove repetitive or irrelevant skills** (e.g., listing both "HTML" and "HTML5" unnecessarily).
- **Ensure logical ordering**: start with technical/core skills, then frameworks, tools, then soft skills.
- **Improve Interests section** slightly if needed by making it cleaner and more ATS-friendly.
- **Do not modify** any LaTeX structures like \\section{}, \\begin{itemize}, \\small{}, \\textbf{}, etc.
- **Do not add** or **remove** LaTeX environments or extra lines.

Focus only on cleaning and improving the text inside the LaTeX structure without altering formatting.

Here is the provided LaTeX snippet:
\`\`\`
${skills}
\`\`\`

##Output format:
Only respond with the updated LaTeX code snippet inside triple backticks.
No explanations or extra text.

\`\`\`
<Your updated LaTeX code snippet here>
\`\`\`
        `.trim();
    }
}
