---
title: "Deploying {{ hcp }} on non-bare-metal agent machines"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deploying {{ hcp }} on non-bare-metal agent machines {id="hcp-deploy-non-bm"}
{%- set context = "hcp-deploy-non-bm" %}

To maintain infrastructure flexibility while using existing virtualization layers, you can deploy {{ hcp }} on non-bare-metal Agent machines. You can use the management benefits of the Agent platform when running on virtualized environments or other cloud-based virtual machines. {._abstract}

{%- set FeatureName = "{{ hcp_capital }} on non-bare-metal agent machines" %}
{% include "./snippets/technology-preview.md" %}

You can deploy {{ hcp }} by configuring a cluster to function as a hosting cluster. The hosting cluster is an {{ product_title }} cluster where the control planes are hosted. The hosting cluster is also known as the management cluster.


:::note

The management cluster is not the same thing as the _managed_ cluster. A managed cluster is a cluster that the hub cluster manages.

:::


The {{ hcp }} feature is enabled by default.

The {{ mce_short }} supports only the default `local-cluster` managed hub cluster. On {{ rh_rhacm_first }} 2.10, you can use the `local-cluster` managed hub cluster as the hosting cluster.

A _hosted cluster_ is an {{ product_title }} cluster with its API endpoint and control plane that are hosted on the hosting cluster. The hosted cluster includes the control plane and its corresponding data plane. You can use the {{ mce_short }} console or the `hcp` command-line interface (CLI) to create a hosted cluster.

The hosted cluster is automatically imported as a managed cluster. If you want to disable this automatic import feature, see "Disabling the automatic import of hosted clusters into {{ mce_short }}".

**Additional resources**
{._additional-resources}

*   [Disabling the automatic import of hosted clusters into {{ mce_short }}](/hosted_control_planes/hcp-import#hcp-import-disable_hcp-import)

{% leveloffset +1 %}{% include "./modules/hcp-non-bm-prepare.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Enabling the central infrastructure management service ({{ rh_rhacm_title }} documentation)](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.16/html/clusters/cluster_mce_overview#enable-cim)
*   [Recommended etcd practices](/etcd/etcd-practices#recommended-etcd-practices)
*   [Persistent storage using logical volume manager storage](/storage/persistent_storage_local/persistent-storage-using-lvms#persistent-storage-using-lvms_logical-volume-manager-storage)

{% leveloffset +2 %}{% include "./modules/hcp-non-bm-prereqs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Advanced configuration ({{ rh_rhacm_title }} documentation)](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#advanced-config-engine)
*   [Enabling the central infrastructure management service ({{ rh_rhacm_title }} documentation)](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#enable-cim)

{% leveloffset +2 %}{% include "./modules/hcp-non-bm-firewall-port-svc-reqs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-non-bm-infra-reqs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Recommended etcd practices](/etcd/etcd-practices#recommended-etcd-practices)
*   [Persistent storage using logical volume manager storage](/storage/persistent_storage_local/persistent-storage-using-lvms#persistent-storage-using-lvms_logical-volume-manager-storage)
*   [Disabling the automatic import of hosted clusters into {{ mce_short }}](/hosted_control_planes/hcp-import#hcp-import-disable_hcp-import)
*   [Manually enabling the {{ hcp }} feature](/hosted_control_planes/hcp-prepare/hcp-enable-disable#hcp-enable-manual_hcp-enable-disable)
*   [Disabling the {{ hcp }} feature](/hosted_control_planes/hcp-prepare/hcp-enable-disable#hcp-disable-feature_hcp-enable-disable)

{% leveloffset +1 %}{% include "./modules/hcp-non-bm-dns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-custom-dns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-non-bm-hc.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Manually importing a hosted cluster](/hosted_control_planes/hcp-import#hcp-import-manual_hcp-import)
*   [Configuring a custom API server certificate in a hosted cluster](/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)
*   [Extracting the release image digest](/hosted_control_planes/hcp-disconnected/hcp-deploy-dc-bm#hcp-dc-extract_hcp-deploy-dc-bm)

{% leveloffset +1 %}{% include "./modules/hcp-non-bm-hc-console.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating a credential for an on-premises environment ({{ rh_rhacm_title }} documentation)](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/clusters/cluster_mce_overview#creating-a-credential-for-an-on-premises-environment)
*   [Accessing the web console](/web_console/web-console#web-console-overview)
*   [Configuring a custom API server certificate in a hosted cluster](/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)

{% leveloffset +1 %}{% include "./modules/hcp-non-bm-hc-mirror.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Accessing the hosted cluster](/hosted_control_planes/hcp-manage/hcp-manage-bm#hcp-bm-access_hcp-manage-bm)
*   [Configuring a custom API server certificate in a hosted cluster](/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)

{% leveloffset +1 %}{% include "./modules/hcp-cluster-capabilities.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cluster-capabilities-ref.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cluster-capabilities-proc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-non-bm-verify.md" %}{% endleveloffset %}