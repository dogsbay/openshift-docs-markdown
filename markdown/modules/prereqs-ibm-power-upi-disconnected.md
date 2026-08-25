{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites for installing a cluster on {{ ibm_power_title }} in a disconnected environment {id="prereqs-ibm-power-upi-disconnected_{{ context }}"}

Before you install a {{ product_title }} cluster on {{ ibm_power_name }} in a restricted network, complete the prerequisite tasks to mirror images and prepare your environment. {._abstract}

*   You reviewed details about the {{ product_title }} installation and update processes.
*   You read the documentation on selecting a cluster installation method and preparing it for users.
*   You created a mirror registry for installation in a restricted network and obtained the `imageContentSources` data for your version of {{ product_title }}.
*   Before you begin the installation process, you must move or remove any existing installation files. This ensures that the installation program creates and updates the required installation files.

    :::important

    Perform installation steps on a machine with access to the installation media.
    
    :::

*   You provisioned persistent storage using {{ rh_storage }} or other supported storage protocols for your cluster. To deploy a private image registry, you must set up persistent storage with `ReadWriteMany` access.
*   If you use a firewall and plan to use the Telemetry service, you configured the firewall to allow the sites that your cluster requires access to.

    :::note

    Be sure to also review this site list if you are configuring a proxy.
    
    :::