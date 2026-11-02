{%- set _mod_docs_content_type = "CONCEPT" %}
# Create and provision virtual machines {id="virt-create-and-provision-vms_{{ context }}"}

Deploy virtual machines (VMs) on your {{ product_title }} cluster to run traditional operating system workloads alongside containers. Consolidating VMs and containers on a single platform reduces infrastructure sprawl and simplifies operations. {._abstract}

{{ VirtProductName }} provides several ways to create VMs depending on your needs:

*   Use the web console creation wizard to configure and start VMs interactively, without writing YAML manifests.
*   Use templates and instance types from the CLI to standardize resource definitions and VM configurations across your organization.
*   Use advanced provisioning methods to import disk images from external sources, clone existing VMs, or create VMs for specific platforms such as {{ ibm_z_title }} or AWS.

After you create your VMs, install guest agents and VirtIO drivers to ensure full platform integration and consistent behavior across your fleet.