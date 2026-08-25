---
title: "Configuring the registry for {{ rh_openstack }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the registry for {{ rh_openstack }} {id="configuring-registry-storage-openstack"}
{%- set context = "configuring-registry-storage-openstack" %}

You configure the image registry to use custom storage on clusters that run on {{ rh_openstack }}.
You must configure custom storage to use a Cinder volume in a specific availability zone.

{% leveloffset +1 %}{% include "./modules/installation-registry-osp-creating-custom-pvc.md" %}{% endleveloffset %}