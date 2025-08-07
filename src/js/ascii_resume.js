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
            "startDate": "07/2025",
            "endDate": "Present",
            "description": "Continue integration work from Team D3 post-merger, building and maintaining data pipelines between CAD, PDM, PLM, and ERP systems to automate engineering workflows and ensure consistent product data across platforms.",
            "accomplishments": []
        },
        {
            "title": "Senior Application Developer",
            "company": "TeamD3",
            "location": "Springfield, MO",
            "startDate": "08/2024",
            "endDate": "07/2025",
            "description": "Led development of system integrations linking CAD (AutoCAD, SolidWorks, Inventor), PDM (Vault, PDM, Upchain), PLM (Fusion Manage), and ERP (NetSuite, Odoo), streamlining product data flow and lifecycle management across engineering and enterprise systems.",
            "accomplishments": []
        },
        {
            "title": "Chief Engineering Specialist/Principal",
            "company": "FedEx Services",
            "location": "Harrison, AR",
            "startDate": "10/2021",
            "endDate": "08/2024",
            "description": "Drove architecture and proof-of-concept development for far-edge tracking systems using RFID, dimensioning-in-motion, and BLE. Built edge deployment automation, monitoring, and telemetry pipelines to support real-time shipment visibility at scale.",
            "accomplishments": [
                - "Rolled out dimensioning in motion software to 150+ service centers",
                - "Resulted in 25 million dollars in recovered revenue per quarter",
                - "Filed 8 patents surrounding real time location tracking with RFID"
            ]
        },
        {
            "title": "Full Stack Developer Advisor",
            "company": "FedEx Services",
            "location": "Harrison, AR",
            "startDate": "12/2018",
            "endDate": "09/2021",
            "description": "Led development of edge-based sensor data applications and REST APIs. Managed Kubernetes, Kafka, and Cassandra clusters, and built CI/CD pipelines with Jenkins to support real-time freight logistics across distributed systems.",
            "accomplishments": [
                - "Implemented anedge security solution with trenching capabilities",
                - "Pioneered Kubernetes adoption in production for FedEx",
                - "Architecture guidance for the rewriting the forklift computer"
            ]
        },
        {
            "title": "Senior Programmer Analyst",
            "company": "FedEx Services",
            "location": "Harrison, AR",
            "startDate": "08/2016",
            "endDate": "12/2018",
            "description": "Strong developer in prototyping and advancing Kafka and Cassandra. Promoted Test Driven Development, Paired Programming, and Code Quality Gates. Primary workload involved high volume sensor data streaming applications and REST APIs in Java.",
            "accomplishments": [
                - "Established Kafka and Cassandra implementation at FedEx",
                - "Created visualizer to display location of shipments and forklifts"
            ]
        },
        {
            "title": "Programmer Analyst",
            "company": "FedEx Services",
            "location": "Harrison, AR",
            "startDate": "11/2013",
            "endDate": "08/2016",
            "description": "Developed responsive web UIs using Angular, Bootstrap, and Node.js. Built numerous Java REST APIs.",
            "accomplishments": []
        },
        {
            "title": "Associate Programmer Analyst",
            "company": "FedEx Services",
            "location": "Harrison, AR",
            "startDate": "06/2012",
            "endDate": "11/2013",
            "description": "Built redundancy and reliability applications including auto correction for data errors, failure alerting, and retry logic implementation.",
            "accomplishments": []
        },
        {
            "title": "Lead Computer Operator",
            "company": "FedEx Services",
            "location": "Harrison, AR",
            "startDate": "05/2011",
            "endDate": "06/2012",
            "description": "Oversaw team responsible for monitoring and preventive maintenance of mainframes and servers. Built tools for offsite tape backup tracking and reclamation.",
            "accomplishments": []
        },
        {
            "title": "Computer Operator",
            "company": "FedEx Services",
            "location": "Harrison, AR",
            "startDate": "04/2007",
            "endDate": "05/2011",
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