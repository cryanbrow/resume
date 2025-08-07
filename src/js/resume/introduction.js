function splitIntroduction(str, maxLength) {
    const words = str.split(' ');
    const result = [];
    let currentLine = '';

    for (const word of words) {
        // If adding this word would exceed the limit, push the current line
        if ((currentLine + word).length > maxLength) {
            if (currentLine) {
                result.push(currentLine.trim());
                currentLine = '';
            }
        }
        currentLine += word + ' ';
    }

    // Push any leftover text
    if (currentLine.trim()) {
        result.push(currentLine.trim());
    }

    return result;
}
