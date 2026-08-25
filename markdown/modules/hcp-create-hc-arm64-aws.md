{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a hosted cluster on an ARM64 {{ product_title }} cluster {id="hcp-create-hc-arm64-aws_{{ context }}"}

You can run a hosted cluster on an ARM64 {{ product_title }} cluster for {{ aws_first }} by overriding the default release image with a multi-architecture release image. {._abstract}

If you do not use a multi-architecture release image, the compute nodes in the node pool are not created and reconciliation of the node pool stops until you either use a multi-architecture release image in the hosted cluster or update the `NodePool` custom resource based on the release image.

**Prerequisites**

*   You must have an {{ product_title }} cluster with a 64-bit ARM infrastructure that is installed on {{ aws_short }}. For more information, see "Create an {{ product_title }} Cluster: {{ aws_short }} (ARM)".
*   You must create an {{ aws_short }} Identity and Access Management (IAM) role and {{ aws_short }} Security Token Service (STS) credentials. For more information, see "Creating an {{ aws_short }} IAM role and STS credentials".

**Procedure**

*   Create a hosted cluster on an ARM64 {{ product_title }} cluster by entering the following command:
    ```terminal
    $ hcp create cluster aws \
      --name <hosted_cluster_name> \
      --node-pool-replicas <node_pool_replica_count> \
      --base-domain <base_domain> \
      --pull-secret <path_to_pull_secret> \
      --sts-creds <path_to_sts_credential_file> \
      --region <region> \
      --release-image quay.io/openshift-release-dev/ocp-release:<ocp_release_image> \
      --role-arn <role_name>
    ```

    where:

    `<hosted_cluster_name>`
    :   Specifies the name of your hosted cluster, for example, `my-hosted-cluster-01`.

    `<node_pool_replica_count>`
    :   Specifies the node pool replica count, for example, `3`.

    `<base_domain>`
    :   Specifies your base domain, for example, `example.com`.

    `<path_to_pull_secret>`
    :   Specifies the path to your pull secret, for example, `/user/name/pullsecret`.

    `<path_to_sts_credential_file>`
    :   Specifies the path to your {{ aws_short }} STS credentials file, for example, `/home/user/sts-creds/sts-creds.json`.

    `<region>`
    :   Specifies the {{ aws_short }} region name, for example, `us-east-1`.

    `<ocp_release_image>`
    :   Specifies the supported {{ product_title }} version that you want to use, for example, `4.22.0-multi`. If you are using a disconnected environment, replace `<ocp_release_image>` with the digest image. To extract the {{ product_title }} release image digest, see "Extracting the release image digest".

    `<role_name>`
    :   Specifies the Amazon Resource Name (ARN), for example, `arn:aws:iam::820196288204:role/myrole`.