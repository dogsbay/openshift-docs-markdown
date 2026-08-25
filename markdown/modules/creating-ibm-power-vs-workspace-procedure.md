{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an {{ ibm_power_server_title }} workspace {id="creating-ibm-power-vs-workspace-procedure_{{ context }}"}

To set up the infrastructure needed for your {{ product_title }} cluster, you can create an {{ ibm_power_server_name }} workspace and retrieve its GUID for use during installation. {._abstract}

**Procedure**

1.  To create an {{ ibm_power_server_name }} workspace, complete step 1 to step 5 from the {{ ibm_cloud_name }} documentation for [Creating an {{ ibm_power_server_name }}](https://cloud.ibm.com/docs/power-iaas?topic=power-iaas-creating-power-virtual-server).
1.  After it has finished provisioning, retrieve the 32-character alphanumeric Globally Unique Identifier (GUID) of your new workspace by entering the following command:
    ```terminal
    $ ibmcloud resource service-instance <workspace name>
    ```