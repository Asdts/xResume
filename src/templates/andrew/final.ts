const finalResume = [
    prebuild,
    topTemplate(userData),
    education(userData.education),
    experience(userData.experience),
    skills(userData.skills, userData.interests),
    projects(userData.projects),
    courses(userData.courses),
    end
  ].join('\n');
  