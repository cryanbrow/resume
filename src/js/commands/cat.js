function findFileNode(pwd, filename, root) {
    let node = root;
    for (const dir of pwd) {
        node = node.children?.find(child => child.name === dir && child.type === "directory");
        if (!node) return null;
    }
    return node.children?.find(child => child.name === filename && child.type === "file") || null;
}

function handleCatInput(inputString) {
    const parts = inputString.trim().split(/\s+/);
    if (parts.length < 2) return "cat: missing file operand";

    const filename = parts[1];
    const fileNode = findFileNode(pwd, filename, asciiResume.folderStructure);

    if (fileNode) {
        return fileNode.contents;
    } else {
        return `cat: ${filename}: No such file`;
    }
}