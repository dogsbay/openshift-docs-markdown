---
title: Enabling user permissions to clone data volumes across namespaces
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Enabling user permissions to clone data volumes across namespaces {id="virt-enabling-user-permissions-to-clone-datavolumes"}
{%- set context = "virt-enabling-user-permissions-to-clone-datavolumes" %}

By default, users cannot clone resources between namespaces. To enable cloning, a user with the `cluster-admin` role must create and bind a cluster role that grants the required permissions. {._abstract}

To enable a user to clone a virtual machine to another namespace, a user with the `cluster-admin` role must create a new cluster role. Bind this cluster role to a user to enable them to clone virtual machines to the destination namespace.

{% leveloffset +1 %}{% include "./modules/virt-creating-rbac-cloning-dvs.md" %}{% endleveloffset %}