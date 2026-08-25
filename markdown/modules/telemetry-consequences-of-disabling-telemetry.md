{%- set _mod_docs_content_type = "CONCEPT" %}
# Consequences of disabling remote health reporting {id="telemetry-consequences-of-disabling-telemetry_{{ context }}"}

You can disable reporting usage information, but understand potential consequences before doing so. {._abstract}

Before you disable remote health reporting, read the following benefits of a connected cluster:

*   Red&#160;Hat can react more quickly to problems and better support our customers.
*   Red&#160;Hat can better understand how product upgrades impact clusters.
*   Connected clusters help to simplify the subscription and entitlement process.
*   Connected clusters enable the {{ cluster_manager }} service to offer an overview of your clusters and their subscription status.


:::note

Consider leaving health and usage reporting enabled for pre-production, test, and production clusters. This means that Red&#160;Hat can participate in qualifying {{ product_title }} in your environments and react more rapidly to product issues.

:::


The following lists some consequences of disabling remote health reporting on a connected cluster:

*   Red&#160;Hat cannot view the success of product upgrades or the health of your clusters without an open support case.
*   Red&#160;Hat cannot use configuration data to better triage customer support cases and identify which configurations our customers find important.
*   The {{ cluster_manager }} cannot show data about your clusters, which includes health and usage information.
{%- if not openshift_origin %}
*   You must manually enter your subscription information in the `console.redhat.com` web console without the benefit of automatic usage reporting.
{% endif %}

In restricted networks, Telemetry and {{ red_hat_lightspeed }} data still gets gathered through the appropriate configuration of your proxy.