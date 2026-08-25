{%- set _mod_docs_content_type = "CONCEPT" %}
# Updates of the {{ product_title }} version in a hosted cluster {id="hcp-get-upgrade-versions_{{ context }}"}

{{ hcp_capital }} enables the decoupling of updates between the control plane and the data plane. {._abstract}

As a cluster service provider or cluster administrator, you can manage the control plane and the data separately.

You can update a control plane by modifying the `HostedCluster` custom resource (CR) and a node by modifying its `NodePool` CR. Both the `HostedCluster` and `NodePool` CRs specify an {{ product_title }} release image in a `.release` field.

To keep your hosted cluster fully operational during an update process, the control plane and the node versions must be compatible. For more information, see "Hosted cluster and node pool version skew policy".

## The {{ mce_short }} hub management cluster {id="hcp-mce-hub-cluster_{{ context }}"}

The {{ mce }} requires a specific {{ product_title }} version for the management cluster to remain in a supported state. You can install the {{ mce_short }} from the software catalog in the {{ product_title }} web console.

For more information, see the support matrixes for the {{ mce_short }} versions.

The {{ mce_short }} supports the following {{ product_title }} versions:

*   The latest unreleased version
*   The latest released version
*   Two versions before the latest released version

You can also get the {{ mce_short }} version as a part of {{ rh_rhacm_first }}.

## Supported {{ product_title }} versions in a hosted cluster {id="hcp-supported-ocp-versions_{{ context }}"}

When deploying a hosted cluster, the {{ product_title }} version of the management cluster does not affect the {{ product_title }} version of a hosted cluster.

The HyperShift Operator creates the `supported-versions` ConfigMap in the `hypershift` namespace. The `supported-versions` ConfigMap describes the range of supported {{ product_title }} versions that you can deploy.

See the following example of the `supported-versions` ConfigMap:

```yaml
apiVersion: v1
data:
    server-version: 2f6cfe21a0861dea3130f3bed0d3ae5553b8c28b
    supported-versions: '{"versions":["4.17","4.16","4.15","4.14"]}'
kind: ConfigMap
metadata:
    creationTimestamp: "2024-06-20T07:12:31Z"
    labels:
        hypershift.openshift.io/supported-versions: "true"
    name: supported-versions
    namespace: hypershift
    resourceVersion: "927029"
    uid: f6336f91-33d3-472d-b747-94abae725f70
```


:::important

To create a hosted cluster, you must use the {{ product_title }} version from the support version range. However, the {{ mce_short }} can manage only between `n+1` and `n-2` {{ product_title }} versions, where `n` defines the current minor version. You can check the {{ mce_short }} support matrix to ensure the hosted clusters managed by the {{ mce_short }} are within the supported {{ product_title }} range.

:::


To deploy a higher version of a hosted cluster on {{ product_title }}, you must update the {{ mce_short }} to a new minor version release to deploy a new version of the Hypershift Operator. Upgrading the {{ mce_short }} to a new patch, or z-stream, release does not update the HyperShift Operator to the next version.

See the following example output of the `hcp version` command that shows the supported {{ product_title }} versions for {{ product_title }} 4.16 in the management cluster:

```terminal
Client Version: openshift/hypershift: fe67b47fb60e483fe60e4755a02b3be393256343. Latest supported OCP: 4.17.0
Server Version: 05864f61f24a8517731664f8091cedcfc5f9b60d
Server Supports OCP Versions: 4.17, 4.16, 4.15, 4.14
```