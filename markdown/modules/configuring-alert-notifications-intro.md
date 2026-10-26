{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring alert notifications {id="configuring-alert-notifications-intro_{{ context }}"}

You can configure alert notifications to send firing alerts from your cluster to external systems, helping ensure that administrators are notified of conditions that require attention. {._abstract}

In {{ product_title }}, an alert is fired when the conditions defined in an alerting rule are true. An alert provides a notification that a set of circumstances are apparent within a cluster. Firing alerts can be viewed in the Alerting UI in the {{ product_title }} web console by default. After an installation, you can configure {{ product_title }} to send alert notifications to external systems.