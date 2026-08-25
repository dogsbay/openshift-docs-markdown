{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing a custom machine config pool for high-availability clusters {id="virt-removing-custom-mcp_{{ context }}"}

You can delete a custom machine config pool that you previously created for your high-availability cluster. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with `cluster-admin` permissions.
*   You have installed the OpenShift CLI (`oc`).
*   You have created a custom machine config pool by labeling a subset of the compute nodes with a custom role and creating a `MachineConfigPool` manifest with that label.

**Procedure**

1.  Remove the `worker-dpdk` label from the compute nodes by running the following command:
    ```terminal
    $ oc label node <node_name> node-role.kubernetes.io/worker-dpdk-
    ```
1.  Delete the `MachineConfigPool` manifest that contains the `worker-dpdk` label by entering the following command:
    ```terminal
    $ oc delete mcp worker-dpdk
    ```