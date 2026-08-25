{%- set _mod_docs_content_type = "CONCEPT" %}
# Upgrade changes from version 2.5 to version 2.6 {id="ossm-upgrade-25-26-changes_{{ context }}"}

## {{ JaegerName }} default setting change {id="_jaegername_default_setting_change"}

This release disables {{ JaegerName }} by default for new instances of the `ServiceMeshControlPlane` resource.

When updating existing instances of the `ServiceMeshControlPlane` resource to {{ SMProductName }} version 2.6, {{ JaegerShortName }} remains enabled by default.

{{ SMProductName }} 2.6 is the last release that includes support for {{ JaegerName }} and {{ es_op }}. Both {{ JaegerShortName }} and {{ es_op }} will be removed in the next release. If you are currently using {{ JaegerShortName }} and {{ es_op }}, you must migrate to {{ TempoName }} and {{ OTELName }}.

## Envoy sidecar container default setting change {id="_envoy_sidecar_container_default_setting_change"}

To enhance pod startup times, Istio now includes a `startupProbe` in sidecar containers by default. The pod’s readiness probes do not start until the Envoy sidecar has started.