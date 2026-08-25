{%- set _mod_docs_content_type = "PROCEDURE" %}
# Node Autoscaling {id="cloud-experts-deploying-application-scaling-node-autoscaling_{{ context }}"}

{{ product_title }} allows you to use node autoscaling. In this scenario, you will create a new project with a job that has a large workload that the cluster cannot handle. With autoscaling enabled, when the load is larger than your current capacity, the cluster will automatically create new nodes to handle the load. {._abstract}

{{ product_title }} allows you to use [node autoscaling](https://docs.openshift.com/rosa/rosa_cluster_admin/rosa-nodes-about-autoscaling-nodes.html). In this scenario, you will create a new project with a job that has a large workload that the cluster cannot handle. With autoscaling enabled, when the load is larger than your current capacity, the cluster will automatically create new nodes to handle the load.

**Prerequisites**

*   Autoscaling is enabled on your machine pools.

**Procedure**

1.  Create a new project called `autoscale-ex` by running the following command:
    ```terminal
    $ oc new-project autoscale-ex
    ```
1.  Create the job by running the following command:
    ```terminal
    $ oc create -f https://raw.githubusercontent.com/openshift-cs/rosaworkshop/master/rosa-workshop/ostoy/yaml/job-work-queue.yaml
    ```
1.  After a few minuts, run the following command to see the pods:
    ```terminal
    $ oc get pods
    ```
    ```terminal title="Example output"
    NAME                     READY   STATUS    RESTARTS   AGE
    work-queue-5x2nq-24xxn   0/1     Pending   0          10s
    work-queue-5x2nq-57zpt   0/1     Pending   0          10s
    work-queue-5x2nq-58bvs   0/1     Pending   0          10s
    work-queue-5x2nq-6c5tl   1/1     Running   0          10s
    work-queue-5x2nq-7b84p   0/1     Pending   0          10s
    work-queue-5x2nq-7hktm   0/1     Pending   0          10s
    work-queue-5x2nq-7md52   0/1     Pending   0          10s
    work-queue-5x2nq-7qgmp   0/1     Pending   0          10s
    work-queue-5x2nq-8279r   0/1     Pending   0          10s
    work-queue-5x2nq-8rkj2   0/1     Pending   0          10s
    work-queue-5x2nq-96cdl   0/1     Pending   0          10s
    work-queue-5x2nq-96tfr   0/1     Pending   0          10s
    ```
1.  Because there are many pods in a `Pending` state, this status should trigger the autoscaler to create more nodes in your machine pool. Allow time to create these worker nodes.
1.  After a few minutes, use the following command to see how many worker nodes you now have:
    ```terminal
    $ oc get nodes
    ```
    ```terminal title="Example output"
    NAME                                         STATUS   ROLES          AGE     VERSION
    ip-10-0-138-106.us-west-2.compute.internal   Ready    infra,worker   22h     v1.23.5+3afdacb
    ip-10-0-153-68.us-west-2.compute.internal    Ready    worker         2m12s   v1.23.5+3afdacb
    ip-10-0-165-183.us-west-2.compute.internal   Ready    worker         2m8s    v1.23.5+3afdacb
    ip-10-0-176-123.us-west-2.compute.internal   Ready    infra,worker   22h     v1.23.5+3afdacb
    ip-10-0-195-210.us-west-2.compute.internal   Ready    master         23h     v1.23.5+3afdacb
    ip-10-0-196-84.us-west-2.compute.internal    Ready    master         23h     v1.23.5+3afdacb
    ip-10-0-203-104.us-west-2.compute.internal   Ready    worker         2m6s    v1.23.5+3afdacb
    ip-10-0-217-202.us-west-2.compute.internal   Ready    master         23h     v1.23.5+3afdacb
    ip-10-0-225-141.us-west-2.compute.internal   Ready    worker         23h     v1.23.5+3afdacb
    ip-10-0-231-245.us-west-2.compute.internal   Ready    worker         2m11s   v1.23.5+3afdacb
    ip-10-0-245-27.us-west-2.compute.internal    Ready    worker         2m8s    v1.23.5+3afdacb
    ip-10-0-245-7.us-west-2.compute.internal     Ready    worker         23h     v1.23.5+3afdacb
    ```

    You can see the worker nodes were automatically created to handle the workload.
1.  Return to the OSToy app by entering the following command:
    ```terminal
    $ oc project ostoy
    ```