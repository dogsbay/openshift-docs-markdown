---
title: Configuring the registry for AWS user-provisioned infrastructure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the registry for AWS user-provisioned infrastructure {id="configuring-registry-storage-aws-user-infrastructure"}
{%- set context = "configuring-registry-storage-aws-user-infrastructure" %}

Save your container images to a durable storage location by configuring the built-in image registry to use dedicated {{ aws_short }} storage. This setup provides persistent scalable storage for your registry, separate from ephemeral cluster storage. {._abstract}

{% leveloffset +1 %}{% include "./modules/registry-operator-config-resources-secret-aws.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-configuring-storage-aws-user-infra.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-operator-configuration-resource-overview-aws-s3.md" %}{% endleveloffset %}