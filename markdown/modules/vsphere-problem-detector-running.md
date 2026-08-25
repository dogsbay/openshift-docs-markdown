{%- set _mod_docs_content_type = "PROCEDURE" %}
# Running the {{ operator_name }} checks {id="vsphere-problem-detector-running_{{ context }}"}

You can override the schedule for running the {{ operator_name }} checks and run the checks immediately. {._abstract}

The {{ operator_name }} automatically runs the checks every hour. After the Operator starts, the Operator runs the checks immediately. After the Cluster Storage Operator starts and determines that a cluster runs on {{ vmw_full }}, the Cluster Storage Operator starts the {{ operator_name }}. To run the checks immediately, you can scale the {{ operator_name }} to `0` and back to `1` so that the Cluster Storage Operator restarts the {{ operator_name }}.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

*   Scale the Operator to `0`:
    ```terminal
    $ oc scale deployment/vsphere-problem-detector-operator --replicas=0 \
        -n openshift-cluster-storage-operator
    ```

**Verification**

*   Verify that the pods have restarted by running the following command:
    ```terminal
    $ oc -n openshift-cluster-storage-operator get pod -l name=vsphere-problem-detector-operator -w
    ```
    ```terminal title="Example output"
    NAME                                                 READY   STATUS    RESTARTS   AGE
    vsphere-problem-detector-operator-77486bd645-9ntpb   1/1     Running   0          11s
    ```

    The `AGE` field must indicate that the pod restarted.

**Next steps**

*   Viewing the events from the {{ operator_name }}
*   Viewing the logs from the {{ operator_name }}