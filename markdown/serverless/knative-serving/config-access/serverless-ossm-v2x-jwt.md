{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using JSON Web Token authentication with {{ SMProductShortName }} 2.x {id="serverless-ossm-v2x-jwt"}
{%- set context = "serverless-ossm-v2x-jwt" %}

You can use JSON Web Token (JWT) authentication with Knative services by using {{ SMProductShortName }} 2.x and {{ ServerlessProductName }}. To do this, you must create authentication requests and policies in the application namespace that is a member of the `ServiceMeshMemberRoll` object. You must also enable sidecar injection for the service.

{% leveloffset +1 %}{% include "./modules/serverless-ossm-v2x-jwt.md" %}{% endleveloffset %}