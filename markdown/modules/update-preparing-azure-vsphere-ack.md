{%- set _mod_docs_content_type = "PROCEDURE" %}
# Providing an administrator acknowledgment for Microsoft Azure or VMware vSphere clusters {id="update-preparing-azure-vsphere-ack_{{ context }}"}

If you are updating a {{ azure_first }} or {{ vmw_first }} cluster from {{ product_title }} 4.21 to 4.22, and you have not configured the `managedBootImages` parameter, the update is blocked with a "_This cluster is Azure or vSphere but lacks a boot image configuration._" message. {._abstract}

The update is blocked intentionally on {{ azure_short }} or {{ vmw_short }} clusters in order to alert you that the default updated boot image behavior is changing between version 4.21 and 4.22 to enable updated boot images by default on those platforms.

To allow the update, you must perform one of the following tasks:

*   If you want to allow the feature to be enabled, you must provide an administrator acknowledgment as described in the following procedure before you can update your cluster.
*   If you do not want the updated boot image feature enabled, you must explicitly disable the feature for compute nodes and then update your cluster.
For more information, see "Disabling boot image management".

**Prerequisite**

*   You must have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

*   Acknowledge that you are aware of the change in the default behavior by running the following command:
    ```terminal
    $ oc -n openshift-config patch cm admin-acks --patch '{"data":{"ack-4.21-boot-image-opt-out-in-4.22":"true"}}' --type=merge
    ```