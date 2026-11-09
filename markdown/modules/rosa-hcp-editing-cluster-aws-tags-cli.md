{%- set _mod_docs_content_type = "PROCEDURE" %}
# Edit cluster AWS tags by using the {{ rosa_cli }} {id="rosa-hcp-editing-cluster-aws-tags-cli_{{ context }}"}

Add, update, or remove the custom AWS tags on an existing {{ product_title }} cluster by running the `rosa edit cluster` command with the `--tags` option. {{ product_title }} applies cluster tags to all AWS resources that it creates for the cluster, including the resources for each machine pool. {._abstract}

**Prerequisites**

*   You installed and configured {{ rosa_cli }} 1.2.68 or later.
*   You logged in to your Red&#160;Hat account by using the {{ rosa_cli }}.
*   You have a {{ product_title }} cluster that runs version 4.20.0 or later.

**Procedure**

1.  Optional: To view the current tags for your cluster, run the following command:
    ```terminal
    $ rosa describe cluster --cluster=<cluster_name> --output json | jq '.aws.tags'
    ```

    The output includes tags that Red&#160;Hat adds. Do not include these tags when you edit the cluster tags.
1.  Set the complete list of custom tags for the cluster by running the following command:
    ```terminal
    $ rosa edit cluster --cluster=<cluster_name> --tags '<key>:<value>,<key>:<value>'
    ```

    where:


    `<key>:<value>,<key>:<value>`
    :   Specifies the complete set of custom tags that you want on the cluster, as a comma-separated list of key-value pairs. {{ product_title }} removes any existing custom tag that you omit. You can also specify the `--tags` option more than once. If a key or value includes a space or a colon, enclose the key or value in double quotation marks and enclose the entire value in single quotation marks, for example, `--tags '"Cost Center":"Finance Team"'`.
    ```terminal title="Example command"
    $ rosa edit cluster --cluster=mycluster --tags cost-center:1234 --tags '"Cost Center":"Finance Team"'
    ```

    :::note

    If you use the Windows Command Prompt (`cmd.exe`), escape double quotation marks by doubling them, for example, `--tags """Cost Center"":""Finance Team"""`.
    
    :::

1.  Optional: To remove all custom tags from the cluster, run the following command:
    ```terminal
    $ rosa edit cluster --cluster=<cluster_name> --tags ''
    ```

    This command does not remove tags that you define on individual machine pools.

**Verification**

*   Verify that the cluster has the tags that you specified by running the following command:
    ```terminal
    $ rosa describe cluster --cluster=<cluster_name> --output json | jq '.aws.tags'
    ```