---
title: "Uninstalling a cluster on {{ rh_openstack }} from your own infrastructure"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Uninstalling a cluster on {{ rh_openstack }} from your own infrastructure {id="uninstalling-openstack-user"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "uninstalling-openstack-user" %}

You can remove a cluster that you deployed to {{ rh_openstack_first }} on user-provisioned infrastructure.

{% leveloffset +1 %}{% include "./modules/installation-osp-downloading-modules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-uninstall-infra.md" %}{% endleveloffset %}