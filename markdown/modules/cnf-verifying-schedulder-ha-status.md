{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying scheduler high availability (HA) status {id="verifying-scheduler-ha-status_{{ context }}"}

You can verify the status of the NUMA-aware scheduler to ensure the scheduler is running with the expected number of replicas based on your configuration. {._abstract}

**Procedure**

1.  List only the scheduler pods by running the following command:
    ```terminal
    $ oc get pods -n openshift-numaresources -l app=secondary-scheduler
    ```
    ```terminal title="Expected output"
    NAME                                   READY   STATUS    RESTARTS   AGE
    secondary-scheduler-5b8c9d479d-2r4p5   1/1     Running   0          5m
    secondary-scheduler-5b8c9d479d-k2f3p   1/1     Running   0          5m
    secondary-scheduler-5b8c9d479d-q8c7b   1/1     Running   0          5m
    ```

    Using the default HA mode, the number of pods equals the number of control-plane nodes. A standard HA {{ product_title }} cluster typically has three control-plane nodes, and therefore displays three pods. If you **customized the replicas**, the number of pods matches the value you set. If you **disabled the scheduler**, there are no running pods with this label.

    :::note

    A limit of 3 replicas is enforced for the NUMA-aware scheduler. On a hosted control planes cluster, the scheduler pods run on the compute nodes of the hosted-cluster.
    
    :::

1.  Verify the number of replicas and their status by running the following command:
    ```terminal
    $ oc get deployment secondary-scheduler -n openshift-numaresources
    ```
    ```terminal title="Example output"
    NAME                  READY   UP-TO-DATE   AVAILABLE   AGE
    secondary-scheduler   3/3     3            3           5m
    ```

    In this output, 3/3 means 3 replicas are ready out of an expected 3 replicas.
1.  For more detailed information run the following command:
    ```terminal
    $ oc describe deployment secondary-scheduler -n openshift-numaresources
    ```
    ```yaml title="Example output"
    Replicas:        3 desired | 3 updated | 3 total | 3 available | 0 unavailable
    ```

    The `Replicas` line shows a deployment configured for 3 replicas, with all 3 updated and available.