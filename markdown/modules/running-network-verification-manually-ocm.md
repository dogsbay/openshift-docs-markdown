{%- set _mod_docs_content_type = "PROCEDURE" %}
{%- if openshift_dedicated %}
# Running the network verification manually {id="running-network-verification-manually-ocm_{{ context }}"}

{% endif %}
{% if openshift_rosa %}
# Running the network verification manually using {{ cluster_manager }} {id="_running_the_network_verification_manually_using_cluster_manager"}

{% endif %}

You can manually run the network verification checks for an existing {{ product_title }} cluster by using {{ cluster_manager_first }}. {._abstract}

**Prerequisites**

*   You have an existing {{ product_title }} cluster.
*   You are the cluster owner or you have the cluster editor role.

**Procedure**

1.  Navigate to {{ cluster_manager_url }} and select your cluster.
1.  Select **Verify networking** from the **Actions** drop-down menu.