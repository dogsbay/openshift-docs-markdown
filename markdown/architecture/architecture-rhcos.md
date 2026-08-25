---
title: "{{ op_system_first }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ op_system_first }} {id="architecture-rhcos"}
{%- set context = "architecture-rhcos" %}

{{ op_system_first }} represents the next generation of single-purpose container operating system technology by providing the quality standards of {{ op_system_base_full }} with automated, remote upgrade features. {._abstract}

{{ op_system }} is supported only as a component of {{ product_title }} {{ product_version }} for all {{ product_title }} machines. {{ op_system }} is the only supported operating system for all node types in {{ product_title }}. {{ op_system }} is deployed in {{ product_title }} {{ product_version }} in two general ways:

*   If you install your cluster on infrastructure that the installation program provisions, {{ op_system }} images are downloaded to the target platform during installation. Suitable Ignition config files, which control the {{ op_system }} configuration, are also downloaded and used to deploy the machines.
*   If you install your cluster on infrastructure that you manage, you must follow the installation documentation to obtain the {{ op_system }} images, generate Ignition config files, and use the Ignition config files to provision your machines.

{% leveloffset +1 %}{% include "./modules/rhcos-key-features.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/rhcos-configured.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/rhcos-deployed.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/rhcos-about-ignition.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [cloud-init documentation](https://cloud-init.io/)
*   [Kickstart installations](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html-single/installation_guide/index#chap-kickstart-installations)

{% leveloffset +1 %}{% include "./modules/ignition-config-viewing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/digging-into-machine-config.md" %}{% endleveloffset %}