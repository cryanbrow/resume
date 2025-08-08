function pad(str = "", length = 140) {
    return str.padEnd(length, " ");
}

function wrapText(text, width = 137) {
    const words = text.split(" ");
    const lines = [];
    let current = "";
    for (let word of words) {
        if ((current + word).length > width) {
            lines.push(current.trim());
            current = word + " ";
        } else {
            current += word + " ";
        }
    }
    if (current.trim()) lines.push(current.trim());
    return lines;
}

function generateAsciiExperienceSection(experiences) {
    const output = [];

    // Sort by startYear descending
    const sorted = experiences.slice().sort((a, b) => {
        const aYear = a.endYear || new Date().getFullYear();
        const bYear = b.endYear || new Date().getFullYear();
        return bYear - aYear;
    });

    for (const exp of sorted) {
        const yearLabel = `|${exp.endYear ?? "curr"}|`;
        output.push(pad(`------${"-".repeat(144 - yearLabel.length)}`));
        output.push(pad(`${yearLabel} ${exp.company} - ${exp.title}`));
        output.push(pad(`------${"-".repeat(138)}`));

        for (const line of wrapText(exp.description)) {
            output.push(pad(`|    | ${line}`));
        }

        output.push(pad("|    |")); // spacer

        for (const acc of exp.accomplishments) {
            output.push(pad(`|    | - ${acc}`));
        }

        output.push(pad("|    |")); // spacer
    }

    return output;
}
