{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting the ClusterPodPlacementConfig object by using the CLI {id="multi-architecture-deleting-podplacement-config-using-cli_{{ context }}"}

You can create only one instance of the `ClusterPodPlacementConfig` object. If you want to re-create this object, you must first delete the existing instance. {._abstract}

You can delete this object by using the {{ oc_first }}.

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in to `oc` as a user with `cluster-admin` privileges.

**Procedure**

1.  Delete the `ClusterPodPlacementConfig` object by running the following command:
    ```terminal
    $ oc delete clusterpodplacementconfig cluster
    ```

**Verification**

*   To check that the `ClusterPodPlacementConfig` object is deleted, run the following command:
    ```terminal
    $ oc get clusterpodplacementconfig
    ```
    ```terminal title="Example output"
    No resources found
    ```