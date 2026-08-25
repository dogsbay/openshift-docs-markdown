{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling node auto-scaling for the hosted cluster {id="hcp-openstack-autoscale_{{ context }}"}

When you need more capacity in your hosted cluster on {{ rh_openstack_first }} and spare agents are available, you can enable auto-scaling to install new worker nodes. {._abstract}

**Procedure**

1.  To enable auto-scaling, enter the following command:
    ```terminal
    $ oc -n <hosted_cluster_namespace> patch nodepool <hosted_cluster_name> \
      --type=json \
      -p '[{"op": "remove", "path": "/spec/replicas"},{"op":"add", "path": "/spec/autoScaling", "value": { "max": 5, "min": 2 }}]'
    ```
1.  Create a workload that requires a new node.
    1.  Create a YAML file that has the workload configuration, by using the following example:
        ```yaml
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          labels:
            app: reversewords
          name: reversewords
          namespace: default
        spec:
          replicas: 40
          selector:
            matchLabels:
              app: reversewords
          template:
            metadata:
              labels:
                app: reversewords
            spec:
              containers:
              - image: quay.io/mavazque/reversewords:latest
                name: reversewords
                resources:
                  requests:
                    memory: 2Gi
        ```
    1.  Save the file with the name `workload-config.yaml`.
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
1.  Wait for several minutes to pass without requiring the additional capacity. You can confirm that the node was removed by entering the following command:
    ```terminal
    $ oc --kubeconfig ./hostedcluster-secrets get nodes
    ```