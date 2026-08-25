{%- set _mod_docs_content_type = "CONCEPT" %}
# Enabling remote health reporting {id="enabling-remote-health-reporting_{{ context }}"}

If you or your organization have disabled remote health reporting, you can enable this feature again. You can see that remote health reporting is disabled from the message `Insights not available` in the **Status** tile on the {{ product_title }} web console **Overview** page. {._abstract}

To enable remote health reporting, you must change the global cluster pull secret with a new authorization token. Enabling remote health reporting enables both {{ insights_operator }} and Telemetry.