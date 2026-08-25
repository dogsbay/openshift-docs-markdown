{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a hosted cluster in multiple zones on {{ aws_short }} {id="hc-create-aws-multiple-zones_{{ context }}"}

To improve availability and fault tolerance, you can create a hosted cluster across multiple {{ aws_short }} availability zones. Distributing your node pools and compute nodes across several zones protects your workloads against potential outages in a single geographical region. {._abstract}

You can create a hosted cluster in multiple zones on {{ aws_first }} by using the `hcp` command-line interface (CLI).

**Prerequisites**

*   You created an {{ aws_short }} Identity and Access Management (IAM) role and {{ aws_short }} Security Token Service (STS) credentials.

**Procedure**

*   Create a hosted cluster in multiple zones on {{ aws_short }} by running the following command:
    ```terminal
    $ hcp create cluster aws \
      --name <hosted_cluster_name> \
      --node-pool-replicas=<node_pool_replica_count> \
      --base-domain <base_domain> \
      --pull-secret <path_to_pull_secret> \
      --role-arn <arn_role> \
      --region <region> \
      --zones <zones> \
      --sts-creds <path_to_sts_credential_file>
    ```

    where:

    `<hosted_cluster_name>`
    :   Specifies the name of your hosted cluster, such as `my-hosted-cluster-01`.

    `<node_pool_replica_count>`
    :   Specifies the node pool replica count, for example, `2`.

    `<base_domain>`
    :   Specifies your base domain, for example, `example.com`.

    `<path_to_pull_secret>`
    :   Specifies the path to your pull secret, for example, `/user/name/pullsecret`.

    `<arn_role>`
    :   Specifies the Amazon Resource Name (ARN), for example, `arn:aws:iam::820196288204:role/myrole`.

    `<region>`
    :   Specifies the {{ aws_short }} region name, for example, `us-east-1`.

    `<zones>`
    :   Specifies availability zones within your {{ aws_short }} region, for example, `us-east-1a`, and `us-east-1b`. For each specified zone, the following infrastructure is created: public subnet, private subnet, NAT gateway, and private route table. A public route table is shared across public subnets. One `NodePool` resource is created for each zone. The node pool name is suffixed by the zone name. The private subnet for the zone is set in the `spec.platform.aws.subnet.id` parameter.

    `<path_to_sts_credential_file>`
    :   Specifies the path to your {{ aws_short }} STS credentials file, for example, `/home/user/sts-creds/sts-creds.json`.