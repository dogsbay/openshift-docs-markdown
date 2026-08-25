{%- set _mod_docs_content_type = "PROCEDURE" %}
# Cluster roles and access {id="ocm-accesscontrol-tab-cluster-roles-access_{{ context }}"}

You can create a `dedicated-admins` role for {{ dedicated }} clusters or `cluster-admins` role for {{ rosa_title }} or {{ rosa_classic_title }} clusters. {._abstract}

**Procedure**

1.  Click the ***Add user*** button.
1.  Enter the ID of the user you want to grant cluster admin access.
1.  Select the appropriate group for your user. Either `dedicated-admins` for {{ dedicated }} clusters, or `cluster-admins` for 
{%- if openshift_rosa or openshift_rosa_hcp %}
{{ product_title }} 
{%- endif %}
clusters.