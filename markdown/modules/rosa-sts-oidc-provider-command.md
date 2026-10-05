{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create an OIDC provider using the {{ rosa_cli }} {id="rosa-sts-oidc-provider-for-operators-aws-cli_{{ context }}"}

Create an OpenID Connect (OIDC) provider that is hosted in your AWS account with the {{ rosa_cli_first }} to enable in-cluster Operators to authenticate with AWS resources. {._abstract}

**Prerequisites**

*   You have installed the latest version of the {{ rosa_cli }}.

**Procedure**

*   To create an OIDC provider, use an unregistered or a registered OIDC configuration.
    *   Unregistered OIDC configurations require you to create the OIDC provider through the cluster. Run the following to create the OIDC provider:
        ```terminal
        $ rosa create oidc-provider --mode manual --cluster <cluster_name>
        ```

        :::note

        When using `manual` mode, the `aws` command is printed to the terminal for your review. After reviewing the `aws` command, you must run it manually. Alternatively, you can specify `--mode auto` with the `rosa create` command to run the `aws` command immediately.
        
        :::

        ```terminal title="Example output"
        aws iam create-open-id-connect-provider \
        	--url https://oidc.op1.openshiftapps.com/<oidc_config_id> \
        	--client-id-list openshift sts.<aws_region>.amazonaws.com \
        	--thumbprint-list <thumbprint>
        ```
        where:


        `<oidc_config_id>`
        :   Specifies the URL used to reach the OIDC identity provider after the cluster is created.

        `<thumbprint>`
        :   Specifies the thumbprint, which is generated automatically when you run the `rosa create oidc-provider` command. For more information about using thumbprints with AWS Identity and Access Management (IAM) OIDC identity providers, see [Obtain the thumbprint for OIDC](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc_verify-thumbprint.html) (AWS documentation).
    *   Registered OIDC configurations use an OIDC configuration ID. Run the following command with your OIDC configuration ID:
        ```terminal
        $ rosa create oidc-provider --oidc-config-id <oidc_config_id> --mode auto -y
        ```
        ```terminal title="Example output"
        I: Creating OIDC provider using 'arn:aws:iam::4540112244:user/userName'
        I: Created OIDC provider with ARN 'arn:aws:iam::4540112244:oidc-provider/dvbwgdztaeq9o.cloudfront.net/241rh9ql5gpu99d7leokhvkp8icnalpf'
        ```