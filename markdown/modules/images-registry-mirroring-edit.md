{%- set _mod_docs_content_type = "PROCEDURE" %}
# Editing an image mirroring configuration {id="images-registry-mirroring-edit_{{ context }}"}

You can edit an image mirror configuration for a {{ product_title }} cluster with the {{ rosa_cli_first }} tool. {._abstract}


:::note

When editing an image mirror configuration, the new mirrors list completely replaces the existing mirrors list.

:::


**Procedure**

1.  Run the following command to edit an image mirror configuration:
    ```terminal
    $ rosa edit image-mirror [arguments]
    ```

    **Arguments**

    | Option | Definition |
    | --- | --- |
    | --cluster | Required: The name or ID (string) of the cluster to which the image mirror configuration applies. |
    | --mirrors | Required: New list of mirror registries that replaces current mirror registries. Mirror registries must be comma-separated. |
    | --id | Required: ID of the image mirror configuration to edit. |
    | --profile | Optional: Use a specific AWS profile from your credential file. |
    | --region | Optional: Use a specific AWS region, overriding the AWS_REGION environment variable. |
1.  Run the following command to replace a single mirror on an image mirror configuration:
    ```terminal
    $ rosa edit image-mirror --cluster=mycluster --id=abc123def456 \
      --mirrors=single-mirror.company.com/team
    ```
    ```terminal title="Example Output"
    I: Image mirror 'abc123def456' has been updated on cluster 'mycluster'
    I: Source: registry.example.com/team
    I: Updated mirrors: [single-mirror.company.com/team]
    ```
1.  Run the following command to replace all mirrors on an image mirror configuration:
    ```terminal
    $ rosa edit image-mirror --cluster=mycluster --id=abc123def456 \
      --mirrors=new-primary.company.com/team,new-secondary.company.com/team
    ```