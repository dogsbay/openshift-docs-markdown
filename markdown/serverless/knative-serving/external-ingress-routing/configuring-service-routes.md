{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring routes for Knative services {id="configuring-service-routes"}
{%- set context = "configuring-service-routes" %}

If you want to configure a Knative service to use your TLS certificate on {{ product_title }}, you must disable the automatic creation of a route for the service by the {{ ServerlessOperatorName }} and instead manually create a route for the service.


:::note

When you complete the following procedure, the default {{ product_title }} route in the `knative-serving-ingress` namespace is not created. However, the Knative route for the application is still created in this namespace.

:::


{% leveloffset +1 %}{% include "./modules/serverless-openshift-routes.md" %}{% endleveloffset %}