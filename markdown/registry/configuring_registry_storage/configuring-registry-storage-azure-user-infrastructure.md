---
title: Configuring the registry for Azure user-provisioned infrastructure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the registry for Azure user-provisioned infrastructure {id="configuring-registry-storage-azure-user-infrastructure"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-registry-storage-azure-user-infrastructure" %}

Save your container images to a durable storage location by configuring the built-in image registry to use dedicated Azure storage. This setup provides persistent scalable storage for your registry, separate from ephemeral cluster storage.

{% leveloffset +1 %}{% include "./modules/registry-operator-config-resources-secret-azure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-configuring-storage-azure-user-infra.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-configuring-storage-azure-gov-cloud.md" %}{% endleveloffset %}