---
title: "Updating {{ VirtProductName }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Updating {{ VirtProductName }} {id="upgrading-virt"}
{%- set context = "upgrading-virt" %}

Learn how to keep {{ VirtProductName }} updated and compatible with {{ product_title }}. {._abstract}

{% leveloffset +1 %}{% include "./modules/virt-about-upgrading-virt.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-changing-update-settings.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-manual-approval-strategy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-approving-pending-upgrade.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-update-removing-unused.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-rhel-9.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-monitoring-upgrade-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-about-workload-updates.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-configuring-workload-update-methods.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-viewing-outdated-workloads.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated or openshift_origin or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/virt-about-control-plane-only-updates.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-preventing-workload-updates-during-control-plane-only-update.md" %}{% endleveloffset %}
{% endif %}

{% if not openshift_origin %}
{% leveloffset +1 %}{% include "./modules/virt-early-access-releases.md" %}{% endleveloffset %}
{% endif %}

## Additional resources {id="additional-resources_upgrading-virt" ._additional-resources}
{%- if not (openshift_rosa or openshift_dedicated or openshift_origin or openshift_rosa_hcp) %}
*   [{{ product_title }} Life Cycle Policy](https://access.redhat.com/support/policy/updates/openshift)
*   [Performing a Control Plane Only update](/updating/updating_a_cluster/control-plane-only-update#control-plane-only-update)
{%- endif %}
*   [What are Operators?](/operators/understanding/olm-what-operators-are#olm-what-operators-are)
*   [Operator Lifecycle Manager concepts and resources](/operators/understanding/olm/olm-understanding-olm#olm-understanding-olm)
*   [Cluster service versions (CSVs)](/operators/understanding/olm/olm-understanding-olm#olm-csv_olm-understanding-olm)
*   [About live migration](/virt/live_migration/virt-about-live-migration#virt-about-live-migration)
*   [Configure eviction and run strategies](/virt/nodes/virt-eviction-strategies#virt-eviction-strategies)
*   [Configuring live migration limits and timeouts](/virt/live_migration/virt-configuring-live-migration#virt-configuring-live-migration)