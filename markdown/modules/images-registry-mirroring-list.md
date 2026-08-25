{%- set _mod_docs_content_type = "PROCEDURE" %}
# Listing all image mirror configurations {id="images-registry-mirroring-list_{{ context }}"}

You can list all image mirror configurations from a {{ product_title }} cluster with the {{ rosa_cli_first }}. {._abstract}

**Procedure**

1.  Run the following command to list all image mirror configurations for a {{ product_title }} cluster:
    ```terminal
    $ rosa list image-mirrors [arguments]
    ```
    **Arguments**

    |     |     |
    | --- | --- |
    | Option | Definition |
    | --cluster | Required: Name or ID of the cluster. |
    | --output | Optional: Output format. Allowed formats are `json`, `yaml` |
    | --profile | Optional: Use a specific AWS profile from your credential file. |
    | --region | Optional: Use a specific AWS region, overriding the AWS_REGION environment variable. |
1.  Run the following command to list all image mirror configurations for a cluster:
    ```terminal
    $ rosa list image-mirrors --cluster=mycluster
    ```
    ```terminal title="Example Outputs"
    ID              TYPE    SOURCE                    MIRRORS
    abc123def456    digest  registry.example.com/team mirror.corp.com/team, backup.corp.com/
    ```