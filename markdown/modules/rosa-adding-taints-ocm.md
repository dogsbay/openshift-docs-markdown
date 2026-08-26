{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding taints to a machine pool using {{ cluster_manager }} {id="rosa-adding-taints-ocm_{{ context }}"}

You can add taints to a machine pool for your {{ product_title }} cluster by using {{ cluster_manager_first }}. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_rosa_hcp) %}
*   You created an {{ product_title }} cluster.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
*   You created a {{ product_title }} cluster.
{%- endif %}
*   You have an existing machine pool that does not contain any taints and contains at least two instances.

**Procedure**

1.  Navigate to {{ cluster_manager_url }} and select your cluster.
1.  Under the **Machine pools** tab, click the Options menu {{ kebab }} for the machine pool that you want to add a taint to.
1.  Select **Edit taints**.
1.  Add **Key** and **Value** entries for your taint.
1.  Select an **Effect** for your taint from the list. Available options include `NoSchedule`, `PreferNoSchedule`, and `NoExecute`.
1.  Optional: Select **Add taint** if you want to add more taints to the machine pool.
1.  Click **Save** to apply the taints to the machine pool.

**Verification**

1.  Under the **Machine pools** tab, select **>** next to your machine pool to expand the view.
1.  Verify that your taints are listed under **Taints** in the expanded view.