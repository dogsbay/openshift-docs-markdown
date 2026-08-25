{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a hosted cluster separately {id="hcp-managed-aws-hc-separate_{{ context }}"}

In {{ hcp }} on {{ aws_short }}, you can create a hosted cluster separately from creating the infrastructure and Identity and Access Management (IAM) resources. {._abstract}

**Prerequisites**

*   You created infrastructure resources separately. For more information, see "Creating the {{ aws_short }} infrastructure separately".
*   You created the following IAM resources:
    *   An OpenID Connect (OIDC) identity provider in IAM, which is required to enable STS authentication. For more information, see [Create an OpenID Connect (OIDC) identity provider in IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html).
    *   The seven roles that are listed in "Identity and Access Management (IAM) permissions." The roles are separate for every component that interacts with the provider, such as the Kubernetes controller manager, cluster API provider, and registry. For more information, see [IAM role creation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html).
    *   The instance profile, which is the profile that is assigned to all worker instances of the cluster. For more information, see [Use instance profiles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html).

**Procedure**

1.  To create a hosted cluster separately, enter the following command:
    ```terminal
    $ hcp create cluster aws \
        --infra-id <infra_id> \
        --name <hosted_cluster_name> \
        --sts-creds <path_to_sts_credential_file> \
        --pull-secret <path_to_pull_secret> \
        --generate-ssh \
        --node-pool-replicas 3 \
        --role-arn <role_name> \
        --render-sensitive \
        --render > <file_name>.yaml
    ```
    *   `--infra-id` specifies the same ID that you specified in the `create infra aws` command. This value identifies the IAM resources that are associated with the hosted cluster.
    *   `--name` specifies the name of your hosted cluster.
    *   `--sts-creds` specifies the same name that you specified in the `create infra aws` command.
    *   `--pull-secret` specifies the name of the file that contains a valid {{ product_title }} pull secret.
    *   `--generate-ssh` is an optional flag, but it is good to include in case you need to SSH to your workers. An SSH key is generated for you and is stored as a secret in the same namespace as the hosted cluster.
    *   `--role-arn` specifies the Amazon Resource Name (ARN); for example, `arn:aws:iam::820196288204:role/myrole`. For more information about ARN roles, see "Identity and Access Management (IAM) permissions".
    *   `--render-sensitive` generates secrets that are stored in the YAML file.
    *   `--render` is an optional flag. You can include this flag to redirect output to a file where you can edit the resources before you apply them to the cluster.
1.  Apply the manifests by entering the following command:
    ```terminal
    $ oc apply -f <file_name>.yaml
    ```

**Verification**

*   After you run the command, you can verify that the following resources are applied to your cluster:
    *   A namespace
    *   A secret with your pull secret
    *   A `HostedCluster`
    *   A `NodePool`
    *   Three {{ aws_short }} STS secrets for control plane components
    *   If you specified the `--generate-ssh` flag, one SSH key secret.