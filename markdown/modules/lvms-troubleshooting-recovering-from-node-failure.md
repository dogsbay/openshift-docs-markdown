{%- set _mod_docs_content_type = "PROCEDURE" %}
# Recovering from node failure {id="recovering-from-node-failure_{{ context }}"}

Identify failed nodes causing persistent volume claims (PVCs) to remain in pending state by examining the restart count of the `topolvm-node` pod, which indicates potential underlying node problems requiring investigation. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in to the {{ oc_first }} as a user with `cluster-admin` permissions.

**Procedure**

*   Examine the restart count of the `topolvm-node` pod instances by running the following command:
    ```terminal
    $ oc get pods -n <namespace>
    ```
    ```terminal title="Example output"
    NAME                                  READY   STATUS    RESTARTS      AGE
    lvms-operator-7b9fb858cb-6nsml        3/3     Running   0             70m
    topolvm-controller-5dd9cf78b5-7wwr2   5/5     Running   0             66m
    topolvm-node-dr26h                    4/4     Running   0             66m
    topolvm-node-54as8                    4/4     Running   0             66m
    topolvm-node-78fft                    4/4     Running   17 (8s ago)   66m
    vg-manager-r6zdv                      1/1     Running   0             66m
    vg-manager-990ut                      1/1     Running   0             66m
    vg-manager-an118                      1/1     Running   0             66m
    ```

**Next steps**

If the PVC is stuck in the `Pending` state even after you have resolved any issues with the node, you must perform a forced clean-up. For more information, see "Performing a forced clean-up".