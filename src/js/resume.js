async function handleResumeCommand(command) {
    var returnString = '';
    if (command.startsWith('resume')) {
        var resumeCommand = command.replace('resume', '').trim();
        if (resumeCommand) {
            switch (true) {
                case resumeCommand.includes("name"):
                    await printLinesWithDelay(nameArt, buildLine);
                    break;
                case resumeCommand.includes("skills"):
                    await printLinesWithDelay(generateFourColumnTree(asciiResume.skills), buildLine);
                    break;
                case resumeCommand.includes("award"):
                    await printLinesWithDelay(awards, buildLine);
                    break;
                case resumeCommand.includes("cert"):
                    await printLinesWithDelay(certifications, buildLine);
                    break;
                case resumeCommand.includes("keywords"):
                    await printLinesWithDelay(keywords, buildLine);
                    break;
                case resumeCommand.includes("introduction"):
                    await printLinesWithDelay(introduction, buildLine);
                    break;
                case resumeCommand.includes("divider"):
                    await printLinesWithDelay(divider, buildLine);
                    break;
                case resumeCommand.includes("contact"):
                    await printLinesWithDelay(contact_information, buildLine);
                    break;
                case resumeCommand.includes("experience"):
                    await printLinesWithDelay(experience, buildLine);
                    break;
                default:
                    returnString += 'invalid resume command';
            }
        } else {
            await printEntireResume();
        }
    }
    return new Promise(resolve => {
        resolve(returnString);
    })
}

async function printEntireResume() {
    //Name art
    await printLinesWithDelay(nameArt, buildLine);
    await printLinesWithDelay([blankLine], buildLine);
    await printLinesWithDelay(contact_information, buildLine);
    await printLinesWithDelay(keywords, buildLine);
    await printLinesWithDelay([divider], buildLine);
    await printLinesWithDelay([blankLine], buildLine);
    await printLinesWithDelay(introduction, buildLine);
    await printLinesWithDelay(experience, buildLine);
    await printLinesWithDelay(generateFourColumnTree(asciiResume.skills), buildLine);
    await printLinesWithDelay(certifications, buildLine);
    await printLinesWithDelay(awards, buildLine);
}

function buildSkillTree(inputSkills, prefix) {
    console.log("Building Skill Tree")
    const counts = { headerCount: 0, skillCount: 0 };
    var parts = [];
    inputSkills.forEach((skill, index, skills) => {
        if (skill.name.charAt(0) == ".") {
            console.log(`${skill.name}`);
            parts = ["",""];
        }
        else {
            parts = index == skills.length - 1 ? ["└── ", "    "] : ["├── ", "│   "];
            console.log(prefix + parts[0] + skill.name);
        }

        if (skill.subSkills.length > 0) {
            counts.headerCount += 1;
            buildSkillTree(skill.subSkills, `${prefix}${parts[1]}`);
        } else {
            counts.skillCount += 1;
        }
    });
}