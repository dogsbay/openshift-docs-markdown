{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Routing overview {id="routing-overview"}
{%- set context = "routing-overview" %}

Knative leverages {{ product_title }} TLS termination to provide routing for Knative services. When a Knative service is created, an {{ product_title }} route is automatically created for the service. This route is managed by the {{ ServerlessOperatorName }}. The {{ product_title }} route exposes the Knative service through the same domain as the {{ product_title }} cluster.

You can disable Operator control of {{ product_title }} routing so that you can configure a Knative route to directly use your TLS certificates instead.

Knative routes can also be used alongside the {{ product_title }} route to provide additional fine-grained routing capabilities, such as traffic splitting.

{% if openshift_enterprise %}
## Additional resources {id="additional-resources_serverless-configuring-routes" ._additional-resources}
*   [Route-specific annotations](/networking/ingress_load_balancing/routes/route-configuration#nw-route-specific-annotations_route-configuration)
{% endif %}