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
        "ts"
      ],
      "frameworks": [
        "spring/spring_boot",
        "angular",
        "vue",
        "ionic",
        "electron",
        "react",
        "wails"
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
  }
}