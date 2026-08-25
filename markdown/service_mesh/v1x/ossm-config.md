{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring Service Mesh {id="ossm-config-v1x"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ossm-config-v1x" %}

{% include "./snippets/ossm-out-of-support.md" %}

After you create a `ServiceMeshControlPlane` resource, configure the resource to suit your environment and requirements.

This guide references the Bookinfo sample application to provide examples of security in an example application. Install the [Bookinfo application](/service_mesh/v2x/prepare-to-deploy-applications-ossm#ossm-tutorial-bookinfo-overview_deploying-applications-ossm) to learn how these routing examples work.

{% leveloffset +1 %}{% include "./modules/ossm-config-security.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-security-mtls-1x.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-security-cipher.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-security-cert-manage.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-config-dist-trac.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-config-sampling.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-config-external-jaeger.md" %}{% endleveloffset %}