{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling node auto-scaling for the hosted cluster {id="hcp-bm-autoscale_{{ context }}"}

When you need more capacity in your hosted cluster and spare agents are available, you can enable auto-scaling to install new worker nodes. {._abstract}

**Procedure**

1.  To enable auto-scaling, enter the following command:
    ```terminal
    $ oc -n <hosted_cluster_namespace> patch nodepool <hosted_cluster_name> \
      --type=json \
      -p '[{"op": "remove", "path": "/spec/replicas"},{"op":"add", "path": "/spec/autoScaling", "value": { "max": 5, "min": 2 }}]'
    ```

    :::note

    In the example, the minimum number of nodes is 2, and the maximum is 5. The maximum number of nodes that you can add might be bound by your platform. For example, if you use the Agent platform, the maximum number of nodes is bound by the number of available agents.
    
    :::

1.  Create a workload that requires a new node.
    1.  Create a YAML file that has the workload configuration, by using the following example:
        ```yaml
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          creationTimestamp: null
          labels:
            app: reversewords
          name: reversewords
          namespace: default
        spec:
          replicas: 40
          selector:
            matchLabels:
              app: reversewords
          strategy: {}
          template:
            metadata:
              creationTimestamp: null
              labels:
                app: reversewords
            spec:
              containers:
              - image: quay.io/mavazque/reversewords:latest
                name: reversewords
                resources:
                  requests:
                    memory: 2Gi
        status: {}
        ```
    1.  Save the file as `workload-config.yaml`.
    1.  Apply the YAML by entering the following command:
        ```terminal
        $ oc apply -f workload-config.yaml
        ```
1.  Extract the `admin-kubeconfig` secret by entering the following command:
    ```terminal
    $ oc extract -n <hosted_cluster_namespace> \
      secret/<hosted_cluster_name>-admin-kubeconfig \
      --to=./hostedcluster-secrets --confirm
    ```
    ```text title="Example output"
    hostedcluster-secrets/kubeconfig
    ```
1.  You can check if new nodes are in the `Ready` status by entering the following command:
    ```terminal
    $ oc --kubeconfig ./hostedcluster-secrets get nodes
    ```
1.  To remove the node, delete the workload by entering the following command:
    ```terminal
    $ oc --kubeconfig ./hostedcluster-secrets -n <namespace> \
      delete deployment <deployment_name>
    ```
1.  Wait for several minutes to pass without requiring the additional capacity. On the Agent platform, the agent is decommissioned and can be reused. You can confirm that the node was removed by entering the following command:
    ```terminal
    $ oc --kubeconfig ./hostedcluster-secrets get nodes
    ```

    :::note

    For {{ ibm_z_name }} agents, if you are using an OSA network device in Processor Resource/Systems Manager (PR/SM) mode, auto scaling is not supported. You must delete the old agent manually and scale up the node pool because the new agent joins during the scale down process.
    
    :::