{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the PerformanceProfile object {id="cnf-creating-the-performance-profile-object_{{ context }}"}

Create the `PerformanceProfile` object using the object that is posted to the cluster.
After you have specified your settings, the `PerformanceProfile` object is compiled into multiple objects:

*   A `Machine.Config` file that manipulates the nodes.
*   A `KubeletConfig` file that configures the Topology Manager, the CPU Manager, and the {{ product_title }} nodes.
*   The Tuned profile that configures the Node Tuning Operator.

**Procedure**

1.  Prepare a cluster.
1.  Create a Machine ConfigPool.
1.  Install the Performance Profile Operator.
1.  Create a performance profile that is appropriate for your hardware and topology.
In the performance profile, you can specify whether to update the kernel to kernel-rt, the CPUs that
will be reserved for housekeeping, and CPUs that will be used for running the workloads.

    This is a typical performance profile:
    ```
    apiversion: performance.openshift.io/v2
    kind: PerformanceProfile
    metadata:
        name: <unique-name>
    spec:
       cpu:
           isolated: “1-3”
           reserved: “0”
       hugepages:
          defaultHugepagesSize: “1Gi”
          pages:
    size:  “1Gi”
              count: 4
              node: 0
    realTimeKernel:
          enabled: true
       numa:
           topologyPolicy: “best-effort”
    ```
1.  Specify two groups of CPUs in the `spec` section:

    `isolated` - Has the lowest latency. Because processes in this group have no interruptions, there is zero packet loss.

    `reserved` - The housekeeping CPUs. Threads in the reserved group tend to be very busy, so latency-sensitive
    applications should be run in the isolated group.
    See [Create a pod that gets assigned a QoS class of `Guaranteed`](https://kubernetes.io/docs/tasks/configure-pod-container/quality-service-pod/#create-a-pod-that-gets-assigned-a-qos-class-of-guaranteed).

For example, you can reserve cores (threads) from a single NUMA node and put your workloads on another NUMA node.
The reason for this is that the housekeeping CPUs may be touching caches in the CPU.
Keeping your workloads on a separate NUMA node prevents the nodes from interfering with each other.
Additionally, each NUMA node has its own memory bus that is not shared.