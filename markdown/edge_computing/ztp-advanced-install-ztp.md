---
title: Advanced managed cluster configuration with ClusterInstance resources
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Advanced managed cluster configuration with ClusterInstance resources {id="ztp-advanced-install-ztp"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ztp-advanced-install-ztp" %}

You can use `ClusterInstance` custom resources (CRs) to deploy custom functionality and configurations in your managed clusters at installation time.

{% leveloffset +1 %}{% include "./modules/ztp-customizing-the-install-extra-manifests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-configuring-cluster-network-mtu.md" %}{% endleveloffset %}

**Additional resources**

*   [Customizing extra installation manifests in the {{ ztp }} pipeline](/edge_computing/ztp-advanced-install-ztp#ztp-customizing-the-install-extra-manifests_ztp-advanced-install-ztp)

{% leveloffset +1 %}{% include "./modules/ztp-deleting-node-using-siteconfig.md" %}{% endleveloffset %}