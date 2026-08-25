---
title: Updating the Compliance Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Updating the Compliance Operator {id="compliance-operator-updating"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "compliance-operator-updating" %}

As a cluster administrator, you can update the Compliance Operator on your {{ product_title }} cluster.


:::important

Updating your {{ product_title }} cluster to version 4.14 might cause the Compliance Operator to not work as expected. This is due to an ongoing known issue. For more information, see [OCPBUGS-18025](https://issues.redhat.com/browse/OCPBUGS-18025).

:::


{% leveloffset +1 %}{% include "./modules/olm-preparing-upgrade.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-changing-update-channel.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-approving-pending-upgrade.md" %}{% endleveloffset %}