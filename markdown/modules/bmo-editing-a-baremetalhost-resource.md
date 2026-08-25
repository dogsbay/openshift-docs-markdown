{%- set _mod_docs_content_type = "PROCEDURE" %}
# Editing a BareMetalHost resource {id="bmo-editing-a-baremetalhost-resource_{{ context }}"}

You can edit a node’s `BareMetalHost` resource to update BMC information, move nodes between clusters, or modify provisioning configuration. {._abstract}

Consider the following examples:

*   You deploy a cluster with the {{ ai_full }} and need to add or edit the baseboard management controller (BMC) host name or IP address.
*   You want to move a node from one cluster to another without deprovisioning it.

**Prerequisites**

*   Ensure the node is in the `Provisioned`, `ExternallyProvisioned`, or `Available` state.

**Procedure**

1.  Get the list of nodes:
    ```terminal
    $ oc get bmh -n openshift-machine-api
    ```
1.  Before editing the node’s `BareMetalHost` resource, detach the node from Ironic by running the following command:
    ```terminal
    $ oc annotate baremetalhost <node_name> -n openshift-machine-api 'baremetalhost.metal3.io/detached=true'
    ```

    Replace `<node_name>` with the name of the node.
1.  Edit the  `BareMetalHost` resource by running the following command:
    ```terminal
    $ oc edit bmh <node_name> -n openshift-machine-api
    ```
1.  Reattach the node to Ironic by running the following command:
    ```terminal
    $ oc annotate baremetalhost <node_name> -n openshift-machine-api 'baremetalhost.metal3.io/detached'-
    ```