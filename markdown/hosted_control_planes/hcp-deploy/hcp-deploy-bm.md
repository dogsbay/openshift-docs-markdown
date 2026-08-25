---
title: "Deploying {{ hcp }} on bare metal with the Agent platform"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deploying {{ hcp }} on bare metal with the Agent platform {id="hcp-deploy-bm"}
{%- set context = "hcp-deploy-bm" %}

To maximize hardware performance and maintain control over your physical infrastructure, you can deploy {{ hcp }} on bare metal by using the Agent platform. This deployment method reduces virtualization overhead and offers low-latency networking for performance-intensive workloads.

{% leveloffset +1 %}{% include "./modules/hcp-bm-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Disabling the automatic import of hosted clusters into {{ mce_short }}](/hosted_control_planes/hcp-import#hcp-import-disable_hcp-import)

{% leveloffset +1 %}{% include "./modules/hcp-bm-prepare.md" %}{% endleveloffset %}

**Additional resources**

*   [Recommended etcd practices](/etcd/etcd-practices#recommended-etcd-practices)
*   [Persistent storage using {{ lvms }}](/storage/persistent_storage_local/persistent-storage-using-lvms#persistent-storage-using-lvms_persistent-storage-using-lvms)

{% leveloffset +2 %}{% include "./modules/hcp-bm-firewall-port-svc-reqs.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring the cluster-wide proxy](/networking/configuring_network_settings/enable-cluster-wide-proxy#enable-cluster-wide-proxy)

{% leveloffset +2 %}{% include "./modules/hcp-bm-infra-reqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-bm-prereqs.md" %}{% endleveloffset %}

**Additional resources**

*   [Advanced configuration](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#advanced-config-engine)
*   [Enabling the central infrastructure management service](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#enable-cim)
*   [Installing the {{ hcp }} command-line interface](/hosted_control_planes/hcp-prepare/hcp-cli#hcp-cli-terminal_hcp-cli)

{% leveloffset +1 %}{% include "./modules/hcp-bm-dns.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-custom-dns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-bm-infraenv.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-bm-add-nodes-to-inventory.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-bm-create-infra-console.md" %}{% endleveloffset %}

**Additional resources**

*   [Accessing the web console](/web_console/web-console#web-console-overview)

{% leveloffset +1 %}{% include "./modules/hcp-bm-hc-create.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-bm-hc.md" %}{% endleveloffset %}

**Additional resources**

*   [Manually importing a hosted cluster](/hosted_control_planes/hcp-import#hcp-import)
*   [Extracting the release image digest](/hosted_control_planes/hcp-disconnected/hcp-deploy-dc-bm#hcp-dc-extract_hcp-deploy-dc-bm)
*   [Configuring a custom API server certificate in a hosted cluster](/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)

{% leveloffset +2 %}{% include "./modules/hcp-bm-hc-console.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating a credential for an on-premises environment](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/clusters/cluster_mce_overview#creating-a-credential-for-an-on-premises-environment)
*   [Accessing the web console](/web_console/web-console#web-console-overview)
*   [Configuring a custom API server certificate in a hosted cluster](/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)

{% leveloffset +2 %}{% include "./modules/hcp-bm-hc-mirror.md" %}{% endleveloffset %}

**Additional resources**

*   [Extracting the release image digest](/hosted_control_planes/hcp-disconnected/hcp-deploy-dc-bm#hcp-dc-extract_hcp-deploy-dc-bm)
*   [Accessing the hosted cluster](/hosted_control_planes/hcp-manage/hcp-manage-bm#hcp-bm-access_hcp-manage-bm)
*   [Configuring a custom API server certificate in a hosted cluster](/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)

{% leveloffset +1 %}{% include "./modules/hcp-cluster-capabilities.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cluster-capabilities-ref.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cluster-capabilities-proc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-bm-verify.md" %}{% endleveloffset %}