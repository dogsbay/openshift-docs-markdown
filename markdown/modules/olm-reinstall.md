{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reinstalling Operators after failed uninstallation {id="olm-reinstall_{{ context }}"}

You must successfully and completely uninstall an Operator prior to attempting to reinstall the same Operator. Failure to fully uninstall the Operator properly can leave resources, such as a project or namespace, stuck in a "Terminating" state and cause "error resolving resource" messages. For example: {._abstract}

**Example `Project` resource description**

```
...
    message: 'Failed to delete all resource types, 1 remaining: Internal error occurred:
      error resolving resource'
...
```

These types of issues can prevent an Operator from being reinstalled successfully.


:::warning

Forced deletion of a namespace is not likely to resolve "Terminating" state issues and can lead to unstable or unpredictable cluster behavior, so it is better to try to find related resources that might be preventing the namespace from being deleted. For more information, see the [Red Hat Knowledgebase Solution #4165791](https://access.redhat.com/solutions/4165791), paying careful attention to the cautions and warnings.

:::


The following procedure shows how to troubleshoot when an Operator cannot be reinstalled because an existing custom resource definition (CRD) from a previous installation of the Operator is preventing a related namespace from deleting successfully.

**Procedure**

1.  Check if there are any namespaces related to the Operator that are stuck in "Terminating" state:
    ```terminal
    $ oc get namespaces
    ```
    ```text title="Example output"
    operator-ns-1                                       Terminating
    ```
1.  Check if there are any CRDs related to the Operator that are still present after the failed uninstallation:
    ```terminal
    $ oc get crds
    ```

    :::note

    CRDs are global cluster definitions; the actual custom resource (CR) instances related to the CRDs could be in other namespaces or be global cluster instances.
    
    :::

1.  If there are any CRDs that you know were provided or managed by the Operator and that should have been deleted after uninstallation, delete the CRD:
    ```terminal
    $ oc delete crd <crd_name>
    ```
1.  Check if there are any remaining CR instances related to the Operator that are still present after uninstallation, and if so, delete the CRs:
    1.  The type of CRs to search for can be difficult to determine after uninstallation and can require knowing what CRDs the Operator manages. For example, if you are troubleshooting an uninstallation of the etcd Operator, which provides the `EtcdCluster` CRD, you can search for remaining `EtcdCluster` CRs in a namespace:
        ```terminal
        $ oc get EtcdCluster -n <namespace_name>
        ```

        Alternatively, you can search across all namespaces:
        ```terminal
        $ oc get EtcdCluster --all-namespaces
        ```
    1.  If there are any remaining CRs that should be removed, delete the instances:
        ```terminal
        $ oc delete <cr_name> <cr_instance_name> -n <namespace_name>
        ```
1.  Check that the namespace deletion has successfully resolved:
    ```terminal
    $ oc get namespace <namespace_name>
    ```

    :::important

    If the namespace or other Operator resources are still not uninstalled cleanly, contact Red Hat Support.
    
    :::

1.  Reinstall the Operator using the software catalog in the web console.

**Verification**

*   Check that the Operator has been reinstalled successfully:
    ```terminal
    $ oc get sub,csv,installplan -n <namespace>
    ```