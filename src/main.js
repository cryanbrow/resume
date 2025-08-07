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

function printLinesWithDelay(lines, delay = 50) {
    return new Promise(resolve => {
        let i = 0;
        function printNext() {
            if (i >= lines.length) {
                resolve(); // Done printing
                return;
            }
            const line = document.createElement('div');
            line.id = 'line';
            line.textContent = lines[i];
            terminal.appendChild(line);
            scrollToBottom();
            i++;
            setTimeout(printNext, delay);
        }
        printNext();
    });
}

function processCommand(result) {
    return new Promise(async resolve => {
        let returnString = '';

        if (result === 'clear') {
            removeChildrenWithId(terminal);
        } else if (result.startsWith('help')) {
            handleHelp();
        } else if (result.startsWith('resume')) {
            returnString += await handleResumeCommand(result);
            returnString += '\n';
        } else if (result === 'motd') {
            createMOTD();
        } else if (result.startsWith('cd')) {
            returnString = handleCd(result);
            if (returnString !== undefined) returnString += '\n';
            else returnString = '';
        } else if (result.startsWith('cat')) {
            const output = handleCatInput(result);
            if (output !== undefined) {
                const div = document.createElement('div');
                div.id = 'line';
                div.textContent = output;
                terminal.appendChild(div);
                scrollToBottom();
                returnString = '\n';
            }
        } else if (result.startsWith('ls -l')) {
            handleLsLong();
            scrollToBottom();
            return resolve('');
        } else if (result.startsWith('ls')) {
            handleLs();
            scrollToBottom();
            return resolve('');
        } else if (result.startsWith('pwd')) {
            returnString = handlePwd(false) + '\n';
        } else {
            returnString = approvedCommands[result] || 'command not found';
            returnString += '\n';
        }

        resolve(returnString);
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
    const children = element.childNodes;
    for (let i = 0; i < children.length; i++) {
        if (children[i].id === 'line') {
            element.removeChild(children[i]);
            i--; // Adjust counter as childNodes is a live collection
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

window.addEventListener('keydown', async function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        cursor.remove();
        const output = await processCommand(input.textContent);

        if (output?.trim()) {
            const div = document.createElement('div');
            div.id = 'line';
            div.textContent = output.trimEnd();
            terminal.appendChild(div);
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
}

let nameArt = [];
figlet.defaults({ fontPath: "assets/fonts" });

figlet.preloadFonts(["Standard"]);

figlet(String(asciiResume.contact.firstName + " " + asciiResume.contact.lastName), "Standard", function(err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    nameArt = data.split("\n");
    for (let i = 0; i < nameArt.length; i++) {
        let padAmount = (144 - nameArt[i].length) / 2
        nameArt[i] = String(nameArt[i]).padStart(nameArt[i].length + padAmount, " ");
        nameArt[i] = String(nameArt[i]).padEnd(144, " ");
    }
});