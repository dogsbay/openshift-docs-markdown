{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the virtual hardware for template on vSphere {id="update-vsphere-virtual-hardware-on-template_{{ context }}"}

You can update the virtual hardware for templates on vSphere. {._abstract}

**Prerequisites**

*   You have cluster administrator permissions to execute the required permissions in the vCenter instance hosting your {{ product_title }} cluster.
*   Your vSphere ESXi hosts are version 8.0 Update 1 or later, or VWware vSphere Foundation 9, or VMware Cloud Foundation 9.

**Procedure**

1.  If the RHCOS template is configured as a vSphere template, follow [Convert a Template to a Virtual Machine](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-D632CAC5-BA5E-4A1E-959B-382D9ACB1DD0_copy.html) (VMware vSphere documentation).

    :::note

    Once converted from a template, do not power on the virtual machine.
    
    :::

1.  Update the virtual machine (VM) in the {{ vmw_full }} client. Complete the steps outlined in [Upgrade the Compatibility of a Virtual Machine Manually](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-60768C2F-72E1-42E0-8A17-CA76849F2950.html) ({{ vmw_full }} documentation).

    :::important

    If you modified the VM settings, those changes might reset after moving to a newer virtual hardware. Please review that all your configured settings are still in place after your upgrade before proceeding to the next step.
    
    :::

1.  Convert the VM in the {{ vmw_short }} client to a template by right-clicking on the VM and then selecting ***Template -> Convert to Template***.

    :::important

    The steps for converting a VM to a template might change in future {{ vmw_short }} documentation versions.
    
    :::