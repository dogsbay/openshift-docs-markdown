{%- set _mod_docs_content_type = "PROCEDURE" %}
# Managing DNS zones {id="ocm-cli-manage-dns-zones_{{ context }}"}

Managing your domain infrastructure is a key part of maintaining a healthy cluster environment. With the {{ cluster_manager }} CLI (`ocm`), you can easily view and manage your existing managed DNS zones associated with your account. This allows you to keep track of your DNS configurations, make necessary updates, and ensure that your cluster’s network settings are always up to date and secure. {._abstract}

**Procedure**

*   Use the following commands to view and manage existing managed DNS zones associated with your account.
    *   To list all the managed DNS zones, run the following command:
        ```terminal
        $ ocm gcp list dns-zones
        ```
    *   To view details about a specific managed DNS zone, run the following command, replacing `<dns_zone_id>` with the ID of the DNS zone you want to view:
        ```terminal
        $ ocm gcp describe dns-zone <dns_zone_id>
        ```
    *   To delete a managed DNS zone, run the following command, replacing `<dns_zone_id>` with the ID of the DNS zone you want to delete:
        ```terminal
        $ ocm gcp delete dns-zone <dns_zone_id>
        ```

        :::note

        You cannot delete a managed DNS zone that is currently attached to an active {{ product_title }} cluster.
        
        :::