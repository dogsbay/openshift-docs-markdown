{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting SR-IOV configuration {id="nw-sriov-troubleshooting_{{ context }}"}

After following the procedure to configure an SR-IOV network device, the following sections address some error conditions. {._abstract}

**Procedure**

*   To display the state of nodes, run the following command:
    ```terminal
    $ oc get sriovnetworknodestates -n openshift-sriov-network-operator <node_name>
    ```

    `<node_name>` specifies the name of a node with an SR-IOV network device.

    If the output from the command indicates "cannot allocate memory", check the following items:
    *   Confirm that global SR-IOV settings are enabled in the BIOS for the node.
    *   Confirm that VT-d is enabled in the BIOS for the node.