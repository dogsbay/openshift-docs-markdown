{%- set _mod_docs_content_type = "REFERENCE" %}
# Installation of a cluster in FIPS mode {id="installing-fips-mode_{{ context }}"}

To install a cluster in FIPS mode, follow the instructions to install a customized cluster on your preferred infrastructure. Ensure that you set `fips: true` in the `install-config.yaml` file before you deploy your cluster. {._abstract}


:::important

To enable FIPS mode for your cluster, you must run the installation program from a {{ op_system_base }} computer configured to operate in FIPS mode. For more information about configuring FIPS mode on RHEL, see [Installing the system in FIPS mode](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/security_hardening/assembly_installing-the-system-in-fips-mode_security-hardening).

:::


*   [Amazon Web Services](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-customizations)
*   [Microsoft Azure](/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-customizations)
*   [Bare metal](/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal)
*   [{{ gcp_full }}](/installing/installing_gcp/installing-gcp-customizations#installing-gcp-customizations)
*   [{{ ibm_cloud_name }}](/installing/installing_ibm_cloud/installing-ibm-cloud-customizations#installing-ibm-cloud-customizations)
*   [{{ ibm_power_name }}](/installing/installing_ibm_power/installing-ibm-power#installing-ibm-power)
*   [{{ ibm_z_name }} and {{ ibm_linuxone_name }}](/installing/installing_ibm_z/upi/installing-ibm-z#installing-ibm-z)
*   [{{ ibm_z_name }} and {{ ibm_linuxone_name }} with {{ op_system_base }} KVM](/installing/installing_ibm_z/upi/installing-ibm-z-kvm#installing-ibm-z-kvm)
*   [{{ ibm_z_name }} and {{ ibm_linuxone_name }} in an LPAR](/installing/installing_ibm_z/upi/installing-ibm-z-lpar#installing-ibm-z-lpar)
*   [{{ rh_openstack_first }}](/installing/installing_openstack/installing-openstack-installer-custom#installing-openstack-installer-custom)
*   [VMware vSphere](/installing/installing_vsphere/upi/installing-vsphere#installing-vsphere)


:::note

If you are using Azure File storage, you cannot enable FIPS mode.

:::


To apply `AES CBC` encryption to your etcd data store, follow the "Encrypting etcd data" process after you install your cluster.