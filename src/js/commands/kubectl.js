const fakeCluster = {
    clusterName: 'resume-cluster',
    serverVersion: 'v1.28.6',
    nodes: [
        {
            name: 'control-plane-1',
            status: 'Ready',
            roles: 'control-plane',
            age: '320d',
            version: 'v1.28.6',
            internalIP: '10.0.0.10',
            osImage: 'Ubuntu 22.04.4 LTS',
            kernelVersion: '5.15.0-105-generic',
            containerRuntime: 'containerd://1.7.13',
            architecture: 'amd64',
            kubeletVersion: 'v1.28.6',
            creationTimestamp: '2023-11-01T09:12:00Z',
            conditions: [
                { type: 'Ready', status: 'True', lastHeartbeatTime: '2024-07-15T03:15:02Z', lastTransitionTime: '2023-11-01T09:14:18Z', reason: 'KubeletReady', message: 'kubelet is posting ready status' },
                { type: 'MemoryPressure', status: 'False', lastHeartbeatTime: '2024-07-15T03:14:59Z', lastTransitionTime: '2023-11-01T09:14:18Z', reason: 'KubeletHasSufficientMemory', message: 'kubelet has sufficient memory available' }
            ],
            addresses: [
                { type: 'InternalIP', address: '10.0.0.10' },
                { type: 'Hostname', address: 'control-plane-1' }
            ],
            allocatable: { cpu: '3900m', memory: '14208Mi', pods: '110' },
            capacity: { cpu: '4', memory: '16384Mi', pods: '110' }
        },
        {
            name: 'worker-1',
            status: 'Ready',
            roles: 'worker',
            age: '289d',
            version: 'v1.28.6',
            internalIP: '10.0.0.21',
            osImage: 'Ubuntu 22.04.4 LTS',
            kernelVersion: '5.15.0-104-generic',
            containerRuntime: 'containerd://1.7.13',
            architecture: 'amd64',
            kubeletVersion: 'v1.28.6',
            creationTimestamp: '2023-12-12T17:24:00Z',
            conditions: [
                { type: 'Ready', status: 'True', lastHeartbeatTime: '2024-07-15T03:15:07Z', lastTransitionTime: '2023-12-12T17:25:32Z', reason: 'KubeletReady', message: 'kubelet is posting ready status' }
            ],
            addresses: [
                { type: 'InternalIP', address: '10.0.0.21' },
                { type: 'Hostname', address: 'worker-1' }
            ],
            allocatable: { cpu: '3900m', memory: '14208Mi', pods: '110' },
            capacity: { cpu: '4', memory: '16384Mi', pods: '110' }
        },
        {
            name: 'worker-2',
            status: 'Ready',
            roles: 'worker',
            age: '241d',
            version: 'v1.28.6',
            internalIP: '10.0.0.22',
            osImage: 'Ubuntu 22.04.4 LTS',
            kernelVersion: '5.15.0-104-generic',
            containerRuntime: 'containerd://1.7.13',
            architecture: 'amd64',
            kubeletVersion: 'v1.28.6',
            creationTimestamp: '2024-02-01T08:03:00Z',
            conditions: [
                { type: 'Ready', status: 'True', lastHeartbeatTime: '2024-07-15T03:15:10Z', lastTransitionTime: '2024-02-01T08:04:48Z', reason: 'KubeletReady', message: 'kubelet is posting ready status' }
            ],
            addresses: [
                { type: 'InternalIP', address: '10.0.0.22' },
                { type: 'Hostname', address: 'worker-2' }
            ],
            allocatable: { cpu: '3900m', memory: '14208Mi', pods: '110' },
            capacity: { cpu: '4', memory: '16384Mi', pods: '110' }
        }
    ],
    namespaces: {
        default: {
            status: 'Active',
            age: '257d',
            labels: { 'kubernetes.io/metadata.name': 'default' },
            annotations: {},
            pods: [
                {
                    name: 'web-frontend-65b5b6d7f7-7kzft',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '1',
                    age: '5d',
                    ip: '10.244.0.21',
                    node: 'worker-1',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-07-10T14:32:00Z',
                    labels: { app: 'web-frontend', tier: 'frontend', 'pod-template-hash': '65b5b6d7f7' },
                    annotations: { 'checksum/config': 'f5488c6b8' },
                    containers: [
                        {
                            name: 'web',
                            image: 'ghcr.io/bcrow/web-frontend:1.4.2',
                            ports: ['8080/TCP'],
                            env: [
                                { name: 'NODE_ENV', value: 'production' },
                                { name: 'PORT', value: '8080' }
                            ],
                            resources: {
                                requests: { cpu: '200m', memory: '256Mi' },
                                limits: { cpu: '400m', memory: '512Mi' }
                            },
                            readinessProbe: 'http-get http://:8080/healthz delay=5s timeout=1s period=10s',
                            livenessProbe: 'http-get http://:8080/live delay=10s timeout=1s period=10s'
                        }
                    ],
                    volumes: [
                        { name: 'web-config', type: 'ConfigMap', source: 'web-frontend-config' },
                        { name: 'default-token', type: 'Secret', source: 'default-token-ztxk2' }
                    ],
                    conditions: [
                        { type: 'Initialized', status: 'True', lastTransitionTime: '2024-07-10T14:32:05Z' },
                        { type: 'Ready', status: 'True', lastTransitionTime: '2024-07-10T14:33:12Z' },
                        { type: 'ContainersReady', status: 'True', lastTransitionTime: '2024-07-10T14:33:12Z' },
                        { type: 'PodScheduled', status: 'True', lastTransitionTime: '2024-07-10T14:32:00Z' }
                    ],
                    owner: { kind: 'ReplicaSet', name: 'web-frontend-65b5b6d7f7' },
                    qosClass: 'Burstable',
                    events: [
                        { type: 'Normal', reason: 'Scheduled', age: '5d', from: 'default-scheduler', message: 'Successfully assigned default/web-frontend-65b5b6d7f7-7kzft to worker-1' },
                        { type: 'Normal', reason: 'Pulling', age: '5d', from: 'kubelet', message: 'Pulling image "ghcr.io/bcrow/web-frontend:1.4.2"' },
                        { type: 'Normal', reason: 'Started', age: '5d', from: 'kubelet', message: 'Started container web' }
                    ]
                },
                {
                    name: 'web-frontend-65b5b6d7f7-9pm2t',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '0',
                    age: '5d',
                    ip: '10.244.0.22',
                    node: 'worker-2',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-07-10T14:32:20Z',
                    labels: { app: 'web-frontend', tier: 'frontend', 'pod-template-hash': '65b5b6d7f7' },
                    annotations: { 'checksum/config': 'f5488c6b8' },
                    containers: [
                        {
                            name: 'web',
                            image: 'ghcr.io/bcrow/web-frontend:1.4.2',
                            ports: ['8080/TCP'],
                            env: [
                                { name: 'NODE_ENV', value: 'production' },
                                { name: 'PORT', value: '8080' }
                            ],
                            resources: {
                                requests: { cpu: '200m', memory: '256Mi' },
                                limits: { cpu: '400m', memory: '512Mi' }
                            }
                        }
                    ],
                    volumes: [
                        { name: 'web-config', type: 'ConfigMap', source: 'web-frontend-config' },
                        { name: 'default-token', type: 'Secret', source: 'default-token-ztxk2' }
                    ],
                    conditions: [
                        { type: 'Initialized', status: 'True', lastTransitionTime: '2024-07-10T14:32:26Z' },
                        { type: 'Ready', status: 'True', lastTransitionTime: '2024-07-10T14:33:25Z' },
                        { type: 'ContainersReady', status: 'True', lastTransitionTime: '2024-07-10T14:33:25Z' },
                        { type: 'PodScheduled', status: 'True', lastTransitionTime: '2024-07-10T14:32:20Z' }
                    ],
                    owner: { kind: 'ReplicaSet', name: 'web-frontend-65b5b6d7f7' },
                    qosClass: 'Burstable',
                    events: [
                        { type: 'Normal', reason: 'Scheduled', age: '5d', from: 'default-scheduler', message: 'Successfully assigned default/web-frontend-65b5b6d7f7-9pm2t to worker-2' }
                    ]
                },
                {
                    name: 'web-frontend-65b5b6d7f7-vxf45',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '0',
                    age: '5d',
                    ip: '10.244.0.23',
                    node: 'worker-1',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-07-10T14:32:45Z',
                    labels: { app: 'web-frontend', tier: 'frontend', 'pod-template-hash': '65b5b6d7f7' },
                    annotations: { 'checksum/config': 'f5488c6b8' },
                    containers: [
                        {
                            name: 'web',
                            image: 'ghcr.io/bcrow/web-frontend:1.4.2',
                            ports: ['8080/TCP'],
                            env: [
                                { name: 'NODE_ENV', value: 'production' },
                                { name: 'PORT', value: '8080' }
                            ],
                            resources: {
                                requests: { cpu: '200m', memory: '256Mi' },
                                limits: { cpu: '400m', memory: '512Mi' }
                            }
                        }
                    ],
                    volumes: [
                        { name: 'web-config', type: 'ConfigMap', source: 'web-frontend-config' },
                        { name: 'default-token', type: 'Secret', source: 'default-token-ztxk2' }
                    ],
                    conditions: [
                        { type: 'Initialized', status: 'True', lastTransitionTime: '2024-07-10T14:32:49Z' },
                        { type: 'Ready', status: 'True', lastTransitionTime: '2024-07-10T14:33:42Z' },
                        { type: 'ContainersReady', status: 'True', lastTransitionTime: '2024-07-10T14:33:42Z' },
                        { type: 'PodScheduled', status: 'True', lastTransitionTime: '2024-07-10T14:32:45Z' }
                    ],
                    owner: { kind: 'ReplicaSet', name: 'web-frontend-65b5b6d7f7' },
                    qosClass: 'Burstable',
                    events: [
                        { type: 'Normal', reason: 'Pulled', age: '5d', from: 'kubelet', message: 'Container image "ghcr.io/bcrow/web-frontend:1.4.2" already present on machine' }
                    ]
                },
                {
                    name: 'api-gateway-76df8c9d7d-bqf2z',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '2',
                    age: '12d',
                    ip: '10.244.0.31',
                    node: 'worker-1',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-07-03T09:02:11Z',
                    labels: { app: 'api-gateway', tier: 'edge', 'pod-template-hash': '76df8c9d7d' },
                    annotations: { 'sidecar.istio.io/inject': 'false' },
                    containers: [
                        {
                            name: 'gateway',
                            image: 'ghcr.io/bcrow/api-gateway:2.8.0',
                            ports: ['8080/TCP'],
                            env: [
                                { name: 'SPRING_PROFILES_ACTIVE', value: 'prod' },
                                { name: 'OTEL_EXPORTER_OTLP_ENDPOINT', value: 'http://observability-prometheus:4317' }
                            ],
                            resources: {
                                requests: { cpu: '250m', memory: '384Mi' },
                                limits: { cpu: '500m', memory: '768Mi' }
                            }
                        }
                    ],
                    volumes: [
                        { name: 'api-config', type: 'ConfigMap', source: 'api-gateway-env' },
                        { name: 'default-token', type: 'Secret', source: 'default-token-ztxk2' }
                    ],
                    conditions: [
                        { type: 'Initialized', status: 'True', lastTransitionTime: '2024-07-03T09:02:20Z' },
                        { type: 'Ready', status: 'True', lastTransitionTime: '2024-07-03T09:03:14Z' },
                        { type: 'ContainersReady', status: 'True', lastTransitionTime: '2024-07-03T09:03:14Z' },
                        { type: 'PodScheduled', status: 'True', lastTransitionTime: '2024-07-03T09:02:11Z' }
                    ],
                    owner: { kind: 'ReplicaSet', name: 'api-gateway-76df8c9d7d' },
                    qosClass: 'Burstable',
                    events: [
                        { type: 'Normal', reason: 'ScalingReplicaSet', age: '12d', from: 'deployment-controller', message: 'Scaled up replica set api-gateway-76df8c9d7d to 2' }
                    ]
                },
                {
                    name: 'api-gateway-76df8c9d7d-qcrmm',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '1',
                    age: '12d',
                    ip: '10.244.0.32',
                    node: 'worker-2',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-07-03T09:02:41Z',
                    labels: { app: 'api-gateway', tier: 'edge', 'pod-template-hash': '76df8c9d7d' },
                    annotations: { 'sidecar.istio.io/inject': 'false' },
                    containers: [
                        {
                            name: 'gateway',
                            image: 'ghcr.io/bcrow/api-gateway:2.8.0',
                            ports: ['8080/TCP'],
                            env: [
                                { name: 'SPRING_PROFILES_ACTIVE', value: 'prod' },
                                { name: 'OTEL_EXPORTER_OTLP_ENDPOINT', value: 'http://observability-prometheus:4317' }
                            ],
                            resources: {
                                requests: { cpu: '250m', memory: '384Mi' },
                                limits: { cpu: '500m', memory: '768Mi' }
                            }
                        }
                    ],
                    volumes: [
                        { name: 'api-config', type: 'ConfigMap', source: 'api-gateway-env' },
                        { name: 'default-token', type: 'Secret', source: 'default-token-ztxk2' }
                    ],
                    conditions: [
                        { type: 'Initialized', status: 'True', lastTransitionTime: '2024-07-03T09:02:48Z' },
                        { type: 'Ready', status: 'True', lastTransitionTime: '2024-07-03T09:03:33Z' },
                        { type: 'ContainersReady', status: 'True', lastTransitionTime: '2024-07-03T09:03:33Z' },
                        { type: 'PodScheduled', status: 'True', lastTransitionTime: '2024-07-03T09:02:41Z' }
                    ],
                    owner: { kind: 'ReplicaSet', name: 'api-gateway-76df8c9d7d' },
                    qosClass: 'Burstable'
                },
                {
                    name: 'postgresql-0',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '0',
                    age: '28d',
                    ip: '10.244.0.35',
                    node: 'worker-2',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-06-17T06:11:00Z',
                    labels: { app: 'postgresql', 'controller-revision-hash': 'postgresql-696f4b4ff5', statefulset_kubernetes_io_pod_name: 'postgresql-0' },
                    annotations: {},
                    containers: [
                        {
                            name: 'postgres',
                            image: 'postgres:14.9',
                            ports: ['5432/TCP'],
                            env: [
                                { name: 'POSTGRES_DB', value: 'orders' },
                                { name: 'POSTGRES_MAX_CONNECTIONS', value: '200' }
                            ],
                            resources: {
                                requests: { cpu: '250m', memory: '512Mi' },
                                limits: { cpu: '1', memory: '1Gi' }
                            },
                            volumeMounts: [
                                { name: 'data', mountPath: '/var/lib/postgresql/data' }
                            ]
                        }
                    ],
                    volumes: [
                        { name: 'data', type: 'PersistentVolumeClaim', source: 'data-postgresql-0' }
                    ],
                    conditions: [
                        { type: 'Initialized', status: 'True', lastTransitionTime: '2024-06-17T06:11:04Z' },
                        { type: 'Ready', status: 'True', lastTransitionTime: '2024-06-17T06:13:42Z' },
                        { type: 'ContainersReady', status: 'True', lastTransitionTime: '2024-06-17T06:13:42Z' },
                        { type: 'PodScheduled', status: 'True', lastTransitionTime: '2024-06-17T06:11:00Z' }
                    ],
                    owner: { kind: 'StatefulSet', name: 'postgresql' },
                    qosClass: 'Burstable',
                    events: [
                        { type: 'Normal', reason: 'SuccessfulAttachVolume', age: '28d', from: 'attachdetach-controller', message: 'AttachVolume.Attach succeeded for volume "pvc-data-postgresql-0"' }
                    ]
                },
                {
                    name: 'postgresql-1',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '0',
                    age: '27d',
                    ip: '10.244.0.36',
                    node: 'worker-1',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-06-18T07:22:10Z',
                    labels: { app: 'postgresql', 'controller-revision-hash': 'postgresql-696f4b4ff5', statefulset_kubernetes_io_pod_name: 'postgresql-1' },
                    annotations: {},
                    containers: [
                        {
                            name: 'postgres',
                            image: 'postgres:14.9',
                            ports: ['5432/TCP'],
                            env: [
                                { name: 'POSTGRES_DB', value: 'orders' },
                                { name: 'POSTGRES_MAX_CONNECTIONS', value: '200' }
                            ],
                            resources: {
                                requests: { cpu: '250m', memory: '512Mi' },
                                limits: { cpu: '1', memory: '1Gi' }
                            },
                            volumeMounts: [
                                { name: 'data', mountPath: '/var/lib/postgresql/data' }
                            ]
                        }
                    ],
                    volumes: [
                        { name: 'data', type: 'PersistentVolumeClaim', source: 'data-postgresql-1' }
                    ],
                    conditions: [
                        { type: 'Initialized', status: 'True', lastTransitionTime: '2024-06-18T07:22:15Z' },
                        { type: 'Ready', status: 'True', lastTransitionTime: '2024-06-18T07:24:01Z' },
                        { type: 'ContainersReady', status: 'True', lastTransitionTime: '2024-06-18T07:24:01Z' },
                        { type: 'PodScheduled', status: 'True', lastTransitionTime: '2024-06-18T07:22:10Z' }
                    ],
                    owner: { kind: 'StatefulSet', name: 'postgresql' },
                    qosClass: 'Burstable'
                },
                {
                    name: 'log-agent-worker-1',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '0',
                    age: '120d',
                    ip: '10.244.0.40',
                    node: 'worker-1',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-03-18T05:41:14Z',
                    labels: { app: 'log-agent', 'pod-template-generation': '1' },
                    annotations: {},
                    containers: [
                        {
                            name: 'fluentbit',
                            image: 'cr.fluent.io/fluent-bit:2.2.1',
                            resources: {
                                requests: { cpu: '100m', memory: '128Mi' },
                                limits: { cpu: '200m', memory: '256Mi' }
                            }
                        }
                    ],
                    volumes: [
                        { name: 'varlog', type: 'HostPath', source: '/var/log' }
                    ],
                    owner: { kind: 'DaemonSet', name: 'log-agent' },
                    qosClass: 'Burstable'
                },
                {
                    name: 'log-agent-worker-2',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '0',
                    age: '120d',
                    ip: '10.244.0.41',
                    node: 'worker-2',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-03-18T05:41:30Z',
                    labels: { app: 'log-agent', 'pod-template-generation': '1' },
                    annotations: {},
                    containers: [
                        {
                            name: 'fluentbit',
                            image: 'cr.fluent.io/fluent-bit:2.2.1'
                        }
                    ],
                    volumes: [
                        { name: 'varlog', type: 'HostPath', source: '/var/log' }
                    ],
                    owner: { kind: 'DaemonSet', name: 'log-agent' },
                    qosClass: 'Burstable'
                }
            ],
            deployments: [
                {
                    name: 'web-frontend',
                    ready: '3/3',
                    upToDate: '3',
                    available: '3',
                    age: '92d',
                    selector: 'app=web-frontend',
                    containers: ['web'],
                    images: ['ghcr.io/bcrow/web-frontend:1.4.2'],
                    creationTimestamp: '2024-04-12T15:00:00Z',
                    labels: { app: 'web-frontend', tier: 'frontend' },
                    annotations: { 'rollouts.kubernetes.io/version': 'blue-green-2024-07' },
                    podLabels: { app: 'web-frontend', tier: 'frontend' },
                    strategy: 'RollingUpdate',
                    rollout: { maxUnavailable: '25%', maxSurge: '25%' },
                    replicas: { desired: 3, updated: 3, ready: 3, available: 3 },
                    conditions: [
                        { type: 'Available', status: 'True', lastUpdateTime: '2024-04-12T15:01:00Z', reason: 'MinimumReplicasAvailable', message: 'Deployment has minimum availability.' },
                        { type: 'Progressing', status: 'True', lastUpdateTime: '2024-07-10T14:31:00Z', reason: 'NewReplicaSetAvailable', message: 'ReplicaSet "web-frontend-65b5b6d7f7" has successfully progressed.' }
                    ],
                    events: [
                        { type: 'Normal', reason: 'ScalingReplicaSet', age: '5d', from: 'deployment-controller', message: 'Scaled up replica set web-frontend-65b5b6d7f7 to 3' }
                    ]
                },
                {
                    name: 'api-gateway',
                    ready: '2/2',
                    upToDate: '2',
                    available: '2',
                    age: '120d',
                    selector: 'app=api-gateway',
                    containers: ['gateway'],
                    images: ['ghcr.io/bcrow/api-gateway:2.8.0'],
                    creationTimestamp: '2024-03-01T11:30:00Z',
                    labels: { app: 'api-gateway', tier: 'edge' },
                    annotations: { 'deployment.kubernetes.io/revision-history': '5' },
                    podLabels: { app: 'api-gateway', tier: 'edge' },
                    strategy: 'RollingUpdate',
                    rollout: { maxUnavailable: '25%', maxSurge: '1' },
                    replicas: { desired: 2, updated: 2, ready: 2, available: 2 },
                    conditions: [
                        { type: 'Available', status: 'True', lastUpdateTime: '2024-05-01T07:44:00Z', reason: 'MinimumReplicasAvailable', message: 'Deployment has minimum availability.' },
                        { type: 'Progressing', status: 'True', lastUpdateTime: '2024-07-03T09:01:00Z', reason: 'NewReplicaSetAvailable', message: 'ReplicaSet "api-gateway-76df8c9d7d" has successfully progressed.' }
                    ],
                    events: [
                        { type: 'Normal', reason: 'ScalingReplicaSet', age: '12d', from: 'deployment-controller', message: 'Scaled up replica set api-gateway-76df8c9d7d to 2' }
                    ]
                }
            ],
            replicaSets: [
                {
                    name: 'web-frontend-65b5b6d7f7',
                    desired: '3',
                    current: '3',
                    ready: '3',
                    age: '5d',
                    containers: ['web'],
                    images: ['ghcr.io/bcrow/web-frontend:1.4.2'],
                    selector: 'app=web-frontend',
                    creationTimestamp: '2024-07-10T14:31:30Z',
                    owner: { kind: 'Deployment', name: 'web-frontend' }
                },
                {
                    name: 'api-gateway-76df8c9d7d',
                    desired: '2',
                    current: '2',
                    ready: '2',
                    age: '12d',
                    containers: ['gateway'],
                    images: ['ghcr.io/bcrow/api-gateway:2.8.0'],
                    selector: 'app=api-gateway',
                    creationTimestamp: '2024-07-03T09:01:40Z',
                    owner: { kind: 'Deployment', name: 'api-gateway' }
                }
            ],
            statefulSets: [
                {
                    name: 'postgresql',
                    ready: '2/2',
                    age: '120d',
                    service: 'postgresql',
                    selector: 'app=postgresql',
                    labels: { app: 'postgresql', tier: 'database' },
                    creationTimestamp: '2024-03-02T10:15:00Z',
                    updateStrategy: 'RollingUpdate',
                    containers: ['postgres'],
                    images: ['postgres:14.9'],
                    volumeClaims: [
                        { name: 'data', storageClass: 'fast-ssd', size: '100Gi' }
                    ],
                    replicas: { desired: 2, ready: 2, current: 2 },
                    events: [
                        { type: 'Normal', reason: 'SuccessfulCreate', age: '28d', from: 'statefulset-controller', message: 'create Pod default/postgresql-1 in StatefulSet postgresql success' }
                    ]
                }
            ],
            services: [
                { name: 'api-gateway', type: 'ClusterIP', clusterIP: '10.96.42.18', externalIP: '<none>', ports: '8080/TCP', age: '120d', selector: 'app=api-gateway' },
                { name: 'web-frontend', type: 'ClusterIP', clusterIP: '10.96.71.200', externalIP: '<none>', ports: '80/TCP', age: '92d', selector: 'app=web-frontend' },
                { name: 'postgresql', type: 'ClusterIP', clusterIP: '10.96.33.11', externalIP: '<none>', ports: '5432/TCP', age: '120d', selector: 'app=postgresql' }
            ],
            daemonSets: [
                {
                    name: 'log-agent',
                    desired: '2',
                    current: '2',
                    ready: '2',
                    upToDate: '2',
                    available: '2',
                    age: '210d',
                    nodeSelector: '<none>',
                    creationTimestamp: '2023-12-01T08:12:00Z',
                    containers: ['fluentbit'],
                    images: ['cr.fluent.io/fluent-bit:2.2.1'],
                    selector: 'app=log-agent',
                    tolerations: ['node-role.kubernetes.io/control-plane:NoSchedule']
                }
            ],
            cronJobs: [
                {
                    name: 'db-backup',
                    schedule: '0 2 * * *',
                    suspend: 'False',
                    active: '0',
                    lastSchedule: '2024-07-15T02:00:00Z',
                    age: '210d',
                    concurrencyPolicy: 'Forbid',
                    successfulHistoryLimit: 3,
                    failedHistoryLimit: 1
                }
            ],
            jobs: [
                {
                    name: 'db-backup-28930123',
                    completions: '1/1',
                    duration: '35s',
                    age: '14h',
                    startTime: '2024-07-15T02:00:02Z',
                    completionTime: '2024-07-15T02:00:37Z',
                    podSelector: 'job-name=db-backup-28930123'
                }
            ],
            configMaps: [
                { name: 'web-frontend-config', data: '5', age: '92d', creationTimestamp: '2024-04-12T15:00:00Z', dataEntries: { 'nginx.conf': 'configured', 'feature-flags.json': '{"darkLaunch":true}' } },
                { name: 'api-gateway-env', data: '8', age: '120d', creationTimestamp: '2024-03-01T11:30:00Z', dataEntries: { 'application.yml': 'spring: profiles: prod' } }
            ]
        },
        edge: {
            status: 'Active',
            age: '180d',
            labels: { 'kubernetes.io/metadata.name': 'edge', purpose: 'logistics' },
            annotations: {},
            pods: [
                {
                    name: 'edge-sensor-processor-7b8d4f66f6-l9h4t',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '0',
                    age: '8d',
                    ip: '10.244.1.11',
                    node: 'worker-1',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-07-07T11:12:00Z',
                    labels: { app: 'edge-sensor-processor', component: 'analytics', 'pod-template-hash': '7b8d4f66f6' },
                    annotations: { 'checksum/config': 'c81a0f1dd' },
                    containers: [
                        {
                            name: 'processor',
                            image: 'ghcr.io/bcrow/edge-sensor-processor:3.2.1',
                            ports: ['7000/TCP'],
                            env: [
                                { name: 'PIPELINE_CONFIG', value: 'sensor-pipelines' },
                                { name: 'CACHE_HOST', value: 'edge-redis.edge.svc.cluster.local' }
                            ],
                            resources: {
                                requests: { cpu: '300m', memory: '256Mi' },
                                limits: { cpu: '700m', memory: '768Mi' }
                            }
                        }
                    ],
                    owner: { kind: 'ReplicaSet', name: 'edge-sensor-processor-7b8d4f66f6' },
                    qosClass: 'Burstable'
                },
                {
                    name: 'edge-sensor-processor-7b8d4f66f6-vd8x2',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '0',
                    age: '8d',
                    ip: '10.244.1.12',
                    node: 'worker-2',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-07-07T11:12:18Z',
                    labels: { app: 'edge-sensor-processor', component: 'analytics', 'pod-template-hash': '7b8d4f66f6' },
                    annotations: { 'checksum/config': 'c81a0f1dd' },
                    containers: [
                        {
                            name: 'processor',
                            image: 'ghcr.io/bcrow/edge-sensor-processor:3.2.1'
                        }
                    ],
                    owner: { kind: 'ReplicaSet', name: 'edge-sensor-processor-7b8d4f66f6' },
                    qosClass: 'Burstable'
                },
                {
                    name: 'telemetry-router-5c7d78fc76-4msn2',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '0',
                    age: '14d',
                    ip: '10.244.1.21',
                    node: 'worker-1',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-07-01T05:40:00Z',
                    labels: { app: 'telemetry-router', 'pod-template-hash': '5c7d78fc76' },
                    annotations: {},
                    containers: [
                        {
                            name: 'router',
                            image: 'ghcr.io/bcrow/telemetry-router:1.11.0',
                            ports: ['8088/TCP'],
                            env: [
                                { name: 'ROUTER_REGION', value: 'midwest' }
                            ]
                        }
                    ],
                    owner: { kind: 'ReplicaSet', name: 'telemetry-router-5c7d78fc76' },
                    qosClass: 'Burstable'
                },
                {
                    name: 'mqtt-broker-0',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '1',
                    age: '40d',
                    ip: '10.244.1.31',
                    node: 'worker-1',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-06-05T01:14:00Z',
                    labels: { app: 'mqtt-broker', 'controller-revision-hash': 'mqtt-broker-6cfd7dfb4f', statefulset_kubernetes_io_pod_name: 'mqtt-broker-0' },
                    annotations: {},
                    containers: [
                        {
                            name: 'emqx',
                            image: 'emqx/emqx:5.3.1',
                            ports: ['1883/TCP'],
                            env: [
                                { name: 'EMQX_CLUSTER__DISCOVERY', value: 'dns' }
                            ],
                            volumeMounts: [
                                { name: 'data', mountPath: '/opt/emqx/data' }
                            ]
                        }
                    ],
                    volumes: [
                        { name: 'data', type: 'PersistentVolumeClaim', source: 'data-mqtt-broker-0' }
                    ],
                    owner: { kind: 'StatefulSet', name: 'mqtt-broker' },
                    qosClass: 'Burstable'
                },
                {
                    name: 'mqtt-broker-1',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '0',
                    age: '39d',
                    ip: '10.244.1.32',
                    node: 'worker-2',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-06-06T02:24:00Z',
                    labels: { app: 'mqtt-broker', 'controller-revision-hash': 'mqtt-broker-6cfd7dfb4f', statefulset_kubernetes_io_pod_name: 'mqtt-broker-1' },
                    annotations: {},
                    containers: [
                        {
                            name: 'emqx',
                            image: 'emqx/emqx:5.3.1'
                        }
                    ],
                    volumes: [
                        { name: 'data', type: 'PersistentVolumeClaim', source: 'data-mqtt-broker-1' }
                    ],
                    owner: { kind: 'StatefulSet', name: 'mqtt-broker' },
                    qosClass: 'Burstable'
                },
                {
                    name: 'edge-collector-worker-1',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '0',
                    age: '120d',
                    ip: '10.244.1.41',
                    node: 'worker-1',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-03-18T05:41:44Z',
                    labels: { app: 'edge-collector', 'pod-template-generation': '1' },
                    annotations: {},
                    containers: [
                        {
                            name: 'collector',
                            image: 'ghcr.io/bcrow/edge-collector:1.5.0'
                        }
                    ],
                    owner: { kind: 'DaemonSet', name: 'edge-collector' },
                    qosClass: 'Burstable'
                }
            ],
            deployments: [
                {
                    name: 'edge-sensor-processor',
                    ready: '2/2',
                    upToDate: '2',
                    available: '2',
                    age: '60d',
                    selector: 'app=edge-sensor-processor',
                    containers: ['processor'],
                    images: ['ghcr.io/bcrow/edge-sensor-processor:3.2.1'],
                    creationTimestamp: '2024-05-16T08:00:00Z',
                    labels: { app: 'edge-sensor-processor', component: 'analytics' },
                    annotations: { 'deployment.kubernetes.io/revision': '6' },
                    podLabels: { app: 'edge-sensor-processor', component: 'analytics' },
                    strategy: 'RollingUpdate',
                    rollout: { maxUnavailable: '25%', maxSurge: '1' },
                    replicas: { desired: 2, updated: 2, ready: 2, available: 2 }
                },
                {
                    name: 'telemetry-router',
                    ready: '1/1',
                    upToDate: '1',
                    available: '1',
                    age: '140d',
                    selector: 'app=telemetry-router',
                    containers: ['router'],
                    images: ['ghcr.io/bcrow/telemetry-router:1.11.0'],
                    creationTimestamp: '2024-02-26T06:11:00Z',
                    labels: { app: 'telemetry-router' },
                    annotations: { 'router.edge.bryan-crow.com/mode': 'active' },
                    podLabels: { app: 'telemetry-router' },
                    strategy: 'RollingUpdate',
                    rollout: { maxUnavailable: '0', maxSurge: '1' },
                    replicas: { desired: 1, updated: 1, ready: 1, available: 1 }
                }
            ],
            replicaSets: [
                {
                    name: 'edge-sensor-processor-7b8d4f66f6',
                    desired: '2',
                    current: '2',
                    ready: '2',
                    age: '8d',
                    containers: ['processor'],
                    images: ['ghcr.io/bcrow/edge-sensor-processor:3.2.1'],
                    selector: 'app=edge-sensor-processor',
                    creationTimestamp: '2024-07-07T11:10:40Z',
                    owner: { kind: 'Deployment', name: 'edge-sensor-processor' }
                },
                {
                    name: 'telemetry-router-5c7d78fc76',
                    desired: '1',
                    current: '1',
                    ready: '1',
                    age: '14d',
                    containers: ['router'],
                    images: ['ghcr.io/bcrow/telemetry-router:1.11.0'],
                    selector: 'app=telemetry-router',
                    creationTimestamp: '2024-07-01T05:39:20Z',
                    owner: { kind: 'Deployment', name: 'telemetry-router' }
                }
            ],
            statefulSets: [
                {
                    name: 'mqtt-broker',
                    ready: '2/2',
                    age: '120d',
                    service: 'mqtt-broker',
                    selector: 'app=mqtt-broker',
                    labels: { app: 'mqtt-broker', tier: 'messaging' },
                    creationTimestamp: '2024-03-18T05:30:00Z',
                    updateStrategy: 'RollingUpdate',
                    containers: ['emqx'],
                    images: ['emqx/emqx:5.3.1'],
                    volumeClaims: [
                        { name: 'data', storageClass: 'fast-ssd', size: '20Gi' }
                    ],
                    replicas: { desired: 2, ready: 2, current: 2 }
                }
            ],
            services: [
                { name: 'sensor-api', type: 'ClusterIP', clusterIP: '10.97.12.30', externalIP: '<none>', ports: '7000/TCP', age: '140d', selector: 'app=edge-sensor-processor' },
                { name: 'mqtt-broker', type: 'ClusterIP', clusterIP: '10.97.44.17', externalIP: '<none>', ports: '1883/TCP', age: '120d', selector: 'app=mqtt-broker' }
            ],
            daemonSets: [
                {
                    name: 'edge-collector',
                    desired: '2',
                    current: '2',
                    ready: '2',
                    upToDate: '2',
                    available: '2',
                    age: '210d',
                    nodeSelector: '<none>',
                    creationTimestamp: '2023-12-01T08:14:00Z',
                    containers: ['collector'],
                    images: ['ghcr.io/bcrow/edge-collector:1.5.0'],
                    selector: 'app=edge-collector',
                    tolerations: []
                }
            ],
            cronJobs: [
                {
                    name: 'edge-compaction',
                    schedule: '*/30 * * * *',
                    suspend: 'False',
                    active: '0',
                    lastSchedule: '2024-07-15T02:30:00Z',
                    age: '90d',
                    concurrencyPolicy: 'Allow',
                    successfulHistoryLimit: 3,
                    failedHistoryLimit: 1
                }
            ],
            jobs: [
                {
                    name: 'edge-compaction-27489231',
                    completions: '1/1',
                    duration: '12s',
                    age: '30m',
                    startTime: '2024-07-15T02:30:01Z',
                    completionTime: '2024-07-15T02:30:13Z',
                    podSelector: 'job-name=edge-compaction-27489231'
                }
            ],
            configMaps: [
                { name: 'sensor-pipelines', data: '3', age: '180d', creationTimestamp: '2024-01-18T12:00:00Z', dataEntries: { 'pipeline.yml': 'stages: [ingest, aggregate, publish]' } },
                { name: 'router-config', data: '2', age: '140d', creationTimestamp: '2024-02-26T06:11:00Z', dataEntries: { 'routes.json': '{"edge":"default"}' } }
            ]
        },
        observability: {
            status: 'Active',
            age: '240d',
            labels: { 'kubernetes.io/metadata.name': 'observability', purpose: 'monitoring' },
            annotations: {},
            pods: [
                {
                    name: 'grafana-6f6d8c4c7f-ptk6x',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '0',
                    age: '18d',
                    ip: '10.244.2.15',
                    node: 'worker-2',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-06-27T13:10:00Z',
                    labels: { app: 'grafana', 'pod-template-hash': '6f6d8c4c7f' },
                    annotations: { 'prometheus.io/scrape': 'true' },
                    containers: [
                        {
                            name: 'grafana',
                            image: 'docker.io/grafana/grafana:10.4.1',
                            ports: ['3000/TCP'],
                            env: [
                                { name: 'GF_SECURITY_ADMIN_USER', value: 'admin' }
                            ]
                        }
                    ],
                    owner: { kind: 'ReplicaSet', name: 'grafana-6f6d8c4c7f' },
                    qosClass: 'Burstable'
                },
                {
                    name: 'alertmanager-6b9ddf8c7c-f8nrr',
                    ready: '2/2',
                    status: 'Running',
                    restarts: '0',
                    age: '26d',
                    ip: '10.244.2.22',
                    node: 'worker-1',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-06-19T04:05:00Z',
                    labels: { app: 'alertmanager', 'pod-template-hash': '6b9ddf8c7c' },
                    annotations: { 'checksum/config': 'a70c3d9df' },
                    containers: [
                        {
                            name: 'alertmanager',
                            image: 'quay.io/prometheus/alertmanager:v0.26.0',
                            ports: ['9093/TCP']
                        },
                        {
                            name: 'config-reloader',
                            image: 'quay.io/prometheus-operator/prometheus-config-reloader:v0.70.0'
                        }
                    ],
                    owner: { kind: 'ReplicaSet', name: 'alertmanager-6b9ddf8c7c' },
                    qosClass: 'Burstable'
                },
                {
                    name: 'prometheus-0',
                    ready: '2/2',
                    status: 'Running',
                    restarts: '0',
                    age: '120d',
                    ip: '10.244.2.31',
                    node: 'worker-1',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-03-18T05:40:00Z',
                    labels: { app: 'prometheus', 'controller-revision-hash': 'prometheus-698c57bcf5', statefulset_kubernetes_io_pod_name: 'prometheus-0' },
                    annotations: { 'prometheus.io/storage': 'local' },
                    containers: [
                        {
                            name: 'prometheus',
                            image: 'quay.io/prometheus/prometheus:v2.52.0',
                            ports: ['9090/TCP'],
                            volumeMounts: [
                                { name: 'prometheus-data', mountPath: '/prometheus' }
                            ]
                        },
                        {
                            name: 'config-reloader',
                            image: 'quay.io/prometheus-operator/prometheus-config-reloader:v0.70.0'
                        }
                    ],
                    volumes: [
                        { name: 'prometheus-data', type: 'PersistentVolumeClaim', source: 'prometheus-prometheus-0' }
                    ],
                    owner: { kind: 'StatefulSet', name: 'prometheus' },
                    qosClass: 'Burstable'
                },
                {
                    name: 'prometheus-1',
                    ready: '2/2',
                    status: 'Running',
                    restarts: '0',
                    age: '119d',
                    ip: '10.244.2.32',
                    node: 'worker-2',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-03-19T06:20:00Z',
                    labels: { app: 'prometheus', 'controller-revision-hash': 'prometheus-698c57bcf5', statefulset_kubernetes_io_pod_name: 'prometheus-1' },
                    annotations: { 'prometheus.io/storage': 'local' },
                    containers: [
                        {
                            name: 'prometheus',
                            image: 'quay.io/prometheus/prometheus:v2.52.0'
                        },
                        {
                            name: 'config-reloader',
                            image: 'quay.io/prometheus-operator/prometheus-config-reloader:v0.70.0'
                        }
                    ],
                    owner: { kind: 'StatefulSet', name: 'prometheus' },
                    volumes: [
                        { name: 'prometheus-data', type: 'PersistentVolumeClaim', source: 'prometheus-prometheus-1' }
                    ],
                    qosClass: 'Burstable'
                },
                {
                    name: 'loki-0',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '0',
                    age: '80d',
                    ip: '10.244.2.40',
                    node: 'worker-2',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2024-05-08T10:02:00Z',
                    labels: { app: 'loki', 'controller-revision-hash': 'loki-7d6d64c49d', statefulset_kubernetes_io_pod_name: 'loki-0' },
                    annotations: {},
                    containers: [
                        {
                            name: 'loki',
                            image: 'grafana/loki:2.9.3',
                            ports: ['3100/TCP']
                        }
                    ],
                    volumes: [
                        { name: 'data', type: 'PersistentVolumeClaim', source: 'storage-loki-0' }
                    ],
                    owner: { kind: 'StatefulSet', name: 'loki' },
                    qosClass: 'Burstable'
                },
                {
                    name: 'node-exporter-bsr9p',
                    ready: '1/1',
                    status: 'Running',
                    restarts: '0',
                    age: '200d',
                    ip: '10.244.2.50',
                    node: 'worker-1',
                    nominatedNode: '',
                    readinessGates: '',
                    startTime: '2023-12-28T07:10:00Z',
                    labels: { app: 'node-exporter', 'pod-template-generation': '3' },
                    annotations: {},
                    containers: [
                        {
                            name: 'node-exporter',
                            image: 'quay.io/prometheus/node-exporter:v1.7.0'
                        }
                    ],
                    owner: { kind: 'DaemonSet', name: 'node-exporter' },
                    qosClass: 'Burstable'
                }
            ],
            deployments: [
                {
                    name: 'grafana',
                    ready: '1/1',
                    upToDate: '1',
                    available: '1',
                    age: '180d',
                    selector: 'app=grafana',
                    containers: ['grafana'],
                    images: ['docker.io/grafana/grafana:10.4.1'],
                    creationTimestamp: '2024-01-16T09:00:00Z',
                    labels: { app: 'grafana' },
                    annotations: { 'grafana.bryan-crow.com/theme': 'dark' },
                    podLabels: { app: 'grafana' },
                    strategy: 'RollingUpdate',
                    rollout: { maxUnavailable: '25%', maxSurge: '1' },
                    replicas: { desired: 1, updated: 1, ready: 1, available: 1 }
                },
                {
                    name: 'alertmanager',
                    ready: '1/1',
                    upToDate: '1',
                    available: '1',
                    age: '220d',
                    selector: 'app=alertmanager',
                    containers: ['alertmanager', 'config-reloader'],
                    images: ['quay.io/prometheus/alertmanager:v0.26.0', 'quay.io/prometheus-operator/prometheus-config-reloader:v0.70.0'],
                    creationTimestamp: '2023-11-07T12:45:00Z',
                    labels: { app: 'alertmanager' },
                    annotations: { 'prometheus-operator/managed': 'true' },
                    podLabels: { app: 'alertmanager' },
                    strategy: 'RollingUpdate',
                    rollout: { maxUnavailable: '25%', maxSurge: '25%' },
                    replicas: { desired: 1, updated: 1, ready: 1, available: 1 }
                }
            ],
            replicaSets: [
                {
                    name: 'grafana-6f6d8c4c7f',
                    desired: '1',
                    current: '1',
                    ready: '1',
                    age: '18d',
                    containers: ['grafana'],
                    images: ['docker.io/grafana/grafana:10.4.1'],
                    selector: 'app=grafana',
                    creationTimestamp: '2024-06-27T13:09:30Z',
                    owner: { kind: 'Deployment', name: 'grafana' }
                },
                {
                    name: 'alertmanager-6b9ddf8c7c',
                    desired: '1',
                    current: '1',
                    ready: '1',
                    age: '26d',
                    containers: ['alertmanager', 'config-reloader'],
                    images: ['quay.io/prometheus/alertmanager:v0.26.0', 'quay.io/prometheus-operator/prometheus-config-reloader:v0.70.0'],
                    selector: 'app=alertmanager',
                    creationTimestamp: '2024-06-19T04:04:30Z',
                    owner: { kind: 'Deployment', name: 'alertmanager' }
                }
            ],
            statefulSets: [
                {
                    name: 'prometheus',
                    ready: '2/2',
                    age: '240d',
                    service: 'prometheus',
                    selector: 'app=prometheus',
                    labels: { app: 'prometheus', tier: 'metrics' },
                    creationTimestamp: '2023-11-17T10:05:00Z',
                    updateStrategy: 'RollingUpdate',
                    containers: ['prometheus', 'config-reloader'],
                    images: ['quay.io/prometheus/prometheus:v2.52.0', 'quay.io/prometheus-operator/prometheus-config-reloader:v0.70.0'],
                    volumeClaims: [
                        { name: 'prometheus-data', storageClass: 'fast-ssd', size: '200Gi' }
                    ],
                    replicas: { desired: 2, ready: 2, current: 2 }
                },
                {
                    name: 'loki',
                    ready: '1/1',
                    age: '180d',
                    service: 'loki',
                    selector: 'app=loki',
                    labels: { app: 'loki', tier: 'logs' },
                    creationTimestamp: '2024-01-16T09:20:00Z',
                    updateStrategy: 'RollingUpdate',
                    containers: ['loki'],
                    images: ['grafana/loki:2.9.3'],
                    volumeClaims: [
                        { name: 'data', storageClass: 'fast-ssd', size: '500Gi' }
                    ],
                    replicas: { desired: 1, ready: 1, current: 1 }
                }
            ],
            services: [
                { name: 'grafana', type: 'ClusterIP', clusterIP: '10.98.19.10', externalIP: '<none>', ports: '3000/TCP', age: '240d', selector: 'app=grafana' },
                { name: 'alertmanager', type: 'ClusterIP', clusterIP: '10.98.45.30', externalIP: '<none>', ports: '9093/TCP', age: '220d', selector: 'app=alertmanager' },
                { name: 'prometheus', type: 'ClusterIP', clusterIP: '10.98.60.15', externalIP: '<none>', ports: '9090/TCP', age: '240d', selector: 'app=prometheus' },
                { name: 'loki', type: 'ClusterIP', clusterIP: '10.98.80.40', externalIP: '<none>', ports: '3100/TCP', age: '180d', selector: 'app=loki' }
            ],
            daemonSets: [
                {
                    name: 'node-exporter',
                    desired: '2',
                    current: '2',
                    ready: '2',
                    upToDate: '2',
                    available: '2',
                    age: '300d',
                    nodeSelector: '',
                    creationTimestamp: '2023-09-19T04:22:00Z',
                    containers: ['node-exporter'],
                    images: ['quay.io/prometheus/node-exporter:v1.7.0'],
                    selector: 'app=node-exporter',
                    tolerations: ['node-role.kubernetes.io/master:NoSchedule']
                }
            ],
            cronJobs: [
                {
                    name: 'metrics-compaction',
                    schedule: '0 4 * * *',
                    suspend: 'False',
                    active: '0',
                    lastSchedule: '2024-07-14T04:00:00Z',
                    age: '210d',
                    concurrencyPolicy: 'Replace',
                    successfulHistoryLimit: 1,
                    failedHistoryLimit: 1
                }
            ],
            jobs: [
                {
                    name: 'metrics-compaction-41029311',
                    completions: '1/1',
                    duration: '1m12s',
                    age: '1d',
                    startTime: '2024-07-14T04:00:01Z',
                    completionTime: '2024-07-14T04:01:13Z',
                    podSelector: 'job-name=metrics-compaction-41029311'
                }
            ],
            configMaps: [
                { name: 'grafana-dashboards', data: '24', age: '240d', creationTimestamp: '2023-11-20T10:10:00Z', dataEntries: { 'services.json': '{"panels":12}', 'applications.json': '{"panels":8}' } },
                { name: 'prometheus-rules', data: '12', age: '220d', creationTimestamp: '2023-12-05T08:45:00Z', dataEntries: { 'alerts.yml': 'groups: []' } },
                { name: 'loki-config', data: '4', age: '180d', creationTimestamp: '2024-01-16T09:20:00Z', dataEntries: { 'loki.yaml': 'auth_enabled: false' } }
            ]
        }
    }
};

const RESOURCE_ALIAS = {
    pods: 'pods',
    pod: 'pods',
    po: 'pods',
    deployments: 'deployments',
    deployment: 'deployments',
    deploy: 'deployments',
    replicasets: 'replicaSets',
    replicaset: 'replicaSets',
    rs: 'replicaSets',
    statefulsets: 'statefulSets',
    statefulset: 'statefulSets',
    sts: 'statefulSets',
    services: 'services',
    service: 'services',
    svc: 'services',
    daemonsets: 'daemonSets',
    daemonset: 'daemonSets',
    ds: 'daemonSets',
    cronjobs: 'cronJobs',
    cronjob: 'cronJobs',
    cj: 'cronJobs',
    jobs: 'jobs',
    job: 'jobs',
    configmaps: 'configMaps',
    configmap: 'configMaps',
    cm: 'configMaps',
    namespaces: 'namespaces',
    namespace: 'namespaces',
    ns: 'namespaces',
    nodes: 'nodes',
    node: 'nodes',
    no: 'nodes',
    all: 'all'
};

const RESOURCE_KIND_PREFIX = {
    pods: 'pod',
    deployments: 'deployment.apps',
    replicaSets: 'replicaset.apps',
    statefulSets: 'statefulset.apps',
    services: 'service',
    daemonSets: 'daemonset.apps',
    cronJobs: 'cronjob.batch',
    jobs: 'job.batch',
    configMaps: 'configmap'
};

const RESOURCE_SINGULAR = {
    pods: 'pod',
    deployments: 'deployment',
    replicaSets: 'replicaset',
    statefulSets: 'statefulset',
    services: 'service',
    daemonSets: 'daemonset',
    cronJobs: 'cronjob',
    jobs: 'job',
    configMaps: 'configmap',
    namespaces: 'namespace',
    nodes: 'node'
};

const SUPPORTED_RESOURCES = new Set(['pods', 'deployments', 'replicaSets', 'statefulSets', 'services', 'daemonSets', 'cronJobs', 'jobs', 'configMaps']);

function normalizeResource(resourceToken) {
    if (!resourceToken) return '';
    const lowered = resourceToken.toLowerCase();
    return RESOURCE_ALIAS[lowered] || lowered;
}

function parseKubectlArgs(args) {
    let namespace = 'default';
    let allNamespaces = false;
    const positional = [];
    const options = { wide: false };

    for (let i = 0; i < args.length; i++) {
        const token = args[i];
        if (token === '-n' || token === '--namespace') {
            const value = args[i + 1];
            if (!value) {
                return { error: 'error: namespace requires a value' };
            }
            namespace = value;
            i++;
        } else if (token.startsWith('-n=')) {
            namespace = token.split('=')[1];
        } else if (token.startsWith('--namespace=')) {
            namespace = token.split('=')[1];
        } else if (token === '-A' || token === '--all-namespaces') {
            allNamespaces = true;
            namespace = null;
        } else if ((token === '-o' || token === '--output') && args[i + 1] === 'wide') {
            options.wide = true;
            i++;
        } else if (token === '-o=wide' || token === '--output=wide') {
            options.wide = true;
        } else {
            positional.push(token);
        }
    }

    return { namespace, allNamespaces, positional, options };
}

function handleKubectlCommand(input) {
    const tokens = input.trim().split(/\s+/);
    tokens.shift(); // remove kubectl

    const parsed = parseKubectlArgs(tokens);
    if (parsed.error) return parsed.error;

    const { namespace, allNamespaces, positional, options } = parsed;

    if (!positional.length) {
        return "error: you must specify a command, e.g. 'kubectl get pods'";
    }

    const verb = positional[0];

    if (verb === 'get') {
        if (positional.length < 2) {
            return 'error: resource type required for kubectl get';
        }
        const resource = positional[1];
        const rest = positional.slice(2);
        return handleKubectlGet(resource, rest, { namespace, allNamespaces, options });
    } else if (verb === 'describe') {
        if (positional.length < 3) {
            return 'error: resource type and name required for kubectl describe';
        }
        const resource = positional[1];
        const name = positional[2];
        const rest = positional.slice(3);
        return handleKubectlDescribe(resource, name, rest, { namespace, allNamespaces });
    } else if (verb === 'cluster-info') {
        return `Kubernetes control plane is running at https://resume-cluster.local\nCoreDNS is running at https://resume-cluster.local/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\nTo further explore the simulated cluster try: kubectl get namespaces`;
    }

    return `error: kubectl command '${verb}' is not implemented in the resume cluster`;
}

function handleKubectlGet(resourceToken, rest, context) {
    const resource = normalizeResource(resourceToken);

    if (resource === 'namespaces') {
        return formatNamespaces();
    }

    if (resource === 'nodes') {
        return formatNodes(context.options?.wide);
    }

    if (resource === 'all') {
        return formatGetAll(context);
    }

    const dataKey = RESOURCE_ALIAS[resource] || resource;
    if (!SUPPORTED_RESOURCES.has(dataKey) || !fakeCluster.namespaces) {
        return `error: resource type '${resourceToken}' is not supported in the resume cluster`;
    }

    const names = rest.filter(token => !token.startsWith('-'));

    if (context.allNamespaces) {
        const rows = [];
        for (const [nsName, ns] of Object.entries(fakeCluster.namespaces)) {
            const list = ns[dataKey] || [];
            list.forEach(item => {
                rows.push({ namespace: nsName, ...item });
            });
        }
        let filteredRows = rows;
        if (names.length) {
            const targets = new Set(names);
            filteredRows = rows.filter(item => targets.has(item.name));
            if (!filteredRows.length) {
                const singular = RESOURCE_SINGULAR[dataKey] || dataKey;
                return `Error from server (NotFound): ${singular}s "${names[0]}" not found`;
            }
        }
        if (!filteredRows.length) {
            return 'No resources found';
        }
        return formatResourceTable(resource, filteredRows, { allNamespaces: true, wide: context.options?.wide });
    }

    const namespaceName = context.namespace || 'default';
    const namespaceData = fakeCluster.namespaces[namespaceName];
    if (!namespaceData) {
        return `Error from server (NotFound): namespaces "${namespaceName}" not found`;
    }

    let resources = namespaceData[dataKey] || [];
    if (names.length) {
        const targets = new Set(names);
        resources = resources.filter(item => targets.has(item.name));
        if (!resources.length) {
            const singular = RESOURCE_SINGULAR[dataKey] || dataKey;
            return `Error from server (NotFound): ${singular}s "${names[0]}" not found`;
        }
    }

    if (!resources.length) {
        return `No resources found in ${namespaceName} namespace.`;
    }

    return formatResourceTable(resource, resources, { namespace: namespaceName, wide: context.options?.wide });
}

function formatGetAll(context) {
    const sections = [];
    const resourceOrder = ['pods', 'services', 'deployments', 'replicaSets', 'statefulSets', 'daemonSets', 'cronJobs', 'jobs', 'configMaps'];

    for (const resource of resourceOrder) {
        const data = collectResources(resource, context);
        if (data?.error) {
            return data.error;
        }
        if (data?.rows?.length) {
            const title = resource === 'replicaSets' ? 'ReplicaSets' : resource.charAt(0).toUpperCase() + resource.slice(1);
            const table = formatResourceTable(resource, data.rows, { allNamespaces: context.allNamespaces, wide: context.options?.wide, withKindPrefix: true });
            if (table) {
                sections.push(`${title}\n${table}`);
            }
        }
    }

    if (!sections.length) {
        if (context.allNamespaces) {
            return 'No resources found';
        }
        const namespaceName = context.namespace || 'default';
        return `No resources found in ${namespaceName} namespace.`;
    }

    return sections.join('\n\n');
}

function collectResources(resource, context) {
    const dataKey = RESOURCE_ALIAS[resource] || resource;

    if (!SUPPORTED_RESOURCES.has(dataKey)) {
        return null;
    }

    if (context.allNamespaces) {
        const rows = [];
        for (const [nsName, ns] of Object.entries(fakeCluster.namespaces)) {
            const list = ns[dataKey] || [];
            list.forEach(item => rows.push({ namespace: nsName, ...item }));
        }
        return { rows };
    }

    const namespaceName = context.namespace || 'default';
    const namespaceData = fakeCluster.namespaces[namespaceName];
    if (!namespaceData) {
        return { error: `Error from server (NotFound): namespaces "${namespaceName}" not found` };
    }

    const rows = namespaceData[dataKey] || [];
    return { rows };
}

function formatNamespaces() {
    const columns = [
        { header: 'NAME', field: 'name' },
        { header: 'STATUS', field: 'status' },
        { header: 'AGE', field: 'age' }
    ];

    const rows = Object.entries(fakeCluster.namespaces).map(([name, ns]) => ({ name, status: ns.status, age: ns.age }));
    return formatTable(columns, rows);
}

function formatNodes(wide) {
    const columns = [
        { header: 'NAME', field: 'name' },
        { header: 'STATUS', field: 'status' },
        { header: 'ROLES', field: 'roles' },
        { header: 'AGE', field: 'age' },
        { header: 'VERSION', field: 'version' }
    ];

    if (wide) {
        columns.push(
            { header: 'INTERNAL-IP', field: 'internalIP' },
            { header: 'OS-IMAGE', field: 'osImage' },
            { header: 'KERNEL-VERSION', field: 'kernelVersion' },
            { header: 'CONTAINER-RUNTIME', field: 'containerRuntime' }
        );
    }

    return formatTable(columns, fakeCluster.nodes);
}

function formatResourceTable(resource, resources, options = {}) {
    const kind = RESOURCE_ALIAS[resource] || resource;
    const withNamespace = options.allNamespaces;
    const wide = options.wide;
    const withKindPrefix = options.withKindPrefix;

    const columns = [];
    if (withNamespace) {
        columns.push({ header: 'NAMESPACE', field: 'namespace' });
    }

    const rows = resources.map(item => ({ ...item }));

    switch (kind) {
        case 'pods':
            columns.push(
                { header: 'NAME', field: 'name' },
                { header: 'READY', field: 'ready' },
                { header: 'STATUS', field: 'status' },
                { header: 'RESTARTS', field: 'restarts' },
                { header: 'AGE', field: 'age' }
            );
            if (wide) {
                columns.push(
                    { header: 'IP', field: 'ip' },
                    { header: 'NODE', field: 'node' },
                    { header: 'NOMINATED NODE', field: 'nominatedNode' },
                    { header: 'READINESS GATES', field: 'readinessGates' }
                );
            }
            break;
        case 'deployments':
            columns.push(
                { header: 'NAME', field: 'name' },
                { header: 'READY', field: 'ready' },
                { header: 'UP-TO-DATE', field: 'upToDate' },
                { header: 'AVAILABLE', field: 'available' },
                { header: 'AGE', field: 'age' }
            );
            if (wide) {
                columns.push(
                    { header: 'CONTAINERS', field: item => (item.containers || []).join(',') },
                    { header: 'IMAGES', field: item => (item.images || []).join(',') },
                    { header: 'SELECTOR', field: 'selector' }
                );
            }
            break;
        case 'replicaSets':
            columns.push(
                { header: 'NAME', field: 'name' },
                { header: 'DESIRED', field: 'desired' },
                { header: 'CURRENT', field: 'current' },
                { header: 'READY', field: 'ready' },
                { header: 'AGE', field: 'age' }
            );
            if (wide) {
                columns.push(
                    { header: 'CONTAINERS', field: item => (item.containers || []).join(',') },
                    { header: 'IMAGES', field: item => (item.images || []).join(',') }
                );
            }
            break;
        case 'statefulSets':
            columns.push(
                { header: 'NAME', field: 'name' },
                { header: 'READY', field: 'ready' },
                { header: 'AGE', field: 'age' }
            );
            if (wide) {
                columns.push(
                    { header: 'CONTAINERS', field: item => (item.containers || []).join(',') },
                    { header: 'IMAGES', field: item => (item.images || []).join(',') },
                    { header: 'SERVICE', field: 'service' }
                );
            }
            break;
        case 'services':
            columns.push(
                { header: 'NAME', field: 'name' },
                { header: 'TYPE', field: 'type' },
                { header: 'CLUSTER-IP', field: 'clusterIP' },
                { header: 'EXTERNAL-IP', field: 'externalIP' },
                { header: 'PORT(S)', field: 'ports' },
                { header: 'AGE', field: 'age' }
            );
            if (wide) {
                columns.push({ header: 'SELECTOR', field: 'selector' });
            }
            break;
        case 'daemonSets':
            columns.push(
                { header: 'NAME', field: 'name' },
                { header: 'DESIRED', field: 'desired' },
                { header: 'CURRENT', field: 'current' },
                { header: 'READY', field: 'ready' },
                { header: 'UP-TO-DATE', field: 'upToDate' },
                { header: 'AVAILABLE', field: 'available' },
                { header: 'AGE', field: 'age' }
            );
            if (wide) {
                columns.push(
                    { header: 'NODE SELECTOR', field: 'nodeSelector' },
                    { header: 'CONTAINERS', field: item => (item.containers || []).join(',') },
                    { header: 'IMAGES', field: item => (item.images || []).join(',') }
                );
            }
            break;
        case 'cronJobs':
            columns.push(
                { header: 'NAME', field: 'name' },
                { header: 'SCHEDULE', field: 'schedule' },
                { header: 'SUSPEND', field: 'suspend' },
                { header: 'ACTIVE', field: 'active' },
                { header: 'LAST SCHEDULE', field: 'lastSchedule' },
                { header: 'AGE', field: 'age' }
            );
            break;
        case 'jobs':
            columns.push(
                { header: 'NAME', field: 'name' },
                { header: 'COMPLETIONS', field: 'completions' },
                { header: 'DURATION', field: 'duration' },
                { header: 'AGE', field: 'age' }
            );
            break;
        case 'configMaps':
            columns.push(
                { header: 'NAME', field: 'name' },
                { header: 'DATA', field: 'data' },
                { header: 'AGE', field: 'age' }
            );
            break;
        default:
            columns.push({ header: 'NAME', field: 'name' });
            break;
    }

    if (withKindPrefix) {
        const prefix = RESOURCE_KIND_PREFIX[kind];
        if (prefix) {
            rows.forEach(row => {
                row.name = `${prefix}/${row.name}`;
            });
        }
    }

    return formatTable(columns, rows);
}

function formatTable(columns, rows) {
    if (!rows.length) return '';

    const processedColumns = columns.map(col => ({
        header: col.header,
        accessor: typeof col.field === 'function' ? (row => String(col.field(row) ?? '')) : (row => String(row[col.field] ?? ''))
    }));

    const widths = processedColumns.map(col => Math.max(
        col.header.length,
        ...rows.map(row => {
            const value = col.accessor(row);
            return value.length;
        })
    ));

    const lines = [];
    lines.push(processedColumns.map((col, idx) => col.header.padEnd(widths[idx])).join('  '));

    rows.forEach(row => {
        const line = processedColumns.map((col, idx) => col.accessor(row).padEnd(widths[idx])).join('  ');
        lines.push(line);
    });

    return lines.join('\n');
}

function handleKubectlDescribe(resourceToken, name, rest, context) {
    const resource = normalizeResource(resourceToken);

    if (resource === 'nodes') {
        const node = fakeCluster.nodes.find(n => n.name === name);
        if (!node) {
            return `Error from server (NotFound): nodes "${name}" not found`;
        }
        return describeNode(node);
    }

    if (resource === 'namespaces') {
        const namespaceData = fakeCluster.namespaces[name];
        if (!namespaceData) {
            return `Error from server (NotFound): namespaces "${name}" not found`;
        }
        return describeNamespace(name, namespaceData);
    }

    const dataKey = RESOURCE_ALIAS[resource] || resource;
    if (!SUPPORTED_RESOURCES.has(dataKey)) {
        return `error: resource type '${resourceToken}' is not supported in describe`;
    }

    const namespaceName = context.allNamespaces ? null : (context.namespace || 'default');
    const lookup = findResource(dataKey, name, namespaceName, context.allNamespaces);

    if (lookup.error) return lookup.error;

    const { item, namespace } = lookup;

    switch (dataKey) {
        case 'pods':
            return describePod(item, namespace);
        case 'deployments':
            return describeDeployment(item, namespace);
        case 'replicaSets':
            return describeReplicaSet(item, namespace);
        case 'statefulSets':
            return describeStatefulSet(item, namespace);
        case 'services':
            return describeService(item, namespace);
        case 'daemonSets':
            return describeDaemonSet(item, namespace);
        case 'cronJobs':
            return describeCronJob(item, namespace);
        case 'jobs':
            return describeJob(item, namespace);
        case 'configMaps':
            return describeConfigMap(item, namespace);
        default:
            return `describe is not implemented for resource type '${resourceToken}'`;
    }
}

function findResource(dataKey, name, namespaceName, allNamespaces) {
    if (allNamespaces) {
        let found = null;
        let foundNamespace = null;
        for (const [nsName, ns] of Object.entries(fakeCluster.namespaces)) {
            const item = (ns[dataKey] || []).find(entry => entry.name === name);
            if (item) {
                if (found) {
                    return { error: `error: multiple resources named ${name} found; please specify a namespace` };
                }
                found = item;
                foundNamespace = nsName;
            }
        }
        if (!found) {
            const singular = RESOURCE_SINGULAR[dataKey] || dataKey;
            return { error: `Error from server (NotFound): ${singular}s "${name}" not found` };
        }
        return { item: found, namespace: foundNamespace };
    }

    const targetNamespace = namespaceName || 'default';
    const namespaceData = fakeCluster.namespaces[targetNamespace];
    if (!namespaceData) {
        return { error: `Error from server (NotFound): namespaces "${targetNamespace}" not found` };
    }

    const item = (namespaceData[dataKey] || []).find(entry => entry.name === name);
    if (!item) {
        const singular = RESOURCE_SINGULAR[dataKey] || dataKey;
        return { error: `Error from server (NotFound): ${singular}s "${name}" not found` };
    }

    return { item, namespace: targetNamespace };
}

function describePod(pod, namespace) {
    const lines = [];
    lines.push(`Name:         ${pod.name}`);
    lines.push(`Namespace:    ${namespace}`);
    lines.push(`Priority:     0`);
    lines.push(`Node:         ${pod.node}`);
    lines.push(`Start Time:   ${pod.startTime || '<unknown>'}`);
    lines.push(`Labels:       ${formatKeyValue(pod.labels)}`);
    lines.push(`Annotations:  ${formatKeyValue(pod.annotations)}`);
    lines.push(`Status:       ${pod.status}`);
    lines.push(`IP:           ${pod.ip || '<none>'}`);
    lines.push(`IPs:          ${pod.ip || '<none>'}`);
    lines.push(`Controlled By:${pod.owner ? ` ${pod.owner.kind}/${pod.owner.name}` : ' <none>'}`);
    lines.push('Containers:');
    if (!pod.containers || !pod.containers.length) {
        lines.push('  <none>');
    }
    (pod.containers || []).forEach(container => {
        lines.push(`  ${container.name}:`);
        lines.push(`    Container ID:   containerd://mocked-${container.name}`);
        lines.push(`    Image:          ${container.image}`);
        lines.push(`    Port:           ${(container.ports || []).join(', ') || '<none>'}`);
        lines.push(`    Limits:         ${formatResources(container.resources?.limits)}`);
        lines.push(`    Requests:       ${formatResources(container.resources?.requests)}`);
        if (container.volumeMounts) {
            lines.push('    Mounts:');
            container.volumeMounts.forEach(mount => {
                lines.push(`      ${mount.mountPath} from ${mount.name} (${mount.readOnly ? 'ro' : 'rw'})`);
            });
        }
        if (container.env) {
            lines.push('    Environment:');
            container.env.forEach(env => {
                lines.push(`      ${env.name}:  ${env.value}`);
            });
        }
    });
    lines.push('Conditions:');
    if (pod.conditions && pod.conditions.length) {
        lines.push('  Type              Status  Last Transition Time');
        lines.push('  ----              ------  --------------------');
        (pod.conditions || []).forEach(condition => {
            lines.push(`  ${pad(condition.type, 18)} ${pad(condition.status, 6)} ${condition.lastTransitionTime || '<unknown>'}`);
        });
    } else {
        lines.push('  <none>');
    }
    if (pod.volumes?.length) {
        lines.push('Volumes:');
        pod.volumes.forEach(volume => {
            lines.push(`  ${volume.name}`);
            lines.push(`    Type:   ${volume.type}`);
            lines.push(`    Source: ${volume.source}`);
        });
    }
    if (pod.events && pod.events.length) {
        lines.push('Events:');
        lines.push('  Type    Reason             Age   From                     Message');
        lines.push('  ----    ------             ---   ----                     -------');
        pod.events.forEach(event => {
            lines.push(`  ${pad(event.type, 7)} ${pad(event.reason, 18)} ${pad(event.age, 5)} ${pad(event.from, 23)} ${event.message}`);
        });
    } else {
        lines.push('Events:   <none>');
    }
    return lines.join('\n');
}

function describeDeployment(deployment, namespace) {
    const lines = [];
    lines.push(`Name:                   ${deployment.name}`);
    lines.push(`Namespace:              ${namespace}`);
    lines.push(`CreationTimestamp:      ${deployment.creationTimestamp}`);
    lines.push(`Labels:                 ${formatKeyValue(deployment.labels)}`);
    lines.push(`Annotations:            ${formatKeyValue(deployment.annotations)}`);
    lines.push(`Selector:               ${deployment.selector}`);
    lines.push(`Replicas:               ${deployment.replicas.desired} desired | ${deployment.replicas.updated} updated | ${deployment.replicas.ready} ready | ${deployment.replicas.available} available`);
    lines.push(`StrategyType:           ${deployment.strategy}`);
    if (deployment.rollout) {
        lines.push(`RollingUpdateStrategy:  maxUnavailable=${deployment.rollout.maxUnavailable}, maxSurge=${deployment.rollout.maxSurge}`);
    }
    lines.push('Pod Template:');
    lines.push(`  Labels:      ${formatKeyValue(deployment.podLabels || deployment.labels)}`);
    lines.push(`  Containers:  ${(deployment.containers || []).join(', ') || '<none>'}`);
    lines.push(`  Images:      ${(deployment.images || []).join(', ') || '<none>'}`);
    if (deployment.conditions?.length) {
        lines.push('Conditions:');
        lines.push('  Type          Status  Reason                    Message');
        lines.push('  ----          ------  ------                    -------');
        deployment.conditions.forEach(condition => {
            lines.push(`  ${pad(condition.type, 13)} ${pad(condition.status, 7)} ${pad(condition.reason || '', 25)} ${condition.message || ''}`);
        });
    }
    if (deployment.events?.length) {
        lines.push('Events:');
        lines.push('  Type    Reason             Age   From                     Message');
        lines.push('  ----    ------             ---   ----                     -------');
        deployment.events.forEach(event => {
            lines.push(`  ${pad(event.type, 7)} ${pad(event.reason, 18)} ${pad(event.age, 5)} ${pad(event.from, 23)} ${event.message}`);
        });
    }
    return lines.join('\n');
}

function describeReplicaSet(replicaSet, namespace) {
    const lines = [];
    lines.push(`Name:           ${replicaSet.name}`);
    lines.push(`Namespace:      ${namespace}`);
    lines.push(`Selector:       ${replicaSet.selector}`);
    lines.push(`Labels:         ${formatKeyValue(replicaSet.labels)}`);
    lines.push(`Annotations:    <none>`);
    lines.push(`Replicas:       Desired ${replicaSet.desired} | Current ${replicaSet.current} | Ready ${replicaSet.ready}`);
    if (replicaSet.owner) {
        lines.push(`Controlled By:  ${replicaSet.owner.kind}/${replicaSet.owner.name}`);
    }
    return lines.join('\n');
}

function describeStatefulSet(statefulSet, namespace) {
    const lines = [];
    lines.push(`Name:               ${statefulSet.name}`);
    lines.push(`Namespace:          ${namespace}`);
    lines.push(`CreationTimestamp:  ${statefulSet.creationTimestamp}`);
    lines.push(`Selector:           ${statefulSet.selector}`);
    lines.push(`Labels:             ${formatKeyValue(statefulSet.labels)}`);
    lines.push(`Replicas:           ${statefulSet.replicas.ready} ready / ${statefulSet.replicas.desired} desired`);
    lines.push(`Update Strategy:    ${statefulSet.updateStrategy}`);
    lines.push('Pod Template:');
    lines.push(`  Labels:  ${formatKeyValue(statefulSet.labels)}`);
    lines.push(`  Containers: ${(statefulSet.containers || []).join(', ')}`);
    if (statefulSet.volumeClaims?.length) {
        lines.push('Volume Claims:');
        statefulSet.volumeClaims.forEach(claim => {
            lines.push(`  Name: ${claim.name}  StorageClass: ${claim.storageClass}  Size: ${claim.size}`);
        });
    }
    return lines.join('\n');
}

function describeService(service, namespace) {
    const lines = [];
    lines.push(`Name:              ${service.name}`);
    lines.push(`Namespace:         ${namespace}`);
    lines.push(`Labels:            ${formatKeyValue(service.labels)}`);
    lines.push(`Annotations:       <none>`);
    lines.push(`Selector:          ${service.selector || '<none>'}`);
    lines.push(`Type:              ${service.type}`);
    lines.push(`IP Families:       IPv4`);
    lines.push(`IP:                ${service.clusterIP}`);
    lines.push(`Port:              ${service.ports}`);
    return lines.join('\n');
}

function describeDaemonSet(daemonSet, namespace) {
    const lines = [];
    lines.push(`Name:                       ${daemonSet.name}`);
    lines.push(`Namespace:                  ${namespace}`);
    lines.push(`CreationTimestamp:          ${daemonSet.creationTimestamp}`);
    lines.push(`Labels:                     ${formatKeyValue(daemonSet.labels)}`);
    lines.push(`Annotations:                <none>`);
    lines.push(`Selector:                   ${daemonSet.selector || '<none>'}`);
    lines.push(`Node-Selector:              ${daemonSet.nodeSelector || '<none>'}`);
    lines.push(`Tolerations:                ${(daemonSet.tolerations || []).join(', ') || '<none>'}`);
    lines.push(`Desired Number of Nodes Scheduled: ${daemonSet.desired}`);
    lines.push(`Current Number of Nodes Scheduled: ${daemonSet.current}`);
    lines.push(`Number of Nodes Ready:            ${daemonSet.ready}`);
    return lines.join('\n');
}

function describeCronJob(cronJob, namespace) {
    const lines = [];
    lines.push(`Name:                          ${cronJob.name}`);
    lines.push(`Namespace:                     ${namespace}`);
    lines.push(`Schedule:                      ${cronJob.schedule}`);
    lines.push(`Concurrency Policy:            ${cronJob.concurrencyPolicy}`);
    lines.push(`Suspend:                       ${cronJob.suspend}`);
    lines.push(`Successful Job History Limit:  ${cronJob.successfulHistoryLimit}`);
    lines.push(`Failed Job History Limit:      ${cronJob.failedHistoryLimit}`);
    lines.push(`Last Schedule Time:            ${cronJob.lastSchedule}`);
    return lines.join('\n');
}

function describeJob(job, namespace) {
    const lines = [];
    lines.push(`Name:               ${job.name}`);
    lines.push(`Namespace:          ${namespace}`);
    lines.push(`Selector:           ${job.podSelector}`);
    lines.push(`Completions:        ${job.completions}`);
    lines.push(`Start Time:         ${job.startTime}`);
    lines.push(`Completion Time:    ${job.completionTime}`);
    lines.push(`Duration:           ${job.duration}`);
    return lines.join('\n');
}

function describeConfigMap(configMap, namespace) {
    const lines = [];
    lines.push(`Name:         ${configMap.name}`);
    lines.push(`Namespace:    ${namespace}`);
    lines.push(`Labels:       ${formatKeyValue(configMap.labels)}`);
    lines.push(`Annotations:  <none>`);
    lines.push(`Data:         ${configMap.data}`);
    lines.push('');
    Object.entries(configMap.dataEntries || {}).forEach(([key, value]) => {
        lines.push(`  ${key}:`);
        lines.push(`    ${value}`);
    });
    return lines.join('\n');
}

function describeNode(node) {
    const lines = [];
    lines.push(`Name:               ${node.name}`);
    lines.push(`Roles:              ${node.roles}`);
    lines.push(`Labels:             kubernetes.io/arch=${node.architecture}`);
    lines.push(`CreationTimestamp:  ${node.creationTimestamp}`);
    lines.push('Addresses:');
    node.addresses.forEach(address => {
        lines.push(`  ${address.type}: ${address.address}`);
    });
    lines.push('Conditions:');
    node.conditions.forEach(condition => {
        lines.push(`  Type:   ${condition.type}`);
        lines.push(`  Status: ${condition.status}`);
        lines.push(`  LastHeartbeatTime:  ${condition.lastHeartbeatTime}`);
        lines.push(`  LastTransitionTime: ${condition.lastTransitionTime}`);
        lines.push(`  Reason: ${condition.reason}`);
        lines.push(`  Message: ${condition.message}`);
        lines.push('');
    });
    lines.push('Capacity:');
    lines.push(`  cpu:                ${node.capacity.cpu}`);
    lines.push(`  memory:             ${node.capacity.memory}`);
    lines.push(`  pods:               ${node.capacity.pods}`);
    lines.push('Allocatable:');
    lines.push(`  cpu:                ${node.allocatable.cpu}`);
    lines.push(`  memory:             ${node.allocatable.memory}`);
    lines.push(`  pods:               ${node.allocatable.pods}`);
    return lines.join('\n');
}

function describeNamespace(name, ns) {
    const lines = [];
    lines.push(`Name:         ${name}`);
    lines.push(`Status:       ${ns.status}`);
    lines.push(`Labels:       ${formatKeyValue(ns.labels)}`);
    lines.push(`Annotations:  ${formatKeyValue(ns.annotations)}`);
    lines.push(`Age:          ${ns.age}`);
    return lines.join('\n');
}

function formatKeyValue(obj) {
    if (!obj || Object.keys(obj).length === 0) return '<none>';
    return Object.entries(obj).map(([k, v]) => `${k}=${v}`).join(', ');
}

function formatResources(resources) {
    if (!resources) return 'cpu: 0  memory: 0';
    const cpu = resources.cpu || '0';
    const memory = resources.memory || '0';
    return `cpu: ${cpu}  memory: ${memory}`;
}

function pad(value, length) {
    const str = String(value || '');
    if (str.length >= length) return str;
    return str + ' '.repeat(length - str.length);
}