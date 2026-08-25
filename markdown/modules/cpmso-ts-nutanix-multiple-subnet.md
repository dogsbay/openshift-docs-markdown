{%- set _mod_docs_content_type = "REFERENCE" %}
# Improving reliability for multiple subnet configurations on Nutanix {id="cpmso-ts-nutanix-multiple-subnet_{{ context }}"}

To improve reliability and avoid common networking problems with multiple subnet configurations on Nutanix, adhere to the configuration practices that minimize networking conflicts. {._abstract}

The following networking configuration and management practices can help your multiple subnet configuration perform more reliably:

*   To avoid overlapping IP address assignments, use predefined static IP addresses in the `cloud-init` metadata.
*   Tag all VMs, disks, and networks with a unique cluster ID.
*   Avoid IP address conflicts by using dedicated subnets for each {{ product_title }} cluster:

    Nutanix uses Nutanix Acropolis Hypervisor (AHV) and Nutanix Prism networking to assign IP addresses to virtual machines (VMs).
    If a single subnet provides IP addresses for more than one {{ product_title }} cluster, AHV or Prism might assign the same IP address to a VM or pod in more than one cluster.

    To avoid this issue, use dedicated subnets for each {{ product_title }} cluster, even when you have more than one cluster on a single Prism Central instance.
    You can use the Prism UI or automation tools, such as Terraform or Ansible, to create separate IP address pools for each {{ product_title }} cluster.
*   Ensure that each {{ product_title }} cluster uses distinct DNS zones and virtual IP address ranges.
*   Avoid DHCP conflicts by maintaining DHCP allocations:

    If you use Nutanix to manage DHCP allocation, objects in your cluster might have duplicate leases.
    Duplicate leases can cause DHCP conflicts when you apply changes to the control plane machine set custom resource (CR) specification.

    To avoid this issue, regularly remove stale DHCP leases.
*   Use automation tools, such as Terraform or Ansible, to isolate the infrastructure for each {{ product_title }} cluster.