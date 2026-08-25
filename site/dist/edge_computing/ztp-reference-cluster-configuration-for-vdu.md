---
title: Recommended {{ sno }} cluster configuration for vDU application workloads
---

# Recommended {{ sno }} cluster configuration for vDU application workloads {#sno-configure-for-vdu}

Use the following reference information to understand the single-node OpenShift configurations required to deploy virtual distributed unit (vDU) applications in the cluster. Configurations include cluster optimizations for high performance workloads, enabling workload partitioning, and minimizing the number of reboots required postinstallation.

**Additional resources**

- [Manually installing a single-node OpenShift cluster with GitOps ZTP](/openshift-docs-markdown/edge_computing/ztp-manual-install#ztp-manual-install)
- [Deploying far edge sites with GitOps ZTP](/openshift-docs-markdown/edge_computing/ztp-deploying-far-edge-sites#ztp-deploying-far-edge-sites)

## Running low latency applications on OpenShift Container Platform {#ztp-low-latency_sno-configure-for-vdu}

OpenShift Container Platform enables low latency processing for applications running on commercial off-the-shelf (COTS) hardware by using several technologies and specialized hardware devices:

Real-time kernel for RHCOS
:   Ensures workloads are handled with a high degree of process determinism.

CPU isolation
:   Avoids CPU scheduling delays and ensures CPU capacity is available consistently.

NUMA-aware topology management
:   Aligns memory and huge pages with CPU and PCI devices to pin guaranteed container memory and huge pages to the non-uniform memory access (NUMA) node. Pod resources for all Quality of Service (QoS) classes stay on the same NUMA node. This decreases latency and improves performance of the node.

Huge pages memory management
:   Using huge page sizes improves system performance by reducing the amount of system resources required to access page tables.

Precision timing synchronization using PTP
:   Allows synchronization between nodes in the network with sub-microsecond accuracy.

## Recommended cluster host requirements for vDU application workloads {#ztp-install-sno-hardware-reqs_sno-configure-for-vdu}

Running vDU application workloads requires a bare-metal host with sufficient resources to run OpenShift Container Platform services and production workloads.

**Minimum resource requirements**

| Profile | vCPU | Memory | Storage |
| --- | --- | --- | --- |
| Minimum | 4 vCPU | 32 GB of RAM | 120 GB |
| Recommended | 8 vCPU | 32 GB of RAM | 120 GB |

> [!IMPORTANT]
> Running single-node OpenShift on 4 vCPUs leaves very little headroom for vDU application workloads. With all cluster capabilities enabled, the platform alone can request over 2.5 vCPUs and consume over 2 vCPUs at idle, leaving minimal capacity for application workloads.

To run on 4 vCPUs, you must minimize the cluster resource footprint:

- Set `baselineCapabilitySet` to `None` in the `install-config.yaml` file and use `additionalEnabledCapabilities` to enable only the capabilities that your workload requires, such as `Storage`, `Console`, and `Ingress`. For more information, see "Cluster capabilities".
- Use a performance profile to partition CPU resources between cluster housekeeping duties and application workloads, ensuring that your vDU containers run on isolated CPUs with minimal interruption. For more information, see "Tuning nodes for low latency with the performance profile".

If your deployment does not require these optimizations, it is recommended to use at least 8 vCPUs..

> [!NOTE]
> One vCPU equals one physical core. However, if you enable simultaneous multithreading (SMT), or Hyper-Threading, use the following formula to calculate the number of vCPUs that represent one physical core:
>
> - (threads per core × cores) × sockets = vCPUs

> [!IMPORTANT]
> The server must have a Baseboard Management Controller (BMC) when booting with virtual media.

**Additional resources**

- [Cluster capabilities](/openshift-docs-markdown/installing/overview/cluster-capabilities#cluster-capabilities)
- [Tuning nodes for low latency with the performance profile](/openshift-docs-markdown/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-tuning-low-latency-nodes-with-perf-profile)

## Configuring host firmware for low latency and high performance {#ztp-du-configuring-host-firmware-requirements_sno-configure-for-vdu}

Bare-metal hosts require the firmware to be configured before the host can be provisioned. The firmware configuration is dependent on the specific hardware and the particular requirements of your installation.

**Procedure**

1. Set the **UEFI/BIOS Boot Mode** to `UEFI`.
2. In the host boot sequence order, set **Hard drive first**.
3. Apply the specific firmware configuration for your hardware. The following table describes a representative firmware configuration for an Intel Xeon Skylake server and later hardware generations, based on the Intel FlexRAN 4G and 5G baseband PHY reference design.

   > [!IMPORTANT]
   > The exact firmware configuration depends on your specific hardware and network requirements. The following sample configuration is for illustrative purposes only.

   **Sample firmware configuration**

   | Firmware setting | Configuration |
   | --- | --- |
   | CPU Power and Performance Policy | Performance |
   | Uncore Frequency Scaling | Disabled |
   | Performance P-limit | Disabled |
   | Enhanced Intel SpeedStep (R) Tech | Enabled |
   | Intel Configurable TDP | Enabled |
   | Configurable TDP Level | Level 2 |
   | Intel(R) Turbo Boost Technology | Enabled |
   | Energy Efficient Turbo | Disabled |
   | Hardware P-States | Disabled |
   | Package C-State | C0/C1 state |
   | C1E | Disabled |
   | Processor C6 | Disabled |

   > [!NOTE]
   > Enable global SR-IOV and VT-d settings in the firmware for the host. These settings are relevant to bare-metal environments.

## Connectivity prerequisites for managed cluster networks {#ztp-managed-cluster-network-prereqs_sno-configure-for-vdu}

Before you can install and provision a managed cluster with the GitOps Zero Touch Provisioning (ZTP) pipeline, the managed cluster host must meet the following networking prerequisites:

- There must be bi-directional connectivity between the GitOps ZTP container in the hub cluster and the Baseboard Management Controller (BMC) of the target bare-metal host.
- The managed cluster must be able to resolve and reach the API hostname of the hub hostname and `&#42;.apps` hostname. Here is an example of the API hostname of the hub and `&#42;.apps` hostname:

  - `api.hub-cluster.internal.domain.com`
  - `console-openshift-console.apps.hub-cluster.internal.domain.com`
- The hub cluster must be able to resolve and reach the API and `&#42;.apps` hostname of the managed cluster. Here is an example of the API hostname of the managed cluster and `&#42;.apps` hostname:

  - `api.sno-managed-cluster-1.internal.domain.com`
  - `console-openshift-console.apps.sno-managed-cluster-1.internal.domain.com`

## Workload partitioning in single-node OpenShift with GitOps ZTP {#ztp-workload-partitioning-sno_sno-configure-for-vdu}

Workload partitioning configures OpenShift Container Platform services, cluster management workloads, and infrastructure pods to run on a reserved number of host CPUs.

To configure workload partitioning with GitOps Zero Touch Provisioning (ZTP), you configure a `cpuPartitioningMode` field in the `ClusterInstance` custom resource (CR) that you use to install the cluster and you apply a `PerformanceProfile` CR that configures the `isolated` and `reserved` CPUs on the host.

Configuring the `ClusterInstance` CR enables workload partitioning at cluster installation time and applying the `PerformanceProfile` CR configures the specific allocation of CPUs to reserved and isolated sets. Both of these steps happen at different points during cluster provisioning.

The workload partitioning configuration pins the OpenShift Container Platform infrastructure pods to the `reserved` CPU set. Platform services such as systemd, CRI-O, and kubelet run on the `reserved` CPU set. The `isolated` CPU sets are exclusively allocated to your container workloads. Isolating CPUs ensures that the workload has guaranteed access to the specified CPUs without contention from other applications running on the same node. All CPUs that are not isolated should be reserved.

> [!IMPORTANT]
> Ensure that `reserved` and `isolated` CPU sets do not overlap with each other.

**Additional resources**

- [TPM encryption](/openshift-docs-markdown/security/network_bound_disk_encryption/nbde-about-disk-encryption-technology#nbde-tpm-encryption_nbde-implementation)

## Recommended cluster install manifests {#ztp-sno-install-time-cluster-config_sno-configure-for-vdu}

The ZTP pipeline applies the following custom resources (CRs) during cluster installation. These configuration CRs ensure that the cluster meets the feature and performance requirements necessary for running a vDU application.

> [!NOTE]
> When using the GitOps ZTP plugin and `ClusterInstance` CRs for cluster deployment, the following `MachineConfig` CRs are included by default.

Use the `ClusterInstance` `extraManifestRefs` to alter the CRs that are included by default. For more information, see "Advanced managed cluster configuration with ClusterInstance CRs".

**Additional resources**

- [Advanced managed cluster configuration with ClusterInstance CRs](/openshift-docs-markdown/edge_computing/ztp-advanced-install-ztp#ztp-advanced-install-ztp)

### Reduced platform management footprint {#ztp-sno-du-configuring-the-container-mountspace_sno-configure-for-vdu}

To reduce the overall management footprint of the platform, a `MachineConfig` custom resource (CR) is required that places all Kubernetes-specific mount points in a new namespace separate from the host operating system. The following base64-encoded example `MachineConfig` CR illustrates this configuration.

```yaml {title="Recommended container mount namespace configuration (01-container-mount-ns-and-kubelet-conf-master.yaml)"}
{% include "./snippets/ztp_01-container-mount-ns-and-kubelet-conf-master.yaml" %}
```

### SCTP {#ztp-sno-du-enabling-sctp_sno-configure-for-vdu}

Stream Control Transmission Protocol (SCTP) is a key protocol used in RAN applications. This `MachineConfig` object adds the SCTP kernel module to the node to enable this protocol.

```yaml {title="Recommended control plane node SCTP configuration (03-sctp-machine-config-master.yaml)"}
{% include "./snippets/ztp_03-sctp-machine-config-master.yaml" %}
```

```yaml {title="Recommended worker node SCTP configuration (03-sctp-machine-config-worker.yaml)"}
{% include "./snippets/ztp_03-sctp-machine-config-worker.yaml" %}
```

### Setting rcu_normal {#ztp-setting-rcu-normal_sno-configure-for-vdu}

The following `MachineConfig` CR configures the system to set `rcu_normal` to 1 after the system has finished startup. This improves kernel latency for vDU applications.

```yaml {title="Recommended configuration for disabling rcu_expedited after the node has finished startup (08-set-rcu-normal-master.yaml)"}
{% include "./snippets/ztp_08-set-rcu-normal-master.yaml" %}
```

### Automatic kernel crash dumps with kdump {#ztp-sno-du-enabling-kdump_sno-configure-for-vdu}

`kdump` is a Linux kernel feature that creates a kernel crash dump when the kernel crashes. `kdump` is enabled with the following `MachineConfig` CRs.

```yaml {title="Recommended control plane node kdump configuration (06-kdump-master.yaml)"}
{% include "./snippets/ztp_06-kdump-master.yaml" %}
```

```yaml {title="Recommended kdump worker node configuration (06-kdump-worker.yaml)"}
{% include "./snippets/ztp_06-kdump-worker.yaml" %}
```

### Disable automatic CRI-O cache wipe {#ztp-sno-du-disabling-crio-wipe_sno-configure-for-vdu}

After an uncontrolled host shutdown or cluster reboot, CRI-O automatically deletes the entire CRI-O cache, causing all images to be pulled from the registry when the node reboots. This can result in unacceptably slow recovery times or recovery failures. To prevent this from happening in single-node OpenShift clusters that you install with GitOps ZTP, disable the CRI-O delete cache feature during cluster installation.

```yaml {title="Recommended MachineConfig CR to disable CRI-O cache wipe on control plane nodes (99-crio-disable-wipe-master.yaml)"}
{% include "./snippets/ztp_99-crio-disable-wipe-master.yaml" %}
```

```yaml {title="Recommended MachineConfig CR to disable CRI-O cache wipe on worker nodes (99-crio-disable-wipe-worker.yaml)"}
{% include "./snippets/ztp_99-crio-disable-wipe-worker.yaml" %}
```

### Configuring crun as the default container runtime {#ztp-sno-du-configuring-crun-container-runtime_sno-configure-for-vdu}

The following `ContainerRuntimeConfig` custom resources (CRs) configure crun as the default OCI container runtime for control plane and worker nodes. The crun container runtime is fast and lightweight and has a low memory footprint.

> [!IMPORTANT]
> For optimal performance, enable crun for control plane and worker nodes in single-node OpenShift, three-node OpenShift, and standard clusters. To avoid the cluster rebooting when the CR is applied, apply the change as a GitOps ZTP additional Day 0 install-time manifest.

```yaml {title="Recommended ContainerRuntimeConfig CR for control plane nodes (enable-crun-master.yaml)"}
{% include "./snippets/ztp_enable-crun-master.yaml" %}
```

```yaml {title="Recommended ContainerRuntimeConfig CR for worker nodes (enable-crun-worker.yaml)"}
{% include "./snippets/ztp_enable-crun-worker.yaml" %}
```

**Additional resources**

## Recommended postinstallation cluster configurations {#ztp-sno-post-install-time-cluster-config_sno-configure-for-vdu}

When the cluster installation is complete, the ZTP pipeline applies the following custom resources (CRs) that are required to run DU workloads.

> [!NOTE]
> In GitOps ZTP v4.10 and earlier, you configure UEFI secure boot with a `MachineConfig` CR. This is no longer required in GitOps ZTP v4.11 and later. In v4.11, you configure UEFI secure boot for single-node OpenShift clusters by updating the `spec.nodes[].bootMode` field in the `ClusterInstance` CR that you use to install the cluster. For more information, see "Deploying a managed cluster with ClusterInstance and GitOps ZTP".

**Additional resources**

- [Deploying a managed cluster with ClusterInstance and GitOps ZTP](/openshift-docs-markdown/edge_computing/ztp-deploying-far-edge-sites#ztp-deploying-a-site_ztp-deploying-far-edge-sites)

### Operators {#ztp-sno-du-configuring-the-operators_sno-configure-for-vdu}

Single-node OpenShift clusters that run DU workloads require the following Operators to be installed:

- Local Storage Operator
- Logging Operator
- PTP Operator
- SR-IOV Network Operator

You also need to configure a custom `CatalogSource` CR, disable the default `OperatorHub` configuration, and configure an `ImageContentSourcePolicy` mirror registry that is accessible from the clusters that you install.

```yaml {title="Recommended Storage Operator namespace and Operator group configuration (StorageNS.yaml, StorageOperGroup.yaml)"}
---
{% include "./snippets/ztp_StorageNS.yaml" %}
---
{% include "./snippets/ztp_StorageOperGroup.yaml" %}
```

```yaml {title="Recommended Cluster Logging Operator namespace and Operator group configuration (ClusterLogNS.yaml, ClusterLogOperGroup.yaml)"}
{% include "./snippets/ztp_ClusterLogNS.yaml" %}
{% include "./snippets/ztp_ClusterLogOperGroup.yaml" %}
```

```yaml {title="Recommended PTP Operator namespace and Operator group configuration (PtpSubscriptionNS.yaml, PtpSubscriptionOperGroup.yaml)"}
{% include "./snippets/ztp_PtpSubscriptionNS.yaml" %}
---
{% include "./snippets/ztp_PtpSubscriptionOperGroup.yaml" %}
```

```yaml {title="Recommended SR-IOV Operator namespace and Operator group configuration (SriovSubscriptionNS.yaml, SriovSubscriptionOperGroup.yaml)"}
---
{% include "./snippets/ztp_SriovSubscriptionNS.yaml" %}
---
{% include "./snippets/ztp_SriovSubscriptionOperGroup.yaml" %}
```

```yaml {title="Recommended CatalogSource configuration (DefaultCatsrc.yaml)"}
{% include "./snippets/ztp_DefaultCatsrc.yaml" %}
```

```yaml {title="Recommended ImageContentSourcePolicy configuration (DisconnectedICSP.yaml)"}
{% include "./snippets/ztp_DisconnectedICSP.yaml" %}
```

```yaml {title="Recommended OperatorHub configuration (OperatorHub.yaml)"}
{% include "./snippets/ztp_OperatorHub.yaml" %}
```

### Operator subscriptions {#ztp-sno-du-subscribing-to-the-operators-needed-for-platform-configuration_sno-configure-for-vdu}

Single-node OpenShift clusters that run DU workloads require the following `Subscription` CRs. The subscription provides the location to download the following Operators:

- Local Storage Operator
- Logging Operator
- PTP Operator
- SR-IOV Network Operator
- SRIOV-FEC Operator

For each Operator subscription, specify the channel to get the Operator from. The recommended channel is `stable`.

You can specify `Manual` or `Automatic` updates. In `Automatic` mode, the Operator automatically updates to the latest versions in the channel as they become available in the registry. In `Manual` mode, new Operator versions are installed only when they are explicitly approved.

> [!TIP]
> Use `Manual` mode for subscriptions. This allows you to control the timing of Operator updates to fit within scheduled maintenance windows.

```yaml {title="Recommended Local Storage Operator subscription (StorageSubscription.yaml)"}
{% include "./snippets/ztp_StorageSubscription.yaml" %}
```

```yaml {title="Recommended SR-IOV Operator subscription (SriovSubscription.yaml)"}
{% include "./snippets/ztp_SriovSubscription.yaml" %}
```

```yaml {title="Recommended PTP Operator subscription (PtpSubscription.yaml)"}
{% include "./snippets/ztp_PtpSubscription.yaml" %}
```

```yaml {title="Recommended Cluster Logging Operator subscription (ClusterLogSubscription.yaml)"}
{% include "./snippets/ztp_ClusterLogSubscription.yaml" %}
```

### Cluster logging and log forwarding {#ztp-sno-du-configuring-logging-locally-and-forwarding_sno-configure-for-vdu}

Single-node OpenShift clusters that run DU workloads require logging and log forwarding for debugging. The following custom resources (CRs) are required.

<a name="ztp-clusterlogforwarder-yaml"></a>

```yaml {title="Recommended ClusterLogForwarder.yaml"}
{% include "./snippets/ztp_ClusterLogForwarder.yaml" %}
```

> [!NOTE]
> Set the `spec.outputs.kafka.url` field to the URL of the Kafka server where the logs are forwarded to.

<a name="ztp-clusterlogns-yaml"></a>

```yaml {title="Recommended ClusterLogNS.yaml"}
{% include "./snippets/ztp_ClusterLogNS.yaml" %}
```

<a name="ztp-clusterlogopergroup-yaml"></a>

```yaml {title="Recommended ClusterLogOperGroup.yaml"}
{% include "./snippets/ztp_ClusterLogOperGroup.yaml" %}
```

<a name="ztp-clusterlogserviceaccount-yaml"></a>

```yaml {title="Recommended ClusterLogServiceAccount.yaml"}
{% include "./snippets/ztp_ClusterLogServiceAccount.yaml" %}
```

<a name="ztp-clusterlogserviceaccountauditbinding-yaml"></a>

```yaml {title="Recommended ClusterLogServiceAccountAuditBinding.yaml"}
{% include "./snippets/ztp_ClusterLogServiceAccountAuditBinding.yaml" %}
```

<a name="ztp-clusterlogserviceaccountinfrastructurebinding-yaml"></a>

```yaml {title="Recommended ClusterLogServiceAccountInfrastructureBinding.yaml"}
{% include "./snippets/ztp_ClusterLogServiceAccountInfrastructureBinding.yaml" %}
```

<a name="ztp-clusterlogsubscription-yaml"></a>

```yaml {title="Recommended ClusterLogSubscription.yaml"}
{% include "./snippets/ztp_ClusterLogSubscription.yaml" %}
```

### Performance profile {#ztp-sno-du-configuring-performance-addons_sno-configure-for-vdu}

Single-node OpenShift clusters that run DU workloads require a Node Tuning Operator performance profile to use real-time host capabilities and services.

> [!NOTE]
> In earlier versions of OpenShift Container Platform, the Performance Addon Operator was used to implement automatic tuning to achieve low latency performance for OpenShift applications. In OpenShift Container Platform 4.11 and later, this functionality is part of the Node Tuning Operator.

The following example `PerformanceProfile` CR illustrates the required single-node OpenShift cluster configuration.

```yaml {title="Recommended performance profile configuration (PerformanceProfile.yaml)"}
{% include "./snippets/ztp_PerformanceProfile.yaml" %}
```

***PerformanceProfile CR options for single-node OpenShift clusters***

<table>
<thead>
<tr>
  <th>PerformanceProfile CR field</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>metadata.name</code></td>
  <td>Ensure that <code>name</code> matches the following fields set in related GitOps ZTP custom resources (CRs):<br><br><ul><li><code>include=openshift-node-performance-${PerformanceProfile.metadata.name}</code> in <code>TunedPerformancePatch.yaml</code></li><li><code>name: 50-performance-${PerformanceProfile.metadata.name}</code> in <code>validatorCRs/informDuValidator.yaml</code></li></ul></td>
</tr>
<tr>
  <td><code>spec.additionalKernelArgs</code></td>
  <td><code>"efi=runtime"</code> Configures UEFI secure boot for the cluster host.</td>
</tr>
<tr>
  <td><code>spec.cpu.isolated</code></td>
  <td>Set the isolated CPUs. Ensure all of the Hyper-Threading pairs match.<br><br><dl><dt>Important</dt><dd>The reserved and isolated CPU pools must not overlap and together must span all available cores. CPU cores that are not accounted for cause an undefined behaviour in the system.</dd></dl></td>
</tr>
<tr>
  <td><code>spec.cpu.reserved</code></td>
  <td>Set the reserved CPUs. When workload partitioning is enabled, system processes, kernel threads, and system container threads are restricted to these CPUs. All CPUs that are not isolated should be reserved.</td>
</tr>
<tr>
  <td><code>spec.hugepages.pages</code></td>
  <td><ul><li>Set the number of huge pages (<code>count</code>)</li><li>Set the huge pages size (<code>size</code>).</li><li>Set <code>node</code> to the NUMA node where the <code>hugepages</code> are allocated (<code>node</code>)</li></ul></td>
</tr>
<tr>
  <td><code>spec.realTimeKernel</code></td>
  <td>Set <code>enabled</code> to <code>true</code> to use the realtime kernel.</td>
</tr>
<tr>
  <td><code>spec.workloadHints</code></td>
  <td>Use <code>workloadHints</code> to define the set of top level flags for different type of workloads.</td>
</tr>
</tbody>
</table>

### Configuring cluster time synchronization {#ztp-sno-du-configuring-time-sync_sno-configure-for-vdu}

Run a one-time system time synchronization job for control plane or worker nodes.

```yaml {title="Recommended one time time-sync for control plane nodes (99-sync-time-once-master.yaml)"}
{% include "./snippets/ztp_99-sync-time-once-master.yaml" %}
```

```yaml {title="Recommended one time time-sync for worker nodes (99-sync-time-once-worker.yaml)"}
{% include "./snippets/ztp_99-sync-time-once-worker.yaml" %}
```

### PTP {#ztp-sno-du-configuring-ptp_sno-configure-for-vdu}

Single-node OpenShift clusters use Precision Time Protocol (PTP) for network time synchronization. The following example `PtpConfig` custom resources (CRs) illustrate configurations for ordinary clocks, boundary clocks, and Telecom Grandmaster clocks on supported Intel Ethernet hardware. You must select the profile that matches your qualified GNR-D hardware layout and complete interface renaming prerequisites before you apply Granite Rapids-D Telecom Grandmaster YAML on Intel Granite Rapids-D servers.

```yaml {title="Recommended PTP ordinary clock configuration (PtpConfigSlave.yaml)"}
{% include "./snippets/ztp_PtpConfigSlave.yaml" %}
```

```yaml {title="Recommended boundary clock configuration (PtpConfigBoundary.yaml)"}
{% include "./snippets/ztp_PtpConfigBoundary.yaml" %}
```

```yaml {title="Recommended PTP Westport Channel e810 grandmaster clock configuration (PtpConfigGmWpc.yaml)"}
{% include "./snippets/ztp_PtpConfigGmWpc.yaml" %}
```

> [!IMPORTANT]
> Telecom Grandmaster clock configuration on Intel Granite Rapids-D (GNR-D) hardware is a Technology Preview feature only. Technology Preview features are not supported with Red Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.
>
> For more information about the support scope of Red Hat Technology Preview features, see [Technology Preview Features Support Scope](https://access.redhat.com/support/offerings/techpreview/).

```yaml {title="Recommended PTP Granite Rapids-D Telecom Grandmaster clock configuration (PtpConfigGnrdTGM.yaml)"}
{% include "./snippets/ptp_PtpConfigGnrdTGM.yaml" %}
```

The following optional `PtpOperatorConfig` CR configures PTP events reporting for the node.

```yaml {title="Recommended PTP events configuration (PtpOperatorConfigForEvent.yaml)"}
{% include "./snippets/ztp_PtpOperatorConfigForEvent.yaml" %}
```

- [Configuring linuxptp services as a Telecom Grandmaster clock on Intel Granite Rapids-D hardware](/openshift-docs-markdown/networking/advanced_networking/ptp/configuring-ptp#configuring-linuxptp-services-as-grandmaster-clock-gnrd_configuring-ptp)

### Extended Tuned profile {#ztp-sno-du-tuning-the-performance-patch_sno-configure-for-vdu}

Single-node OpenShift clusters that run DU workloads require additional performance tuning configurations necessary for high-performance workloads. The following example `Tuned` CR extends the `Tuned` profile:

```yaml {title="Recommended extended Tuned profile configuration (TunedPerformancePatch.yaml)"}
{% include "./snippets/ztp_TunedPerformancePatch.yaml" %}
```

*`Tuned`** CR options for single-node OpenShift clusters***

<table>
<thead>
<tr>
  <th>Tuned CR field</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>spec.profile.data</code></td>
  <td><ul><li>The <code>include</code> line that you set in <code>spec.profile.data</code> must match the associated <code>PerformanceProfile</code> CR name.</li></ul>For example, <code>include=openshift-node-performance-${PerformanceProfile.metadata.name}</code>.</td>
</tr>
</tbody>
</table>

### SR-IOV {#ztp-sno-du-configuring-sriov_sno-configure-for-vdu}

Single root I/O virtualization (SR-IOV) is commonly used to enable fronthaul and midhaul networks. The following YAML example configures SR-IOV for a single-node OpenShift cluster.

> [!NOTE]
> The configuration of the `SriovNetwork` CR will vary depending on your specific network and infrastructure requirements.

```yaml {title="Recommended SriovOperatorConfig CR configuration (SriovOperatorConfig.yaml)"}
{% include "./snippets/ztp_SriovOperatorConfig.yaml" %}
```

*`SriovOperatorConfig`** CR options for single-node OpenShift clusters***

<table>
<thead>
<tr>
  <th>SriovOperatorConfig CR field</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>spec.enableInjector</code></td>
  <td>Disable <code>Injector</code> pods to reduce the number of management pods.Start with the <code>Injector</code> pods enabled, and only disable them after verifying the user manifests.If the injector is disabled, containers that use SR-IOV resources must explicitly assign them in the <code>requests</code> and <code>limits</code> section of the container spec.<br><br>For example:<pre>containers:&#10;- name: my-sriov-workload-container&#10;  resources:&#10;    limits:&#10;      openshift.io/&lt;resource_name&gt;:  "1"&#10;    requests:&#10;      openshift.io/&lt;resource_name&gt;:  "1"</pre></td>
</tr>
<tr>
  <td><code>spec.enableOperatorWebhook</code></td>
  <td>Disable <code>OperatorWebhook</code> pods to reduce the number of management pods. Start with the <code>OperatorWebhook</code> pods enabled, and only disable them after verifying the user manifests.</td>
</tr>
</tbody>
</table>

```yaml {title="Recommended SriovNetwork configuration (SriovNetwork.yaml)"}
{% include "./snippets/ztp_SriovNetwork.yaml" %}
```

`SriovNetwork`** CR options for single-node OpenShift clusters**

| SriovNetwork CR field | Description |
| --- | --- |
| `spec.vlan` | Configure `vlan` with the VLAN for the midhaul network. |

```yaml {title="Recommended SriovNetworkNodePolicy CR configuration (SriovNetworkNodePolicy.yaml)"}
{% include "./snippets/ztp_SriovNetworkNodePolicy.yaml" %}
```

`SriovNetworkPolicy`** CR options for single-node OpenShift clusters**

| SriovNetworkNodePolicy CR field | Description |
| --- | --- |
| `spec.deviceType` | Configure `deviceType` as `vfio-pci` or `netdevice`. For Mellanox NICs, set `deviceType: netdevice`, and `isRdma: true`. For Intel based NICs, set `deviceType: vfio-pci` and `isRdma: false`. |
| `spec.nicSelector.pfNames` | Specifies the interface connected to the fronthaul network. |
| `spec.numVfs` | Specifies the number of VFs for the fronthaul network. |
| `spec.nicSelector.pfNames` | The exact name of physical function must match the hardware. |

```yaml {title="Recommended SR-IOV kernel configurations (07-sriov-related-kernel-args-master.yaml)"}
{% include "./snippets/ztp_07-sriov-related-kernel-args-master.yaml" %}
```

### Console Operator {#ztp-sno-du-removing-the-console-operator_sno-configure-for-vdu}

Use the cluster capabilities feature to prevent the Console Operator from being installed. When the node is centrally managed it is not needed. Removing the Operator provides additional space and capacity for application workloads.

To disable the Console Operator during the installation of the managed cluster, set the following in the `spec.installConfigOverrides` field of the `ClusterInstance` custom resource (CR):

```yaml
installConfigOverrides:  "{\"capabilities\":{\"baselineCapabilitySet\": \"None\" }}"
```

### Alertmanager {#ztp-sno-du-reducing-resource-usage-with-cluster-monitoring_sno-configure-for-vdu}

Single-node OpenShift clusters that run DU workloads require reduced CPU resources consumed by the OpenShift Container Platform monitoring components. The following `ConfigMap` custom resource (CR) disables Alertmanager.

```yaml {title="Recommended cluster monitoring configuration (ReduceMonitoringFootprint.yaml)"}
{% include "./snippets/ztp_ReduceMonitoringFootprint.yaml" %}
```

### Operator Lifecycle Manager {#ztp-sno-du-reducing-resource-usage-with-olm-pprof_sno-configure-for-vdu}

Single-node OpenShift clusters that run distributed unit workloads require consistent access to CPU resources. Operator Lifecycle Manager (OLM) collects performance data from Operators at regular intervals, resulting in an increase in CPU utilisation. The following `ConfigMap` custom resource (CR) disables the collection of Operator performance data by OLM.

```yaml {title="Recommended cluster OLM configuration (ReduceOLMFootprint.yaml)"}
{% include "./snippets/ztp_ReduceOLMFootprint.yaml" %}
```

### LVM Storage {#lvms-configuring-lvms-on-sno_sno-configure-for-vdu}

You can dynamically provision local storage on single-node OpenShift clusters with Logical Volume Manager (LVM) Storage.

> [!NOTE]
> The recommended storage solution for single-node OpenShift is the Local Storage Operator. Alternatively, you can use LVM Storage but it requires additional CPU resources to be allocated.

The following YAML example configures the storage of the node to be available to OpenShift Container Platform applications.

```yaml {title="Recommended LVMCluster configuration (StorageLVMCluster.yaml)"}
{% include "./snippets/ztp_StorageLVMCluster.yaml" %}
```

`LVMCluster`** CR options for single-node OpenShift clusters**

| LVMCluster CR field | Description |
| --- | --- |
| `deviceSelector.paths` | Configure the disks used for LVM storage. If no disks are specified, the LVM Storage uses all the unused disks in the specified thin pool. |

### Network diagnostics {#ztp-sno-du-disabling-network-diagnostics_sno-configure-for-vdu}

Single-node OpenShift clusters that run DU workloads require less inter-pod network connectivity checks to reduce the additional load created by these pods. The following custom resource (CR) disables these checks.

```yaml {title="Recommended network diagnostics configuration (DisableSnoNetworkDiag.yaml)"}
{% include "./snippets/ztp_DisableSnoNetworkDiag.yaml" %}
```

**Additional resources**

- [Deploying far edge sites using ZTP](/openshift-docs-markdown/edge_computing/ztp-deploying-far-edge-sites#ztp-deploying-far-edge-sites)
