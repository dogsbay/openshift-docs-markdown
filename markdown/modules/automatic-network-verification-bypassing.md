{%- set _mod_docs_content_type = "CONCEPT" %}
# Automatic network verification bypassing {id="automatic-network-verification-bypassing_{{ context }}"}

You can bypass the automatic network verification if you want to deploy
{%- if openshift_dedicated %}
an {{ product_title }}
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
a {{ product_title }}
{%- endif %}
cluster with known network configuration issues into an existing Virtual Private Cloud (VPC). {._abstract}

If you bypass the network verification when you create a cluster, the cluster has a limited support status. After installation, you can resolve the issues and then manually run the network verification. The verification removes the limited support status after it succeeds.

When you install a cluster into an existing VPC by using {{ cluster_manager_first }}, you can bypass the automatic verification by selecting **Bypass network verification** on the **Virtual Private Cloud (VPC) subnet settings** page.