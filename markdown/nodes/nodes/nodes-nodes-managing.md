---
title: Managing nodes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing nodes {id="nodes-nodes-managing"}

{%- set context = "nodes-nodes-managing" %}

{{ product_title }} uses a KubeletConfig custom resource (CR) to manage the configuration of nodes. By creating an instance of a `KubeletConfig` object, a managed machine config is created to override setting on the node. {._abstract}


:::note

Logging in to remote machines for the purpose of changing their configuration is not supported.

:::


{% leveloffset +1 %}{% include "./modules/nodes-nodes-managing-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-working-master-schedulable.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-working-setting-booleans.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-kernel-arguments.md" %}{% endleveloffset %}

{% if openshift_webscale %}
{% leveloffset +1 %}{% include "./modules/nodes-nodes-rtkernel-arguments.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-parallel-container-pulls-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-nodes-parallel-container-pulls-configure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-control-plane-osp-migrating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-psi-enable.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Managing control plane machines with control plane machine sets](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-managing-machines)
*   [PSI - Pressure Stall Information (Linux Kernel documentation)](https://docs.kernel.org/accounting/psi.html)