function resolvePath(pwd, inputPath) {
    let parts;

    if (inputPath.startsWith('/')) {
        parts = inputPath.slice(1).split('/');
    } else {
        parts = [...pwd, ...inputPath.split('/')];
    }

    const stack = [];

    for (const part of parts) {
        if (part === '' || part === '.') continue;
        if (part === '..') {
            if (stack.length > 0) stack.pop();
        } else {
            stack.push(part);
        }
    }

    let node = asciiResume.folderStructure;
    for (const segment of stack) {
        node = node.children?.find(child => child.name === segment && child.type === 'directory');
        if (!node) return null;
    }

    return stack;
}

function handleCd(inputString) {
    const tokens = inputString.trim().split(/\s+/);
    const pathArg = tokens[1];

    if (!pathArg || pathArg === '~') {
        pwd = ['home', 'user'];
        return;
    }

    const resolved = resolvePath(pwd, pathArg);

    if (resolved) {
        pwd = resolved;
    } else {
        return `cd: no such file or directory: ${pathArg}`;
    }
}