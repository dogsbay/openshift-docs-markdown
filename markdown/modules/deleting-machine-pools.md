{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a machine pool {id="deleting-machine-pools_{{ context }}"}

You can delete a machine pool if your workload requirements have changed and your current machine pools no longer meet your needs. You can delete machine pools by using
{%- if openshift_rosa or openshift_rosa_hcp %}
{{ cluster_manager_first }} or the {{ rosa_cli_first }}.
{% endif %}
{% if not (openshift_rosa or openshift_rosa_hcp) %}
{{ cluster_manager_first }}.
{% endif %} {._abstract}

{% if not (openshift_rosa or openshift_rosa_hcp) %}

**Prerequisites**

*   You have created an {{ product_title }} cluster.
*   The cluster is in the ready state.
*   You have an existing machine pool without any taints and with at least two replicas for a Single-AZ cluster or three replicas for a Multi-AZ cluster.

**Procedure**

1.  From {{ cluster_manager_url }}, navigate to the **Cluster List** page and select the cluster that contains the machine pool that you want to delete.
1.  On the selected cluster, select the **Machine pools** tab.
1.  Under the **Machine pools** tab, click the Options menu {{ kebab }} for the machine pool that you want to delete.
1.  Click **Delete**.

**Verification**

*   Verify that the machine pool no longer is displayed in the list of machine pools on the **Machine pools** tab.
{% endif %}