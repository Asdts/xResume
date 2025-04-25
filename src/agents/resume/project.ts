import { BaseAgent } from "@/agents/baseAgent";

export class ProjectsAgent extends BaseAgent {
    static NAME = "ProjectsAgent";
    NAME = ProjectsAgent.NAME;

    protected authPrompt(projects: string): string {
        return `
You are an ATS optimization agent focused on the "Projects" section of resumes.
You will be provided with a LaTeX code snippet of the Projects/Extracurricular Activities section.

Your tasks are:
- **Summarize and enhance** each project description to be more impactful and **ATS-friendly**.
- Start each bullet point with a **strong action verb** (e.g., "Developed", "Engineered", "Designed", "Implemented", "Optimized").
- **Focus on outcomes, achievements, and skills used** (if mentioned, highlight them better).
- **Remove unnecessary words**, redundant phrasing, or weak descriptions.
- **Standardize project titles and links** formatting if needed (but do not break LaTeX hyperlink commands).
- **Do not modify** LaTeX structures like \\resumeSubHeadingListStart, \\resumeSubheading, \\resumeItemListStart, \\resumeItem, \\resumeItemListEnd, etc.
- **Do not add** or **remove** LaTeX lines, environments, or spaces.

Focus only on improving the text content inside the LaTeX structure without altering the formatting.

Here is the provided LaTeX snippet:
\`\`\`
${projects}
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
