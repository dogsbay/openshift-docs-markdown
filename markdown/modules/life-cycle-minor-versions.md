{% if context == "rosa-hcp-life-cycle" %}
{%- set rosa_with_hcp = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Minor versions (x.Y.z) {id="rosa-minor-versions_{{ context }}"}

Starting with the 4.8 OpenShift Container Platform minor version, Red&#160;Hat supports all minor versions for at least a 16 month period following general availability of the given minor version. Patch versions are not affected by the support period. {._abstract}

Customers are notified 60, 30, and 15 days before the end of the support period. Clusters must be upgraded to the latest patch version of the oldest supported minor version before the end of the support period, or
{%- if openshift_rosa_hcp %}
Red&#160;Hat will automatically upgrade the control plane to the next supported minor version.
{% endif %}
{% if not openshift_rosa_hcp %}
the cluster will enter a "Limited Support" status.
{% endif %}

**Example**

1.  A customer’s cluster is currently running on 4.13.8. The 4.13 minor version became generally available on May 17, 2023.
1.  On July 19, August 16, and September 2, 2024, the customer is notified that their cluster will enter "Limited Support" status on September 17, 2024 if the cluster has not already been upgraded to a supported minor version.
1.  The cluster must be upgraded to 4.14 or later by September 17, 2024.
{%- if openshift_rosa_hcp %}
1.  If the upgrade has not been performed, the cluster’s control plane will be automatically upgraded to 4.14.26, and there will be no automatic upgrades to the cluster’s worker nodes.
{% endif %}
{% if not openshift_rosa_hcp %}
1.  If the upgrade has not been performed, the cluster will be flagged as being in a "Limited Support" status.
{% endif %}

{% if context == "rosa-hcp-life-cycle" %}
{%- set rosa_with_hcp = false -%}
{% endif %}