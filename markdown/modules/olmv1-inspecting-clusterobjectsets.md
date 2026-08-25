{%- set _mod_docs_content_type = "PROCEDURE" %}
# Inspecting ClusterObjectSets {id="olmv1-inspecting-clusterobjectsets_{{ context }}"}

Monitor and troubleshoot cluster extension deployments by viewing ClusterObjectSet phases, resource status, and revision history. {._abstract}

**Procedure**

1.  List all `ClusterObjectSets` in the cluster by entering the following command:
    ```terminal
    $ oc get clusterobjectsets
    ```
1.  List `ClusterObjectSets` for a specific extension by running the following command:
    ```terminal
    $ oc get clusterobjectsets -l olm.operatorframework.io/owner-name=<extension_name>
    ```

    Replace `<extension_name>` with your `ClusterExtension` name.
1.  View the details of a specific `ClusterObjectSet` by running the following command:
    ```terminal
    $ oc get clusterobjectset <clusterobjectset_name> -o yaml
    ```

    Shows deployment phases, resource status, and conditions.
1.  Check the `ClusterExtension` status to see active revisions by running the following command:
    ```terminal
    $ oc get clusterextension <extension_name> -o jsonpath='{.status.activeRevisions}{"\n"}'
    ```

    Shows the active revisions currently deployed.