{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the OIDC provider {id="cloud-experts-getting-started-detailed-ui-oidc-provider_{{ context }}"}

You need to use the {{ rosa_cli }} tool to create your OpenID Connect provider for your cluster. {._abstract}

**Procedure**

*   In your terminal, run the following command to create the OIDC provider:
    ```terminal
    $ rosa create oidc-provider --mode auto --cluster <cluster-name> --yes
    ```

    **Example output**
    ```terminal
    I: Creating OIDC provider using 'arn:aws:iam::000000000000:user/rosauser'
    I: Created OIDC provider with ARN 'arn:aws:iam::000000000000:oidc-provider/rh-oidc.s3.us-east-1.amazonaws.com/1tt4kvrr2kha2rgs8gjfvf0000000000'
    ```