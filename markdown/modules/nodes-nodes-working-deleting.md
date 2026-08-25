{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting nodes from a cluster {id="nodes-nodes-working-deleting_{{ context }}"}

You can delete a node from a {{ product_title }} cluster by scaling down the appropriate `MachineSet` object. {._abstract}


:::important

When a cluster is integrated with a cloud provider, you must delete the corresponding machine to delete a node. Do not try to use the `oc delete node` command for this task.

:::


When you delete a node by using the CLI, the node object is deleted in Kubernetes, but the pods that exist on the node are not deleted. Any bare pods that are not backed by a replication controller become inaccessible to {{ product_title }}. Pods backed by replication controllers are rescheduled to other available nodes. You must delete local manifest pods.


:::note

If you are running cluster on bare metal, you cannot delete a node by editing `MachineSet` objects. Compute machine sets are only available when a cluster is integrated with a cloud provider. Instead you must unschedule and drain the node before manually deleting it.

:::


**Procedure**

1.  View the compute machine sets that are in the cluster by running the following command:
    ```terminal
    $ oc get machinesets -n openshift-machine-api
    ```

    The compute machine sets are listed in the form of `<cluster-id>-worker-<aws-region-az>`.
1.  Scale down the compute machine set by using one of the following methods:
    *   Specify the number of replicas to scale down to by running the following command:
        ```terminal
        $ oc scale --replicas=2 machineset <machine-set-name> -n openshift-machine-api
        ```
    *   Edit the compute machine set custom resource by running the following command:
        ```terminal
        $ oc edit machineset <machine-set-name> -n openshift-machine-api
        ```
        ```yaml title="Example output"
        apiVersion: machine.openshift.io/v1beta1
        kind: MachineSet
        metadata:
          # ...
          name: <machine-set-name>
          namespace: openshift-machine-api
          # ...
        spec:
          replicas: 2
          # ...
        ```

        where:

        `spec.replicas`
        :   Specifies the number of replicas to scale down to.