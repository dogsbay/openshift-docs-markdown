---
title: "Configuring the registry for {{ gcp_short }} user-provisioned infrastructure"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the registry for {{ gcp_short }} user-provisioned infrastructure {id="configuring-registry-storage-gcp-user-infrastructure"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-registry-storage-gcp-user-infrastructure" %}

Save your container images to a durable storage location by configuring the built-in image registry to use dedicated {{ gcp_short }} storage. This setup provides persistent scalable storage for your registry, separate from ephemeral cluster storage.

{% leveloffset +1 %}{% include "./modules/registry-operator-config-resources-secret-gcp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-configuring-storage-gcp-user-infra.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-operator-configuration-resource-overview-gcp-gcs.md" %}{% endleveloffset %}