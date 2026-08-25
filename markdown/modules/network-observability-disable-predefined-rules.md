{%- set _mod_docs_content_type = "REFERENCE" %}
# Disabling default rules {id="network-observability-disable-predefined-rules_{{ context }}"}

Rule templates can be disabled in the `spec.processor.metrics.disableAlerts` field of the `FlowCollector` custom resource (CR). This setting accepts a list of rule template names. For a list of alert template names, see "List of default rules". {._abstract}

If a rule template is included in the `disableAlerts` list, it is not created, even if a custom override exists in the `spec.processor.metrics.healthRules` field. The `disableAlerts` configuration takes precedence over all other health rule settings.

For a list of alert template names, see "List of default rules".