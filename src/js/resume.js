async function handleResumeCommand(command) {
    var returnString = '';
    if (command.startsWith('resume')) {
        var resumeCommand = command.replace('resume', '').trim();
        if (resumeCommand) {
            switch (true) {
                case resumeCommand.includes("name"):
                    await printLinesWithDelay(formattedName(), buildLine);
                    break;
                case resumeCommand.includes("skills"):
                    await printLinesWithDelay(generateFourColumnTree(asciiResume.skills), buildLine);
                    break;
                case resumeCommand.includes("award"):
                    await printLinesWithDelay(awards, buildLine);
                    break;
                case resumeCommand.includes("cert"):
                    await printLinesWithDelay(generateCertifications(asciiResume.certifications), buildLine);
                    break;
                case resumeCommand.includes("keywords"):
                    await printLinesWithDelay(keywords(), buildLine);
                    break;
                case resumeCommand.includes("introduction"):
                    await printLinesWithDelay(splitIntroduction("\\** " + asciiResume.introduction + " **\\", 144), buildLine);
                    break;
                case resumeCommand.includes("divider"):
                    await printLinesWithDelay(divider, buildLine);
                    break;
                case resumeCommand.includes("contact"):
                    await printLinesWithDelay(contactInformation(), buildLine);
                    break;
                case resumeCommand.includes("experience"):
                    await printLinesWithDelay(generateAsciiExperienceSection(asciiResume.experience), buildLine);
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
    await printLinesWithDelay(formattedName(), buildLine);
    await printLinesWithDelay([blankLine], buildLine);
    await printLinesWithDelay([divider], buildLine);
    await printLinesWithDelay(contactInformation(), buildLine);
    await printLinesWithDelay(keywords(), buildLine);
    await printLinesWithDelay([divider], buildLine);
    await printLinesWithDelay([blankLine], buildLine);
    await printLinesWithDelay(splitIntroduction(asciiResume.introduction, 144), buildLine);
    await printLinesWithDelay(generateAsciiExperienceSection(asciiResume.experience), buildLine);
    await printLinesWithDelay(generateFourColumnTree(asciiResume.skills), buildLine);
    await printLinesWithDelay(generateCertifications(asciiResume.certifications), buildLine);
    await printLinesWithDelay(awards, buildLine);
}