{%- set _mod_docs_content_type = "REFERENCE" %}
# Requirements for encrypting virtual machines {id="installation-vsphere-encrypted-vms_{{ context }}"}

You can encrypt your virtual machines prior to installing {{ product_title }} {{ product_version }} by meeting the following requirements. {._abstract}

*   You have configured a Standard key provider in vSphere. For more information, see [Adding a KMS to vCenter Server](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vsan.doc/GUID-AC06B3C3-901F-402E-B25F-1EE7809D1264.html).

    :::important

    The Native key provider in vCenter is not supported. For more information, see [vSphere Native Key Provider Overview](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.security.doc/GUID-54B9FBA2-FDB1-400B-A6AE-81BF3AC9DF97.html).
    
    :::

*   You have enabled host encryption mode on all of the ESXi hosts that are hosting the cluster. For more information, see [Enabling host encryption mode](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.security.doc/GUID-A9E1F016-51B3-472F-B8DE-803F6BDB70BC.html).
*   You have a vSphere account which has all cryptographic privileges enabled. For more information, see [Cryptographic Operations Privileges](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.security.doc/GUID-660CCB35-847F-46B3-81CA-10DDDB9D7AA9.html).

When you deploy the OVF template in the section titled "Installing RHCOS and starting the {{ product_title }} bootstrap process", select the option to "Encrypt this virtual machine" when you are selecting storage for the OVF template. After completing cluster installation, create a storage class that uses the encryption storage policy you used to encrypt the virtual machines.