{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites for installing a cluster on {{ ibm_power_title }} {id="prereqs-ibm-power-upi_{{ context }}"}

Before you install a {{ product_title }} cluster on {{ ibm_power_name }}, complete the prerequisite tasks to review installation details, provision storage, and configure your firewall. {._abstract}

*   You reviewed details about the {{ product_title }} installation and update processes.
*   You read the documentation on selecting a cluster installation method and preparing it for users.
*   Before you begin the installation process, you must clean the installation directory. This ensures that the installation program creates and updates the required installation files.
*   You provisioned persistent storage using {{ rh_storage }} or other supported storage providers for your cluster. To deploy a private image registry, you must set up persistent storage with `ReadWriteMany` access.
*   If you use a firewall, you configured it to allow the sites that your cluster requires access to.

    :::note

    Be sure to also review this site list if you are configuring a proxy.
    
    :::