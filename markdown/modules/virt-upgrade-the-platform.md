{%- set _mod_docs_content_type = "CONCEPT" %}
# Upgrade the platform {id="virt-upgrade-the-platform_{{ context }}"}

Keep {{ VirtProductName }} updated and compatible with {{ product_title }}. Staying on a supported update path keeps your environment fully supported and avoids disruption to VM workloads. {._abstract}

You can choose how much control you want over the update process, from fully automatic updates to manually reviewing and approving each change. You can also opt in to early access builds to try new capabilities before they reach general availability.

Review the following topics to configure your update settings, understand what to expect during an update, and keep Extended Update Support (EUS) upgrades from disrupting VM workloads. They also cover {{ op_system_base }} 9 machine-type compatibility for VM templates after an update.

**Additional resources**
{._additional-resources}

{%- if not (openshift_rosa or openshift_dedicated or openshift_origin or openshift_rosa_hcp) %}
*   [{{ product_title }} Life Cycle Policy](https://access.redhat.com/support/policy/updates/openshift)
*   [Performing a Control Plane Only update](/updating/updating_a_cluster/control-plane-only-update#control-plane-only-update)
{%- endif %}
*   [What are Operators?](/operators/understanding/olm-what-operators-are#olm-what-operators-are)
*   [Operator Lifecycle Manager concepts and resources](/operators/understanding/olm/olm-understanding-olm#olm-understanding-olm)
*   [Cluster service versions (CSVs)](/operators/understanding/olm/olm-understanding-olm#olm-csv_olm-understanding-olm)
*   [About live migration](/virt/live_migration/virt-about-live-migration#virt-about-live-migration)
*   [Configure eviction and run strategies](/virt/nodes/virt-eviction-strategies#virt-eviction-strategies)
*   [Configuring live migration](/virt/live_migration/virt-configuring-live-migration#virt-configuring-live-migration)