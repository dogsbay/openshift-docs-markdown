{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Migrating from OpenShift SDN network plugin to OVN-Kubernetes network plugin {id="migrate-from-openshift-sdn-osd"}
{%- set context = "migrate-from-openshift-sdn-osd" %}

As an {{ product_title }} cluster administrator, you can start the migration from the OpenShift Software-Defined Networking (SDN) network plugin to the OVN-Kubernetes network plugin and verify the migration status by using the {{ cluster_manager }} CLI (`ocm`). {._abstract}

Consider the following before starting migration:

*   The cluster version must be 4.16.43 and above.
*   You cannot interrupt the migration process.
*   Migrating back to the SDN network plugin is not possible.
*   The migration process reboots cluster nodes.
*   There will be no impact to workloads that are resilient to node disruptions.
*   Migration time can vary between several minutes and hours, depending on the cluster size and workload configurations.

{% leveloffset +1 %}{% include "./modules/migrate-sdn-ovn-osd.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Patching OVN-Kubernetes address ranges](https://docs.redhat.com/en/documentation/openshift_container_platform/4.16/html-single/networking/index#patching-ovnk-address-ranges_migrate-from-openshift-sdn)