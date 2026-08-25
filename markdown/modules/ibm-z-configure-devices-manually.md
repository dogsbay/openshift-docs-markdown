{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring additional devices manually {id="configure-additional-devices-manually_{{ context }}"}

After installation, you can manually configure additional devices on {{ ibm_z_name }} or {{ ibm_linuxone_name }} nodes. This configuration persists across node restarts, but you must redo the steps if you replace the node. {._abstract}

**Prerequisites**

*   You are logged in to the cluster as a user with administrative privileges.
*   The device must be available to the node.
*   In a z/VM environment, the device must be attached to the z/VM guest.

**Procedure**

1.  Connect to the node via SSH by running the following command:
    ```terminal
    $ ssh <user>@<node_ip_address>
    ```

    You can also start a debug session to the node by running the following command:
    ```terminal
    $ oc debug node/<node_name>
    ```
1.  To enable the devices with the `chzdev` command, enter the following command:
    ```terminal
    $ sudo chzdev -e <device>
    ```