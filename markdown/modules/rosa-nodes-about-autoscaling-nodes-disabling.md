{%- set _mod_docs_content_type = "CONCEPT" %}
# Disabling autoscaling nodes on a cluster {id="rosa-nodes-about-autoscaling-nodes-disabling_{{ context }}"}

Disable autoscaling on worker nodes that increases or decreases the number of nodes available by editing the machine pool definition for an existing cluster. {._abstract}

{% if openshift_dedicated %}
You can disable autoscaling on a cluster by using {{ cluster_manager_first }}.
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp %}
You can disable autoscaling on a cluster by using {{ cluster_manager_first }} or the {{ rosa_cli_first }}.
{% endif %}

{% if openshift_rosa %}

:::note

Additionally, you can configure autoscaling on the default machine pool when you create the cluster using interactive mode.

:::

{% endif %}