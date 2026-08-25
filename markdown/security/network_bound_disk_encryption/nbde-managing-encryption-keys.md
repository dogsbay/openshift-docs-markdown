---
title: Tang server encryption key management
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Tang server encryption key management {id="nbde-managing-encryption-keys"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "nbde-implementation" %}

The cryptographic mechanism to recreate the encryption key is based on the _blinded key_ stored on the node and the private key of the involved Tang servers.


:::note

To protect against the possibility of an attacker who has obtained both the Tang server private key and the node’s encrypted disk, periodic rekeying is advisable.

You must perform the rekeying operation for every node before you can delete the old key from the Tang server.

:::


The following sections provide procedures for rekeying and deleting old keys.

{% leveloffset +1 %}{% include "./modules/nbde-backing-up-server-keys.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nbde-recovering-server-keys.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nbde-rekeying-tang-servers.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nbde-generating-a-new-tang-server-key.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nbde-rekeying-all-nbde-nodes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nbde-troubleshooting-temporary-error-conditions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nbde-troubleshooting-permanent-error-conditions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nbde-deleting-old-tang-server-keys.md" %}{% endleveloffset %}