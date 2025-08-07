function contactInformation() {
    let returnString = "";
    returnString += asciiResume.contact.email + " | ";
    returnString += asciiResume.contact.phone + " | ";
    for (let i = 0; i < asciiResume.contact.links.length; i++) {
        returnString += asciiResume.contact.links[i] + " | ";
    }
    returnString = returnString.slice(0, returnString.length - 2);
    let returnStringLength = returnString.length;
    let padAmount = 144 - returnStringLength;
    returnString = returnString.padStart(returnStringLength + (padAmount/2), " ");
    returnString = returnString.padEnd(returnStringLength + (padAmount), " ");

    return [returnString];
}