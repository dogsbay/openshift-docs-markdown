{%- set _mod_docs_content_type = "CONCEPT" %}
# Virtual machine migration {id="virt-migrate-vms_{{ context }}"}

You can move a running VM to a different node, migrate it to a different cluster, or move its storage to a different storage class. Do this to perform maintenance, rebalance workloads, or optimize cost and performance. {._abstract}

Live migration moves a running VM to a different node without interrupting the workload, for example during cluster upgrades or node maintenance. Live migration requires shared storage, enough cluster resources, and CPU compatibility across nodes. TLS encrypts traffic by default.

To move a VM to a different {{ product_title }} cluster, configure a Migration Toolkit for Virtualization (MTV) provider for each cluster that you include in the migration.

To optimize performance or reduce costs, you can migrate a VM’s disks to a different storage class within a single cluster, individually or in bulk, by using the web console. You can migrate storage on both online and offline VMs.

**Additional resources**
{._additional-resources}

*   [Default cluster roles for {{ VirtProductName }}](/virt/about_virt/virt-security-policies#default-cluster-roles-for-virt_virt-security-policies)
*   [Prometheus queries for live migration](/virt/monitoring/virt-prometheus-queries#virt-live-migration-metrics_virt-prometheus-queries)
*   [Configure eviction and run strategies](/virt/nodes/virt-eviction-strategies#virt-eviction-strategies)
*   [Adding a Red Hat {{ VirtProductName }} source provider](https://docs.redhat.com/en/documentation/migration_toolkit_for_virtualization/2.12/html/planning_your_migration_to_red_hat_openshift_virtualization/assembly_planning-migration-cnv_mtv#proc_adding-source-provider_cnv)
*   [Adding an {{ VirtProductName }} destination provider](https://docs.redhat.com/en/documentation/migration_toolkit_for_virtualization/2.12/html/planning_your_migration_to_red_hat_openshift_virtualization/assembly_planning-migration-cnv_mtv#proc_adding-virt-destination-provider_dest_cnv)
*   [Creating a migration plan for a live migration by using the MTV wizard](https://docs.redhat.com/en/documentation/migration_toolkit_for_virtualization/2.12/html/planning_your_migration_to_red_hat_openshift_virtualization/assembly_planning-migration-cnv_mtv#proc_creating-plan-wizard-cnv-live_cnv)
*   [{{ VirtProductName }} live migration prerequisites](https://docs.redhat.com/en/documentation/migration_toolkit_for_virtualization/2.12/html/planning_your_migration_to_red_hat_openshift_virtualization/assembly_provider-specific-requirements-for-migration_mtv#ref_cnv-cnv-live-prerequisites_mtv)