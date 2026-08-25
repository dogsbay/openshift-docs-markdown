{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Migrating from OpenShift SDN network plugin to OVN-Kubernetes network plugin {id="migrate-from-openshift-sdn"}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "migrate-from-openshift-sdn" %}

As a {{ product_title }} cluster administrator, you can start the migration from the OpenShift Software-Defined Networking (SDN) network plugin to the OVN-Kubernetes network plugin and verify the migration status by using the {{ rosa_cli_first }}. {._abstract}

Consider the following before starting migration:

*   The cluster version must be 4.16.43 and above.
*   You cannot interrupt the migration process.
*   Migrating back to the SDN network plugin is not possible.
*   The migration process reboots cluster nodes.
*   Workloads that are resilient to node disruptions are not impacted.
*   Migration time can vary between several minutes and hours, depending on the cluster size and workload configurations.

{% leveloffset +1 %}{% include "./modules/migrate-sdn-ovn.md" %}{% endleveloffset %}