{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing custom catalogs {id="olm-removing-catalogs_{{ context }}"}

As a cluster administrator, you can remove custom Operator catalogs that have been previously added to your cluster by deleting the related catalog source. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  In the **Administrator** perspective of the web console, navigate to **Administration** -> **Cluster Settings**.
1.  Click the **Configuration** tab, and then click **OperatorHub**.
1.  Click the **Sources** tab.
1.  Select the Options menu {{ kebab }} for the catalog that you want to remove, and then click **Delete CatalogSource**.