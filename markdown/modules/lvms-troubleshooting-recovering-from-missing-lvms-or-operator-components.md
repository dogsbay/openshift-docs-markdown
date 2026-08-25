{%- set _mod_docs_content_type = "PROCEDURE" %}
# Recovering from a missing storage class {id="recovering-from-missing-lvms-or-operator-components_{{ context }}"}

Resolve the "storage class not found" error by verifying that the LVMCluster custom resource (CR) exists and all {{ lvms_first }} pods are running, then reviewing logs to identify configuration issues. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in to the {{ oc_first }} as a user with `cluster-admin` permissions.

**Procedure**

1.  Verify that the `LVMCluster` CR is present by running the following command:
    ```terminal
    $ oc get lvmcluster -n <namespace>
    ```
    ```terminal title="Example output"
    NAME            AGE
    my-lvmcluster   65m
    ```
1.  If the `LVMCluster` CR is not present, create an `LVMCluster` CR. For more information, see "Ways to create an LVMCluster custom resource".
1.  In the namespace where the operator is installed, check that all the {{ lvms }} pods are in the `Running` state by running the following command:
    ```terminal
    $ oc get pods -n <namespace>
    ```
    ```terminal title="Example output"
    NAME                                  READY   STATUS    RESTARTS      AGE
    lvms-operator-7b9fb858cb-6nsml        3/3     Running   0             70m
    topolvm-controller-5dd9cf78b5-7wwr2   5/5     Running   0             66m
    topolvm-node-dr26h                    4/4     Running   0             66m
    vg-manager-r6zdv                      1/1     Running   0             66m
    ```

    The output of this command must contain a running instance of the following pods:
    *   `lvms-operator`
    *   `vg-manager`

        If the `vg-manager` pod is stuck while loading a configuration file, it is due to a failure to locate an available disk for {{ lvms }} to use. To retrieve the necessary information to troubleshoot this issue, review the logs of the `vg-manager` pod by running the following command:
        ```terminal
        $ oc logs -l app.kubernetes.io/component=vg-manager -n <namespace>
        ```