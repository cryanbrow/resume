let directoryStructure = {
    name: "/",
    files: [
        {
            attributes: '-rwxr-x-r-x',
            executable: true,
            links: '1',
            user: 'bryan',
            group: 'bryan',
            size: '20',
            dt: '2024-05-05 21:13',
            name: 'test.txt'
        },
        {
            attributes: '-rwxr-x-r-x',
            executable: true,
            links: '1',
            user: 'bryan',
            group: 'bryan',
            size: '20',
            dt: '2024-05-05 21:13',
            name: 'bryan.txt'
        }
    ],
    directories: [
        {
            attributes: 'drwxr-x-r-x',
            links: '2',
            user: 'root',
            group: 'root',
            size: '0',
            dt: '2024-05-05 21:13',
            name: 'bin',
            files: [
                {
                    attributes: '-rwxr-x-r-x',
                    executable: true,
                    links: '1',
                    user: 'root',
                    group: 'root',
                    size: '52080',
                    dt: '2024-05-05 21:13',
                    name: 'cat'
                },
                {
                    attributes: '-rwxr-x-r-x',
                    executable: true,
                    links: '1',
                    user: 'root',
                    group: 'root',
                    size: '31472',
                    dt: '2024-05-05 21:13',
                    name: 'pwd'
                },
                {
                    attributes: '-rwxr-x-r-x',
                    executable: true,
                    links: '1',
                    user: 'root',
                    group: 'root',
                    size: '60272',
                    dt: '2024-05-05 21:13',
                    name: 'rm'
                },
                {
                    attributes: '-rwxr-x-r-x',
                    executable: true,
                    links: '1',
                    user: 'root',
                    group: 'root',
                    size: '64432',
                    dt: '2024-05-05 21:13',
                    name: 'touch'
                },
            ],
            directories: []
        },
        {
            attributes: 'drwxr-x-r-x',
            links: '1',
            user: 'root',
            group: 'root',
            size: '0',
            dt: '2024-05-05 21:13',
            name: 'etc',
            files: [
                {
                    attributes: '-r--r------',
                    executable: false,
                    links: '1',
                    user: 'root',
                    group: 'root',
                    size: '4',
                    dt: '2024-05-05 21:13',
                    name: 'sudoers'
                },
            ],
            directories: [
                {
                    attributes: 'drwxr-x-r-x',
                    links: '1',
                    user: 'root',
                    group: 'root',
                    size: '0',
                    dt: '2024-05-05 21:13',
                    name: 'systemd',
                    files: [
                        {
                            attributes: '-rw-r--r---',
                            executable: false,
                            links: '1',
                            user: 'root',
                            group: 'root',
                            size: '4',
                            dt: '2024-05-05 21:13',
                            name: 'user.conf'
                        },
                    ],
                    directories: []
                },
            ]
        },
        {
            attributes: 'drwxr-x-r-x',
            links: '1',
            user: 'root',
            group: 'root',
            size: '0',
            dt: '2024-05-05 21:13',
            name: 'home',
            files: [],
            directories: []
        },
        {
            attributes: 'drwxr-x-r-x',
            links: '1',
            user: 'root',
            group: 'root',
            size: '0',
            dt: '2024-05-05 21:13',
            name: 'opt',
            files: [],
            directories: []
        },
        {
            attributes: 'drwxr-x-r-x',
            links: '1',
            user: 'root',
            group: 'root',
            size: '0',
            dt: '2024-05-05 21:13',
            name: 'tmp',
            files: [],
            directories: []
        },
        {
            attributes: 'drwxr-x-r-x',
            links: '1',
            user: 'root',
            group: 'root',
            size: '0',
            dt: '2024-05-05 21:13',
            name: 'usr',
            files: [],
            directories: []
        },
        {
            attributes: 'drwxr-x-r-x',
            links: '1',
            user: 'root',
            group: 'root',
            size: '0',
            dt: '2024-05-05 21:13',
            name: 'var',
            files: [],
            directories: []
        },
    ]
}

let resumeJson = {
    "contact": {
        "first-name": "Bryan",
        "middle-name": "Matthew",
        "last-name": "Crow",
        "linkedin-url": "linkedin.com/in/bryan-crow",
        "github-url": "github.com/cryanbrow",
        "website-url": "bryan-crow.com",
        "phone-number": "870-754-2665",
        "email": "cryan.brow@gmail.com"
    },
    "education" : [],
    "certifications": [],
    "skills": [],
    "introduction": "Lead Technical Developer with greater than ten years of leadership experience in process and technical change. Experienced in training and advancing teams in adoption of modern coding, design, and pairing practices. Successfully implemented large scale, data intensive, IOT implementations for large automation projects.",
    "keywords": [
        "Software Developer",
        "Software Architect",
        "IOT Developer",
        "Data Design"
    ],
    "positions": [
        {
            "employer": "FedEx",
            "title": "Chief Engineering Specialist Principal",
            "start-year": "2022",
            "start-month": "09",
            "end-year": "",
            "end-month": "",
            "active-role": true,
            "achievements": [
                "Rolled out dimensioning in motion software to 150+ service centers",
                "Resulted in 25 million dollars in recovered revenue per quarter",
                "Filed 8 patents surrounding real time location tracking with RFID"
            ],
            "description": "Led the rollout of dimensioning in motion for increased revenue recovery by FedEx Freight. Completed proof of concept for migrating far edge technologies to the near edge. Broadened oversight to help a wider array of teams beyond immediate team in retiring legacy systems, hardening of critical business systems, and migration of a FedEx owned data center to a managed data center."
        },
        {
            "employer": "FedEx",
            "title": "Software Developer Advisor",
            "start-year": "2018",
            "start-month": "12",
            "end-year": "2022",
            "end-month": "08",
            "active-role": false,
            "achievements": [
                "Implemented anedge security solution with trenching capabilities",
                "Pioneered Kubernetes adoption in production for FedEx",
                "Architecture guidance for the rewriting the forklift computer"
            ],
            "description": "Led a team in adoption of technologies and practices around Kubernetes. Implemented proofs of concepts to determine viability of new technologies such as Kubernetes, Helm, Docker, Prometheus, Alert Manager, Grafana, and other technologies for supporting a far edge ecosystem. Continued refinement of the edge ecosystem, and the first adoption of OKTA OAuth2 at Freight."
        },
        {
            "employer": "FedEx",
            "title": "Senior Programmer Analyst",
            "start-year": "2016",
            "start-month": "08",
            "end-year": "2018",
            "end-month": "12",
            "active-role": false,
            "achievements": [
                "Established Kafka and Cassandra implementation at FedEx",
                "Created visualizer to display location of shipments and forklifts"
            ],
            "description": "Spearheaded adoption of Cassandra, Kafka, Spring Boot, and microservice architecture in building the RFID stack. Built and led workshops for onboarding new team members onto the RFID stack and new technologies for rapid adoption. Built technologies for tracking RFID tags in real time using a distributed edge compute model."
        },
        {
            "employer": "FedEx",
            "title": "Programmer Analyst",
            "start-year": "2013",
            "start-month": "11",
            "end-year": "2018",
            "end-month": "08",
            "active-role": false,
            "achievements": [],
            "description": "Advocated for and implemented the first REST services at FedEx Freight and the first single page Angular application at Freight. Allowing for adoption of Agile and microservice technologies."
        },
        {
            "employer": "FedEx",
            "title": "Associate Programmer Analyst",
            "start-year": "2012",
            "start-month": "06",
            "end-year": "2013",
            "end-month": "11",
            "active-role": false,
            "achievements": [],
            "description": "Built software for syncing and reconciling Freight customer data and to reduce data inconsistency and improve customer experience between Freight and Enterprise customer systems."
        },
        {
            "employer": "FedEx",
            "title": "Lead Computer Operator",
            "start-year": "2011",
            "start-month": "05",
            "end-year": "2012",
            "end-month": "06",
            "active-role": false,
            "achievements": [],
            "description": "Shift lead responsible for activities within a data center including production installs, monitoring, alerting, and resolving issues. Built Java software for tracking, recovery, and long storage of offsite backup media."
        },
        {
            "employer": "FedEx",
            "title": "Software Developer Advisor",
            "start-year": "2007",
            "start-month": "04",
            "end-year": "2011",
            "end-month": "05",
            "active-role": false,
            "achievements": [],
            "description": "Responsible for monitoring, alerting, and resolving issues with servers, networking equipment, mainframe processes, and other data center centric activites."
        }
    ]
}