import { BaseAgent } from "@/agents/baseAgent";

export class EducationAgent extends BaseAgent {
    static NAME = "EducationAgent";
    NAME = EducationAgent.NAME;

    protected authPrompt(education: string): string {
        return `
You are an ATS optimization agent focused on the "Education" section of resumes.
You will be provided with a LaTeX code snippet of the Education section.

Your tasks are:
- Make it **more concise and ATS-friendly** (e.g., standardize degree names, abbreviate where necessary like "Bachelor of Technology" -> "B.Tech.").
- **Remove any unnecessary words** or redundant information.
- Ensure **dates, CGPA, institution names** are properly aligned and retained.
- **Do not modify** any core LaTeX commands such as \\resumeSubHeadingListStart, \\resumeSubheading, \\resumeSubHeadingListEnd.
- **Do not add** or **remove** extra lines or spaces that may break LaTeX formatting.

Focus on cleaning the content inside the LaTeX while preserving structure.

Here is the provided LaTeX snippet:
\`\`\`
${education}
\`\`\`

##Output format:
Only respond with the updated LaTeX snippet inside triple backticks.
No explanations or extra lines should be added.

\`\`\`
<Your updated LaTeX code snippet here>
\`\`\`
        `.trim();
    }
}
