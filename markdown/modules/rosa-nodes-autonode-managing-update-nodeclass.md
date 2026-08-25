{%- set _mod_docs_content_type = "PROCEDURE" %}
# Update a non-default `OpenshiftEC2NodeClass` {id="rosa-nodes-autonode-managing-update-nodeclass_{{ context }}"}

You can update the fields of a non-default `OpenshiftEC2NodeClass` resource. The default `OpenshiftEC2NodeClass` is immutable and cannot be modified. {._abstract}


:::important

Updating the `spec.version` field initiates a rolling upgrade of all node pools that reference this `OpenshiftEC2NodeClass`. For more information about pinned and unpinned upgrade behavior, see the upgrade options in _Additional resources_.

:::


**Prerequisites**

*   A non-default `OpenshiftEC2NodeClass` resource exists.
*   You have cluster administrator access.

**Procedure**

1.  View the current configuration of the `OpenshiftEC2NodeClass` resource:
    ```terminal
    $ oc get openshiftec2nodeclass/<nodeclass_name> -o yaml
    ```
1.  Edit the resource:
    ```terminal
    $ oc edit openshiftec2nodeclass/<nodeclass_name>
    ```

    Make the necessary changes to the spec fields. For a complete list of configurable fields, see "OpenshiftEC2NodeClass configuration fields".
1.  Save and close the editor to apply the changes.

**Verification**

1.  Verify that the resource is ready after the update:
    ```terminal
    $ oc get openshiftec2nodeclass/<nodeclass_name> -o json | jq '.status.conditions[] | select(.type=="Ready")'
    ```

    Confirm that the `status` value is `True`.
1.  If you updated `spec.version`, verify that the node pool nodes are rolling:
    ```terminal
    $ oc get nodes
    ```