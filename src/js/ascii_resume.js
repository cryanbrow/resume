const asciiResume = {
    "folderStructure": {
        "name": "/",
        "type": "directory",
        "permissions": "drwxr-x---",
        "owner": "root",
        "group": "root",
        "modified": "2025-07-09T12:00:00Z",
        "children": [
            {
                "name": "opt",
                "type": "directory",
                "permissions": "drwxr-xr-x",
                "owner": "root",
                "group": "root",
                "modified": "2025-07-09T12:00:00Z",
                "children": [
                    {
                        "name": "myapp",
                        "type": "directory",
                        "permissions": "drwxr-xr-x",
                        "owner": "root",
                        "group": "root",
                        "modified": "2025-07-09T12:00:00Z",
                        "children": [
                            {
                                "name": "config.ini",
                                "type": "file",
                                "permissions": "-rw-r--r--",
                                "owner": "root",
                                "group": "root",
                                "modified": "2025-07-09T12:00:00Z",
                                "contents": "[settings]\noption=true"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "usr",
                "type": "directory",
                "permissions": "drwxr-xr-x",
                "owner": "root",
                "group": "root",
                "modified": "2025-07-09T12:00:00Z",
                "children": [
                    {
                        "name": "bin",
                        "type": "directory",
                        "permissions": "drwxr-xr-x",
                        "owner": "root",
                        "group": "root",
                        "modified": "2025-07-09T12:00:00Z",
                        "children": [
                            {
                                "name": "mytool",
                                "type": "file",
                                "permissions": "-rwxr-xr-x",
                                "owner": "root",
                                "group": "root",
                                "modified": "2025-07-09T12:00:00Z",
                                "contents": "#!/bin/bash\necho Hello World"
                            }
                        ]
                    },
                    {
                        "name": "share",
                        "type": "directory",
                        "permissions": "drwxr-xr-x",
                        "owner": "root",
                        "group": "root",
                        "modified": "2025-07-09T12:00:00Z",
                        "children": [
                            {
                                "name": "doc",
                                "type": "directory",
                                "permissions": "drwxr-xr-x",
                                "owner": "root",
                                "group": "root",
                                "modified": "2025-07-09T12:00:00Z",
                                "children": [
                                    {
                                        "name": "readme.txt",
                                        "type": "file",
                                        "permissions": "-rw-r--r--",
                                        "owner": "root",
                                        "group": "root",
                                        "modified": "2025-07-09T12:00:00Z",
                                        "contents": "This is shared documentation."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "var",
                "type": "directory",
                "permissions": "drwxr-xr-x",
                "owner": "root",
                "group": "root",
                "modified": "2025-07-09T12:00:00Z",
                "children": [
                    {
                        "name": "log",
                        "type": "directory",
                        "permissions": "drwxr-x---",
                        "owner": "root",
                        "group": "adm",
                        "modified": "2025-07-09T12:00:00Z",
                        "children": [
                            {
                                "name": "syslog",
                                "type": "file",
                                "permissions": "-rw-r-----",
                                "owner": "root",
                                "group": "adm",
                                "modified": "2025-07-09T12:00:00Z",
                                "contents": "Jul 9 12:00:00 system started"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "home",
                "type": "directory",
                "permissions": "drwxr-xr-x",
                "owner": "root",
                "group": "root",
                "modified": "2025-07-09T12:00:00Z",
                "children": [
                    {
                        "name": "user",
                        "type": "directory",
                        "permissions": "drwx------",
                        "owner": "user",
                        "group": "user",
                        "modified": "2025-07-09T12:00:00Z",
                        "children": [
                            {
                                "name": "notes.txt",
                                "type": "file",
                                "permissions": "-rw-------",
                                "owner": "user",
                                "group": "user",
                                "modified": "2025-07-09T12:00:00Z",
                                "contents": "My personal notes."
                            },
                            {
                                "name": "projects",
                                "type": "directory",
                                "permissions": "drwxr-xr-x",
                                "owner": "user",
                                "group": "user",
                                "modified": "2025-07-09T12:00:00Z",
                                "children": [
                                    {
                                        "name": "todo.md",
                                        "type": "file",
                                        "permissions": "-rw-r--r--",
                                        "owner": "user",
                                        "group": "user",
                                        "modified": "2025-07-09T12:00:00Z",
                                        "contents": "- Finish the project\n- Submit the report"
                                    }
                                ]
                            },
                            {
                                "name": "resume",
                                "type": "directory",
                                "permissions": "drwxr-xr-x",
                                "owner": "user",
                                "group": "user",
                                "modified": "2025-07-09T12:00:00Z",
                                "children": [
                                    {
                                        "name": "skills.json",
                                        "type": "file",
                                        "permissions": "-rw-r--r--",
                                        "owner": "user",
                                        "group": "user",
                                        "modified": "2025-07-09T12:00:00Z",
                                        "contents": "\"skills\": {\n" +
                                            "        \"container_orchestration\": {\n" +
                                            "            \"kuberenetes\": [\n" +
                                            "                \"PKS/TKGI/TKGS/TKG2\",\n" +
                                            "                \"AKS/GKE\",\n" +
                                            "                \"k3s/microK8s/minikube\",\n" +
                                            "                \"helm/kustomize\"\n" +
                                            "            ],\n" +
                                            "            \"container_distribution\": [\n" +
                                            "                \"docker\",\n" +
                                            "                \"podman\",\n" +
                                            "                \"jib\",\n" +
                                            "                \"harbor\"\n" +
                                            "            ]\n" +
                                            "        },\n" +
                                            "        \"database_technologies\": [\n" +
                                            "            \"oracle\",\n" +
                                            "            \"cassandra/datastax\",\n" +
                                            "            \"redis\",\n" +
                                            "            \"h2\",\n" +
                                            "            \"mongodb\"\n" +
                                            "        ],\n" +
                                            "        \"project_management\": [\n" +
                                            "            \"agile\",\n" +
                                            "            \"SAFE\",\n" +
                                            "            \"scrum\",\n" +
                                            "            \"kanban\"\n" +
                                            "        ],\n" +
                                            "        \"programming\": {\n" +
                                            "            \"languages\": [\n" +
                                            "                \"java\",\n" +
                                            "                \"python\",\n" +
                                            "                \"golang\",\n" +
                                            "                \"js\",\n" +
                                            "                \"ts\",\n" +
                                            "                \"C#\"\n" +
                                            "            ],\n" +
                                            "            \"frameworks\": [\n" +
                                            "                \"spring/spring_boot\",\n" +
                                            "                \"angular\",\n" +
                                            "                \"vue\",\n" +
                                            "                \"ionic\",\n" +
                                            "                \"electron\",\n" +
                                            "                \"react\",\n" +
                                            "                \"wails\",\n" +
                                            "                \".NET\"\n" +
                                            "            ]\n" +
                                            "        },\n" +
                                            "        \"protocols\": [\n" +
                                            "            \"REST/SOAP/graphql\",\n" +
                                            "            \"RPC\",\n" +
                                            "            \"MQTT\",\n" +
                                            "            \"JMS\",\n" +
                                            "            \"Kafka\"\n" +
                                            "        ],\n" +
                                            "        \"data_analysis\": {\n" +
                                            "            \"machine_learning\": [\n" +
                                            "                \"tensorflow\",\n" +
                                            "                \"keras\",\n" +
                                            "                \"opencv\",\n" +
                                            "                \"pytorch\",\n" +
                                            "                \"azure_ml_studio\",\n" +
                                            "                \"scikit_learn\"\n" +
                                            "            ],\n" +
                                            "            \"data_preparation\": [\n" +
                                            "                \"ml_data_cleaning\",\n" +
                                            "                \"outlier_removal\",\n" +
                                            "                \"statistical_modeling\"\n" +
                                            "            ]\n" +
                                            "        },\n" +
                                            "        \"dev_ops\": {\n" +
                                            "            \"CI\": [\n" +
                                            "                \"jenkins\",\n" +
                                            "                \"github_actions\",\n" +
                                            "                \"terraform\",\n" +
                                            "                \"travis_ci\",\n" +
                                            "                \"concourse\"\n" +
                                            "            ],\n" +
                                            "            \"source_control\": [\n" +
                                            "                \"git\",\n" +
                                            "                \"svn\"\n" +
                                            "            ]\n" +
                                            "        },\n" +
                                            "        \"monitoring\": [\n" +
                                            "            \"prometheus\",\n" +
                                            "            \"alert_manager\",\n" +
                                            "            \"appdynamics\",\n" +
                                            "            \"loki\",\n" +
                                            "            \"pagerduty\",\n" +
                                            "            \"splunk\",\n" +
                                            "            \"grafana\",\n" +
                                            "            \"ELK\"\n" +
                                            "        ],\n" +
                                            "        \"mobile_development\": [\n" +
                                            "            \"native_android\",\n" +
                                            "            \"ionic\",\n" +
                                            "            \"react_native\"\n" +
                                            "        ],\n" +
                                            "        \"methodologies\": [\n" +
                                            "            \"paired_programming\",\n" +
                                            "            \"BDD\",\n" +
                                            "            \"TDD\"\n" +
                                            "        ]\n" +
                                            "    }"
                                    },
                                    {
                                        "name": "experience.json",
                                        "type": "file",
                                        "permissions": "-rw-r--r--",
                                        "owner": "user",
                                        "group": "user",
                                        "modified": "2025-07-09T12:00:00Z",
                                        "contents": "\"experience\": [\n" +
                                            "        {\n" +
                                            "            \"title\": \"Senior Full Stack Developer\",\n" +
                                            "            \"company\": \"Symetri\",\n" +
                                            "            \"location\": \"Springfield, MO\",\n" +
                                            "            \"startYear\": \"2025\",\n" +
                                            "            \"endYear\": null,\n" +
                                            "            \"description\": \"Continue integration work from Team D3 post-merger, building and maintaining data pipelines between CAD, PDM, PLM, and ERP systems to automate engineering workflows and ensure consistent product data across platforms.\",\n" +
                                            "            \"accomplishments\": []\n" +
                                            "        },\n" +
                                            "        {\n" +
                                            "            \"title\": \"Senior Application Developer\",\n" +
                                            "            \"company\": \"TeamD3\",\n" +
                                            "            \"location\": \"Springfield, MO\",\n" +
                                            "            \"startYear\": \"2024\",\n" +
                                            "            \"endYear\": \"2025\",\n" +
                                            "            \"description\": \"Led development of system integrations linking CAD (AutoCAD, SolidWorks, Inventor), PDM (Vault, PDM, Upchain), PLM (Fusion Manage), and ERP (NetSuite, Odoo), streamlining product data flow and lifecycle management across engineering and enterprise systems.\",\n" +
                                            "            \"accomplishments\": []\n" +
                                            "        },\n" +
                                            "        {\n" +
                                            "            \"title\": \"Chief Engineering Specialist/Principal\",\n" +
                                            "            \"company\": \"FedEx Services\",\n" +
                                            "            \"location\": \"Harrison, AR\",\n" +
                                            "            \"startYear\": \"2021\",\n" +
                                            "            \"endYear\": \"2024\",\n" +
                                            "            \"description\": \"Drove architecture and proof-of-concept development for far-edge tracking systems using RFID, dimensioning-in-motion, and BLE. Built edge deployment automation, monitoring, and telemetry pipelines to support real-time shipment visibility at scale.\",\n" +
                                            "            \"accomplishments\": [\n" +
                                            "                \"Rolled out dimensioning in motion software to 150+ service centers\",\n" +
                                            "                \"Resulted in 25 million dollars in recovered revenue per quarter\",\n" +
                                            "                \"Filed 8 patents surrounding real time location tracking with RFID\"\n" +
                                            "            ]\n" +
                                            "        },\n" +
                                            "        {\n" +
                                            "            \"title\": \"Full Stack Developer Advisor\",\n" +
                                            "            \"company\": \"FedEx Services\",\n" +
                                            "            \"location\": \"Harrison, AR\",\n" +
                                            "            \"startYear\": \"2018\",\n" +
                                            "            \"endYear\": \"2021\",\n" +
                                            "            \"description\": \"Led development of edge-based sensor data applications and REST APIs. Managed Kubernetes, Kafka, and Cassandra clusters, and built CI/CD pipelines with Jenkins to support real-time freight logistics across distributed systems.\",\n" +
                                            "            \"accomplishments\": [\n" +
                                            "                \"Implemented anedge security solution with trenching capabilities\",\n" +
                                            "                \"Pioneered Kubernetes adoption in production for FedEx\",\n" +
                                            "                \"Architecture guidance for the rewriting the forklift computer\"\n" +
                                            "            ]\n" +
                                            "        },\n" +
                                            "        {\n" +
                                            "            \"title\": \"Senior Programmer Analyst\",\n" +
                                            "            \"company\": \"FedEx Services\",\n" +
                                            "            \"location\": \"Harrison, AR\",\n" +
                                            "            \"startYear\": \"2016\",\n" +
                                            "            \"endYear\": \"2018\",\n" +
                                            "            \"description\": \"Strong developer in prototyping and advancing Kafka and Cassandra. Promoted Test Driven Development, Paired Programming, and Code Quality Gates. Primary workload involved high volume sensor data streaming applications and REST APIs in Java.\",\n" +
                                            "            \"accomplishments\": [\n" +
                                            "                \"Established Kafka and Cassandra implementation at FedEx\",\n" +
                                            "                \"Created visualizer to display location of shipments and forklifts\"\n" +
                                            "            ]\n" +
                                            "        },\n" +
                                            "        {\n" +
                                            "            \"title\": \"Programmer Analyst\",\n" +
                                            "            \"company\": \"FedEx Services\",\n" +
                                            "            \"location\": \"Harrison, AR\",\n" +
                                            "            \"startYear\": \"2013\",\n" +
                                            "            \"endYear\": \"2016\",\n" +
                                            "            \"description\": \"Developed responsive web UIs using Angular, Bootstrap, and Node.js. Built numerous Java REST APIs.\",\n" +
                                            "            \"accomplishments\": []\n" +
                                            "        },\n" +
                                            "        {\n" +
                                            "            \"title\": \"Associate Programmer Analyst\",\n" +
                                            "            \"company\": \"FedEx Services\",\n" +
                                            "            \"location\": \"Harrison, AR\",\n" +
                                            "            \"startYear\": \"2012\",\n" +
                                            "            \"endYear\": \"2013\",\n" +
                                            "            \"description\": \"Built redundancy and reliability applications including auto correction for data errors, failure alerting, and retry logic implementation.\",\n" +
                                            "            \"accomplishments\": []\n" +
                                            "        },\n" +
                                            "        {\n" +
                                            "            \"title\": \"Lead Computer Operator\",\n" +
                                            "            \"company\": \"FedEx Services\",\n" +
                                            "            \"location\": \"Harrison, AR\",\n" +
                                            "            \"startYear\": \"05/2011\",\n" +
                                            "            \"endYear\": \"2012\",\n" +
                                            "            \"description\": \"Oversaw team responsible for monitoring and preventive maintenance of mainframes and servers. Built tools for offsite tape backup tracking and reclamation.\",\n" +
                                            "            \"accomplishments\": []\n" +
                                            "        },\n" +
                                            "        {\n" +
                                            "            \"title\": \"Computer Operator\",\n" +
                                            "            \"company\": \"FedEx Services\",\n" +
                                            "            \"location\": \"Harrison, AR\",\n" +
                                            "            \"endYear\": \"2007\",\n" +
                                            "            \"endDate\": \"2011\",\n" +
                                            "            \"description\": \"Monitored and maintained mainframes and servers, providing alerting and preventive fixes in the FedEx Freight data center.\",\n" +
                                            "            \"accomplishments\": []\n" +
                                            "        }\n" +
                                            "    ]"
                                    },
                                    {
                                        "name": "certifications.json",
                                        "type": "file",
                                        "permissions": "-rw-r--r--",
                                        "owner": "user",
                                        "group": "user",
                                        "modified": "2025-07-09T12:00:00Z",
                                        "contents": "\"certifications\": [\n" +
                                            "        {\n" +
                                            "            \"title\": \"Microsoft Certified: Azure Fundamentals\",\n" +
                                            "            \"issuer\": \"Microsoft\",\n" +
                                            "            \"issueDate\": \"03/2025\",\n" +
                                            "            \"expirationDate\": null,\n" +
                                            "            \"description\": \"Validated foundational knowledge of Microsoft Azure cloud services, core solutions, and management tools. Demonstrated understanding of cloud concepts, Azure pricing, SLA, lifecycle, security, compliance, and basic architectural components.\"\n" +
                                            "        },\n" +
                                            "        {\n" +
                                            "            \"title\": \"Certified SAFe® 6 Practitioner\",\n" +
                                            "            \"issuer\": \"Scaled Agile\",\n" +
                                            "            \"issueDate\": \"01/2025\",\n" +
                                            "            \"expirationDate\": \"01/2026\",\n" +
                                            "            \"description\": \"Certified in applying SAFe® 6 principles to deliver value as part of an Agile team, including PI Planning, iteration execution, continuous delivery, and DevOps culture.\"\n" +
                                            "        },\n" +
                                            "        {\n" +
                                            "            \"title\": \"Certified Kubernetes Application Developer (CKAD)\",\n" +
                                            "            \"issuer\": \"Cloud Native Computing Foundation\",\n" +
                                            "            \"issueDate\": \"01/2023\",\n" +
                                            "            \"expirationDate\": \"01/2026\",\n" +
                                            "            \"description\": \"Validated expertise in designing, building, and deploying cloud-native applications for Kubernetes, including resource definition, deployment management, and troubleshooting.\"\n" +
                                            "        }\n" +
                                            "    ]"
                                    },
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "skills": {
        "container_orchestration": {
            "kuberenetes": [
                "PKS/TKGI/TKGS/TKG2",
                "AKS/GKE",
                "k3s/microK8s/minikube",
                "helm/kustomize"
            ],
            "container_distribution": [
                "docker",
                "podman",
                "jib",
                "harbor"
            ]
        },
        "database_technologies": [
            "oracle",
            "cassandra/datastax",
            "redis",
            "h2",
            "mongodb"
        ],
        "project_management": [
            "agile",
            "SAFE",
            "scrum",
            "kanban"
        ],
        "programming": {
            "languages": [
                "java",
                "python",
                "golang",
                "js",
                "ts",
                "C#"
            ],
            "frameworks": [
                "spring/spring_boot",
                "angular",
                "vue",
                "ionic",
                "electron",
                "react",
                "wails",
                ".NET"
            ]
        },
        "protocols": [
            "REST/SOAP/graphql",
            "RPC",
            "MQTT",
            "JMS",
            "Kafka"
        ],
        "data_analysis": {
            "machine_learning": [
                "tensorflow",
                "keras",
                "opencv",
                "pytorch",
                "azure_ml_studio",
                "scikit_learn"
            ],
            "data_preparation": [
                "ml_data_cleaning",
                "outlier_removal",
                "statistical_modeling"
            ]
        },
        "dev_ops": {
            "CI": [
                "jenkins",
                "github_actions",
                "terraform",
                "travis_ci",
                "concourse"
            ],
            "source_control": [
                "git",
                "svn"
            ]
        },
        "monitoring": [
            "prometheus",
            "alert_manager",
            "appdynamics",
            "loki",
            "pagerduty",
            "splunk",
            "grafana",
            "ELK"
        ],
        "mobile_development": [
            "native_android",
            "ionic",
            "react_native"
        ],
        "methodologies": [
            "paired_programming",
            "BDD",
            "TDD"
        ]
    },
    "experience": [
        {
            "title": "Senior Full Stack Developer",
            "company": "Symetri",
            "location": "Springfield, MO",
            "startYear": "2025",
            "endYear": null,
            "description": "Continue integration work from Team D3 post-merger, building and maintaining data pipelines between CAD, PDM, PLM, and ERP systems to automate engineering workflows and ensure consistent product data across platforms.",
            "accomplishments": []
        },
        {
            "title": "Senior Application Developer",
            "company": "TeamD3",
            "location": "Springfield, MO",
            "startYear": "2024",
            "endYear": "2025",
            "description": "Led development of system integrations linking CAD (AutoCAD, SolidWorks, Inventor), PDM (Vault, PDM, Upchain), PLM (Fusion Manage), and ERP (NetSuite, Odoo), streamlining product data flow and lifecycle management across engineering and enterprise systems.",
            "accomplishments": []
        },
        {
            "title": "Chief Engineering Specialist/Principal",
            "company": "FedEx Services",
            "location": "Harrison, AR",
            "startYear": "2021",
            "endYear": "2024",
            "description": "Drove architecture and proof-of-concept development for far-edge tracking systems using RFID, dimensioning-in-motion, and BLE. Built edge deployment automation, monitoring, and telemetry pipelines to support real-time shipment visibility at scale.",
            "accomplishments": [
                "Rolled out dimensioning in motion software to 150+ service centers",
                "Resulted in 25 million dollars in recovered revenue per quarter",
                "Filed 8 patents surrounding real time location tracking with RFID"
            ]
        },
        {
            "title": "Full Stack Developer Advisor",
            "company": "FedEx Services",
            "location": "Harrison, AR",
            "startYear": "2018",
            "endYear": "2021",
            "description": "Led development of edge-based sensor data applications and REST APIs. Managed Kubernetes, Kafka, and Cassandra clusters, and built CI/CD pipelines with Jenkins to support real-time freight logistics across distributed systems.",
            "accomplishments": [
                "Implemented anedge security solution with trenching capabilities",
                "Pioneered Kubernetes adoption in production for FedEx",
                "Architecture guidance for the rewriting the forklift computer"
            ]
        },
        {
            "title": "Senior Programmer Analyst",
            "company": "FedEx Services",
            "location": "Harrison, AR",
            "startYear": "2016",
            "endYear": "2018",
            "description": "Strong developer in prototyping and advancing Kafka and Cassandra. Promoted Test Driven Development, Paired Programming, and Code Quality Gates. Primary workload involved high volume sensor data streaming applications and REST APIs in Java.",
            "accomplishments": [
                "Established Kafka and Cassandra implementation at FedEx",
                "Created visualizer to display location of shipments and forklifts"
            ]
        },
        {
            "title": "Programmer Analyst",
            "company": "FedEx Services",
            "location": "Harrison, AR",
            "startYear": "2013",
            "endYear": "2016",
            "description": "Developed responsive web UIs using Angular, Bootstrap, and Node.js. Built numerous Java REST APIs.",
            "accomplishments": []
        },
        {
            "title": "Associate Programmer Analyst",
            "company": "FedEx Services",
            "location": "Harrison, AR",
            "startYear": "2012",
            "endYear": "2013",
            "description": "Built redundancy and reliability applications including auto correction for data errors, failure alerting, and retry logic implementation.",
            "accomplishments": []
        },
        {
            "title": "Lead Computer Operator",
            "company": "FedEx Services",
            "location": "Harrison, AR",
            "startYear": "05/2011",
            "endYear": "2012",
            "description": "Oversaw team responsible for monitoring and preventive maintenance of mainframes and servers. Built tools for offsite tape backup tracking and reclamation.",
            "accomplishments": []
        },
        {
            "title": "Computer Operator",
            "company": "FedEx Services",
            "location": "Harrison, AR",
            "endYear": "2007",
            "endDate": "2011",
            "description": "Monitored and maintained mainframes and servers, providing alerting and preventive fixes in the FedEx Freight data center.",
            "accomplishments": []
        }
    ],
    "awards": [
        {
            "title": "FedEx Five Star Award",
            "date": "08/2018",
            "description": "This is the highest award given to FedEx employees in recognition of outstanding contributions and performance."
        }
    ],
    "certifications": [
        {
            "title": "Microsoft Certified: Azure Fundamentals",
            "issuer": "Microsoft",
            "issueDate": "03/2025",
            "expirationDate": null,
            "description": "Validated foundational knowledge of Microsoft Azure cloud services, core solutions, and management tools. Demonstrated understanding of cloud concepts, Azure pricing, SLA, lifecycle, security, compliance, and basic architectural components."
        },
        {
            "title": "Certified SAFe® 6 Practitioner",
            "issuer": "Scaled Agile",
            "issueDate": "01/2025",
            "expirationDate": "01/2026",
            "description": "Certified in applying SAFe® 6 principles to deliver value as part of an Agile team, including PI Planning, iteration execution, continuous delivery, and DevOps culture."
        },
        {
            "title": "Certified Kubernetes Application Developer (CKAD)",
            "issuer": "Cloud Native Computing Foundation",
            "issueDate": "01/2023",
            "expirationDate": "01/2026",
            "description": "Validated expertise in designing, building, and deploying cloud-native applications for Kubernetes, including resource definition, deployment management, and troubleshooting."
        }
    ],
    "education": [
        {
            "school": "Harrison High School",
            "location": "Harrison, AR",
            "degree": "High School Diploma",
            "startDate": "08/2002",
            "endDate": "05/2005",
            "description": ""
        }
    ],
    "contact": {
        "firstName": "Bryan",
        "lastName": "Crow",
        "title": "Driven Self Starter Looking to Lead",
        "location": "Springfield, MO",
        "email": "cryan.brow.com",
        "phone": "+1 870 754 2665",
        "links": [
            "https://github.com/cryanbrow",
            "https://bryan-crow.com"
        ]
    },
    "keywords": [
        "Software Developer",
        "Software Architect",
        "IOT Developer",
        "Kubernetes Engineer"
    ],
    "introduction": "Lead Technical Developer with greater than ten years of leadership experience in process and technical change. Experienced in training and advancing teams in adoption of modern coding, design, and pairing practices. Successfully implemented large scale, data intensive, IOT implementations for large automation projects."
}