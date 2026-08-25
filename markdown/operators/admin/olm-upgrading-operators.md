---
title: Updating installed Operators
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Updating installed Operators {id="olm-upgrading-operators"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "olm-upgrading-operators" %}

You can update Operators previously installed with Operator Lifecycle Manager (OLM) on your {{ product_title }} cluster.


:::note

For information on how OLM handles updates for installed Operators colocated in the same namespace, as well as an alternative method for installing Operators with custom global Operator groups, see "Multitenancy and Operator colocation".

:::


{% leveloffset +1 %}{% include "./modules/olm-preparing-upgrade.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ product_title }} Operator Update Information Checker](https://access.redhat.com/labs/ocpouic/)

{% leveloffset +1 %}{% include "./modules/olm-changing-update-channel.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-approving-pending-upgrade.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
## Additional resources {id="additional-resources_olm-upgrading-operators"}

*   [Red Hat OpenShift Container Platform Operator Update Information Checker](https://access.redhat.com/labs/ocpouic/)
*   [Multitenancy and Operator colocation](/operators/understanding/olm/olm-colocation#olm-colocation)
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
{% endif %}