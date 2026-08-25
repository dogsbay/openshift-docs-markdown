---
title: Installing a cluster on Alibaba Cloud by using the Assisted Installer
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster on Alibaba Cloud by using the Assisted Installer {id="installing-alibaba-assisted-installer"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-alibaba-assisted-installer" %}

You can install an {{ product_title }} cluster on {{ alibaba }} using the {{ ai_full }}.

{{ alibaba }} provides a broad range of cloud computing and data storage services to online businesses and global enterprises.

{%- set FeatureName = "Installing {{ alibaba }} with {{ ai_full }}" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/alibaba-ai-installing.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing {{ product_title }} with the {{ ai_full }}](https://docs.redhat.com/en/documentation/assisted_installer_for_openshift_container_platform/2025)

{% leveloffset +1 %}{% include "./modules/alibaba-ai-converting-image-to-qcow2.md" %}{% endleveloffset %}