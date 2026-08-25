---
title: Configuring a private cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring a private cluster {id="configuring-private-cluster"}
{%- set context = "configuring-private-cluster" %}

After installing {{ product_title }}, you can restrict access to cluster DNS, ingress, API server, and Azure registry storage endpoints to make core cluster services private. {._abstract}

{% leveloffset +1 %}{% include "./modules/private-clusters-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/private-clusters-setting-dns-private.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/private-clusters-setting-ingress-private.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/private-clusters-setting-api-private-aws.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Updating the control plane configuration](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-config-update_cpmso-managing-machines)

{% leveloffset +1 %}{% include "./modules/private-clusters-setting-api-private-azure.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring the Ingress Controller endpoint publishing scope to Internal](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/nw-configuring-ingress-controller-endpoint-publishing-strategy#nw-ingresscontroller-change-internal_nw-configuring-ingress-controller-endpoint-publishing-strategy)

{% leveloffset +1 %}{% include "./modules/registry-configuring-private-storage-endpoint-azure.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-private-storage-endpoint-azure-vnet-subnet-iro-discovery.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-private-storage-endpoint-azure-user-provided-vnet-subnet.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/disabling-redirect-private-storage-endpoint-azure.md" %}{% endleveloffset %}