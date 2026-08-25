---
title: Quorum restoration
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Quorum restoration {id="dr-quorum-restoration"}
{%- set context = "dr-quorum-restoration" %}

You can restore etcd quorum on your {{ product_title }} cluster by running the `quorum-restore.sh` script on a recovery host when quorum loss leaves the API read-only. After quorum is restored, the API returns to read/write mode. {._abstract}

{% leveloffset +1 %}{% include "./modules/dr-restoring-etcd-quorum-ha.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_dr-quorum-restoration" ._additional-resources}

*   [Installing a user-provisioned cluster on bare metal](/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal)
*   [Replacing a bare-metal control plane node](/installing/installing_bare_metal/bare-metal-expanding-the-cluster#replacing-a-bare-metal-control-plane-node_bare-metal-expanding)