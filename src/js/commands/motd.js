function createMOTD() {
    const motdLines = ['Welcome to Bryan Crow Resume 1.0.0 LTS',
        '  ',
        '|site|* LinkedIn ~https://www.linkedin.com/in/bryan-crow/',
        '|site|* GitHub ~https://github.com/cryanbrow',
        '  ',
        'This is an interactive resume. To get started, enter help to get available commands',
        'or enter `resume experience`, `resume skills`, or just `resume` to print everything.',
        '  ',
        'All files supporting this are in the pwd, use ls and cat to read files directly.',
        '  '];
    let result;
    let urlComponents;
    let urlLabelSpan;
    let urlHref;
    let motdSpan;
    for (let i = 0; i < motdLines.length; i++) {
        if (motdLines[i].startsWith('|site|')) {
            result = splitInput(motdLines[i], '|site|')

            urlComponents = result.split('~');

            line = document.createElement('div');
            line.id = 'line';
            urlLabelSpan = document.createElement('span');
            urlLabelSpan.id = 'urlLabelSpan' + i;
            urlLabelSpan.textContent = urlComponents[0];
            urlHref = document.createElement('a');
            urlHref.id = 'href' + i;
            urlHref.setAttribute('href', urlComponents[1]);
            urlHref.setAttribute('target', '_blank');
            urlHref.textContent = urlComponents[1];
            line.appendChild(urlLabelSpan);
            line.appendChild(urlHref);
            terminal.appendChild(line);
        } else {
            line = document.createElement('div');
            line.id = 'line';
            motdSpan = document.createElement('span');
            motdSpan.id = 'motd' + i;
            motdSpan.textContent = motdLines[i];
            line.appendChild(motdSpan);
            terminal.appendChild(line);
        }
    }
}