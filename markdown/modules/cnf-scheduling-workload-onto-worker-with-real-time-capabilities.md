{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scheduling a low latency workload onto a compute node {id="cnf-scheduling-workload-onto-worker-with-real-time-capabilities_{{ context }}"}

You can schedule low latency workloads onto a compute node where a performance profile that configures real-time capabilities is applied. {._abstract}


:::note

To schedule a workload on specific nodes, use label selectors in the `Pod` custom resource (CR). The label selectors must match the nodes that are attached to the machine config pool that was configured for low latency by the Node Tuning Operator.

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in as a user with `cluster-admin` privileges.
*   You have applied a performance profile in the cluster that tunes compute nodes for low latency workloads.

**Procedure**

1.  Create a `Pod` CR for the low latency workload and apply it in the cluster, for example:
    ```yaml title="Example Pod spec configured to use real-time processing"
    apiVersion: v1
    kind: Pod
    metadata:
      name: dynamic-low-latency-pod
      annotations:
        cpu-quota.crio.io: "disable"
        cpu-load-balancing.crio.io: "disable"
        irq-load-balancing.crio.io: "disable"
    spec:
      securityContext:
        runAsNonRoot: true
        seccompProfile:
          type: RuntimeDefault
      containers:
      - name: dynamic-low-latency-pod
        image: "registry.redhat.io/openshift4/cnf-tests-rhel8:v{{ product_version }}"
        command: ["sleep", "10h"]
        resources:
          requests:
            cpu: 2
            memory: "200M"
          limits:
            cpu: 2
            memory: "200M"
        securityContext:
          allowPrivilegeEscalation: false
          capabilities:
            drop: [ALL]
      nodeSelector:
        node-role.kubernetes.io/worker-cnf: ""
      runtimeClassName: performance-dynamic-low-latency-profile (5)
    # ...
    ```
    where


    `metadata.annotations.cpu-quota.crio.io`
    :   Disables the CPU completely fair scheduler (CFS) quota at the pod run time.


    `metadata.annotations.cpu-load-balancing.crio.io`
    :   Disables CPU load balancing.


    `metadata.annotations.irq-load-balancing.crio.io`
    :   Opts the pod out of interrupt handling on the node.


    `spec.nodeSelector.node-role.kubernetes.io/worker-cnf`
    :   The `nodeSelector` label must match the label that you specify in the `Node` CR.


    `spec.runtimeClassName`
    :   `runtimeClassName` must match the name of the performance profile configured in the cluster.
1.  Enter the pod `runtimeClassName` in the form performance-&lt;profile_name>, where &lt;profile_name> is the `name` from the `PerformanceProfile` YAML. In the previous YAML example, the `name` is `performance-dynamic-low-latency-profile`.
1.  Ensure the pod is running correctly. Status should be `running`, and the correct `cnf-worker` node should be set.
    ```terminal
    $ oc get pod -o wide
    ```
    ```terminal title="Expected output"
    NAME                     READY   STATUS    RESTARTS   AGE     IP           NODE
    dynamic-low-latency-pod  1/1     Running   0          5h33m   10.131.0.10  cnf-worker.example.com
    ```
1.  Get the CPUs that the pod configured for IRQ dynamic load balancing runs on:
    ```terminal
    $ oc exec -it dynamic-low-latency-pod -- /bin/bash -c "grep Cpus_allowed_list /proc/self/status | awk '{print $2}'"
    ```
    ```terminal title="Expected output"
    Cpus_allowed_list:  2-3
    ```

**Verification**

1.  Log in to the node to verify the configuration.
    ```terminal
    $ oc debug node/<node-name>
    ```
1.  Verify that you can use the node file system:
    ```terminal
    sh-4.4# chroot /host
    ```
    ```terminal title="Expected output"
    sh-4.4#
    ```
1.  Ensure the default system CPU affinity mask does not include the `dynamic-low-latency-pod` CPUs, for example, CPUs 2 and 3.
    ```terminal
    sh-4.4# cat /proc/irq/default_smp_affinity
    ```
    ```terminal title="Example output"
    33
    ```
1.  Ensure the system IRQs are not configured to run on the `dynamic-low-latency-pod` CPUs:
    ```terminal
    sh-4.4# find /proc/irq/ -name smp_affinity_list -exec sh -c 'i="$1"; mask=$(cat $i); file=$(echo $i); echo $file: $mask' _ {} \;
    ```
    ```terminal title="Example output"
    /proc/irq/0/smp_affinity_list: 0-5
    /proc/irq/1/smp_affinity_list: 5
    /proc/irq/2/smp_affinity_list: 0-5
    /proc/irq/3/smp_affinity_list: 0-5
    /proc/irq/4/smp_affinity_list: 0
    /proc/irq/5/smp_affinity_list: 0-5
    /proc/irq/6/smp_affinity_list: 0-5
    /proc/irq/7/smp_affinity_list: 0-5
    /proc/irq/8/smp_affinity_list: 4
    /proc/irq/9/smp_affinity_list: 4
    /proc/irq/10/smp_affinity_list: 0-5
    /proc/irq/11/smp_affinity_list: 0
    /proc/irq/12/smp_affinity_list: 1
    /proc/irq/13/smp_affinity_list: 0-5
    /proc/irq/14/smp_affinity_list: 1
    /proc/irq/15/smp_affinity_list: 0
    /proc/irq/24/smp_affinity_list: 1
    /proc/irq/25/smp_affinity_list: 1
    /proc/irq/26/smp_affinity_list: 1
    /proc/irq/27/smp_affinity_list: 5
    /proc/irq/28/smp_affinity_list: 1
    /proc/irq/29/smp_affinity_list: 0
    /proc/irq/30/smp_affinity_list: 0-5
    ```

    :::warning

    When you tune nodes for low latency, the usage of execution probes in conjunction with applications that require guaranteed CPUs can cause latency spikes. Use other probes, such as a properly configured set of network probes, as an alternative.
    
    :::