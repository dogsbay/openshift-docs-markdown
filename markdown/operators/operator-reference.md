---
title: Cluster Operators reference
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Cluster Operators reference {id="operator-reference"}
{%- set context = "operator-reference" %}

Cluster Operators are the architectural foundation for {{ product_title }} and are installed and managed by default by the Cluster Version Operator (CVO). {._abstract}

Cluster administrators can view cluster Operators in the {{ product_title }} web console from the **Administration** → **Cluster Settings** page.


:::note

Cluster Operators are not managed by Operator Lifecycle Manager (OLM) and the software catalog. OLM and the software catalog are part of the Operator Framework used in {{ product_title }} for installing and running optional add-on Operators.

:::


Some of the following cluster Operators can be disabled before installation. For more information see cluster capabilities.

**Additional resources**
{._additional-resources}

*   [Operators in {{ product_title }}](/architecture/control-plane#operators-overview_control-plane)
*   [Operator Framework](https://operatorframework.io/)
*   [add-on Operators](/architecture/control-plane#olm-operators_control-plane)
*   [cluster capabilities](/installing/overview/cluster-capabilities#cluster-capabilities)

{% leveloffset +1 %}{% include "./modules/cluster-bare-metal-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Bare-metal capability](/installing/overview/cluster-capabilities#cluster-bare-metal-operator_cluster-capabilities)
*   [cluster-baremetal-operator](https://github.com/openshift/cluster-baremetal-operator)

{% leveloffset +1 %}{% include "./modules/cloud-credential-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About the Cloud Credential Operator](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator)
*   [`CredentialsRequest` custom resource](/rest_api/security_apis/credentialsrequest-cloudcredential-openshift-io-v1#credentialsrequest-cloudcredential-openshift-io-v1)
*   [openshift-cloud-credential-operator](https://github.com/openshift/cloud-credential-operator)

{% leveloffset +1 %}{% include "./modules/cluster-authentication-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [`cluster-authentication-operator`](https://github.com/openshift/cluster-authentication-operator)

{% leveloffset +1 %}{% include "./modules/cluster-autoscaler-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [cluster-autoscaler-operator](https://github.com/openshift/cluster-autoscaler-operator)

{% leveloffset +1 %}{% include "./modules/cluster-cloud-controller-manager-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [cluster-cloud-controller-manager-operator](https://github.com/openshift/cluster-cloud-controller-manager-operator)

{% leveloffset +1 %}{% include "./modules/cluster-capi-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [cluster-capi-operator](https://github.com/openshift/cluster-capi-operator)

{% leveloffset +1 %}{% include "./modules/cluster-config-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [cluster-config-operator](https://github.com/openshift/cluster-config-operator)

{% leveloffset +1 %}{% include "./modules/cluster-csi-snapshot-controller-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [CSI snapshot controller capability](/installing/overview/cluster-capabilities#cluster-csi-snapshot-controller-operator_cluster-capabilities)
*   [cluster-csi-snapshot-controller-operator](https://github.com/openshift/cluster-csi-snapshot-controller-operator)

{% leveloffset +1 %}{% include "./modules/cluster-image-registry-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [cluster-image-registry-operator](https://github.com/openshift/cluster-image-registry-operator)

{% leveloffset +1 %}{% include "./modules/cluster-machine-approver-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [cluster-machine-approver-operator](https://github.com/openshift/cluster-machine-approver)

{% leveloffset +1 %}{% include "./modules/cluster-monitoring-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [openshift-monitoring](https://github.com/openshift/cluster-monitoring-operator)

{% leveloffset +1 %}{% include "./modules/cluster-network-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-samples-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [OpenShift samples capability](/installing/overview/cluster-capabilities#cluster-samples-operator_cluster-capabilities)
*   [cluster-samples-operator](https://github.com/openshift/cluster-samples-operator)

{% leveloffset +1 %}{% include "./modules/cluster-storage-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Storage capability](/installing/overview/cluster-capabilities#cluster-storage-operator_cluster-capabilities)
*   [cluster-storage-operator](https://github.com/openshift/cluster-storage-operator)

{% leveloffset +1 %}{% include "./modules/cluster-version-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding cluster version condition types](/updating/understanding_updates/intro-to-updates#understanding-clusterversion-conditiontypes_understanding-openshift-updates)
*   [cluster-version-operator](https://github.com/openshift/cluster-version-operator)

{% leveloffset +1 %}{% include "./modules/console-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Web console capability](/installing/overview/cluster-capabilities#console-operator_cluster-capabilities)
*   [console-operator](https://github.com/openshift/console-operator)

{% leveloffset +1 %}{% include "./modules/control-plane-machine-set-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About control plane machine sets](/machine_management/control_plane_machine_management/cpmso-about#cpmso-about)
*   [`ControlPlaneMachineSet` custom resource](/rest_api/machine_apis/controlplanemachineset-machine-openshift-io-v1#controlplanemachineset-machine-openshift-io-v1)
*   [cluster-control-plane-machine-set-operator](https://github.com/openshift/cluster-control-plane-machine-set-operator)

{% leveloffset +1 %}{% include "./modules/cluster-dns-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [cluster-dns-operator](https://github.com/openshift/cluster-dns-operator)

{% leveloffset +1 %}{% include "./modules/etcd-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [cluster-etcd-operator](https://github.com/openshift/cluster-etcd-operator/)

{% leveloffset +1 %}{% include "./modules/ingress-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [openshift-ingress-operator](https://github.com/openshift/cluster-ingress-operator)

{% leveloffset +1 %}{% include "./modules/insights-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Insights capability](/installing/overview/cluster-capabilities#insights-operator_cluster-capabilities)
*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
*   [insights-operator](https://github.com/openshift/insights-operator)

{% leveloffset +1 %}{% include "./modules/kube-apiserver-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [`openshift-kube-apiserver-operator`](https://github.com/openshift/cluster-kube-apiserver-operator)

{% leveloffset +1 %}{% include "./modules/kube-controller-manager-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [`cluster-kube-controller-manager-operator`](https://github.com/openshift/cluster-kube-controller-manager-operator)

{% leveloffset +1 %}{% include "./modules/cluster-kube-scheduler-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [cluster-kube-scheduler-operator](https://github.com/openshift/cluster-kube-scheduler-operator)

{% leveloffset +1 %}{% include "./modules/cluster-kube-storage-version-migrator-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [cluster-kube-storage-version-migrator-operator](https://github.com/openshift/cluster-kube-storage-version-migrator-operator)

{% leveloffset +1 %}{% include "./modules/machine-api-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [machine-api-operator](https://github.com/openshift/machine-api-operator)

{% leveloffset +1 %}{% include "./modules/machine-config-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [openshift-machine-config-operator](https://github.com/openshift/machine-config-operator)

{% leveloffset +1 %}{% include "./modules/operator-marketplace.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Marketplace capability](/installing/overview/cluster-capabilities#marketplace-operator_cluster-capabilities)
*   [operator-marketplace](https://github.com/operator-framework/operator-marketplace)

{% leveloffset +1 %}{% include "./modules/node-tuning-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About low latency](/scalability_and_performance/cnf-understanding-low-latency#cnf-understanding-low-latency_cnf-understanding-low-latency)
*   [cluster-node-tuning-operator](https://github.com/openshift/cluster-node-tuning-operator)

{% leveloffset +1 %}{% include "./modules/openshift-apiserver-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [openshift-apiserver-operator](https://github.com/openshift/cluster-openshift-apiserver-operator)

{% leveloffset +1 %}{% include "./modules/cluster-openshift-controller-manager-operators.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [cluster-openshift-controller-manager-operator](https://github.com/openshift/cluster-openshift-controller-manager-operator)

{% leveloffset +1 %}{% include "./modules/cluster-operators-ref-olm-intro.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-arch-olm-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-arch-catalog-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-arch-catalog-registry.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-architecture.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cluster-operators-ref-olm-list.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding Operator Lifecycle Manager (OLM)](/operators/understanding/olm/olm-understanding-olm#olm-understanding-olm)

{% leveloffset +1 %}{% include "./modules/olmv1-clusteroperator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Extensions overview](/extensions/index#extensions-overview)
*   [Compatibility with {{ product_title }} versions](/extensions/ce/update-paths#olmv1-ocp-compat_update-paths)

{% leveloffset +1 %}{% include "./modules/openshift-service-ca-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [openshift-service-ca-operator](https://github.com/openshift/service-ca-operator)

{% leveloffset +1 %}{% include "./modules/vsphere-problem-detector-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Using the vSphere Problem Detector Operator](/installing/installing_vsphere/using-vsphere-problem-detector-operator#using-vsphere-problem-detector-operator)