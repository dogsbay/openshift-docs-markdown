{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Manage billing accounts for {{ product_title }} clusters {id="rosa-updating-account-cli"}
{%- set context = "rosa-updating-account-cli" %}

You can use the {{ rosa_cli_first }} to point an existing cluster at a different AWS billing account after deployment. You can correct a billing account linked at install time or change the account at a later date. {._abstract}


:::note

You also have the option to update your billing account through the {{ cluster_manager }}.

:::


{% leveloffset +1 %}{% include "./modules/rosa-update-billing-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_billing-account-cli" ._additional-resources}

*   [Updating billing accounts for {{ product_title }} clusters](https://docs.redhat.com/en/documentation/openshift_cluster_manager/1-latest/html-single/managing_clusters/index#proc_updating-billing-accts-rosa-hcp_assembly-managing-clusters)