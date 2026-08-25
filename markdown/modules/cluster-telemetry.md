{%- set _mod_docs_content_type = "CONCEPT" %}
{% if not openshift_origin %}
# Telemetry access for {{ product_title }} {id="cluster-telemetry_{{ context }}"}

To provide metrics about cluster health and the success of updates, the Telemetry service requires internet access. When connected, this service runs automatically by default and registers your cluster to {{ cluster_manager_url }}. {._abstract}

After you confirm that your {{ cluster_manager_url }} inventory is correct, either maintained automatically by Telemetry or manually by using {{ cluster_manager }},use subscription watch to track your {{ product_title }} subscriptions at the account or multi-cluster level. For more information about subscription watch, see "Data Gathered and Used by Red Hat’s subscription services" in the _Additional resources_ section.
{% endif %}