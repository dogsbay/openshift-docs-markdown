{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting an image mirror configuration {id="images-registry-mirroring-delete_{{ context }}"}

You can delete an image mirror configuration from a {{ product_title }} cluster with the {{ rosa_cli_first }}. {._abstract}


:::note

Delete operations require confirmation unless the `--yes` or `--y` argument is used.

:::


**Procedure**

1.  Run the following command to delete an image mirror configuration from a {{ product_title }} cluster:
    ```terminal
    $ rosa delete image-mirror [arguments]
    ```
    **Arguments**

    | Option | Definition |
    | --- | --- |
    | --cluster | Required: The name or ID (string) of the cluster that the image mirror configuration will be deleted from. |
    | --id | Required: ID of the image mirror configuration to delete. |
    | `--yes`, `-y` | Optional: Automatically answers "yes" to confirm deletion. |
    | --profile | Optional: Use a specific AWS profile from your credential file. |
    | --region | Optional: Use a specific AWS region, overriding the AWS_REGION environment variable. |

    **Examples**

    Deletes an image mirror configuration without a confirmation prompt.
    ```terminal
    $ rosa delete image-mirror --cluster=mycluster abc123def456 --yes
    ```
    ```terminal title="Example Output"
    I: Image mirror 'abc123def456' has been deleted from cluster 'mycluster'
    ```
1.  Run the following command to deletes an image mirror configuration with a confirmation prompt:
    ```terminal
    $ rosa delete image-mirror --cluster=mycluster --id=abc123def456
    ```