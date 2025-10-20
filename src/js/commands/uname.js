function handleUname(inputString) {
    const tokens = inputString.trim().split(/\s+/);
    const options = tokens.slice(1);
    const validOptions = new Set(['-a', '--all', '-s']);

    for (const option of options) {
        if (!validOptions.has(option)) {
            return `uname: invalid option -- '${option.replace(/^--?/, '')}'`;
        }
    }

    const kernelName = 'resumeOS';
    const nodeName = 'bryan-crow';
    const release = '5.15.0-resume';
    const version = '#1 SMP Wed May 1 12:00:00 UTC 2024';
    const machine = 'x86_64';

    if (options.includes('-a') || options.includes('--all')) {
        return `${kernelName} ${nodeName} ${release} ${version} ${machine}`;
    }

    // `uname` defaults to printing the kernel name
    return kernelName;
}