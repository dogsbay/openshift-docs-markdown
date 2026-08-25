{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Customizing security in a Service Mesh {id="ossm-security-v1x"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ossm-security-v1x" %}

{% include "./snippets/ossm-out-of-support.md" %}

If your service mesh application is constructed with a complex array of microservices, you can use {{ SMProductName }} to customize the security of the communication between those services. The infrastructure of {{ product_title }} along with the traffic management features of {{ SMProductShortName }} can help you manage the complexity of your applications and provide service and identity security for microservices.

{% leveloffset +1 %}{% include "./modules/ossm-security-mtls-1x.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-security-cipher-1x.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-security-cert-manage-1x.md" %}{% endleveloffset %}