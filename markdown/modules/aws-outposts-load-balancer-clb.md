{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using {{ aws_first }} Classic Load Balancers in an {{ aws_short }} VPC cluster extended into an Outpost {id="aws-outposts-load-balancer-clb_{{ context }}"}

To prevent Classic Load Balancers in your {{ aws_short }} VPC cluster from scheduling pods on Outpost edge compute nodes, you can label cloud-based compute nodes and configure the load balancer to target only those labeled nodes. {._abstract}

{{ aws_short }} Outposts infrastructure cannot run {{ aws_short }} Classic Load Balancers, but Classic Load Balancers in the {{ aws_short }} VPC cluster can target edge compute nodes in the Outpost if edge and cloud-based subnets are in the same availability zone.
As a result, Classic Load Balancers on the VPC cluster might schedule pods on either of these node types.

Scheduling the workloads on edge compute nodes and cloud-based compute nodes can introduce latency.
If you want to prevent a Classic Load Balancer in the VPC cluster from targeting Outpost edge compute nodes, you can apply labels to the cloud-based compute nodes and configure the Classic Load Balancer to only schedule on nodes with the applied labels.


:::note

If you do not need to prevent a Classic Load Balancer in the VPC cluster from targeting Outpost edge compute nodes, you do not need to complete these steps.

:::


**Prerequisites**

*   You have extended an {{ aws_short }} VPC cluster into an Outpost.
*   You have access to the cluster using an account with `cluster-admin` permissions.
*   You have installed the {{ oc_first }}.
*   You have created a user workload in the Outpost with tolerations that match the taints for your edge compute machines.

**Procedure**

1.  Optional: Verify that the edge compute nodes have the `location=outposts` label by running the following command and verifying that the output includes only the edge compute nodes in your Outpost:
    ```terminal
    $ oc get nodes -l location=outposts
    ```
1.  Label the cloud-based compute nodes in the VPC cluster with a key-value pair by running the following command:
    ```terminal
    $ for NODE in $(oc get node -l node-role.kubernetes.io/worker --no-headers | grep -v outposts | awk '{print$1}'); do oc label node $NODE <key_name>=<value>; done
    ```

    where `<key_name>=<value>` is the label you want to use to distinguish cloud-based compute nodes.
    ```text title="Example output"
    node1.example.com labeled
    node2.example.com labeled
    node3.example.com labeled
    ```
1.  Optional: Verify that the cloud-based compute nodes have the specified label by running the following command and confirming that the output includes all cloud-based compute nodes in your VPC cluster:
    ```terminal
    $ oc get nodes -l <key_name>=<value>
    ```
    ```terminal title="Example output"
    NAME                   STATUS    ROLES     AGE       VERSION
    node1.example.com      Ready     worker    7h        v1.35.4
    node2.example.com      Ready     worker    7h        v1.35.4
    node3.example.com      Ready     worker    7h        v1.35.4
    ```
1.  Configure the Classic Load Balancer service by adding the cloud-based subnet information to the `annotations` field of the `Service` manifest:
    ```yaml title="Example service configuration"
    apiVersion: v1
    kind: Service
    metadata:
      labels:
        app: <application_name>
      name: <application_name>
      namespace: <application_namespace>
      annotations:
        service.beta.kubernetes.io/aws-load-balancer-subnets: <aws_subnet>
        service.beta.kubernetes.io/aws-load-balancer-target-node-labels: <key_name>=<value>
    spec:
      ports:
      - name: http
        port: 80
        protocol: TCP
        targetPort: 8080
      selector:
        app: <application_name>
      type: LoadBalancer
    ```

    where:

    `service.beta.kubernetes.io/aws-load-balancer-subnets`
    :   Specifies the subnet ID for the {{ aws_short }} VPC cluster.

    `service.beta.kubernetes.io/aws-load-balancer-target-node-labels`
    :   Specifies the key-value pair that matches the pair in the node label.

1.  Create the `Service` CR by running the following command:
    ```terminal
    $ oc create -f <file_name>.yaml
    ```

**Verification**

1.  Verify the status of the `service` resource to show the host of the provisioned Classic Load Balancer by running the following command:
    ```terminal
    $ HOST=$(oc get service <application_name> -n <application_namespace> --template='{{(index .status.loadBalancer.ingress 0).hostname}}')
    ```
1.  Verify the status of the provisioned Classic Load Balancer host by running the following command:
    ```terminal
    $ curl $HOST
    ```
1.  In the {{ aws_short }} console, verify that only the labeled instances appear as the targeted instances for the load balancer.