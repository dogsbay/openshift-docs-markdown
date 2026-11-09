{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding tags to a machine pool {id="rosa-adding-tags_{{ context }}"}

You can add tags for compute nodes, also known as worker nodes, in a machine pool to introduce custom user tags for AWS resources that are generated when you provision your machine pool.
{%- if openshift_rosa %}
Note that you cannot edit the tags after you create the machine pool. {._abstract}
{%- endif %}

{% if openshift_rosa_hcp %}

:::note

On clusters that run version 4.20.0 and later, you can edit machine pool tags after you create the machine pool.

If a tag key is defined on both the cluster and the machine pool, the machine pool tag value takes precedence over the cluster tag value for AWS resources created by that machine pool.

:::

{% endif %}

**Procedure**

*   Add tags to a machine pool by using {{ cluster_manager }} or the {{ rosa_cli_first }}.