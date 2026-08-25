{%- set _mod_docs_content_type = "PROCEDURE" %}
{% if not (openshift_rosa or openshift_rosa_hcp) %}
# Deleting a machine pool {id="deleting-machine-pools-ocm_{{ context }}"}

{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
# Deleting a machine pool using {{ cluster_manager }} {id="_deleting_a_machine_pool_using_cluster_manager"}

{% endif %}

You can delete a machine pool for your {{ product_title }} cluster by using {{ cluster_manager_first }}.

**Prerequisites**

{% if openshift_rosa or openshift_rosa_hcp %}
*   You created a {{ product_title }} cluster.
*   The cluster is in the ready state.
*   You have an existing machine pool without any taints and with at least two instances for a single-AZ cluster or three instances for a multi-AZ cluster.
{% endif %}
{% if not (openshift_rosa or openshift_rosa_hcp) %}
*   You have created an {{ product_title }} cluster.
*   The newly created cluster is in the ready state.
{% endif %}

**Procedure**

1.  From {{ cluster_manager_url }}, navigate to the **Cluster List** page and select the cluster that contains the machine pool that you want to delete.
1.  On the selected cluster, select the **Machine pools** tab.
1.  Under the **Machine pools** tab, click the Options menu {{ kebab }} for the machine pool that you want to delete.
1.  Click **Delete**.

    The selected machine pool is deleted.