function handleHelp() {
    help.forEach(hhelp => {
        line = document.createElement('div');
        line.id = 'line';
        line.textContent = hhelp;
        terminal.appendChild(line);
    });
}

let help = [
    "resume can be used to print information about Bryan Crow",
    " ",
    "Main Resume Commands:",
    "  resume               Prints out the entirety of the resume in preferred order",
    "  resume experience    Lists work experience in chronological order",
    "  resume skills        Lists skills in tree format",
    "  resume certificates  Presents certificates",
    "  resume awards        Displays awards",
    " ",
    "Additional Resume Commands:",
    "  resume name          Displays name in ASCII art",
    "  resume divider       Outputs a divider",
    "  resume contact       Shows contact information",
    "  resume introduction  Introduction about me",
    "  resume keywords      Keywords describing me",
    " ",
    "Additional Commands:",
    "  clear (ctrl+l)       Clears the display",
    "  cancel (ctrl+c)      Clears current input",
    "  pwd                  Present Working Directory",
    "  cd                   Change Directory",
    "  cat <file>           Displays contents of selected file",
    "  history              Shows previously executed commands",
    "  date                 Displays the current date and time",
    "  uname [-a|--all]     Shows information about the resume system",
    "  echo <text>          Prints text to the terminal",
    "  kubectl              Explore the simulated Kubernetes cluster",
    "  motd                 Message of the Day",
    "  whoami               Current users name",
    "  ls                   List contents of current directory",
    " ",
]