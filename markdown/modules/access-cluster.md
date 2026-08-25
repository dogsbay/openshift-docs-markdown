{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing your cluster {id="access-cluster_{{ context }}"}

After you have configured your identity providers, users can access the cluster from {{ cluster_manager_first }}. {._abstract}

**Prerequisites**

*   You logged in to {{ cluster_manager_url }}.
*   You created an {{ product_title }} cluster.
*   You configured an identity provider for your cluster.
*   You added your user account to the configured identity provider.

**Procedure**

1.  From {{ cluster_manager_url }}, select the cluster you want to access.
1.  Click **Open console** to open the web console for your cluster.
1.  Select your identity provider and enter your credentials to log in to the cluster. Complete any authorization requests from your provider.