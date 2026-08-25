{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling Amazon Spot Instance support for node pools {id="hcp-aws-spot-instance-enable_{{ context }}"}

Enable Amazon Spot Instances for your compute nodes in hosted cluster node pools to reduce cloud infrastructure costs for non-critical and fault-tolerant workloads. {._abstract}

**Prerequisites**

*   You set up Amazon Simple Queue Service (SQS) and Amazon EventBridge to receive Amazon EC2 interruption events.
*   You have the URL of your Amazon SQS queue, which you created in "Configuring Amazon SQS and Amazon EventBridge to receive Amazon EC2 interruption events".

**Procedure**

1.  Set the Amazon SQS queue URL on your hosted cluster.
    *   If you are setting the SQS queue URL on a new hosted cluster, take the following steps:
        1.  Configure the `HostedCluster` resource as follows:
            ```yaml
            apiVersion: hypershift.openshift.io/v1beta1
            kind: HostedCluster
            metadata:
              name: <my_hosted_cluster>
              namespace: <my_hosted_cluster_namespace>
            spec:
              platform:
                type: AWS
                aws:
                  region: us-east-1
                  terminationHandlerQueueURL: "https://sqs.us-east-1.amazonaws.com/123456789012/my-cluster-spot-interruption-queue"
            ...
            ```

            where:

            `spec.platform.aws.terminationHandlerQueueURL`
            :   Specifies the SQS queue URL. 

        1.  Apply the configuration by entering the following command:
            ```terminal
            $ oc apply -f <hosted_cluster_config>.yaml
            ```
    *   If you are setting the SQS queue URL on an existing hosted cluster, patch the `HostedCluster` resource as follows:
        ```terminal
        $ oc patch hostedcluster my-cluster -n clusters --type merge -p '{
          "spec": {
            "platform": {
              "aws": {
                "terminationHandlerQueueURL": "https://sqs.us-east-1.amazonaws.com/123456789012/my-cluster-spot-interruption-queue"
              }
            }
          }
        }'
        ```
1.  Create a `NodePool` object that has the Spot market type configured, as shown in the following example:
    ```yaml
    apiVersion: hypershift.openshift.io/v1beta1
    kind: NodePool
    metadata:
      name: spot-workers
      namespace: <my_hosted_cluster_namespace>
    spec:
      clusterName: <my_hosted_cluster>
      replicas: 3
      release:
        image: quay.io/openshift-release-dev/ocp-release:4.22.0-x86_64
      management:
        autoRepair: true
        upgradeType: Replace
      platform:
        type: AWS
        aws:
          instanceType: m5.xlarge
          instanceProfile: my-cluster-worker
          rootVolume:
            size: 120
            type: gp3
          placement:
            marketType: Spot
    ```

    `marketType: Spot`
    :   Specifies that all `Machine` objects and `Node` objects have the `hypershift.openshift.io/interruptible-instance` label and that the EC2 instances have the `aws-node-termination-handler/managed` tag so they can be identified by the termination-handling components. You can specify `spot` options only when the `marketType` field is set to `Spot`.

1.  Apply the configuration by entering the following command:
    ```terminal
    $ oc apply -f <node_pool_config>.yaml
    ```