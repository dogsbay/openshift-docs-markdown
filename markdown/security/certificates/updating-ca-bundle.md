---
title: Updating the CA bundle
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Updating the CA bundle {id="updating-ca-bundle"}
{%- set context = "updating-ca-bundle" %}

To trust custom certificate authorities for egress connections in {{ product_title }}, you can update the CA bundle by specifying custom CA certificates in the cluster-wide proxy configuration. {._abstract}

{% leveloffset +1 %}{% include "./modules/ca-bundle-understanding.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ca-bundle-replacing.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Replacing the default ingress certificate](/security/certificates/replacing-default-ingress-certificate#replacing-default-ingress_replacing-default-ingress)
*   [Enabling the cluster-wide proxy](/networking/configuring_network_settings/enable-cluster-wide-proxy#nw-proxy-configure-object_config-cluster-wide-proxy)
*   [Proxy certificate customization](/security/certificate_types_descriptions/proxy-certificates#proxy-cert-customization_proxy-certificates)