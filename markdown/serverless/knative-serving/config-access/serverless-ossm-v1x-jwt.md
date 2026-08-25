{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using JSON Web Token authentication with {{ SMProductShortName }} 1.x {id="serverless-ossm-v1x-jwt"}
{%- set context = "serverless-ossm-v1x-jwt" %}

You can use JSON Web Token (JWT) authentication with Knative services by using {{ SMProductShortName }} 1.x and {{ ServerlessProductName }}. To do this, you must create a policy in the application namespace that is a member of the `ServiceMeshMemberRoll` object. You must also enable sidecar injection for the service.

{% leveloffset +1 %}{% include "./modules/serverless-ossm-v1x-jwt.md" %}{% endleveloffset %}