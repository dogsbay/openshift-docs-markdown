{%- set _mod_docs_content_type = "CONCEPT" %}
# Add compute capacity {id="add-compute-capacity-intro_{{ context }}"}

You can add compute capacity to your cluster by creating a machine pool using {{ cluster_manager_first }}.
{%- if openshift_rosa or openshift_rosa_hcp %}
You can also create a machine pool by using the ROSA CLI (`rosa`), including machine pools that use autoscaling.
{%- endif %}
{%- if openshift_rosa_hcp %}
On {{ product_title }}, you can also create machine pools that use Windows License Included (LI) instances, AWS Capacity Reservations, or spot instances.
{%- endif %}