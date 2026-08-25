{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding additional principals to your existing {{ product_title }} cluster {id="rosa-additional-principals-edit_{{ context }}"}

If you did not specify additional allowed principals when you created your cluster, or if your access requirements have changed, you can add additional principals to an existing cluster by using the {{ rosa_cli_first }}. {._abstract}

**Procedure**

*   Run the following command to edit your cluster and add an additional principal who can access this cluster’s endpoint:
    ```terminal
    $ rosa edit cluster -c <cluster_name> --additional-allowed-principals <arn_string>
    ```

    You can use `arn:aws:iam::account_id:role/role_name` to approve a specific role.

**Next steps**

*   Configure an identity provider.