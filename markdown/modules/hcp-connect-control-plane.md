{%- set _mod_docs_content_type = "CONCEPT" %}
# Connectivity monitoring from the data plane to the control plane {id="hcp-connect-control-plane_{{ context }}"}

Cluster administrators can monitor network activity between the compute nodes in a data plane and a hosted control plane by using the `ControlPlaneConnectionAvailable` condition. This condition is useful for identifying and troubleshooting network connectivity issues in hosted clusters. {._abstract}

The `ControlPlaneConnectionAvailable` condition detects whether data plane nodes can reach control plane components. The `hosted-cluster-config-operator` component evaluates the condition, and a deployment with 3 replicas checks connectivity.

The condition monitors the connectivity between the data plane and the control plane by taking the following steps:

1.  Deploys a `kas-connection-checker` deployment to the `kube-system` namespace on the data plane.
1.  Each pod runs a shell script in an infinite loop that transfers data to and from the Kubernetes API server endpoint every 60 seconds. On success, the script patches the `control-plane-connectivity-check` config map with a `lastSucceeded` timestamp.
1.  The `hosted-cluster-config-operator` component checks whether the `control-plane-connectivity-check` config map exists and whether the `lastSucceeded` timestamp is within the last 5 minutes. It does not check pod readiness counts.

The following table details the status and reason values that can be displayed for the condition:

| Status | Reason value | Description |
| --- | --- | --- |
| `True` | `AsExpected` | All data plane nodes can reach the control plane (`NumberReady = DesiredNumberScheduled`). |
| `False` | `KASAccessFailed` | At least one data plane node cannot reach the control plane. The message shows the ratio of pods that are ready; for example, `1/3 pods ready`. |
| `Unknown` | `NoWorkerNodesAvailable` | No compute nodes are available to check connectivity (`DesiredNumberScheduled = 0`). |
| `Unknown` | `StatusUnknown` | The Kubernetes API server connection checker DaemonSet was not found. |
| `Unknown` | `ReconcileError` | An API error blocked the retrieval of the DaemonSet status. |


:::important

This condition has a known limitation with HTTPS proxy environments. In HTTPS proxy environments, the condition might incorrectly report `False` because of probe limitations.

:::