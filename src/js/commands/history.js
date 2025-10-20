function handleHistory() {
    const history = window.commandHistory || [];

    if (history.length === 0) {
        return 'history: no commands executed yet';
    }

    return history
        .map((entry, index) => `${String(index + 1).padStart(4, ' ')}  ${entry}`)
        .join('\n');
}