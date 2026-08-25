{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring machine pool AutoRepair {id="rosa-configuring-autorepair_{{ context }}"}

{{ product_title }} supports an automatic repair process for machine pools, called AutoRepair. AutoRepair is useful when you want the {{ product_title }} service to detect certain unhealthy nodes, drain the unhealthy nodes, and re-create the nodes. You can disable AutoRepair if the unhealthy nodes should not be replaced, such as in cases where the nodes should be preserved. AutoRepair is enabled by default on machine pools.

The AutoRepair process deems a node unhealthy when the state of the node is either `NotReady` or is in an unknown state for predefined amount of time (typically 8 minutes). Whenever two or more nodes become unhealthy simultaneously, the AutoRepair process stops repairing the nodes.
Similarly, when a new node is created unhealthy even after a predefined amount of time (typically 20 minutes), the service will auto-repair.

{% if openshift_rosa_hcp %}

:::note

Machine pool AutoRepair is only available for {{ product_title }} clusters.

:::

{% endif %}