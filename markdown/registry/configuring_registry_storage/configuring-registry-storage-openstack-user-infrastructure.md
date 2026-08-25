---
title: Configuring the registry for OpenStack user-provisioned infrastructure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the registry for OpenStack user-provisioned infrastructure {id="configuring-registry-storage-openstack-user-infrastructure"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-registry-storage-openstack-user-infrastructure" %}

You can configure the registry of a cluster that runs on your own {{ rh_openstack_first }} infrastructure.

{% leveloffset +1 %}{% include "./modules/registry-configuring-registry-storage-swift-trust.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-operator-config-resources-secret-openstack.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-configuring-storage-openstack-user-infra.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-operator-configuration-resource-overview-openstack-swift.md" %}{% endleveloffset %}