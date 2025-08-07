function keywords() {
    let returnString = "";
    for (let j = 0; j < asciiResume.keywords.length; j++) {
        returnString += asciiResume.keywords[j] + " && ";
    }
    returnString = returnString.slice(0, returnString.length - 3);
    let returnStringLength = returnString.length;
    let padAmount = 144 - returnStringLength;
    returnString = returnString.padStart(returnStringLength + (padAmount/2), " ");
    returnString = returnString.padEnd(returnStringLength + (padAmount), " ");

    return [returnString];
}