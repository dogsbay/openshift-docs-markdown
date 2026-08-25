{%- set _mod_docs_content_type = "CONCEPT" %}
# Connectivity monitoring from the control plane to the data plane {id="hcp-connect-data-plane_{{ context }}"}

Cluster administrators can monitor network activity between a hosted control plane and the compute nodes in a data plane by using the `DataPlaneConnectionAvailable` condition. This condition is useful for identifying and troubleshooting network connectivity issues in hosted clusters.  {._abstract}

The `DataPlaneConnectionAvailable` condition is available by default starting with version 4.21.

The `DataPlaneConnectionAvailable` condition monitors the connectivity from the control plane to the data plane by taking the following steps:

1.  Counts available compute nodes in the hosted cluster.
1.  Lists the `konnectivity-agent` pods that are running in the `kube-system` namespace on the data plane.
1.  Reads the logs from the running `konnectivity-agent` pod to verify that it can communicate with the data plane.

The `hosted-cluster-config-operator` component that runs in the control plane namespace evaluates the condition and provides status and reason information.

The following table details the status and reason values that can be displayed for the condition:

| Status | Reason value | Description |
| --- | --- | --- |
| `True` | `AsExpected` | The control plane can reach the data plane nodes through the `konnectivity-agent` pods. |
| `False` | `KonnectivityAgentPodsNotFound` | No `konnectivity-agent` pods are running, or none are found. |
| `False` | `ReconciliationError` | An error occurred while listing the `konnectivity-agent` pods. |
| `Unknown` | `NoWorkerNodesAvailable` | No compute nodes are available in the cluster. No errors occurred, but no compute nodes were found. |
| `Unknown` | `ReconcileError` | Unable to count compute nodes because an error occurred. |

For information about how to troubleshoot connectivity issues, see "Troubleshooting connectivity for {{ hcp }}".