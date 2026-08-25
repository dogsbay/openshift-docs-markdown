{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling a machine autoscaler {id="deleting-machine-autoscaler_{{ context }}"}

To disable a machine autoscaler, you delete the corresponding `MachineAutoscaler` custom resource (CR). {._abstract}


:::note

Disabling a machine autoscaler does not disable the cluster autoscaler. To disable the cluster autoscaler, follow the instructions in "Disabling the cluster autoscaler".

:::


**Procedure**

1.  List the `MachineAutoscaler` CRs for the cluster by running the following command:
    ```terminal
    $ oc get MachineAutoscaler -n openshift-machine-api
    ```
    ```terminal title="Example output"
    NAME                 REF KIND     REF NAME             MIN   MAX   AGE
    compute-us-east-1a   MachineSet   compute-us-east-1a   1     12    39m
    compute-us-west-1a   MachineSet   compute-us-west-1a   2     4     37m
    ```
1.  Optional: Create a YAML file backup of the `MachineAutoscaler` CR by running the following command:
    ```terminal
    $ oc get MachineAutoscaler/<machine_autoscaler_name> \
      -n openshift-machine-api \
      -o yaml> <machine_autoscaler_name_backup>.yaml
    ```

    where:

    &lt;machine_autoscaler_name_backup>
    :   Specifies the file name in which to store the backup.

1.  Delete the `MachineAutoscaler` CR by running the following command:
    ```terminal
    $ oc delete MachineAutoscaler/<machine_autoscaler_name> -n openshift-machine-api
    ```
    ```terminal title="Example output"
    machineautoscaler.autoscaling.openshift.io "compute-us-east-1a" deleted
    ```

**Verification**

*   To verify that the machine autoscaler is disabled, run the following command:
    ```terminal
    $ oc get MachineAutoscaler -n openshift-machine-api
    ```

    The disabled machine autoscaler does not appear in the list of machine autoscalers.

**Next steps**

*   If you need to re-enable the machine autoscaler, use the `<machine_autoscaler_name_backup>.yaml` backup file and follow the instructions in "Deploying a machine autoscaler".