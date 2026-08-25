{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Custom domain mapping {id="create-domain-mapping"}
{%- set context = "create-domain-mapping" %}

You can customize the domain for your Knative service by mapping a custom domain name that you own to a Knative service. To map a custom domain name to a custom resource (CR), you must create a `DomainMapping` CR that maps to an Addressable target CR, such as a Knative service or a Knative route.

{% leveloffset +1 %}{% include "./modules/serverless-create-domain-mapping.md" %}{% endleveloffset %}