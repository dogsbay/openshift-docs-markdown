{%- set _mod_docs_content_type = "CONCEPT" %}
# Workload partitioning {id="ztp-sno-du-enabling-workload-partitioning_{{ context }}"}

{{ sno_caps }} clusters that run DU workloads require workload partitioning. This limits the cores allowed to run platform services, maximizing the CPU core for application payloads.


:::note

Workload partitioning can be enabled during cluster installation only.
You cannot disable workload partitioning postinstallation.
You can however change the set of CPUs assigned to the isolated and reserved sets through the `PerformanceProfile` CR.
Changes to CPU settings cause the node to reboot.

:::



:::note[Upgrading from {product-title} 4.12 to 4.13+]

When transitioning to using `cpuPartitioningMode` for enabling workload partitioning, remove the workload partitioning `MachineConfig` CRs from the `/extra-manifest` folder that you use to provision the cluster.

:::


```yaml title="Recommended ClusterInstance CR configuration for workload partitioning"
apiVersion: ran.openshift.io/v1
kind: ClusterInstance
metadata:
  name: "<site_name>"
  namespace: "<site_name>"
spec:
  baseDomain: "example.com"
  cpuPartitioningMode: AllNodes (1)
```
1.  Set the `cpuPartitioningMode` field to `AllNodes` to configure workload partitioning for all nodes in the cluster.

**Verification**

Check that the applications and cluster system CPU pinning is correct. Run the following commands:

1.  Open a remote shell prompt to the managed cluster:
    ```terminal
    $ oc debug node/example-sno-1
    ```
1.  Check that the OpenShift infrastructure applications CPU pinning is correct:
    ```terminal
    sh-4.4# pgrep ovn | while read i; do taskset -cp $i; done
    ```
    ```terminal title="Example output"
    pid 8481's current affinity list: 0-1,52-53
    pid 8726's current affinity list: 0-1,52-53
    pid 9088's current affinity list: 0-1,52-53
    pid 9945's current affinity list: 0-1,52-53
    pid 10387's current affinity list: 0-1,52-53
    pid 12123's current affinity list: 0-1,52-53
    pid 13313's current affinity list: 0-1,52-53
    ```
1.  Check that the system applications CPU pinning is correct:
    ```terminal
    sh-4.4# pgrep systemd | while read i; do taskset -cp $i; done
    ```
    ```terminal title="Example output"
    pid 1's current affinity list: 0-1,52-53
    pid 938's current affinity list: 0-1,52-53
    pid 962's current affinity list: 0-1,52-53
    pid 1197's current affinity list: 0-1,52-53
    ```