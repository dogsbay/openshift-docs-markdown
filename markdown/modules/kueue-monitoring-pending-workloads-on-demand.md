{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitoring pending workloads on demand {id="monitoring-pending-workloads-on-demand_{{ context }}"}

To test the monitoring of pending workloads, you must correctly configure both the `ClusterQueue` and the `LocalQueue` resources. After that, you can create jobs on that `LocalQueue`. Kueue manages the workload object created from the job so, when a job is submitted and saturates the `ClusterQueue`, its corresponding workloads can be seen in the list of pending workloads. {._abstract}

**Prerequisites**

*   You have cluster administrator permissions.
*   The {{ kueue_name }} Operator is installed on your cluster, and you have created a `Kueue` custom resource (CR).
*   You have installed the {{ oc_first }}. 
*   The {{ oc_first }} has communication with your cluster.

The following procedure tells you how to install and test workload monitoring.

**Procedure**

1.  Create the assets by running the following command:
    ```terminal
    cat <<EOF| oc create -f -
    ---
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: ResourceFlavor
    metadata:
      name: "default-flavor"
    ---
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: ClusterQueue
    metadata:
      name: "cluster-queue"
    spec:
      namespaceSelector: {} # match all.
      resourceGroups:
      - coveredResources: ["cpu", "memory"]
        flavors:
        - name: "default-flavor"
          resources:
          - name: "cpu"
            nominalQuota: 9
          - name: "memory"
            nominalQuota: 36Gi
    ---
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: LocalQueue
    metadata:
      namespace: "default"
      name: "user-queue"
    spec:
      clusterQueue: "cluster-queue"
    ---
    EOF
    ```
1.  Create the following file with the job manifest:
    ```terminal
    cat >> job.yaml << EOF
    apiVersion: batch/v1
    kind: Job
    metadata:
      generateName: sample-job-
      namespace: default
      labels:
        kueue.x-k8s.io/queue-name: user-queue
    spec:
      parallelism: 3
      completions: 3
      suspend: true
      template:
        spec:
          containers:
          - name: <example-job>
            image: registry.k8s.io/e2e-test-images/agnhost:2.53
            command: [ "/bin/sh" ]
            args: [ "-c", "sleep 60" ]
            resources:
              requests:
                cpu: "1"
                memory: "200Mi"
          restartPolicy: Never
    EOF
    ```
1.  Label the default namespace to be managed by Kueue by running the following command:
    ```terminal
    $ oc label namespace default kueue.openshift.io/managed=true
    ```
1.  Create the six jobs by running the following command: 
    ```terminal
    for i in {1..6}; do oc create -f job.yaml; done
    ```

    In this example, three of the jobs saturate the `ClusterQueue` resource and the other three jobs should be pending.