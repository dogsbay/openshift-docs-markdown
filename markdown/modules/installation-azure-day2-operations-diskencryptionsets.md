{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing an Azure Disk Encryption Set for Day2 Operator {id="installation-azure-day2-operations-diskencryptionsets.adoc_{{ context }}"}

The {{ product_title }} installation program can use an existing Disk Encryption Set with a user-managed key. To enable this feature, create a `DiskEncryptionSet` object in Azure and provide the key to the installation program. 

**Prerequisite**

*   You enabled the `EncryptionAtHost` feature in your {{ azure_short }} subscription. For more information, see "Use the Azure portal to enable end-to-end encryption using encryption at host".
.Procedure
    1.  Mark the node from the `encyptionAtHost` cluster resource group as unschedulable by using the following command:
        ```terminal
        $ oc adm cordon <node_name>
        ```
    1.  Evacuate the pods from the compute node. There are several ways to do this. For example, you can evacuate all the pods or the selected pods on a node: 
        ```terminal
        $ oc adm drain <compute_node> [--pod-selector=<pod_selector>]
        ```

        :::note

        For other options to evacuate pods from a node, see the "Understanding how to evacuate pods on nodes" section. 
        
        :::

    1.  De-allocate the node by running the following command:
        ```terminal
        $ az vm deallocate -n <node_name> -g <cluster_resource_group>
        ```
    1.  Set the `encryptionAtHost` property to `true` by running the following command:
        ```terminal
        $ az vm update -n <node_name> -g <cluster_resource_group> --set securityProfile.encryptionAtHost=true
        ```
    1.  Start the node by running the following commands:
        ```terminal
        $ az vm start -n <node_name> -g <cluster_resource_group>
        ```
    1.  Mark the node as schedulable by using the following command:
        ```terminal
        $ oc adm uncordon <node_name>
        ```
    1.  Verify that all cluster Operators are available:
        ```terminal
        $ oc get clusteroperators
        ```

        All Operators should show `AVAILABLE=True`, `PROGRESSING=False`, and `DEGRADED=False`.
    1.  Repeat the above steps on all the nodes that run `encryptionAtHost`.


:::note

If you want to enable encryption for your host during cluster installation, specify the following parameters in the `install-config.yaml` file:
* `compute.platform.azure.encryptionAtHost`
* `controlPlane.platform.azure.encryptionAtHost`
* `platform.azure.defaultMachinePlatform.encryptionAtHost`

:::