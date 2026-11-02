{%- set _mod_docs_content_type = "CONCEPT" %}
# Use advanced VM provisioning methods {id="virt-use-advanced-vm-provisioning-methods_{{ context }}"}

Create VMs from existing disk images, cloned storage, or platform-specific configurations when you need more control over the source media and target environment. These methods help you migrate existing workloads to {{ VirtProductName }} or deploy VMs on specialized hardware. {._abstract}

{{ VirtProductName }} supports the following advanced provisioning methods:


Cloning
:   Duplicate an existing VM from the CLI by copying its persistent volume claims (PVCs). For web console cloning, see "Create a VM from the web console".


Disk image imports
:   Import VM images from HTTP servers, container registries, or S3-compatible object storage by using the `DataVolume` API.


Platform-specific provisioning
:   Create VMs with requirements specific to AWS (license-included Windows images) or {{ ibm_z_title }} (IBM Secure Execution, confidential computing).