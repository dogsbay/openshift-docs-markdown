{%- set _mod_docs_content_type = "CONCEPT" %}
# Updates for the hosted cluster {id="hcp-updates-hosted-cluster_{{ context }}"}

The `spec.release.image` value dictates the version of the control plane. The `HostedCluster` object transmits the intended `spec.release.image` value to the `HostedControlPlane.spec.releaseImage` value and runs the appropriate Control Plane Operator version. {._abstract}

The hosted control plane manages the rollout of the new version of the control plane components along with any {{ product_title }} components through the new version of the Cluster Version Operator (CVO).


:::important

In {{ hcp }}, the `NodeHealthCheck` resource cannot detect the status of the CVO. A cluster administrator must manually pause the remediation triggered by `NodeHealthCheck`, before performing critical operations, such as updating the cluster, to prevent new remediation actions from interfering with cluster updates.

To pause the remediation, enter the array of strings, for example, `pause-test-cluster`, as a value of the `pauseRequests` field in the `NodeHealthCheck` resource. For more information, see "About the Node Health Check Operator".

After the cluster update is complete, you can edit or delete the remediation. Go to the **Compute** -> **NodeHealthCheck** page, click your node health check, and then click **Actions**, which shows a drop-down list.

:::