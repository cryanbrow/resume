function handleEcho(inputString) {
    let content = inputString.slice(4).trimStart();

    if (!content) {
        return '';
    }

    if (content === '-n') {
        return '';
    }

    if (content.startsWith('-n ')) {
        content = content.slice(3).trimStart();
    }

    if (!content) {
        return '';
    }

    if ((content.startsWith('"') && content.endsWith('"')) ||
        (content.startsWith("'") && content.endsWith("'"))) {
        return content.slice(1, -1);
    }

    return content;
}