{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generating the discovery ISO with the Assisted Installer {id="install-sno-generating-the-discovery-iso-with-the-assisted-installer_{{ context }}"}

Installing {{ product_title }} on a single node requires a discovery ISO, which the Assisted Installer can generate. {._abstract}

**Procedure**

1.  On the administration host, open a browser and navigate to [{{ cluster_manager_first }}](https://console.redhat.com/openshift/assisted-installer/clusters).
1.  Click **Create New Cluster** to create a new cluster.
1.  In the **Cluster name** field, enter a name for the cluster.
1.  In the **Base domain** field, enter a base domain. For example:
    ```
    example.com
    ```

    All DNS records must be subdomains of this base domain and include the cluster name, for example:
    ```
    <cluster_name>.example.com
    ```

    :::note

    You cannot change the base domain or cluster name after cluster installation.
    
    :::

1.  Select **Install single node OpenShift (SNO)** and complete the rest of the wizard steps. Download the discovery ISO.
1.  Complete the remaining Assisted Installer wizard steps.

    :::important

    Ensure that you take note of the discovery ISO URL for installing with virtual media.

    If you enable {{ VirtProductName }} during this process, you must have a second local storage device of at least 50GiB for your virtual machines.
    
    :::