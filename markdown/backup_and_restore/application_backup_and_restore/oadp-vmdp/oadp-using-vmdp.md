---
title: "Using {{ oadp_short }} virtual machine data protection"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}

# Using {{ oadp_short }} virtual machine data protection {id="oadp-using-vmdp"}

{%- set context = "oadp-using-vmdp" %}

Install the {{ oadp_full }} virtual machine data protection (VMDP) command-line interface (CLI), configure a backup storage location, and back up and restore data from within your VM. This helps you to manage your own VM backups independently.

{% leveloffset +1 %}{% include "./modules/oadp-vmdp-installing-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-vmdp-creating-bsl-s3.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-vmdp-creating-bsl-filesystem.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-vmdp-backing-up-data.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-vmdp-restoring-data.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-vmdp-managing-bsl.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-vmdp-troubleshooting.md" %}{% endleveloffset %}