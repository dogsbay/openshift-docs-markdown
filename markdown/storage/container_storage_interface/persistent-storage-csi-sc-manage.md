---
title: Managing the default storage class
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Managing the default storage class {id="persistent-storage-csi-sc-manage"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-csi-sc-manage" %}

[role="_abstract"] 
Many Container Storage Interface (CSI) operators can actively manage default storage classes, removing manual intervention needs and avoiding accidental deletion. Proper management ensures persistent volume claims provision correctly with the appropriate storage backend for your applications.

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-sc-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-sc-managing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-sc-managing-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-sc-multiple-none.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/dynamic-provisioning-change-default-class.md" %}{% endleveloffset %}