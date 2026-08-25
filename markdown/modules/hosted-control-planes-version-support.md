{%- set _mod_docs_content_type = "CONCEPT" %}
# Versioning for {{ hcp }} {id="hosted-control-planes-version-support_{{ context }}"}

The {{ hcp }} feature includes several components that might require independent versioning and support levels. {._abstract}

Those components are as follows:

*   Management cluster
*   HyperShift Operator
*   {{ hcp_capital }} (`hcp`) command-line interface (CLI)
*   `hypershift.openshift.io` API
*   Control Plane Operator

## Management cluster {id="hcp-versioning-mgmt_{{ context }}"}

In management clusters for production use, you need {{ mce }}, which is available through the software catalog. The {{ mce_short }} bundles a supported build of the HyperShift Operator. For your management clusters to remain supported, you must use the version of {{ product_title }} that {{ mce_short }} runs on. In general, a new release of {{ mce_short }} runs on the following versions of {{ product_title }}:

*   The latest General Availability version of {{ product_title }}
*   Two versions before the latest General Availability version of {{ product_title }}

The full list of {{ product_title }} versions that you can install through the HyperShift Operator on a management cluster depends on the version of your HyperShift Operator. However, the list always includes at least the same {{ product_title }} version as the management cluster and two previous minor versions relative to the management cluster. For example, if the management cluster is running 4.17 and a supported version of {{ mce_short }}, the HyperShift Operator can install 4.17, 4.16, 4.15, and 4.14 hosted clusters.

With each major, minor, or patch version release of {{ product_title }}, two components of {{ hcp }} are released:

*   The HyperShift Operator
*   The `hcp` command-line interface (CLI)

## HyperShift Operator {id="hcp-versioning-ho_{{ context }}"}

The HyperShift Operator manages the lifecycle of hosted clusters that are represented by the `HostedCluster` API resources. The HyperShift Operator is released with each {{ product_title }} release. The HyperShift Operator creates the `supported-versions` config map in the `hypershift` namespace. The config map contains the supported hosted cluster versions.

You can host different versions of control planes on the same management cluster.

```yaml title="Example supported-versions config map object"
    apiVersion: v1
    data:
      supported-versions: '{"versions":["4.22"]}'
    kind: ConfigMap
    metadata:
      labels:
        hypershift.openshift.io/supported-versions: "true"
      name: supported-versions
      namespace: hypershift
```

## {{ hcp }} CLI {id="hcp-versioning-cli_{{ context }}"}

You can use the `hcp` CLI to create hosted clusters. You can download the CLI from {{ mce_short }}. When you run the `hcp version` command, the output shows the latest {{ product_title }} that the CLI supports against your `kubeconfig` file.

## hypershift.openshift.io API {id="hcp-versioning-api_{{ context }}"}

You can use the `hypershift.openshift.io` API resources, such as, `HostedCluster` and `NodePool`, to create and manage {{ product_title }} clusters at scale. A `HostedCluster` resource contains the control plane and common data plane configuration. When you create a `HostedCluster` resource, you have a fully functional control plane with no attached nodes. A `NodePool` resource is a scalable set of worker nodes that is attached to a `HostedCluster` resource.

The API version policy generally aligns with the policy for Kubernetes API versioning.

Updates for {{ hcp }} involve updating the hosted cluster and the node pools. For more information, see "Updates for {{ hcp }}".

## Control Plane Operator {id="hcp-versioning-cpo_{{ context }}"}

The Control Plane Operator is released as part of each {{ product_title }} payload release image for the following architectures:

*   amd64
*   arm64
*   multi-arch