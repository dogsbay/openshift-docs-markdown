---
title: Scaling a user-provisioned cluster with the Bare Metal Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Scaling a user-provisioned cluster with the Bare Metal Operator {id="scaling-a-user-provisioned-cluster-with-the-bare-metal-operator"}
{%- set context = "scaling-a-user-provisioned-cluster-with-the-bare-metal-operator" %}

After deploying a user-provisioned infrastructure cluster, you can use the Bare Metal Operator (BMO) and other metal^3^ components to scale bare-metal hosts in the cluster. This approach helps you to scale a user-provisioned cluster in a more automated way.

{% leveloffset +1 %}{% include "./modules/about-scaling-a-user-provisioned-installation-with-the-bare-metal-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/upi-prerequisites-for-scaling-a-upi-cluster.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/upi-limitations-for-scaling-a-upi-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-a-provisioning-resource-to-scale-user-provisioned-clusters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/upi-provisioning-new-hosts-in-a-upi-cluster.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Preparing the bare-metal node](/installing/installing_bare_metal/bare-metal-expanding-the-cluster#preparing-the-bare-metal-node_bare-metal-expanding)
*   [Root device hints](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#root-device-hints_ipi-install-installation-workflow)
*   [Diagnosing a duplicate MAC address when provisioning a new host in the cluster](/installing/installing_bare_metal/bare-metal-expanding-the-cluster#ipi-install-diagnosing-duplicate-mac-address_bare-metal-expanding)

{% leveloffset +1 %}{% include "./modules/upi-managing-existing-hosts-in-a-upi-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/upi-removing-hosts-from-a-upi-cluster.md" %}{% endleveloffset %}