{%- set _mod_docs_content_type = "REFERENCE" %}
# Recommended cluster MachineConfig CRs for {{ sno }} clusters {id="ztp-recommended-cluster-mc-crs_{{ context }}"}

Check that the `MachineConfig` custom resources (CRs) that you extract from the `ztp-site-generate` container are applied in the cluster. The CRs can be found in the extracted `out/source-crs/extra-manifest/` folder. {._abstract}

The following `MachineConfig` CRs from the `ztp-site-generate` container configure the cluster host:

**Recommended {{ ztp }} MachineConfig CRs**

<table>
<thead>
<tr>
  <th>MachineConfig CR</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>01-container-mount-ns-and-kubelet-conf-master.yaml</code><br><br><code>01-container-mount-ns-and-kubelet-conf-worker.yaml</code></td>
  <td>Configures the container mount namespace and kubelet configuration.</td>
</tr>
<tr>
  <td><code>03-sctp-machine-config-master.yaml</code><br><br><code>03-sctp-machine-config-worker.yaml</code></td>
  <td>Loads the SCTP kernel module. These <code>MachineConfig</code> CRs are optional and can be omitted if you do not require this kernel module.</td>
</tr>
<tr>
  <td><code>06-kdump-master.yaml</code><br><br><code>06-kdump-worker.yaml</code></td>
  <td>Configures kdump crash reporting for the cluster.</td>
</tr>
<tr>
  <td><code>07-sriov-related-kernel-args-master.yaml</code></td>
  <td>Configures SR-IOV kernel arguments in the cluster.</td>
</tr>
<tr>
  <td><code>08-set-rcu-normal-master.yaml</code><br><br><code>08-set-rcu-normal-worker.yaml</code></td>
  <td>Disables <code>rcu_expedited</code> mode after the cluster has rebooted.</td>
</tr>
<tr>
  <td><code>99-crio-disable-wipe-master.yaml</code><br><br><code>99-crio-disable-wipe-worker.yaml</code></td>
  <td>Disables the automatic CRI-O cache wipe following cluster reboot.</td>
</tr>
<tr>
  <td><code>99-sync-time-once-master.yaml</code><br><br><code>99-sync-time-once-worker.yaml</code></td>
  <td>Configures the one-time check and adjustment of the system clock by the Chrony service.</td>
</tr>
<tr>
  <td><code>enable-crun-master.yaml</code><br><br><code>enable-crun-worker.yaml</code></td>
  <td>Enables the <code>crun</code> OCI container runtime.</td>
</tr>
<tr>
  <td><code>extra-manifest/enable-cgroups-v1.yaml</code><br><br><code>source-crs/extra-manifest/enable-cgroups-v1.yaml</code></td>
  <td>Enables cgroups v1 during cluster installation and when generating {{ rh_rhacm }} cluster policies.</td>
</tr>
</tbody>
</table>


:::note

In {{ product_title }} 4.14 and later, you configure workload partitioning with the `cpuPartitioningMode` field in the `ClusterInstance` CR.

:::