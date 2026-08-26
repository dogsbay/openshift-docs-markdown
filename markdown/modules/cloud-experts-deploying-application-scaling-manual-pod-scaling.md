{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manual pod scaling {id="cloud-experts-deploying-application-scaling-manual-pod-scaling_{{ context }}"}

You can manually scale your application’s pods by using one of the following methods: changing your ReplicaSet or deployment definition, using the command line, or using the web console. {._abstract}

You can manually scale your application’s pods by using one of the following methods:

*   Changing your ReplicaSet or deployment definition 
*   Using the command line
*   Using the web console

This workshop starts by using only one pod for the microservice. By defining a replica of `1` in your deployment definition, the Kubernetes Replication Controller strives to keep one pod alive. You then learn how to define pod autoscaling by using the [Horizontal Pod Autoscaler](https://docs.openshift.com/container-platform/latest/nodes/pods/nodes-pods-autoscaling.html)(HPA) which is based on the load and will scale out more pods, beyond your initial definition, if high load is experienced.

**Prerequisites**

*   An active ROSA cluster 
*   A deloyed the OSToy application

**Procedure**

1.  In the OSToy app, click the **Networking** tab in the navigational menu.
1.  In the "Intra-cluster Communication" section, locate the box located beneath "Remote Pods" that randomly changes colors. Inside the box, you see the microservice’s pod name. There is only one box in this example because there is only one microservice pod.
    ![HPA Menu](/images/deploy-scale-network.png)
1.  Confirm that there is only one pod running for the microservice by running the following command:
    ```terminal
    $ oc get pods
    ```

    **Example output:**
    ```terminal
    NAME                                  READY     STATUS    RESTARTS   AGE
    ostoy-frontend-679cb85695-5cn7x       1/1       Running   0          1h
    ostoy-microservice-86b4c6f559-p594d   1/1       Running   0          1h
    ```
1.  Download the [ostoy-microservice-deployment.yaml](https://www.rosaworkshop.io/ostoy/yaml/ostoy-microservice-deployment.yaml) and save it to your local machine.
1.  Change the deployment definition to three pods instead of one by using the following example:
    ```yaml
    spec:
        selector:
          matchLabels:
            app: ostoy-microservice
        replicas: 3
    ```
1.  Apply the replica changes by running the following command:
    ```terminal
    $ oc apply -f ostoy-microservice-deployment.yaml
    ```

    :::note

    You can also edit the `ostoy-microservice-deployment.yaml` file in the OpenShift Web Console by going to the **Workloads > Deployments > ostoy-microservice > YAML** tab.
    
    :::

1.  Confirm that there are now 3 pods by running the following command:
    ```terminal
    $ oc get pods
    ```

    The output shows that there are now 3 pods for the microservice instead of only one.

    **Example output:**
    ```terminal
    NAME                                  READY   STATUS    RESTARTS   AGE
    ostoy-frontend-5fbcc7d9-rzlgz         1/1     Running   0          26m
    ostoy-microservice-6666dcf455-2lcv4   1/1     Running   0          81s
    ostoy-microservice-6666dcf455-5z56w   1/1     Running   0          81s
    ostoy-microservice-6666dcf455-tqzmn   1/1     Running   0          26m
    ```
1.  Scale the application by using the CLI or by using the web UI:
    *   In the CLI, decrease the number of pods from `3` to `2` by running the following command:
        ```terminal
        $ oc scale deployment ostoy-microservice --replicas=2
        ```
    *   From the navigational menu of the OpenShift web console UI, click **Workloads > Deployments > ostoy-microservice**.  
    *   On the left side of the page, locate the blue circle with a "3 Pod" label in the middle. 
    *   Selecting the arrows next to the circle scales the number of pods. Select the down arrow to `2`.
        ![UI Scale](/images/deploy-scale-uiscale.png)
1.  Verify your pod counts by using the CLI, the web UI, or the OSToy app:
    *   From the CLI, confirm that you are using two pods for the microservice by running the following command:
        ```terminal
        $ oc get pods
        ```

        **Example output:**
        ```terminal
        NAME                                  READY   STATUS    RESTARTS   AGE
        ostoy-frontend-5fbcc7d9-rzlgz         1/1     Running   0          75m
        ostoy-microservice-6666dcf455-2lcv4   1/1     Running   0          50m
        ostoy-microservice-6666dcf455-tqzmn   1/1     Running   0          75m
        ```
    *   In the web UI, select **Workloads > Deployments > ostoy-microservice**.
        ![Verify the workload pods](/images/deploy-scale-verify-workload.png)
    *   You can also confirm that there are two pods in use by selecting **Networking** in the navigational menu of the OSToy app. There should be two colored boxes for the two pods.
        ![UI Scale](/images/deploy-scale-colorspods.png)