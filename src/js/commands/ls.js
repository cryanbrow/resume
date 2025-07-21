function handleLs() {
    let node = asciiResume.folderStructure;

    for (const dir of pwd) {
        const next = node.children?.find(child => child.name === dir && child.type === "directory");
        if (!next) return `ls: cannot access '${dir}': No such directory`;
        node = next;
    }

    const children = node.children || [];

    const container = document.createElement('div');
    container.id = 'line';

    children.forEach(child => {
        const itemSpan = document.createElement('span');
        itemSpan.textContent = child.name + '  ';

        if (child.type === 'directory') {
            itemSpan.style.color = '#00f';
        } else if (child.permissions?.startsWith('-rwx')) {
            itemSpan.style.color = '#0f0';
        } else {
            itemSpan.style.color = '#fff';
        }

        container.appendChild(itemSpan);
    });

    terminal.appendChild(container);
    return '';
}

function handleLsLong() {
    let node = asciiResume.folderStructure;

    for (const dir of pwd) {
        const next = node.children?.find(child => child.name === dir && child.type === "directory");
        if (!next) {
            const errorLine = document.createElement('div');
            errorLine.id = 'line';
            errorLine.textContent = `ls: cannot access '${dir}': No such directory`;
            terminal.appendChild(errorLine);
            return '';
        }
        node = next;
    }

    const children = node.children || [];

    children.forEach(child => {
        const line = document.createElement('div');
        line.id = 'line';

        const perm = child.permissions.padEnd(11);
        const owner = child.owner.padEnd(8);
        const group = child.group.padEnd(8);
        const modified = new Date(child.modified).toISOString().split('T')[0];
        const name = child.name;

        const nameSpan = document.createElement('span');
        nameSpan.textContent = name;

        if (child.type === 'directory') {
            nameSpan.style.color = '#00f';
        } else if (child.permissions.startsWith('-rwx')) {
            nameSpan.style.color = '#0f0';
        } else {
            nameSpan.style.color = '#fff';
        }

        line.textContent = `${perm} ${owner} ${group} ${modified} `;
        line.appendChild(nameSpan);
        terminal.appendChild(line);
    });

    return '';
}
