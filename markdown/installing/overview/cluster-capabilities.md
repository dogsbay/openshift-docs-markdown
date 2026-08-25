---
title: Cluster capabilities
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Cluster capabilities {id="cluster-capabilities"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cluster-capabilities" %}

As a cluster administrator, you can use cluster capabilities to enable or disable optional components before installation. Additionally, you can enable cluster capabilities at anytime after installation.


:::note

You cannot disable a cluster capability after it is enabled.

:::


{% leveloffset +1 %}{% include "./modules/enabling-cluster-capabilities.md" %}{% endleveloffset %}

{% include "./snippets/capabilities-table.md" %}

**Additional resources**

*   [Installing a cluster on AWS with customizations](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-customizations)
*   [Installing a cluster on {{ gcp_short }} with customizations](/installing/installing_gcp/installing-gcp-customizations#installing-gcp-customizations)

{% leveloffset +1 %}{% include "./modules/explanation-of-capabilities.md" %}{% endleveloffset %}

**Additional resources**

*   [Cluster Operators reference](/operators/operator-reference#cluster-operator-reference)

{% leveloffset +2 %}{% include "./modules/cluster-bare-metal-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Deploying installer-provisioned clusters on bare metal](/installing/installing_bare_metal/ipi/ipi-install-overview#ipi-install-overview)
*   [Preparing for bare metal cluster installation](/installing/installing_bare_metal/preparing-to-install-on-bare-metal#preparing-to-install-on-bare-metal)
*   [Configuration using the Bare Metal Operator](/installing/installing_bare_metal/bare-metal-postinstallation-configuration#bmo-config-using-bare-metal-operator_bare-metal-postinstallation-configuration)

{% leveloffset +2 %}{% include "./modules/build-config-capability.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cluster-cloud-controller-manager-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Technology Preview](https://access.redhat.com/support/offerings/techpreview)
*   [`cluster-cloud-controller-manager-operator`](https://github.com/openshift/cluster-cloud-controller-manager-operator)

{% leveloffset +2 %}{% include "./modules/cloud-credential-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [About the Cloud Credential Operator](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator)
*   [`openshift-cloud-credential-operator`](https://github.com/openshift/cloud-credential-operator)

{% leveloffset +2 %}{% include "./modules/cluster-image-registry-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Image Registry Operator in {{ product_title }}](/registry/configuring-registry-operator#configuring-registry-operator)
*   [Automatically generated secrets](/nodes/pods/nodes-pods-secrets#auto-generated-sa-token-secrets_nodes-pods-secrets)
*   [cluster-image-registry-operator](https://github.com/openshift/cluster-image-registry-operator)

{% leveloffset +2 %}{% include "./modules/cluster-storage-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [cluster-storage-operator](https://github.com/openshift/cluster-storage-operator)

{% leveloffset +2 %}{% include "./modules/console-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Web console overview](/web_console/web-console-overview#web-console-overview)
*   [console-operator](https://github.com/openshift/console-operator)

{% leveloffset +2 %}{% include "./modules/cluster-csi-snapshot-controller-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [CSI volume snapshots](/storage/container_storage_interface/persistent-storage-csi-snapshots#persistent-storage-csi-snapshots)
*   [cluster-csi-snapshot-controller-operator](https://github.com/openshift/cluster-csi-snapshot-controller-operator)

{% leveloffset +2 %}{% include "./modules/deployment-config-capability.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ingress-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [openshift-ingress-operator](https://github.com/openshift/cluster-ingress-operator)

{% leveloffset +2 %}{% include "./modules/insights-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Using {{ insights_operator }}](/support/remote_health_monitoring/using-insights-operator#using-insights-operator)
*   [{{ hybrid_console }}](https://console.redhat.com/)
*   [insights-operator](https://github.com/openshift/insights-operator)

{% leveloffset +2 %}{% include "./modules/machine-api-capability.md" %}{% endleveloffset %}

**Additional resources**

*   [Overview of machine management](/machine_management/index#index)
*   [Machine API Operator](/operators/operator-reference#machine-api-operator_operator-reference)
*   [Cluster Autoscaler Operator](/operators/operator-reference#cluster-autoscaler-operator_operator-reference)
*   [Control Plane Machine Set Operator](/operators/operator-reference#control-plane-machine-set-operator_operator-reference)

{% leveloffset +2 %}{% include "./modules/operator-marketplace.md" %}{% endleveloffset %}

**Additional resources**

*   [Red Hat-provided Operator catalogs](/operators/understanding/olm-rh-catalogs#olm-rh-catalogs)
*   [operator-marketplace](https://github.com/operator-framework/operator-marketplace)

{% leveloffset +2 %}{% include "./modules/node-tuning-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Using the Node Tuning Operator](/scalability_and_performance/using-node-tuning-operator#using-node-tuning-operator)
*   [cluster-node-tuning-operator](https://github.com/openshift/cluster-node-tuning-operator)

{% leveloffset +2 %}{% include "./modules/cluster-samples-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring the Cluster Samples Operator](/openshift_images/configuring-samples-operator#configuring-samples-operator)
*   [cluster-samples-operator](https://github.com/openshift/cluster-samples-operator)

{% leveloffset +2 %}{% include "./modules/olm-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Operator Lifecycle Manager concepts and resources](/operators/understanding/olm/olm-understanding-olm#olm-understanding-olm)
*   [Operator Framework](https://operatorframework.io/)

{% leveloffset +2 %}{% include "./modules/olmv1-clusteroperator.md" %}{% endleveloffset %}

**Additional resources**

*   [Extensions overview](/extensions/index#olmv1-about)
*   [operator-framework/operator-controller](https://github.com/operator-framework/operator-controller)
*   [operator-framework/catalogd](https://github.com/operator-framework/catalogd)

{% leveloffset +1 %}{% include "./modules/viewing-cluster-capabilities.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/enabling-baseline-capability-set.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/enabling-additional-enabled-capabilities.md" %}{% endleveloffset %}