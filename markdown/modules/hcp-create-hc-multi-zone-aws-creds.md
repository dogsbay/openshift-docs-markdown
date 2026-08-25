{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a hosted cluster by providing {{ aws_short }} STS credentials {id="hcp-create-hc-multi-zone-aws-creds_{{ context }}"}

To enhance the security of your hosted control plane deployment, you can create a hosted cluster on {{ aws_short }} by using the {{ aws_short }} Security Token Service (STS). {._abstract}

When you create a hosted cluster by using the `hcp create cluster aws` command, you must provide an {{ aws_first }} account credentials that have permissions to create infrastructure resources for your hosted cluster.

Infrastructure resources include the following examples:

*   Virtual Private Cloud (VPC)
*   Subnets
*   Network address translation (NAT) gateways

You can provide the {{ aws_short }} credentials by using the either of the following ways:

*   The {{ aws_short }} Security Token Service (STS) credentials
*   The {{ aws_short }} cloud provider secret from {{ mce_short }}

**Procedure**

*   To create a hosted cluster on {{ aws_short }} by providing {{ aws_short }} STS credentials, enter the following command:
    ```terminal
    $ hcp create cluster aws \
      --name <hosted_cluster_name> \
      --node-pool-replicas <node_pool_replica_count> \
      --base-domain <base_domain> \
      --pull-secret <path_to_pull_secret> \
      --sts-creds <path_to_sts_credential_file> \
      --region <region> \
      --role-arn <arn_role>
    ```

    where:

    `<hosted_cluster_name>`
    :   Specifies the name of your hosted cluster, for example, `my-hosted-cluster-01`.

    `<node_pool_replica_count>`
    :   Specifies the node pool replica count, for example, `2`.

    `<base_domain>`
    :   Specifies your base domain, for example, `example.com`.

    `<path_to_pull_secret>`
    :   Specifies the path to your pull secret, for example, `/user/name/pullsecret`.

    `<path_to_sts_credentials>`
    :   Specifies the path to your {{ aws_short }} STS credentials file, for example, `/home/user/sts-creds/sts-creds.json`.

    `<region>`
    :   Specifies the {{ aws_short }} region name, for example, `us-east-1`.

    `<arn_role>`
    :   Specifies the Amazon Resource Name (ARN), for example, `arn:aws:iam::820196288204:role/myrole`.