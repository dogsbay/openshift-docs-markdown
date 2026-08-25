{%- set _mod_docs_content_type = "CONCEPT" %}
# Scheduled updates for virtual hardware on vSphere {id="scheduling-virtual-hardware-update-on-vsphere_{{ context }}"}

Virtual hardware updates can be scheduled to occur when a virtual machine is powered on or rebooted. You can schedule your virtual hardware updates exclusively in vCenter by following [Schedule a Compatibility Upgrade for a Virtual Machine](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-96C06236-C271-4CFE-857E-22D1FDEECC95.html) (VMware vSphere documentation). {._abstract}

When scheduling an update prior to performing an update of {{ product_title }}, the virtual hardware update occurs when the nodes are rebooted during the course of the {{ product_title }} update.