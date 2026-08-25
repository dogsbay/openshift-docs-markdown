---
title: About disk encryption technology
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# About disk encryption technology {id="nbde-about-disk-encryption-technology"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "nbde-implementation" %}

Network-Bound Disk Encryption (NBDE) allows you to encrypt root volumes of hard drives on physical and virtual
machines without having to manually enter a password when restarting machines.

{% leveloffset +1 %}{% include "./modules/nbde-disk-encryption-technology-comparison.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nbde-key-escrow.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nbde-tpm-encryption.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nbde-network-bound-disk-encryption.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nbde-secret-sharing-encryption.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nbde-using-tang-servers-for-disk-encryption.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nbde-locating-the-tang-servers.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nbde-deciding-the-number-of-tang-servers-to-use.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nbde-logging-considerations.md" %}{% endleveloffset %}