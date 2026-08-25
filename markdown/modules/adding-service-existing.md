{%- set _mod_docs_content_type = "PROCEDURE" %}

# Adding an add-on service to a cluster {id="adding-service-existing_{{ context }}"}

You can add an add-on service to an existing {{ product_title }}
{%- if openshift_rosa %}
(ROSA)
{%- endif %}
cluster by using {{ cluster_manager_first }}.

**Prerequisites**

*   You have created and provisioned a cluster for {{ product_title }}.
*   Your cluster meets all of the prerequisites for the service that you want to add on to your cluster.
*   For paid add-on services, note the following considerations:
    *   If the organization has sufficient quota, and if the service is compatible with the cluster, the service appears in {{ cluster_manager }}.
    *   If the organization has never had quota, or if the cluster is not compatible, then the service does not display.
    *   If the organization had quota in the past, but the quota is currently `0`, the service is still visible but disabled in {{ cluster_manager }} until you get more quota.


:::note

To add a service to a cluster, you must be the cluster owner.

:::


**Procedure**

1.  Navigate to the **Cluster List** page in  {{ cluster_manager_url }}.
1.  Select the cluster you want to add a service to.
1.  Click the **Add-ons** tab.
1.  Click the service option you want to add, click **Install**. An installing icon appears, indicating that the service has begun installing.

    A green check mark appears in the service option when the installation is complete. You might have to refresh your browser to see the installation status.
1.  When the service is **Installed**, click **View in console** to access the service.