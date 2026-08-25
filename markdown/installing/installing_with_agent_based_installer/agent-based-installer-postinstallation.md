---
title: Postinstallation tasks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Postinstallation tasks {id="agent-based-installer-postinstallation"}
{%- set context = "agent-based-installer-postinstallation" %}

After using the Agent-based Installer to deploy your cluster, you can perform post-installation procedures such as customizing a `br-ex` bridge for nodes in your cluster. Customizing your cluster can help prepare the cluster for specific workloads and deployment requirements. {._abstract}

{% leveloffset +1 %}{% include "./modules/creating-manifest-file-customized-br-ex-bridge-post.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Converting to a dual-stack cluster network](/networking/ovn_kubernetes_network_provider/converting-to-dual-stack#nw-dual-stack-convert_converting-to-dual-stack)
*   [Expanding the cluster](/installing/installing_bare_metal/bare-metal-expanding-the-cluster#bare-metal-expanding-the-cluster)