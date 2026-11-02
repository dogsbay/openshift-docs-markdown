{%- set _mod_docs_content_type = "REFERENCE" %}
# Virtualization metrics {id="conditional-virt-querying-metrics_{{ context }}"}

Metric descriptions including example Prometheus Query Language (PromQL) queries. These metrics are not an API and might change between versions. {._abstract}


:::note

The following examples use `topk` queries that specify a time period. If virtual machines (VMs) are deleted during that time period, they can still appear in the query output.

:::


## vCPU metrics {id="virt-promql-vcpu-metrics_{{ context }}"}

The following query can identify virtual machines that are waiting for Input/Output (I/O):


`kubevirt_vmi_vcpu_wait_seconds_total`
:   Returns the wait time (in seconds) on I/O for vCPUs of a virtual machine. Type: Counter.

A value above '0' means that the vCPU wants to run, but the host scheduler cannot run it yet. This inability to run indicates that there is an issue with I/O.


:::note

To query the vCPU metric, the `schedstats=enable` kernel argument must first be applied to the `MachineConfig` object. This kernel argument enables scheduler statistics used for debugging and performance tuning and adds a minor additional load to the scheduler.

:::



`kubevirt_vmi_vcpu_delay_seconds_total`
:   Returns the cumulative time, in seconds, that a vCPU was enqueued by the host scheduler but could not run immediately.
    This delay appears to the virtual machine as _steal time_, which is CPU time lost when the host runs other workloads. Steal time can impact performance and often indicates CPU overcommitment or contention on the host.
    Type: Counter.

Example vCPU delay query:

The following query returns the average per-second delay over a 5-minute period. A high value may indicate CPU overcommitment or contention on the node:

```promql
irate(kubevirt_vmi_vcpu_delay_seconds_total[5m]) > 0.05
```

Example vCPU wait time query:

The following query returns the top 3 VMs waiting for I/O at every given moment over a six-minute time period:

```promql
topk(3, sum by (name, namespace) (rate(kubevirt_vmi_vcpu_wait_seconds_total[6m]))) > 0
```

## vGPU metrics {id="virt-promql-vgpu-metrics_{{ context }}"}

You can monitor virtual machines using NVIDIA GPUs with this metric.


`kubevirt_vmi_gpu_info`
:   Returns information about the GPU resources attached to the virtual machine. This metric is implemented as a Gauge with the following metadata attached:
    *   **Node** - The associated virtual machine using the GPU resource.
    *   **Namespace** -  The associated namespace using the GPU resource.
    *   **Pod** - The associated pod using the GPU resource.
    *   **Resource** - The `Extended Resource` type defined in the virtual machine specification.
    *   **UUID** - The unique hardware identifier of the GPU resource.

    Implement the Data Center GPU Manager Exporter (`dcgm-exporter`) in the virtual machine with the attached GPU resources.

    :::note


    For information on implementing the `dcgm-exporter`, see [Install DCGM Exporter](https://docs.nvidia.com/datacenter/dcgm/latest/installation/install-dcgm-exporter.html). 
    
    :::


    Expose the `dcgm-exporter` with a `Service` object. For information on configuring a `Service` object for this purpose, see [Configuring the node exporter service](https://docs.redhat.com/en/documentation/openshift_container_platform/4.22/html/virtualization/monitoring#virt-configuring-node-exporter-service_virt-exposing-custom-metrics-for-vms). This section describes how to configure a node exporter service. It is the same process to configure the `dcgm-exporter`. Substitute your `dcgm-exporter` configuration where appropriate.

## Network metrics {id="virt-promql-network-metrics_{{ context }}"}

The following queries can identify virtual machines that are saturating the network:


`kubevirt_vmi_network_receive_bytes_total`
:   Returns the total amount of traffic received (in bytes) on the virtual machine’s network. Type: Counter.


`kubevirt_vmi_network_transmit_bytes_total`
:   Returns the total amount of traffic transmitted (in bytes) on the virtual machine’s network. Type: Counter.

Example network traffic query:

The following query returns the top 3 VMs transmitting the most network traffic at every given moment over a six-minute time period:

```promql
topk(3, sum by (name, namespace) (rate(kubevirt_vmi_network_receive_bytes_total[6m])) + sum by (name, namespace) (rate(kubevirt_vmi_network_transmit_bytes_total[6m]))) > 0
```

## Storage metrics {id="virt-promql-storage-metrics_{{ context }}"}

You can monitor virtual machine storage traffic and identify high-traffic VMs by using Prometheus queries.

The following queries can identify VMs that are writing large amounts of data:

`kubevirt_vmi_storage_read_traffic_bytes_total`
:   Returns the total amount (in bytes) of the virtual machine’s storage-related traffic. Type: Counter.


`kubevirt_vmi_storage_write_traffic_bytes_total`
:   Returns the total amount of storage writes (in bytes) of the virtual machine’s storage-related traffic. Type: Counter.

Example storage-related traffic queries:

*   The following query returns the top 3 VMs performing the most storage traffic at every given moment over a six-minute time period:
    ```promql
    topk(3, sum by (name, namespace) (rate(kubevirt_vmi_storage_read_traffic_bytes_total[6m])) + sum by (name, namespace) (rate(kubevirt_vmi_storage_write_traffic_bytes_total[6m]))) > 0
    ```
*   The following query returns the top 3 VMs with the highest average read latency at every given moment over a six-minute time period:
    ```promql
    topk(3, sum by (name, namespace) (rate(kubevirt_vmi_storage_read_times_seconds_total{name='${name}',namespace='${namespace}'${clusterFilter}}[6m]) / rate(kubevirt_vmi_storage_iops_read_total{name='${name}',namespace='${namespace}'${clusterFilter}}[6m]) > 0)) > 0
    ```

The following queries can track data restored from storage snapshots:


`vm:kubevirt_vmsnapshot_disks_restored:sum`
:   Returns the total number of virtual machine disks restored from the source virtual machine. Type: Gauge.


`vm:kubevirt_vmsnapshot_restored_bytes:sum`
:   Returns the amount of space in bytes restored from the source virtual machine. Type: Gauge.

Examples of storage snapshot data queries:

*   The following query returns the total number of virtual machine disks restored from the source virtual machine:
    ```promql
    vm:kubevirt_vmsnapshot_disks_restored:sum{vm_name="simple-vm", vm_namespace="default"}
    ```
*   The following query returns the amount of space in bytes restored from the source virtual machine:
    ```promql
    vm:kubevirt_vmsnapshot_restored_bytes:sum{vm_name="simple-vm", vm_namespace="default"}
    ```

The following queries can determine the I/O performance of storage devices:


`kubevirt_vmi_storage_iops_read_total`
:   Returns the amount of read I/O operations the virtual machine is performing per second. Type: Counter.


`kubevirt_vmi_storage_iops_write_total`
:   Returns the amount of write I/O operations the virtual machine is performing per second. Type: Counter.

Example I/O performance query:

The following query returns the top 3 VMs performing the most I/O operations per second at every given moment over a six-minute time period:

```promql
topk(3, sum by (name, namespace) (rate(kubevirt_vmi_storage_iops_read_total[6m])) + sum by (name, namespace) (rate(kubevirt_vmi_storage_iops_write_total[6m]))) > 0
```

## Guest memory swapping metrics {id="virt-promql-guest-memory-metrics_{{ context }}"}

The following queries can identify which swap-enabled guests are performing the most memory swapping:


`kubevirt_vmi_memory_swap_in_traffic_bytes`
:   Returns the total amount (in bytes) of memory the virtual guest is swapping in. Type: Gauge.


`kubevirt_vmi_memory_swap_out_traffic_bytes`
:   Returns the total amount (in bytes) of memory the virtual guest is swapping out. Type: Gauge.

Example memory swapping query:

The following query returns the top 3 VMs where the guest is performing the most memory swapping at every given moment over a six-minute time period:

```promql
topk(3, sum by (name, namespace) (rate(kubevirt_vmi_memory_swap_in_traffic_bytes[6m])) + sum by (name, namespace) (rate(kubevirt_vmi_memory_swap_out_traffic_bytes[6m]))) > 0
```


:::note

Memory swapping indicates that the virtual machine is under memory pressure. Increasing the memory allocation of the virtual machine can mitigate this issue.

:::


## Crash detection metrics {id="virt-promql-crash-detection-metrics_{{ context }}"}

You can track guest operating system panic events to identify unstable virtual machines (VMs) and problematic VM images. {{ VirtProductName }} detects a guest operating system panic through the `pvpanic` device on Linux and Windows guests, or through the Hyper-V enlightenment mechanism on Windows guests, and records each event in the following metric.


`kubevirt_vmi_guest_os_panic_total`
:   Returns the total number of guest operating system panic events detected for a VM. Type: Counter.

    This metric includes the following labels:
    *   `namespace` and `name` identify the affected VM.
    *   `type` identifies the panic source, for example `pvpanic` or `hyper-v`.
    *   `bugcheck_code` provides the bug check code for a Windows guest. Use this code to identify the cause of a Windows stop error.

Example crash frequency query:

The following query returns the top 3 VMs with the most guest operating system panic events over a one-hour period. A consistently high value can indicate an unstable workload or a problematic VM image:

```promql
topk(3, sum by (namespace, name) (increase(kubevirt_vmi_guest_os_panic_total[1h]))) > 0
```

Example 24-hour crash count query:

The following query returns the number of guest operating system panic events for each VM over a rolling 24-hour window. Use this query for immediate awareness of crash activity across your environment:

```promql
sum by (namespace, name) (increase(kubevirt_vmi_guest_os_panic_total[24h])) > 0
```

Example query to identify a problematic VM image:

To determine whether a VM image is the source of instability, compare the guest operating system panic events of VMs that were created from the same image. If multiple VMs share the same `type` or `bugcheck_code` value, the image or its drivers are the likely cause. The following query groups panic events by panic type over a 24-hour window:

```promql
sum by (namespace, name, type, bugcheck_code) (increase(kubevirt_vmi_guest_os_panic_total[24h])) > 0
```


:::note

The `ClusterVMPanicDetected` and `VMNonRecoverableOSPanic` alerts are based on the `kubevirt_vmi_guest_os_panic_total` metric. When a VM has a run strategy of `Always`, the VM restarts automatically after a non-recoverable panic. Repeated panic events for the same VM can indicate a crash loop that requires investigation.

:::


## Monitoring AAQ operator metrics {id="virt-promql-aaq-metrics_{{ context }}"}
The following metrics are exposed by the Application Aware Quota (AAQ) controller for monitoring resource quotas:


`kube_application_aware_resourcequota`
:   Returns the current quota usage and the CPU and memory limits enforced by the AAQ Operator resources. Type: Gauge.


`kube_application_aware_resourcequota_creation_timestamp`
:   Returns the time, in UNIX timestamp format, when the AAQ Operator resource is created. Type: Gauge.

## VM label metrics {id="virt-vm-label-metrics_{{ context }}"}


`kubevirt_vm_labels`
:   Returns virtual machine labels as Prometheus labels. Type: Gauge.

    You can expose and ignore specific labels by editing the `kubevirt-vm-labels-config` config map. After you apply the config map to your cluster, the configuration is loaded dynamically.

    Example config map:
    ```yaml {minja}
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: kubevirt-vm-labels-config
      namespace: {{ CNVNamespace }}
    data:
      allowlist: "*"
      ignorelist: ""
    ```
    *   `data.allowlist` specifies labels to expose.
        *   If `data.allowlist` has a value of `"*"`, all labels are included.
        *   If `data.allowlist` has a value of `""`, the metric does not return any labels.
        *   If `data.allowlist` contains a list of label keys, only the explicitly named labels are exposed. For example: `allowlist: "example.io/name,example.io/version"`.
    *   `data.ignorelist` specifies labels to ignore. The ignore list overrides the allow list.
        *   The `data.ignorelist` field does not support wildcard patterns. It can be empty or include a list of specific labels to ignore.
        *   If `data.ignorelist` has a value of `""`, no labels are ignored.