{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pod Autoscaling {id="cloud-experts-deploying-application-scaling-pod-autoscaling_{{ context }}"}

{{ product_title }} offers a Horizontal Pod Autoscaler (HPA) that uses metrics to increase or decrease the number of pods when necessary. {._abstract}

{{ product_title }} offers a [Horizontal Pod Autoscaler](https://docs.openshift.com/container-platform/latest/nodes/pods/nodes-pods-autoscaling.html) (HPA). The HPA uses metrics to increase or decrease the number of pods when necessary.

**Procedure**

1.  From the navigational menu of the web UI, select **Pod Auto Scaling**.
    ![HPA Menu](/_assets/images/deploy-scale-hpa-menu.png)
1.  Create the HPA by running the following command:
    ```terminal
    $ oc autoscale deployment/ostoy-microservice --cpu-percent=80 --min=1 --max=10
    ```

    This command creates an HPA that maintains between 1 and 10 replicas of the pods controlled by the ostoy-microservice deployment. Thoughout deployment, HPA increases and decreases the number of replicas to keep the average CPU use across all pods at 80% and 40 millicores.
1.  On the **Pod Auto Scaling > Horizontal Pod Autoscaling** page, select **Increase the load**. 

    :::important

    Because increasing the load generates CPU intensive calculations, the page can become unresponsive. This is an expected response. Click **Increase the Load** only once. For more information about the process, see the [microservice’s GitHub repository](https://github.com/openshift-cs/ostoy/blob/master/microservice/app.js#L32). 
    
    :::


    After a few minutes, the new pods display on the page represented by colored boxes.

    :::note

    The page can experience lag.
    
    :::


**Verification**

Check your pod counts with one of the following methods:

*   In the OSToy application’s web UI, see the remote pods box:
    ![HPA Main](/_assets/images/deploy-scale-hpa-mainpage.png)

    Because there is only one pod, increasing the workload should trigger an increase of pods.
*   In the CLI, run the following command:
    ```terminal
    oc get pods --field-selector=status.phase=Running | grep microservice
    ```

    ***Example output:***
    ```terminal
    ostoy-microservice-79894f6945-cdmbd   1/1     Running   0          3m14s
    ostoy-microservice-79894f6945-mgwk7   1/1     Running   0          4h24m
    ostoy-microservice-79894f6945-q925d   1/1     Running   0          3m14s
    ```
*   You can also verify autoscaling from the {{ cluster_manager }} 
    1.  In the OpenShift web console navigational menu, click **Observe > Dashboards**.
    1.  In the dashboard, select **Kubernetes / Compute Resources / Namespace (Pods)** and your namespace **ostoy**.
        ![Select metrics](/_assets/images/deploy-scale-hpa-metrics.png)
    1.  A graph appears showing your resource usage across CPU and memory. The top graph shows recent CPU consumption per pod and the lower graph indicates memory usage. The following lists the callouts in the graph: 
        1.  The load increased (A). 
        1.  Two new pods were created (B and C). 
        1.  The thickness of each graph represents the CPU consumption and indicates which pods handled more load. 
        1.  The load decreased (D), and the pods were deleted.
            ![Select metrics](/_assets/images/deploy-scale-metrics.png)