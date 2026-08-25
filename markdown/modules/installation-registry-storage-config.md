{% if context == "installing-aws-user-infra" %}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-restricted-networks-aws" %}
{%- set aws = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Image registry storage configuration {id="installation-registry-storage-config_{{ context }}"}

{% if aws %}
Amazon Web Services provides default storage, which means the Image Registry Operator is available after installation. However, if the Registry Operator cannot create an S3 bucket and automatically configure storage, you must manually configure registry storage.
{% endif %}
{% if not aws %}
The Image Registry Operator is not initially available for platforms that do not provide default storage. After installation, you must configure your registry to use storage so that the Registry Operator is made available.
{% endif %} {._abstract}

Configure a persistent volume, which is required for production clusters. Where applicable, you can configure an empty directory as the storage location for non-production clusters.

You can also allow the image registry to use block storage types by using the `Recreate` rollout strategy during upgrades.

{% if context == "installing-aws-user-infra" %}
{%- set aws = false -%}
{% endif %}
{% if context == "installing-restricted-networks-aws" %}
{%- set aws = false -%}
{% endif %}