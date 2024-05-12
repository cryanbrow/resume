let skills = ["************************************************************************************************************************************************",
    "*                                                                    Skills                                                                    *",
    "************************************************************************************************************************************************",
    "                                                                                                                                                ",
    ".container_orchestration            .programming                        .data_analysis                                                          ",
    "├──kuberenetes                      ├──languages                        ├──machine_learning                                                     ",
    "│   ├──PKS/TKGI/TKGS/TKG2           │   ├──java                         │   ├──tensorflow                                                       ",
    "│   ├──AKS/GKE                      │   ├──python                       │   ├──keras                                                            ",
    "│   ├──k3s/microK8s/minikube        │   ├──golang                       │   ├──opencv                                                           ",
    "│   └──helm/kustomize               │   ├──js                           │   ├──pytorch                                                          ",
    "└──container_distribution           │   └──ts                           │   ├──azure_ml_studio                                                  ",
    "    ├──docker                       └──frameworks                       │   └──scikit_learn                                                     ",
    "    ├──podman                           ├──spring/spring_boot           └──data_preparation                                                     ",
    "    ├──jib                              ├──angular/vue/ionic/electron       ├──ml_data_cleaning                                                 ",
    "    └──harbor                           └──wails                            ├──outlier_removal                                                  ",
    "                                                                            └──statistical_modeling                                             ",
    ".database_technologies              .protocols                                                                                                  ",
    "├──oracle                           ├──REST/SOAP/graphql                .mobile_development                                                     ",
    "├──cassandra/datastax               ├──RPC                              ├──native_android                                                       ",
    "├──redis                            ├──MQTT                             ├──ionic                                                                ",
    "├──h2                               ├──JMS                              └──react_native                                                         ",
    "└──mongodb                          └──Kafka                                                                                                    ",
    "                                                                        .methodologies                                                          ",
    ".project_management                 .monitoring                         ├──paired_programming                                                   ",
    "├──agile                            ├──prometheus                       ├──BDD                                                                  ",
    "├──SAFE                             ├──alert_manager                    └──TDD                                                                  ",
    "├──scrum                            ├──appdynamics                                                                                              ",
    "└──kanban                           ├──loki                                                                                                     ",
    "                                    ├──pagerduty                                                                                                ",
    "                                    ├──splunk                                                                                                   ",
    "                                    ├──grafana                                                                                                  ",
    "                                    └──ELK                                                                                                      "];

let experience = ["************************************************************************************************************************************************",
    "*                                                                  Experience                                                                  *",
    "************************************************************************************************************************************************",
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

var terminal = document.getElementById('terminal');

createMOTD();
buildLine();

var line = document.getElementById('line');
var header = document.getElementById('header');
var input = document.getElementById('input');
var cursor = document.getElementById('cursor');
var pwd = '/home/user'
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
    } else if (result.startsWith('resume')) {
        returnString += handleResumeCommand(result);
        returnString += '\n';
    } else if (result == 'motd') {
        createMOTD();
    } else if (result.startsWith('cd')) {
        returnString = handleCd(result);
        returnString += '\n';
    } else if (result.startsWith('cat')) {
        returnString = handleCatInput(result);
        returnString += '\n';
    } else if (result.startsWith('ls')) {
        returnString = 'experience.yml  projects.yml  about-me.yml file2.txt  directory1  directory2' + '\n';
    } else if (result.startsWith('pwd')) {
        returnString = pwd + '\n';
    } else {
        returnString = approvedCommands[result] || 'command not found';
        returnString += '\n';
    }
    return returnString;
}

function handleCd(inputString) {
    return 'changing dir';
}

function handleCatInput(inputString) {
    return 'You certainly tried to cat something.';
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
        'or enter experience, about, or projects to get started.',
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
    header.textContent = 'user@bryan-crow.com:~$ '
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
        line = document.createElement('div');
        line.id = 'line';
        line.textContent = output;
        terminal.appendChild(line);
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