{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling the cluster autoscaler {id="deleting-cluster-autoscaler_{{ context }}"}

To disable the cluster autoscaler, you delete the corresponding `ClusterAutoscaler` resource. {._abstract}


:::note

Disabling the cluster autoscaler disables autoscaling on the cluster, even if the cluster has existing machine autoscalers.

:::


**Procedure**

1.  List the `ClusterAutoscaler` resource for the cluster by running the following command:
    ```terminal
    $ oc get ClusterAutoscaler
    ```
    ```terminal title="Example output"
    NAME      AGE
    default   42m
    ```
1.  Optional: Create a YAML file backup of the `ClusterAutoscaler` CR by running the following command:
    ```terminal
    $ oc get ClusterAutoscaler/default \
      -o yaml> <cluster_autoscaler_backup_name>.yaml
    ```

    where:

    &lt;cluster_autoscaler_backup_name>
    :   Specifies the file name in which to store the backup.

1.  Delete the `ClusterAutoscaler` CR by running the following command:
    ```terminal
    $ oc delete ClusterAutoscaler/default
    ```
    ```terminal title="Example output"
    clusterautoscaler.autoscaling.openshift.io "default" deleted
    ```

**Verification**

*   To verify that the cluster autoscaler is disabled, run the following command:
    ```terminal
    $ oc get ClusterAutoscaler
    ```
    ```terminal title="Expected output"
    No resources found
    ```

**Next steps**

*   Disabling the cluster autoscaler by deleting the `ClusterAutoscaler` CR prevents the cluster from autoscaling but does not delete any existing machine autoscalers on the cluster. To clean up unneeded machine autoscalers, see "Disabling a machine autoscaler".
*   If you need to re-enable the cluster autoscaler, use the `<cluster_autoscaler_name_backup>.yaml` backup file and follow the instructions in "Deploying a cluster autoscaler".