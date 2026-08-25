{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing network policies using {{ cluster_manager }} {id="nw-networkpolicy-view-ocm_{{ context }}"}

You can view the configuration details of your network policy in {{ cluster_manager_first }}. {._abstract}

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
*   You created a network policy.

**Procedure**

1.  From the **Administrator** perspective in the {{ cluster_manager }} web console, under **Networking**, click **`NetworkPolicies`**.
1.  Select the required network policy to view.
1.  In the **Network Policy** details page, you can view all of the associated ingress and egress rules.
1.  Select **YAML** on the network policy details to view the policy configuration in YAML format.
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}

    :::note

    You can only view the details of these policies. You cannot edit these policies.
    
    :::

{%- endif %}