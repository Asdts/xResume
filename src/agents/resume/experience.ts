import { BaseAgent } from "@/agents/baseAgent";

export class ExperienceAgent extends BaseAgent {
    static NAME = "ExperienceAgent";
    NAME = ExperienceAgent.NAME;

    protected authPrompt(experience: string): string {
        return `
You are an ATS optimization agent focused on the "Experience" section of resumes.
You will be provided with a LaTeX code snippet of the Experience section.

Your tasks are:
- Make it **more concise, impactful, and ATS-optimized**.
- **Rewrite bullet points** if needed to start with strong action verbs (e.g., "Led", "Designed", "Implemented", "Optimized", "Improved").
- **Remove unnecessary words** and ensure each bullet clearly highlights **achievements** or **responsibilities**.
- **Standardize company names, titles, and locations** if needed.
- **Do not modify** LaTeX structures like \\resumeSubHeadingListStart, \\resumeSubheading, \\resumeItemListStart, \\resumeItem, \\resumeItemListEnd, etc.
- **Do not add** or **remove** any extra LaTeX lines or spacing.

Focus only on improving the text inside the structure without changing the LaTeX format.

Here is the provided LaTeX snippet:
\`\`\`
${experience}
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
