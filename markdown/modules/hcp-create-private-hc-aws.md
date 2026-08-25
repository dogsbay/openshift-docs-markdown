{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a private hosted cluster on {{ aws_short }} {id="hcp-create-private-hc-aws_{{ context }}"}

After you enable the `local-cluster` as the management cluster, you can deploy a hosted cluster or a private hosted cluster on {{ aws_first }}. {._abstract}

By default, hosted clusters are publicly accessible through public DNS and the default router for the management cluster.

For private clusters on {{ aws_short }}, all communication with the hosted cluster occurs over {{ aws_short }} PrivateLink.

**Prerequisites**

*   You enabled {{ aws_short }} PrivateLink. For more information, see "Enabling {{ aws_short }} PrivateLink".
*   You created an {{ aws_short }} Identity and Access Management (IAM) role and {{ aws_short }} Security Token Service (STS) credentials. For more information, see "Creating an {{ aws_short }} IAM role and STS credentials" and "Identity and Access Management (IAM) permissions".
*   You configured a bastion instance on {{ aws_short }}. For more information, see "Tutorial: Configuring private network access using a Linux Bastion Host".

**Procedure**

*   Create a private hosted cluster on {{ aws_short }} by entering the following command:
    ```terminal
    $ hcp create cluster aws \
      --name <hosted_cluster_name> \
      --node-pool-replicas=<node_pool_replica_count> \
      --base-domain <basedomain> \
      --pull-secret <path_to_pull_secret> \
      --sts-creds <path_to_sts_credential_file> \
      --region <region> \
      --endpoint-access Private \
      --role-arn <role_name>
    ```

    where:

    `<hosted_cluster_name>`
    :   Specifies the name of your hosted cluster, such as, `example`.

    `<node_pool_replica_count>`
    :   Specifies the node pool replica count, for example, `3`.

    `<basedomain>`
    :   Specifies your base domain, for example, `example.com`.

    `<path_to_pull_secret>`
    :   Specifies the path to your pull secret, for example, `/user/name/pullsecret`.

    `<path_to_sts_credential_file>`
    :   Specifies the path to your {{ aws_short }} STS credentials file, for example, `/home/user/sts-creds/sts-creds.json`.

    `<region>`
    :   Specifies the {{ aws_short }} region name, for example, `us-east-1`.

    `Private`
    :   Specifies that the cluster is private.

    `<role_name>`
    :   Specifies the Amazon Resource Name (ARN), for example, `arn:aws:iam::820196288204:role/myrole`. For more information about ARN roles, see "Identity and Access Management (IAM) permissions".

    The following API endpoints for the hosted cluster are accessible through a private DNS zone:
*   `api.<hosted_cluster_name>.hypershift.local`
*   `*.apps.<hosted_cluster_name>.hypershift.local`