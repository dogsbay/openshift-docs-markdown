{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling multipathing for FCP LUNs {id="enabling-multipathing-fcp-luns_{{ context }}"}

After installation, you can enable multipathing for Fibre Channel Protocol (FCP) logical unit numbers (LUNs) on {{ ibm_z_name }} or {{ ibm_linuxone_name }} nodes. This configuration persists across node restarts, but you must redo the steps if you replace the node. {._abstract}


:::important

On {{ ibm_z_name }} and {{ ibm_linuxone_name }}, you can enable multipathing only if you configured your cluster for it during installation. For more information, see "Installing {{ op_system }} and starting the {{ product_title }} bootstrap process" in _Installing a cluster with z/VM on {{ ibm_z_name }} and {{ ibm_linuxone_name }}_.

:::


**Prerequisites**

*   You are logged in to the cluster as a user with administrative privileges.
*   You have configured multiple paths to a LUN with either method explained above.

**Procedure**

1.  Connect to the node via SSH by running the following command:
    ```terminal
    $ ssh <user>@<node_ip_address>
    ```

    You can also start a debug session to the node by running the following command:
    ```terminal
    $ oc debug node/<node_name>
    ```
1.  To enable multipathing, run the following command:
    ```terminal
    $ sudo /sbin/mpathconf --enable
    ```
1.  To start the `multipathd` daemon, run the following command:
    ```terminal
    $ sudo multipath
    ```
1.  Optional: To format your multipath device with fdisk, run the following command:
    ```terminal
    $ sudo fdisk /dev/mapper/mpatha
    ```

**Verification**

*   To verify that the devices have been grouped, run the following command:
    ```terminal
    $ sudo multipath -ll
    ```

    For example:
    ```terminal
    mpatha (20017380030290197) dm-1 IBM,2810XIV
       size=512G features='1 queue_if_no_path' hwhandler='1 alua' wp=rw
    	-+- policy='service-time 0' prio=50 status=enabled
     	|- 1:0:0:6  sde 68:16  active ready running
     	|- 1:0:1:6  sdf 69:24  active ready running
     	|- 0:0:0:6  sdg  8:80  active ready running
     	`- 0:0:1:6  sdh 66:48  active ready running
    ```