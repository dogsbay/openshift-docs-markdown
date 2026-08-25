---
title: Cluster Operators reference
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Cluster Operators reference {id="operator-reference"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "operator-reference" %}

This reference guide indexes the _cluster Operators_ shipped by Red Hat that serve as the architectural foundation for {{ product_title }}. Cluster Operators are installed by default, unless otherwise noted, and are managed by the Cluster Version Operator (CVO). For more details on the control plane architecture, see [Operators in {{ product_title }}](/architecture/control-plane#operators-overview_control-plane).

Cluster administrators can view cluster Operators in the {{ product_title }} web console from the **Administration** -> **Cluster Settings** page.


:::note

Cluster Operators are not managed by Operator Lifecycle Manager (OLM) and the software catalog. OLM and the software catalog are part of the [Operator Framework](https://operatorframework.io/) used in {{ product_title }} for installing and running optional [add-on Operators](/architecture/control-plane#olm-operators_control-plane).

:::


Some of the following cluster Operators can be disabled prior to installation. For more information see [cluster capabilities](/installing/overview/cluster-capabilities#cluster-capabilities).

{% leveloffset +1 %}{% include "./modules/cluster-bare-metal-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Bare-metal capability](/installing/overview/cluster-capabilities#cluster-bare-metal-operator_cluster-capabilities)

{% leveloffset +1 %}{% include "./modules/cloud-credential-operator.md" %}{% endleveloffset %}

### Additional resources {id="additional-resources_cluster-op-ref-cco"}
*   [About the Cloud Credential Operator](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator)
*   [`CredentialsRequest` custom resource](/rest_api/security_apis/credentialsrequest-cloudcredential-openshift-io-v1#credentialsrequest-cloudcredential-openshift-io-v1)

{% leveloffset +1 %}{% include "./modules/cluster-authentication-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-autoscaler-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-cloud-controller-manager-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-capi-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-config-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-csi-snapshot-controller-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [CSI snapshot controller capability](/installing/overview/cluster-capabilities#cluster-csi-snapshot-controller-operator_cluster-capabilities)

{% leveloffset +1 %}{% include "./modules/cluster-image-registry-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-machine-approver-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-monitoring-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-network-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-samples-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [OpenShift samples capability](/installing/overview/cluster-capabilities#cluster-samples-operator_cluster-capabilities)

{% leveloffset +1 %}{% include "./modules/cluster-storage-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Storage capability](/installing/overview/cluster-capabilities#cluster-storage-operator_cluster-capabilities)

{% leveloffset +1 %}{% include "./modules/cluster-version-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding cluster version condition types](/updating/understanding_updates/intro-to-updates#understanding-clusterversion-conditiontypes_understanding-openshift-updates)

{% leveloffset +1 %}{% include "./modules/console-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Web console capability](/installing/overview/cluster-capabilities#console-operator_cluster-capabilities)

{% leveloffset +1 %}{% include "./modules/control-plane-machine-set-operator.md" %}{% endleveloffset %}

### Additional resources {id="additional-resources_cluster-op-ref-cpmso"}

*   [About control plane machine sets](/machine_management/control_plane_machine_management/cpmso-about#cpmso-about)
*   [`ControlPlaneMachineSet` custom resource](/rest_api/machine_apis/controlplanemachineset-machine-openshift-io-v1#controlplanemachineset-machine-openshift-io-v1)

{% leveloffset +1 %}{% include "./modules/cluster-dns-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/etcd-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ingress-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/insights-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Insights capability](/installing/overview/cluster-capabilities#insights-operator_cluster-capabilities)
*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)

{% leveloffset +1 %}{% include "./modules/kube-apiserver-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kube-controller-manager-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-kube-scheduler-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-kube-storage-version-migrator-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-api-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-config-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/operator-marketplace.md" %}{% endleveloffset %}

**Additional resources**

*   [Marketplace capability](/installing/overview/cluster-capabilities#marketplace-operator_cluster-capabilities)

{% leveloffset +1 %}{% include "./modules/node-tuning-operator.md" %}{% endleveloffset %}

### Additional resources {id="cluster-operators-ref-nto-addtl-resources"}
*   [About low latency](/scalability_and_performance/cnf-understanding-low-latency#cnf-understanding-low-latency_cnf-understanding-low-latency)

{% leveloffset +1 %}{% include "./modules/openshift-apiserver-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-openshift-controller-manager-operators.md" %}{% endleveloffset %}

## {{ olmv0_first }} Operators {id="cluster-operators-ref-olm"}


:::note

The following sections pertain to {{ olmv0_first }} that has been included with {{ product_title }} 4 since its initial release. For {{ olmv1 }}, see [{{ olmv1_first }} Operators](/operators/operator-reference#cluster-operators-ref-olmv1_operator-reference).

:::


{% leveloffset +2 %}{% include "./modules/olm-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-arch-olm-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-arch-catalog-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-arch-catalog-registry.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-architecture.md" %}{% endleveloffset %}

### Cluster Operators {id="_cluster_operators"}

In {{ product_title }}, OLM functionality is provided across a set of cluster Operators:


`operator-lifecycle-manager`
:   Provides the OLM Operator. Also informs cluster administrators if there are any installed Operators blocking cluster upgrade, based on their `olm.maxOpenShiftVersion` properties. For more information, see "Controlling Operator compatibility with {{ product_title }} versions".

`operator-lifecycle-manager-catalog`
:   Provides the Catalog Operator.

`operator-lifecycle-manager-packageserver`
:   Represents an API extension server responsible for collecting metadata from all catalogs on the cluster and serves the user-facing `PackageManifest` API.

### Additional resources {id="cluster-operators-ref-olm-addtl-resources"}
*   [Understanding Operator Lifecycle Manager (OLM)](/operators/understanding/olm/olm-understanding-olm#olm-understanding-olm)

{% leveloffset +1 %}{% include "./modules/olmv1-clusteroperator.md" %}{% endleveloffset %}

### Additional resources {id="cluster-operators-ref-olmv1-addtl-resources"}
*   [Extensions overview](/extensions/index#extensions-overview)
*   [Compatibility with {{ product_title }} versions](/extensions/ce/update-paths#olmv1-ocp-compat_update-paths)

{% leveloffset +1 %}{% include "./modules/openshift-service-ca-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/vsphere-problem-detector-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Using the vSphere Problem Detector Operator](/installing/installing_vsphere/using-vsphere-problem-detector-operator#using-vsphere-problem-detector-operator)