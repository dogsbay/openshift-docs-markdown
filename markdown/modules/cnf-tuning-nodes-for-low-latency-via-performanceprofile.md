# Tuning nodes for low latency with the performance profile {id="cnf-tuning-nodes-for-low-latency-via-performanceprofile_{{ context }}"}

The performance profile lets you control latency tuning aspects of nodes that belong to a certain machine config pool. After you specify your settings, the `PerformanceProfile` object is compiled into multiple objects that perform the actual node level tuning:

*   A `MachineConfig` file that manipulates the nodes.
*   A `KubeletConfig` file that configures the Topology Manager, the CPU Manager, and the {{ product_title }} nodes.
*   The Tuned profile that configures the Node Tuning Operator.

You can use a performance profile to specify whether to update the kernel to kernel-rt, to allocate huge pages, and to partition the CPUs for performing housekeeping duties or running workloads.


:::note

You can manually create the `PerformanceProfile` object or use the Performance Profile Creator (PPC) to generate a performance profile. See the additional resources below for more information on the PPC.

:::


```yaml title="Sample performance profile"
apiVersion: performance.openshift.io/v2
kind: PerformanceProfile
metadata:
 name: performance
spec:
 cpu:
  isolated: "4-15" (1)
  reserved: "0-3" (2)
 hugepages:
  defaultHugepagesSize: "1G"
  pages:
  - size: "1G"
    count: 16
    node: 0
 realTimeKernel:
  enabled: true  (3)
 numa:  (4)
  topologyPolicy: "best-effort"
 nodeSelector:
  node-role.kubernetes.io/worker-cnf: "" (5)
```
1.  Use this field to isolate specific CPUs to use with application containers for workloads. Set an even number of isolated CPUs to enable the pods to run without errors when hyperthreading is enabled.
1.  Use this field to reserve specific CPUs to use with infra containers for housekeeping.
1.  Use this field to install the real-time kernel on the node. Valid values are `true` or `false`. Setting the `true` value installs the real-time kernel.
1.  Use this field to configure the topology manager policy. Valid values are `none` (default), `best-effort`, `restricted`, and `single-numa-node`. For more information, see [Topology Manager Policies](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager/#topology-manager-policies).
1.  Use this field to specify a node selector to apply the performance profile to specific nodes.