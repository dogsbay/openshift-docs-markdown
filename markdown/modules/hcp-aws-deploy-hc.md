{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a hosted cluster on {{ aws_short }} by using the CLI {id="hcp-aws-deploy-hc_{{ context }}"}

To create a hosted cluster on {{ aws_first }}, you can use the hosted control plane command-line interface (`hcp`).  {._abstract}

**Prerequisites**

*   You have set up the hosted control plane CLI, `hcp`.
*   You have enabled the `local-cluster` managed cluster as the management cluster.
*   You created an {{ aws_short }} Identity and Access Management (IAM) role and {{ aws_short }} Security Token Service (STS) credentials.

**Procedure**

1.  To create a hosted cluster on {{ aws_short }}, run the following command:
    ```terminal
    $ hcp create cluster aws \
        --name <hosted_cluster_name> \
        --infra-id <infra_id> \
        --base-domain <basedomain> \
        --sts-creds <path_to_sts_credential_file> \
        --pull-secret <path_to_pull_secret> \
        --region <region> \
        --generate-ssh \
        --node-pool-replicas <node_pool_replica_count> \
        --namespace <hosted_cluster_namespace> \
        --role-arn <role_name> \
        --release-image=quay.io/openshift-release-dev/ocp-release:<ocp_release_image> \
        --disable-cluster-capabilities=<capability> \
        --enable-cluster-capabilities=<capability> \
        --render-into <file_name>.yaml \
        --render-sensitive
    ```
    *   `--name` specifies the name of your hosted cluster.
    *   `--infra-id` specifies your infrastructure name. You must provide the same value for `<hosted_cluster_name>` and `<infra_id>`. Otherwise, the cluster might not appear correctly in the {{ mce }} console.
    *   `--base-domain` specifies your base domain, for example, `example.com`.
    *   `--sts-creds` specifies the path to your AWS STS credentials file, for example, `/home/user/sts-creds/sts-creds.json`.
    *   `--pull-secret` specifies the path to your pull secret, for example, `/user/name/pullsecret`.
    *   `--region` specifies the {{ aws_short }} region name, for example, `us-east-1`.
    *   `--node-pool-replicas` specifies the node pool replica count, for example, `3`.
    *   `--namespace` specifies that you want to create the `HostedCluster` and `NodePool` custom resource in a specific namespace. Otherwise, by default, all `HostedCluster` and `NodePool` custom resources are created in the `clusters` namespace.
    *   `--role-arn` specifies the Amazon Resource Name (ARN), for example, `arn:aws:iam::820196288204:role/myrole`.
    *   `--release-image` specifies the supported {{ product_title }} version that you want to use, for example, `4.22.0-multi`.
    *   `--disable-cluster-capabilities` specifies that you want to disable optional capabilities in the hosted cluster. This flag is optional. For more information, see "Capabilities for hosted clusters".
    *   `--enable-cluster-capabilities` specifies that you want to enable an optional capability for the hosted cluster. This flag is optional. For more information, see "Capabilities for hosted clusters".
    *   `--render-into` specifies whether the EC2 instance runs on shared or single tenant hardware. The `--render-into` flag renders Kubernetes resources into the YAML file that you specify in this field. Continue to the next step to edit the YAML file.
    *   `--render-sensitive` specifies that you want sensitive secrets to be rendered into the file that is specified by the `--render-into` flag. If you include the `--render-into` flag in the `hcp create cluster` command, you must also include the `--render-sensitive` flag, or cluster creation fails.
1.  If you included the `--render-into` flag in the `hcp create cluster` command, edit the specified YAML file. Edit the `NodePool` specification in the YAML file to indicate whether the EC2 instance should run on shared or single-tenant hardware, similar to the following example:
    ```yaml title="Example YAML file"
    apiVersion: hypershift.openshift.io/v1beta1
    kind: NodePool
    metadata:
      name: <nodepool_name>
    spec:
      platform:
        aws:
          placement:
            tenancy: "default"
    ```

    where:

    `metadata.name`
    :   Specifies the name of the `NodePool` resource.

    `spec.platform.aws.placement.tenancy`
    :   Specifies a valid value for tenancy: `"default"`, `"dedicated"`, or `"host"`. Use `"default"` when node pool instances run on shared hardware. Use `"dedicated"` when each node pool instance runs on single-tenant hardware. Use `"host"` when node pool instances run on your pre-allocated dedicated hosts.
1.  If you use external load balancers, configure the ingress endpoint by editing the `HostedCluster` resource as shown in the following example. If you do not configure the endpoint, the default behavior is to randomize the node port that the service exposes the ingress on. To configure how the ingress controller publishes the default ingress route, set the `endpointPublishingStrategy` parameter and its underlying functions:
    ```yaml
    #...
    spec:
      operatorConfiguration:
        ingressOperator:
          endpointPublishingStrategy:
            type: LoadBalancerService
            loadBalancer:
              scope: Internal
    #...
    ```

    The `spec.operatorConfiguration.ingressOperator.endPointPublishingStrategy.type` parameter specifies the endpoint for the load balancer. For {{ aws_short }}, use the `LoadBalancerService` type.
1.  Enter the following command:
    ```terminal
    $ oc create -f <file_name>.yaml
    ```

**Verification**

1.  Verify the status of your hosted cluster to check that the value of `AVAILABLE` is `True`. Run the following command:
    ```terminal
    $ oc get hostedclusters -n <hosted_cluster_namespace>
    ```
1.  Get a list of your node pools by running the following command:
    ```terminal
    $ oc get nodepools --namespace <hosted_cluster_namespace>
    ```