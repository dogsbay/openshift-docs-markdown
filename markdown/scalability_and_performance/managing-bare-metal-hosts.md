---
title: Managing bare-metal hosts
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Managing bare-metal hosts {id="managing-bare-metal-hosts"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "managing-bare-metal-hosts" %}

You can configure bare-metal hosts directly within {{ product_title }}. To provision and manage nodes in a bare-metal cluster, use `Machine` and `MachineSet` custom resources (CRs).

{% leveloffset +1 %}{% include "./modules/about-bare-metal-hosts-and-nodes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/maintaining-bare-metal-hosts.md" %}{% endleveloffset %}

**Additional resources**

*   [Adding compute machines to bare metal](/machine_management/user_infra/adding-bare-metal-compute-user-infra#adding-bare-metal-compute-user-infra)

{% leveloffset +2 %}{% include "./modules/adding-bare-metal-host-to-cluster-using-web-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/adding-bare-metal-host-to-cluster-using-yaml.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding secrets](/nodes/pods/nodes-pods-secrets#nodes-pods-secrets-about_nodes-pods-secrets)

{% leveloffset +2 %}{% include "./modules/automatically-scaling-machines-to-available-bare-metal-hosts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/removing-bare-metal-hosts-from-provisioner.md" %}{% endleveloffset %}

**Additional resources**

*   [Expanding the cluster](/installing/installing_bare_metal/bare-metal-expanding-the-cluster#bare-metal-expanding-the-cluster)
*   [MachineHealthChecks on bare metal](/machine_management/deploying-machine-health-checks#machine-health-checks-bare-metal_deploying-machine-health-checks)

{% leveloffset +2 %}{% include "./modules/powering-off-bare-metal-hosts-web-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/powering-off-bare-metal-hosts-cli.md" %}{% endleveloffset %}