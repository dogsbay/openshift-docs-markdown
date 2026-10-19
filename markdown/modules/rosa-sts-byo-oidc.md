{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create an OpenID Connect configuration {id="rosa-sts-byo-oidc_{{ context }}"}

Create an OpenID Connect (OIDC) configuration before creating your {{ product_title }} cluster to authenticate Operator access to required AWS resources by using the AWS Security Token Service (STS). Each production cluster requires its own OIDC configuration. {._abstract}

**Prerequisites**

*   You have completed the AWS prerequisites for {{ product_title }}.
*   You have installed and configured the latest {{ rosa_cli_first }} on your installation host.

**Procedure**

1.  To create your OIDC configuration alongside the AWS resources, run the following command:
    ```terminal
    $ rosa create oidc-config --mode=auto --yes
    ```
    ```terminal title="Example output"
    ? Would you like to create a Managed (Red{nbsp}Hat hosted) OIDC Configuration Yes
    I: Setting up managed OIDC configuration
    I: To create Operator Roles for this OIDC Configuration, run the following command and remember to replace <user_defined> with a prefix of your choice:
    	rosa create operator-roles --prefix <user_defined> --oidc-config-id 13cdr6b
    If you are going to create a Hosted Control Plane cluster please include '--hosted-cp'
    I: Creating OIDC provider using 'arn:aws:iam::4540112244:user/userName'
    ? Create the OIDC provider? Yes
    I: Created OIDC provider with ARN 'arn:aws:iam::4540112244:oidc-provider/dvbwgdztaeq9o.cloudfront.net/13cdr6b'
    ```

    When creating your cluster, you must supply the OIDC config ID. The CLI output provides this value for `--mode auto`, otherwise you must determine these values based on `aws` CLI output for `--mode manual`.
1.  Optional: you can save the OIDC configuration ID as a variable to use later. Run the following command to save the variable:
    ```terminal
    $ export OIDC_ID=<oidc_config_id>
    ```

    `<oidc_config_id>`
    :   In this example output, the OIDC configuration ID is `13cdr6b`.
    *   View the value of the variable by running the following command:
        ```terminal
        $ echo $OIDC_ID
        ```
        ```terminal title="Example output"
        13cdr6b
        ```

**Verification**

*   You can list the possible OIDC configurations available for your clusters that are associated with your user organization. Run the following command:
    ```terminal
    $ rosa list oidc-config
    ```
    ```terminal title="Example output"
    ID                                MANAGED  ISSUER URL                                                             SECRET ARN
    2330dbs0n8m3chkkr25gkkcd8pnj3lk2  true     https://dvbwgdztaeq9o.cloudfront.net/2330dbs0n8m3chkkr25gkkcd8pnj3lk2
    233hvnrjoqu14jltk6lhbhf2tj11f8un  false    https://oidc-r7u1.s3.us-east-1.amazonaws.com                           aws:secretsmanager:us-east-1:242819244:secret:rosa-private-key-oidc-r7u1-tM3MDN
    ```