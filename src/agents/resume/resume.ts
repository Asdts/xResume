// File: src/agents/ResumeAgent.ts

import { BaseAgent } from "@/agents/baseAgent";

export class ResumeAgent extends BaseAgent {
    static NAME = "ResumeAgent";
    NAME = ResumeAgent.NAME;

    protected authPrompt(resumeSections: {
        top: string;
        education: string;
        experience: string;
        projects: string;
        skills: string;
        courses?: string;
    }): string {
        const { top, education, experience, projects, skills, courses } = resumeSections;

        return `
You are an expert ATS optimization and formatting agent for creating full resumes.
You will be provided with LaTeX code snippets for different sections of a resume:
- Top header (Name, Contact Info)
- Education
- Experience
- Projects / Extracurriculars
- Skills & Interests
- (Optional) Courses

Your tasks are:
- **Lightly optimize** each section if needed (e.g., fix small text inconsistencies, remove any minor redundant information).
- **Preserve LaTeX structure fully** — do not remove or misplace any environment like \\begin{itemize}, \\resumeSubHeadingListStart, etc.
- **Merge all sections cleanly into one LaTeX document** without adding any extra comments or explanations.
- If the "Courses" section is provided, place it logically **after Skills** (optional).
- Do not add any extra spaces or empty lines that could break LaTeX formatting.

Here are the provided LaTeX snippets:

Top Section:
\`\`\`
${top}
\`\`\`

Education Section:
\`\`\`
${education}
\`\`\`

Experience Section:
\`\`\`
${experience}
\`\`\`

Projects Section:
\`\`\`
${projects}
\`\`\`

Skills Section:
\`\`\`
${skills}
\`\`\`

${courses ? `Courses Section:
\`\`\`
${courses}
\`\`\`` : ''}

##Output format:
Only respond with the **final LaTeX code** combining all sections properly inside triple backticks.

\`\`\`
<Your full LaTeX resume code here>
\`\`\`
        `.trim();
    }
}
