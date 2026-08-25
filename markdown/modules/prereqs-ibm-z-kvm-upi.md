{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites for installing a cluster on {{ ibm_z_title }} with {{ op_system_base }} {id="prereqs-ibm-z-kvm-upi_{{ context }}"}

Before you install {{ product_title }} on {{ ibm_z_name }} with {{ op_system_base }} KVM by using user-provisioned infrastructure, you must complete prerequisite tasks that prepare your KVM host, storage, and network environment. {._abstract}

*   You have completed the tasks in preparing to install a cluster on {{ ibm_z_name }} using user-provisioned infrastructure.
*   You reviewed details about the {{ product_title }} installation and update processes.
*   You read the documentation on selecting a cluster installation method and preparing it for users.
*   Before you begin the installation process, you must clean the installation directory. This ensures that the required installation files are created and updated during the installation process.
*   You provisioned persistent storage by using {{ rh_storage }} or other supported storage protocols for your cluster. To deploy a private image registry, you must set up persistent storage with `ReadWriteMany` access.
*   If you use a firewall, you configured it to allow the sites that your cluster requires access to.

    :::note

    Be sure to also review this site list if you are configuring a proxy.
    
    :::

*   You provisioned a {{ op_system_base }} Kernel Virtual Machine (KVM) system that is hosted on the logical partition (LPAR) and based on {{ op_system_base }} 8.6 or later. See [Red Hat Enterprise Linux 8 and 9 Life Cycle](https://access.redhat.com/support/policy/updates/errata#RHEL8_and_9_Life_Cycle).