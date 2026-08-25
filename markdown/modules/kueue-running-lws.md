{%- set _mod_docs_content_type = "PROCEDURE" %}
# Running {{ lws_operator }} with {{ kueue_name }} {id="kueue-running-lws_{{ context }}"}

You can add and run the {{ lws_operator }} to your existing frameworks. {._abstract}

**Prerequisites**

*   {{ kueue_name }} using the {{ kueue_op }} is installed.
*   {{ lws_operator }} and Operand are installed.
*   The {{ cert_manager_operator }} is installed.
*   The `namespace` where `LeaderWorkerSet` will be created is labeled using `kueue.openshift.io/managed=true`.
*   Ensure that the following objects have been configured:
    *   `ClusterQueue`
    *   `ResourceFlavor`
    *   `LocalQueue`
    *   `Namespace`

**Procedure**

1.  Create a file named `leaderworkerset.yaml`.
    ```yaml title="Example of a LeaderWorkerSet"
    apiVersion: leaderworkerset.x-k8s.io/v1
    kind: LeaderWorkerSet
    metadata:
      generation: 1
      name: my-lws
      namespace: my-namespace
    spec:
      leaderWorkerTemplate:
        leaderTemplate:
          metadata: {}
          spec:
            containers:
            - image: nginxinc/nginx-unprivileged:1.27
              name: leader
              resources: {}
        restartPolicy: RecreateGroupOnPodRestart
        size: 3
        workerTemplate:
          metadata: {}
          spec:
            containers:
            - image: nginxinc/nginx-unprivileged:1.27
              name: worker
              ports:
              - containerPort: 8080
                protocol: TCP
              resources: {}
      networkConfig:
        subdomainPolicy: Shared
      replicas: 2
      rolloutStrategy:
        rollingUpdateConfiguration:
          maxSurge: 1
          maxUnavailable: 1
        type: RollingUpdate
      startupPolicy: LeaderCreated
    ```
1.  Specify the target local queue in the `metadata.labels` section of the `LeaderWorkerSet` configuration.
    ```yaml
    metadata:
      labels:
        kueue.x-k8s.io/queue-name: user-queue
    ```
1.  Apply the leader worker set configuration by running the following command: 
    ```terminal
    $ oc apply -f leaderworkerset.yaml
    ```