{%- set _mod_docs_content_type = "REFERENCE" %}
{%- if not openshift_origin %}
# Supported cloud providers for {{ sno }} {id="supported-cloud-providers-for-single-node-openshift_{{ context }}"}

{% endif %}
{% if openshift_origin %}
# Supported cloud providers for {{ sno_okd }} {id="_supported_cloud_providers_for_sno_okd"}

{% endif %}

You can install a single-node cluster on several supported cloud providers. {._abstract}

The following table contains a list of supported cloud providers and CPU architectures.

**Supported cloud providers**

| Cloud provider | CPU architecture |
| --- | --- |
| Amazon Web Service (AWS) | x86_64 and AArch64 |
| Microsoft Azure | x86_64 |
| {{ gcp_first }} | x86_64 and AArch64 |