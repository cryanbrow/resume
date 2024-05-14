var pwd = ['home', 'user']

let nameArt = [
"                                                ___ _____   ___   _  _    ___ ___  _____      __                                               ",
"                                               | _ ) _ \\ \\ / /_\\ | \\| |  / __| _ \\/ _ \\ \\    / /                                               ",
"                                               | _ \\   /\\ V / _ \\| .` | | (__|   / (_) \\ \\/\\/ /                                                ",
"                                               |___/_|_\\ |_/_/ \\_\\_|\\_|  \\___|_|_\\\\___/ \\_/\\_/                                                 ",
]

let skills = [
    "                                                                                                                                                ",
    "//Skills                                                                                                                                        ",
    "                                                                                                                                                ",
    ".container_orchestration            .programming                        .data_analysis                      .dev_ops                            ",
    "├──kuberenetes                      ├──languages                        ├──machine_learning                 ├──CI                               ",
    "│   ├──PKS/TKGI/TKGS/TKG2           │   ├──java                         │   ├──tensorflow                   │   ├──jenkins                      ",
    "│   ├──AKS/GKE                      │   ├──python                       │   ├──keras                        │   ├──github_actions               ",
    "│   ├──k3s/microK8s/minikube        │   ├──golang                       │   ├──opencv                       │   ├──terraform                    ",
    "│   └──helm/kustomize               │   ├──js                           │   ├──pytorch                      │   ├──travis_ci                    ",
    "└──container_distribution           │   └──ts                           │   ├──azure_ml_studio              │   └──concourse                    ",
    "    ├──docker                       └──frameworks                       │   └──scikit_learn                 └──source_control                   ",
    "    ├──podman                           ├──spring/spring_boot           └──data_preparation                     ├──git                          ",
    "    ├──jib                              ├──angular                         ├──ml_data_cleaning                  └──svn                          ",
    "    └──harbor                           ├──vue                             ├──outlier_removal                                                   ",
    "                                        ├──ionic                           └──statistical_modeling          .monitoring                         ",
    ".database_technologies                  ├──electron                                                         ├──prometheus                       ",
    "├──oracle                               ├──react                        .mobile_development                 ├──alert_manager                    ",
    "├──cassandra/datastax                   └──wails                        ├──native_android                   ├──appdynamics                      ",
    "├──redis                                                                ├──ionic                            ├──loki                             ",
    "├──h2                               .protocols                          └──react_native                     ├──pagerduty                        ",
    "└──mongodb                          ├──REST/SOAP/graphql                                                    ├──splunk                           ",
    "                                    ├──RPC                              .methodologies                      ├──grafana                          ",
    ".project_management                 ├──MQTT                             ├──paired_programming               └──ELK                              ",
    "├──agile                            ├──JMS                              ├──BDD                                                                  ",
    "├──SAFE                             └──Kafka                            └──TDD                                                                  ",
    "├──scrum                                                                                                                                        ",
    "└──kanban                                                                                                                                       ",
    "                                                                                                                                                "];

let experience = [
    "                                                                                                                                                ",
    "//Experience                                                                                                                                    ",
    "                                                                                                                                                ",
    "FedEx/Chief Engineering Specialist Principal ────────────────────────┤2022|                                                                     ",
    "                                                                     |    |                                                                     ",
    "Led the rollout of dimensioning in motion for increased revenue      |    |                                                                     ",
    "recovery by FedEx Freight. Completed proof of concept for migrating  |    |                                                                     ",
    "far edge technologies to the near edge. Broadened oversight to       |    |                                                                     ",
    "help a wider array of teams beyond immediate team in retiring        |2018├──────────────────────────────────── FedEx/Software Developer Advisor",
    "legacy systems, hardening of critical business systems, and          |    |                                                                     ",
    "migration of a FedEx owned data center to a managed data center.     |    |          Led a team in adoption of technologies and practices around",
    "                                                                     |    |    Kubernetes. Implemented proofs of concepts to determine viability",
    "- Rolled out dimensioning in motion software to 150+ service centers |    |    of new technologies such as Kubernetes, Helm, Docker, Prometheus,",
    "- Resulted in 25 million dollars in recovered revenue per quarter    |    |      Alert Manager, Grafana, and other technologies for supporting a",
    "- Filed 8 patents surrounding real time location tracking with RFID  |    |     far edge ecosystem. Continued refinement of the edge ecosystem,,",
    "                                                                     |    |                    and the first adoption of OKTA OAuth2 at Freight.",
    "FedEx/Senior Programmer Analyst ─────────────────────────────────────|2016|                                                                     ",
    "                                                                     |    |   - Implemented anedge security solution with trenching capabilities",
    "Spearheaded adoption of Cassandra, Kafka, Spring Boot, and           |    |   - Pioneered Kubernetes adoption in production for FedEx           ",
    "microservice architecture in building the RFID stack. Built and led  |    |   - Architecture guidance for the rewriting the forklift computer   ",
    "workshops for onboarding new team members onto the RFID stack and    |    |                                                                     ",
    "new technologies for rapid adoption. Built technologies for tracking |2013├──────────────────────────────────────────── FedEx/Programmer Analyst",
    "RFID tags in real time using a distributed edge compute model.       |    |                                                                     ",
    "                                                                     |    |       Advocated for and implemented the first REST services at FedEx",
    "- Established Kafka and Cassandra implementation at FedEx            |    |    Freight and the first single page Angular application at Freight.",
    "- Created visualizer to display location of shipments and forklifts  |    |        Allowing for adoption of Agile and microservice technologies.",
    "                                                                     |    |                                                                     ",
    "FedEx/Associate Programmer Analyst ──────────────────────────────────┤2012|                                                                     ",
    "                                                                     |    |                                                                     ",
    "Build software for syncing and reconciling Freight customer data and |2011├──────────────────────────────────────── FedEx/Lead Computer Operator",
    "to reduce data inconsistency and improve customer experience         |    |                                                                     ",
    "between Freight and Enterprise customer systems.                     |    | Shift lead responsible for activities within a data center including",
    "                                                                     |    |     production installs, monitoring, alerting, and resolving issues.",
    "FedEx/Computer Operator ─────────────────────────────────────────────┤2007|      Built Java software for tracking, recovery, and long storage of",
    "                                                                     |    |                                                offsite backup media.",
    "Responsible for monitoring, alerting, and resolving issues with      |    |                                                                     ",
    "servers, networking equipment, mainframe processes, and other data   |    |                                                                     ",
    "center centric activites.                                            |    |                                                                     ",
    "                                                                     |    |                                                                     ",];

let awards = [
    "//Awards",
    " ",
    "{\"awards\": [",
    "    {",
    "        \"issuer\": \"FedEx\",",
    "        \"name\": \"Five Star Award\",",
    "        \"awardYear\": \"2018\",",
    "        \"awardMonth\": \"Aug\",",
    "        \"description\": \"The Five Star Award is the highest honor at FedEx. It recognizes team members who have enhanced service and profitability and exemplified the spirit of teamwork.\",",
    "        \"recognition\": \"Awarded for adoption of Cassandra, Kafka, Spring Boot, and other technologies, paving the way for RFID.\"",
    "    }, {",
    "        \"issuer\": \"FedEx\",",
    "        \"name\": \"Global Opco Technologies Excellence Award\",",
    "        \"awardYear\": \"2021\",",
    "        \"awardMonth\": \"Jun\",",
    "        \"description\": \"Award recognizing team members in aid of unifying of FedEx Operating Companies\",",
    "        \"recognition\": \"Awarded for PKS adoption for the RFID edge stack and construction of pipelines to support adoption of Kubernetes.\"",
    "    },",
    "    {",
    "        \"issuer\": \"FedEx\",",
    "        \"name\": \"Hanschu Luminary Award\",",
    "        \"awardYear\": \"2023\",",
    "        \"awardMonth\": \"May\",",
    "        \"description\": \"The Hanschu Luminary Award awarded to one individual contributor from FedEx Services who embodied mentorship, innovation, selflessness, commitment, and accountability.\",",
    "    }",
    "    ]",
    "}",
];

let divider = "≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡";

let introduction = ["/** Lead Technical Developer with greater than ten years of leadership experience in process and technical change. Experienced in training and",
    "advancing teams in adoption of modern coding, design, and pairing practices. Successfully implemented large scale, data intensive, IOT",
    "implementations for large automation projects. **/"];

let keywords = ["                                Software Developer && Software Architect && IOT Developer && Kubernetes Engineer                                "];

let certifications = [
    "//Certifications",
    " ",
    "certifications:",
    "  - name: Certified Kubernetes Application Developer (CKAD)",
    "    issuer: Cloud Native Computing Foundation (CNCF)",
    "    issueYear: '2023'",
    "    issueMonth: Jan",
    "    expires: true",
    "    expirationYear: '2026'",
    "    expirationMonth: Jan",
    "  - name: Professional To Leader Graduate",
    "    issuer: FedEx",
    "    issueYear: '2018'",
    "    issueMonth: Nov",
    "    expires: false",
    "    expirationYear: ''",
    "    expirationMonth: ''",
    "  - name: Dale Carnegie Course",
    "    issuer: Dale Carnegie & Associates Inc",
    "    issueYear: '2015'",
    "    issueMonth: Nov",
    "    expires: false",
    "    expirationYear: ''",
    "    expirationMonth: ''",
    " ",
];

let volunteer = [];

let blankLine = "                                                                                                                                                ";

let contact_information = ["                            cryan.brow@gmail.com | 870-754-2665 | github.com/cryanbrow | linkedin.com/in/bryan-crow                            "];

let help = [
    "resume can be used to print information about Bryan Crow",
    " ",
    "Main Commands:",
    "  resume               Prints out the entirety of the resume in preferred order",
    "  resume experience    Lists work experience in chronological order",
    "  resume skills        Lists skills in tree format",
    "  resume certificates  Presents certificates",
    "  resume awards        Displays awards",
    " ",
    "Additional Commands:",
    "  resume name          Displays name in ASCII art",
    "  resume divider       Outputs a divider",
    "  resume contact       Shows contact information",
    "  resume introduction  Introduction about me",
    "  resume keywords      Keywords describing me",
    " ",
    "Work In Progress:",
    "  clear (ctrl+l)       Clears the display",
    "  cancel (ctrl+c)      Clears current input",
    "  pwd                  Present Working Directory",
    "  cd                   Change Directory",
    "  cat <file>           Displays contents of selected file",
    "  motd                 Message of the Day",
    "  whoami               Current users name",
    "  ls                   List contents of current directory",
    " ",
]

var terminal = document.getElementById('terminal');

createMOTD();
buildLine();

var line = document.getElementById('line');
var header = document.getElementById('header');
var input = document.getElementById('input');
var cursor = document.getElementById('cursor');

var approvedCommands = {
    'ls': '',
    'pwd': '',
    'whoami': 'user',
    'clear': '',
    'motd': '',
    'help': 'Available Commands',
    'cd': '',
    'cat': '',
    'ls -al': 'ls -al',
    'll': 'll',
    '': '',
};
var directoryListings = {
    '/': ['home', 'usr', 'var', 'opt', 'lib', 'tmp'],
    '/home': ['user', 'bryan'],
    '/home/user': ['experience.yml', 'projects.yml', 'about-me.yml'],
    '/home/bryan': ['experience.yml', 'projects.yml', 'about-me.yml'],
    '/usr': ['local', 'bin'],
    '/usr/local': [],
    '/usr/bin': ['kubectl', 'cat', 'cd', 'motd', 'clear', 'ls', 'pwd'],
    '/var': [],
    '/opt': [],
    '/lib': [],
    '/tmp': [],
}

function processCommand(result) {
    returnString = '';
    if (result == 'clear') {
        removeChildrenWithId(terminal);
    } else if (result.startsWith('help')) {
        handleHelp();
    } else if (result.startsWith('resume')) {
        returnString += handleResumeCommand(result);
        returnString += '\n';
    } else if (result == 'motd') {
        createMOTD();
    } else if (result.startsWith('cd')) {
        returnString = handleCd(result);
        if (returnString != undefined) {
            returnString += '\n';
        } else {
            returnString = '';
        }
    } else if (result.startsWith('cat')) {
        returnString = handleCatInput(result);
        if (returnString != undefined) {
            returnString += '\n';
        } else {
            returnString = '';
        }
    } else if (result.startsWith('ls')) {
        returnString = 'experience.yml  projects.yml  about-me.yml file2.txt  directory1  directory2' + '\n';
    } else if (result.startsWith('pwd')) {
        returnString = handlePwd(false) + '\n';
    } else {
        returnString = approvedCommands[result] || 'command not found';
        returnString += '\n';
    }
    return returnString;
}

function handleCd(inputString) {
    var splitInput = inputString.split(' ');
    if (splitInput.length == 1 || splitInput[1] == '~') {
        pwd = ['home', 'user'];
        return;
    } else {
        switch (true){
            case splitInput[1] == '..':
                if (this.pwd.length > 0){
                    this.pwd.pop();
                }
                return;
            case splitInput[1].startsWith('/'):
                directory = splitInput[1].subString('/');
                dirs = directory.split('/');
                dirs.forEach(dir => {
                    pwd.push(dir);
                });
                return;
            case splitInput[1].startsWith('~/'):
                pwd = ['home', 'user'];
                splitOnSlash = splitInput[1].split('/');
                for (var i = 1 ; i < splitOnSlash.length ; i++) {
                    pwd.push(splitOnSlash[i]);
                }
                return;
            default:
                dirs = directory.split('/');
                dirs.forEach(dir => {
                    pwd.push(dir);
                });
        }
    }
}

function handlePwd(homeDirReturn) {
    var returnString = "";
    if (homeDirReturn && pwd[0] == 'home' && pwd[1] == 'user') {
        returnString = "~";
            for (var i = 2 ; i < pwd.length ; i++){
                returnString += "/" + pwd[i];
            }
    } else {
        pwd.forEach(dir => {
            returnString += "/" + dir;
        });
    }
    return returnString;
}

function handleCatInput(inputString) {
    return 'You certainly tried to cat something.';
}

function handleHelp() {
    help.forEach(hhelp => {
        line = document.createElement('div');
        line.id = 'line';
        line.textContent = hhelp;
        terminal.appendChild(line);
    });
}

function splitInput(inputString, splitString) {
    if (inputString.includes(splitString)) {
        return inputString.split(splitString)[1];
    } else {
        return "The specified string is not found in the input.";
    }
}

function removeChildrenWithId(element) {
    var children = element.childNodes;
    for (var i = 0; i < children.length; i++) {
        if (children[i].id === 'line') {
            element.removeChild(children[i]);
            i--; // Adjust counter as childNodes is a live collection
        }
    }
}

function createMOTD() {
    var motdLines = ['Welcome to Bryan Crow Resume 1.0.0 LTS',
        '  ',
        '|site|* LinkedIn ~https://www.linkedin.com/in/bryan-crow/',
        '|site|* GitHub ~https://github.com/cryanbrow',
        '  ',
        'This is an interactive resume. To get started, enter help to get available commands',
        'or enter `resume experience`, `resume skills`, or just `resume` to print everything.',
        '  ',
        'All files supporting this are in the pwd, use ls and cat to read files directly.',
        '  ']
    for (var i = 0; i < motdLines.length; i++) {
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

function buildLine() {
    line = document.createElement('div');
    line.id = 'line';
    header = document.createElement('span');
    header.id = 'header';
    header.textContent = 'user@bryan-crow.com:' + handlePwd(true) + '$ '
    input = document.createElement('span');
    input.id = 'input';
    input.textContent = ''
    cursor = document.createElement('span');
    cursor.id = 'cursor';
    cursor.textContent = '_';
    line.appendChild(header);
    line.appendChild(input);
    line.appendChild(cursor);
    terminal.appendChild(line);
}

window.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        var output = processCommand(input.textContent);
        cursor.remove();
        if (output != "") {
            line = document.createElement('div');
            line.id = 'line';
            line.textContent = output;
            terminal.appendChild(line);
        }
        buildLine();
        scrollToBottom();
    } else if (e.ctrlKey) {
        if (e.key === 'c' || e.key === 'C') {
            e.preventDefault();
            input.textContent += "^C";
            cursor.remove();
            buildLine();
            scrollToBottom();
        } else if (e.key === 'l' || e.key === 'L') {
            e.preventDefault();
            removeChildrenWithId(terminal);
            buildLine();
        }
    } else if (e.key.length === 1) {
        input.textContent += e.key;
    } else if (e.key === 'Backspace') {
        e.preventDefault();
        input.textContent = input.textContent.slice(0, -1);
    }
});

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

if (isMobileDevice()) {
    console.log("You are using a mobile device");
} else {
    console.log("You are not using a mobile device");
}