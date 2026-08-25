{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites for a cluster update {id="updating-cli-prereqs_{{ context }}"}

You must satisfy the following prerequisites before updating a cluster using the CLI. {._abstract}

*   Have access to the cluster as a user with `admin` privileges.
See "Using RBAC to define and apply permissions" for more information.
*   Have a recent etcd backup in case your update fails and you must restore your cluster to a previous state.
*   Have a recent Container Storage Interface (CSI) volume snapshot in case you need to restore persistent volumes due to a pod failure.
*   Your {{ op_system_base }}7 workers are replaced with {{ op_system_base }}8 or {{ op_system }} workers. Red&#160;Hat does not support in-place {{ op_system_base }}7 to {{ op_system_base }}8 updates for {{ op_system_base }} workers; those hosts must be replaced with a clean operating system install.
*   You have updated all Operators previously installed through Operator Lifecycle Manager (OLM) to a version that is compatible with your target release. Updating the Operators ensures they have a valid update path when the default software catalogs switch from the current minor version to the next during a cluster update. See "Updating installed Operators" for more information on how to check compatibility and, if necessary, update the installed Operators.
*   Ensure that all machine config pools (MCPs) are running and not paused. Nodes associated with a paused MCP are skipped during the update process. You can pause the MCPs if you are performing a canary rollout update strategy.
*   If your cluster uses manually maintained credentials, update the cloud provider resources for the new release. For more information, including how to determine if this is a requirement for your cluster, see "Preparing to update a cluster with manually maintained credentials".
*   Ensure that you address all `Upgradeable=False` conditions so the cluster allows an update to the next minor version. An alert displays at the top of the **Cluster Settings** page when you have one or more cluster Operators that cannot be updated. You can still update to the next available patch update for the minor release you are currently on.
*   If you run an Operator or you have configured any application with the pod disruption budget, you might experience an interruption during the update process. If `minAvailable` is set to 1 in `PodDisruptionBudget`, the nodes are drained to apply pending machine configs which might block the eviction process. If several nodes are rebooted, all the pods might run on only one node, and the `PodDisruptionBudget` field can prevent the node drain.


:::important

*   When an update is failing to complete, the Cluster Version Operator (CVO) reports the status of any blocking components while attempting to reconcile the update. Rolling your cluster back to a previous version is not supported. If your update is failing to complete, contact Red&#160;Hat support.
*   Using the `unsupportedConfigOverrides` section to modify the configuration of an Operator is unsupported and might block cluster updates. You must remove this setting before you can update your cluster.

:::