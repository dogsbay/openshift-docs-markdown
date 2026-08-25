{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add taints to a machine pool {id="rosa-adding-taints_{{ context }}"}

You can add taints for compute nodes in a machine pool to control which pods are scheduled to them. When you apply a taint to a machine pool, the scheduler cannot place a pod on the nodes in the pool unless the pod specification includes a toleration for the taint. {._abstract}

{% if openshift_rosa or openshift_rosa_hcp %}
Taints can be added to a machine pool using {{ cluster_manager_first }} or the {{ rosa_cli_first }}.
{% endif %}


:::note

A cluster must have at least one machine pool that does not contain any taints.

:::

{% if not (openshift_rosa or openshift_rosa_hcp) %}

**Prerequisites**

*   You created an {{ product_title }} cluster.
*   You have an existing machine pool that does not contain any taints and contains at least two instances.
{% endif %}

{% if openshift_dedicated %}

**Procedure**

1.  Navigate to {{ cluster_manager_url }} and select your cluster.
1.  Under the **Machine pools** tab, click the Options menu {{ kebab }} for the machine pool that you want to add a taint to.
1.  Select **Edit taints**.
1.  Add **Key** and **Value** entries for your taint.
1.  Select an **Effect** for your taint from the list. Available options include `NoSchedule`, `PreferNoSchedule`, and `NoExecute`.
1.  Select **Add taint** if you want to add more taints to the machine pool.
1.  Click **Save** to apply the taints to the machine pool.

**Verification**

1.  Under the **Machine pools** tab, select **>** next to your machine pool to expand the view.
1.  Verify that your taints are listed under **Taints** in the expanded view.
{% endif %}