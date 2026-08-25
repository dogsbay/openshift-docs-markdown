{%- set _mod_docs_content_type = "CONCEPT" %}
# About the SR-IOV network metrics exporter {id="sriov-network-metrics-exporter_{{ context }}"}

The Single Root I/O Virtualization (SR-IOV) network metrics exporter reads the metrics for SR-IOV virtual functions (VFs) and exposes these VF metrics in Prometheus format. When the SR-IOV network metrics exporter is enabled, you can query the SR-IOV VF metrics by using the {{ product_title }} web console to monitor the networking activity of the SR-IOV pods. {._abstract}

When you query the SR-IOV VF metrics by using the web console, the SR-IOV network metrics exporter fetches and returns the VF network statistics along with the name and namespace of the pod that the VF is attached to.

The following table describes the SR-IOV VF metrics that the metrics exporter reads and exposes in Prometheus format:

**SR-IOV VF metrics**

| Metric | Description | Example PromQL query to examine the VF metric |
| --- | --- | --- |
| `sriov_vf_rx_bytes` | Received bytes per virtual function. | `sriov_vf_rx_bytes * on (pciAddr,node) group_left(pod,namespace,dev_type) sriov_kubepoddevice` |
| `sriov_vf_tx_bytes` | Transmitted bytes per virtual function. | `sriov_vf_tx_bytes * on (pciAddr,node) group_left(pod,namespace,dev_type) sriov_kubepoddevice` |
| `sriov_vf_rx_packets` | Received packets per virtual function. | `sriov_vf_rx_packets * on (pciAddr,node) group_left(pod,namespace,dev_type) sriov_kubepoddevice` |
| `sriov_vf_tx_packets` | Transmitted packets per virtual function. | `sriov_vf_tx_packets * on (pciAddr,node) group_left(pod,namespace,dev_type) sriov_kubepoddevice` |
| `sriov_vf_rx_dropped` | Dropped packets upon receipt per virtual function. | `sriov_vf_rx_dropped * on (pciAddr,node) group_left(pod,namespace,dev_type) sriov_kubepoddevice` |
| `sriov_vf_tx_dropped` | Dropped packets during transmission per virtual function. | `sriov_vf_tx_dropped * on (pciAddr,node) group_left(pod,namespace,dev_type) sriov_kubepoddevice` |
| `sriov_vf_rx_multicast` | Received multicast packets per virtual function. | `sriov_vf_rx_multicast * on (pciAddr,node) group_left(pod,namespace,dev_type) sriov_kubepoddevice` |
| `sriov_vf_rx_broadcast` | Received broadcast packets per virtual function. | `sriov_vf_rx_broadcast * on (pciAddr,node) group_left(pod,namespace,dev_type) sriov_kubepoddevice` |
| `sriov_kubepoddevice` | Virtual functions linked to active pods. | - |

You can also combine these queries by using the `kube-state-metrics` tool to get more information about the SR-IOV pods. For example, you can use the following query to get the VF network statistics along with the application name from the standard Kubernetes pod label:

```terminal
(sriov_vf_tx_packets * on (pciAddr,node)  group_left(pod,namespace)  sriov_kubepoddevice) * on (pod,namespace) group_left (label_app_kubernetes_io_name) kube_pod_labels
```