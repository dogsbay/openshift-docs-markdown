{%- set _mod_docs_content_type = "REFERENCE" %}
# Compute machine management {id="machine-mgmt-intro-managing-compute_{{ context }}"}

As a cluster administrator, you can manage the compute machines in your {{ product_title }} cluster. {._abstract}

For example, you can perform the following actions:

*   Create a compute machine set for the following cloud providers:
    *   [AWS](/machine_management/creating_machinesets/creating-machineset-aws#creating-machineset-aws)
    *   [Azure](/machine_management/creating_machinesets/creating-machineset-azure#creating-machineset-azure)
    *   [Azure Stack Hub](/machine_management/creating_machinesets/creating-machineset-azure-stack-hub#creating-machineset-azure-stack-hub)
    *   [{{ gcp_short }}](/machine_management/creating_machinesets/creating-machineset-gcp#creating-machineset-gcp)
    *   [IBM Cloud](/machine_management/creating_machinesets/creating-machineset-ibm-cloud#creating-machineset-ibm-cloud)
    *   [IBM Power Virtual Server](/machine_management/creating_machinesets/creating-machineset-ibm-power-vs#creating-machineset-ibm-power-vs)
    *   [Nutanix](/machine_management/creating_machinesets/creating-machineset-nutanix#creating-machineset-nutanix)
    *   [{{ rh_openstack }}](/machine_management/creating_machinesets/creating-machineset-osp#creating-machineset-osp)
    *   [vSphere](/machine_management/creating_machinesets/creating-machineset-vsphere#creating-machineset-vsphere)
*   Create a machine set for a bare metal deployment: [Creating a compute machine set on bare metal](/machine_management/creating_machinesets/creating-machineset-bare-metal#creating-machineset-bare-metal)
*   [Manually scale a compute machine set](/machine_management/manually-scaling-machineset#manually-scaling-machineset) by adding or removing a machine from the compute machine set.
*   [Modify a compute machine set](/machine_management/modifying-machineset#modifying-machineset) through the `MachineSet` YAML configuration file.
*   [Delete](/machine_management/deleting-machine#deleting-machine) a machine.
*   [Create infrastructure compute machine sets](/machine_management/creating-infrastructure-machinesets#creating-infrastructure-machinesets).
*   Configure and deploy a [machine health check](/machine_management/deploying-machine-health-checks#deploying-machine-health-checks) to automatically fix damaged machines in a machine pool.


:::note

When creating a new machine set, you should specify the latest image to use for the boot image. For more information about updating the boot image on your cluster, see "Manually updating the boot image" and "Boot image management". The method to update or specify the image varies by platform.  

:::