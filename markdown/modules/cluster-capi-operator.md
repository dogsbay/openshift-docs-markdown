{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ cluster_capi_operator }} {id="cluster-capi-operator_{{ context }}"}

The {{ cluster_capi_operator }} maintains the lifecycle of Cluster API resources. This Operator is responsible for all administrative tasks related to deploying the Cluster API project within an {{ product_title }} cluster.


:::note

This Operator is available as a [Technology Preview](https://access.redhat.com/support/offerings/techpreview) for {{ aws_first }}, {{ gcp_first }}, {{ azure_first }}, {{ rh_openstack_first }}, and {{ vmw_first }} clusters.

:::


## Project {id="_project"}

[cluster-capi-operator](https://github.com/openshift/cluster-capi-operator)

## CRDs {id="_crds"}

*   `awsmachines.infrastructure.cluster.x-k8s.io`
    *   Scope: Namespaced
    *   CR: `awsmachine`
*   `gcpmachines.infrastructure.cluster.x-k8s.io`
    *   Scope: Namespaced
    *   CR: `gcpmachine`
*   `azuremachines.infrastructure.cluster.x-k8s.io`
    *   Scope: Namespaced
    *   CR: `azuremachine`
*   `openstackmachines.infrastructure.cluster.x-k8s.io`
    *   Scope: Namespaced
    *   CR: `openstackmachine`
*   `vspheremachines.infrastructure.cluster.x-k8s.io`
    *   Scope: Namespaced
    *   CR: `vspheremachine`
*   `metal3machines.infrastructure.cluster.x-k8s.io`
    *   Scope: Namespaced
    *   CR: `metal3machine`
*   `awsmachinetemplates.infrastructure.cluster.x-k8s.io`
    *   Scope: Namespaced
    *   CR: `awsmachinetemplate`
*   `gcpmachinetemplates.infrastructure.cluster.x-k8s.io`
    *   Scope: Namespaced
    *   CR: `gcpmachinetemplate`
*   `azuremachinetemplates.infrastructure.cluster.x-k8s.io`
    *   Scope: Namespaced
    *   CR: `azuremachinetemplate`
*   `openstackmachinetemplates.infrastructure.cluster.x-k8s.io`
    *   Scope: Namespaced
    *   CR: `openstackmachinetemplate`
*   `vspheremachinetemplates.infrastructure.cluster.x-k8s.io`
    *   Scope: Namespaced
    *   CR: `vspheremachinetemplate`
*   `metal3machinetemplates.infrastructure.cluster.x-k8s.io`
    *   Scope: Namespaced
    *   CR: `metal3machinetemplate`