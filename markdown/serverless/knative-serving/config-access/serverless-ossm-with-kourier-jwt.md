{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring JSON Web Token authentication for Knative services {id="serverless-ossm-with-kourier-jwt"}
{%- set context = "serverless-ossm-with-kourier-jwt" %}

{{ ServerlessProductName }} does not currently have user-defined authorization features. To add user-defined authorization to your deployment, you must integrate {{ ServerlessProductName }} with {{ SMProductName }}, and then configure JSON Web Token (JWT) authentication and sidecar injection for Knative services.