// Render any subtree as array of lines
function renderTreeLines(data, prefix = "") {
    let lines = [];

    // NEW: if data is an array, just render its items directly
    if (Array.isArray(data)) {
        data.forEach((item, i) => {
            let isLast = i === data.length - 1;
            let connector = isLast ? "└──" : "├──";
            lines.push(`${prefix}${connector}${item}`);
        });
        return lines;
    }

    // Otherwise assume it's an object
    let keys = Object.keys(data);
    keys.forEach((key, index) => {
        let isLast = index === keys.length - 1;
        let connector = isLast ? "└──" : "├──";
        lines.push(`${prefix}${connector}${key}`);

        if (Array.isArray(data[key])) {
            data[key].forEach((item, i) => {
                let subLast = i === data[key].length - 1;
                let subConn = subLast ? "└──" : "├──";
                let subPrefix = prefix + (isLast ? "    " : "│   ");
                lines.push(`${subPrefix}${subConn}${item}`);
            });
        } else if (typeof data[key] === "object" && data[key] !== null) {
            let newPrefix = prefix + (isLast ? "    " : "│   ");
            lines.push(...renderTreeLines(data[key], newPrefix));
        }
    });

    return lines;
}

// Main function to generate the 4-column layout
function generateFourColumnTree(data, columnWidth = 36) {
    let topKeys = Object.keys(data);

    // 1. Distribute top-level keys evenly across 4 columns
    let columns = [[], [], [], []];
    topKeys.forEach((key, idx) => {
        columns[idx % 4].push(key);
    });

    // 2. Render each column's content
    let renderedColumns = columns.map(colKeys => {
        let lines = [];
        colKeys.forEach(k => {
            lines.push(`.${k}`);
            lines.push(...renderTreeLines(data[k]));
            lines.push("");  // Add a blank line for separation
        });
        return lines;
    });

    // 3. Determine tallest column
    let maxHeight = Math.max(...renderedColumns.map(c => c.length));

    // 4. Pad all columns to same height with blanks
    renderedColumns = renderedColumns.map(col => {
        while (col.length < maxHeight) col.push("");
        return col;
    });

    // 5. Build the final output lines
    let finalLines = [];
    finalLines.push(" ".repeat(columnWidth * 4)); // Blank spacer line
    finalLines.push("//Skills".padEnd(columnWidth * 4));
    finalLines.push(" ".repeat(columnWidth * 4)); // Another spacer

    for (let i = 0; i < maxHeight; i++) {
        let row = renderedColumns.map(col => (col[i] || "").padEnd(columnWidth)).join("");
        finalLines.push(row);
    }

    finalLines.push(" ".repeat(columnWidth * 4)); // Closing blank

    return finalLines;
}