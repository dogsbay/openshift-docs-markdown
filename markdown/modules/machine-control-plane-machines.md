{%- set _mod_docs_content_type = "REFERENCE" %}
# Control plane machine management {id="machine-mgmt-intro-managing-control-plane_{{ context }}"}

As a cluster administrator, you can manage the control plane machines in your {{ product_title }} cluster. {._abstract}

For example, you can perform the following actions:

*   [Update your control plane configuration](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-config-update_cpmso-managing-machines) with a control plane machine set for the following cloud providers:
    *   [{{ aws_full }}](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-aws#cpmso-config-options-aws)
    *   [{{ gcp_full }}](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-gcp#cpmso-config-options-gcp)
    *   [{{ azure_full }}](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-azure#cpmso-config-options-azure)
    *   [Nutanix](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-nutanix#cpmso-config-options-nutanix)
    *   [{{ rh_openstack_first }}](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-openstack#cpmso-config-options-openstack)
    *   [{{ vmw_full }}](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-vsphere#cpmso-config-options-vsphere)
*   Configure and deploy a [machine health check](/machine_management/deploying-machine-health-checks#deploying-machine-health-checks) to automatically recover unhealthy control plane machines.