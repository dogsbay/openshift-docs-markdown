{%- set _mod_docs_content_type = "PROCEDURE" %}
# Delete a non-default `OpenshiftEC2NodeClass` {id="rosa-nodes-autonode-managing-delete-nodeclass_{{ context }}"}

Delete a non-default `OpenshiftEC2NodeClass` resource when it is no longer needed. Before deleting, you must remove or reassign all node pools that reference it. {._abstract}


:::important

You cannot delete the default `OpenshiftEC2NodeClass`. Only non-default resources can be deleted.

:::



:::warning

Deleting an `OpenshiftEC2NodeClass` while node pools still reference it prevents those node pools from provisioning new nodes.

:::


**Prerequisites**

*   You have cluster administrator access.

**Procedure**

1.  Identify all node pools and the `OpenshiftEC2NodeClass` each one references:
    ```terminal
    $ oc get nodepool -o json | jq -r '.items[] | "\(.metadata.name) -> \(.spec.template.spec.nodeClassRef.name)"'
    ```
1.  For each node pool identified in the previous step, either delete the node pool or update it to reference a different `OpenshiftEC2NodeClass`:
    *   To delete a node pool:
        ```terminal
        $ oc delete nodepool <nodepool_name>
        ```
    *   To update a node pool to reference a different `OpenshiftEC2NodeClass`:
        ```terminal
        $ oc edit nodepool <nodepool_name>
        ```

        Change the `spec.template.spec.nodeClassRef.name` field to the name of a different `OpenshiftEC2NodeClass`.
1.  Delete the `OpenshiftEC2NodeClass` resource:
    ```terminal
    $ oc delete openshiftec2nodeclass <nodeclass_name>
    ```

**Verification**

1.  Verify that the resource was deleted:
    ```terminal
    $ oc get openshiftec2nodeclass
    ```

    Confirm that the deleted resource is no longer listed.
1.  Verify that no node pools reference the deleted resource:
    ```terminal
    $ oc get nodepool -o json | jq -r '.items[] | select(.spec.template.spec.nodeClassRef.name=="<nodeclass_name>") | .metadata.name'
    ```

    This command should return no output.