---
title: "{{ oadp_short }} virtual machine data protection"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}

# {{ oadp_short }} virtual machine data protection {id="oadp-vmdp"}

{%- set context = "oadp-vmdp" %}

Use {{ oadp_full }} virtual machine data protection (VMDP) to back up and restore user data from within VMs on {{ VirtProductName }}. This helps you to protect files and directories without relying on cluster administrators. {._abstract}

{% leveloffset +1 %}{% include "./modules/oadp-vmdp-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-vmdp-supported-platforms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-vmdp-storage-backends.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-vmdp-configuration.md" %}{% endleveloffset %}