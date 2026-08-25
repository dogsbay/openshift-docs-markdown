{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a network policy using {{ cluster_manager }} {id="nw-networkpolicy-delete-ocm_{{ context }}"}

You can delete a network policy in a namespace. {._abstract}

**Prerequisites**

*   You logged in to {{ cluster_manager_url }}.
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   You created an {{ product_title }} cluster.
{%- endif %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   You created a {{ product_title }} cluster.
{%- endif %}
*   You configured an identity provider for your cluster.
*   You added your user account to the configured identity provider.

**Procedure**

1.  From the **Administrator** perspective in the {{ cluster_manager }} web console, under **Networking**, click **NetworkPolicies**.
1.  Use one of the following methods for deleting your network policy:
    1.  Delete the policy from the **Network Policies** table:
        1.  From the **Network Policies** table, select the stack menu on the row of the network policy you want to delete and then, click **Delete NetworkPolicy**.
    1.  Delete the policy using the **Actions** drop-down menu from the individual network policy details:
        1.  Click **Actions** drop-down menu for your network policy.
        1.  Select **Delete NetworkPolicy** from the menu.