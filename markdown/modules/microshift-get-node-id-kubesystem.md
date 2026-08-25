{%- set _mod_docs_content_type = "PROCEDURE" %}
# Get the node ID of a running node {id="microshift-get-node-id-kubesystem_{{ context }}"}

Retrieving the node ID enables you to uniquely identify a device within your deployment. The node ID is required to register the node with central management systems, analyze system logs and alerts, and ensure that configuration updates are targeted accurately. {._abstract}

**Procedure**

*   Get the ID of a running node using `oc get` by entering the following command:
    ```terminal
    $ oc get namespaces kube-system -o jsonpath={.metadata.uid}
    ```
    ```terminal title="Example output"
    7cf13853-68f4-454e-8f5c-1af748cbfb1a
    ```
*   Get the ID of a running node by retrieving it from the `cluster-id` file by entering the following command:
    ```terminal
    $ sudo cat /var/lib/microshift/cluster-id
    ```
    ```terminal title="Example output"
    7cf13853-68f4-454e-8f5c-1af748cbfb1a
    ```