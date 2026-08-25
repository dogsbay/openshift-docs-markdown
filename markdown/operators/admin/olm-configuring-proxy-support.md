---
title: Configuring proxy support in Operator Lifecycle Manager
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring proxy support in Operator Lifecycle Manager {id="olm-configuring-proxy-support"}
{%- set context = "olm-configuring-proxy-support" %}

If a global proxy is configured on your {{ product_title }} cluster, Operator Lifecycle Manager (OLM) automatically configures Operators that it manages with the cluster-wide proxy. However, you can also configure installed Operators to override the global proxy or inject a custom CA certificate. {._abstract}

**Additional resources**
{._additional-resources}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Configuring the cluster-wide proxy](/networking/configuring_network_settings/enable-cluster-wide-proxy#enable-cluster-wide-proxy)
{%- endif %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   [Configuring a cluster-wide proxy](/networking/ovn_kubernetes_network_provider/configuring-cluster-wide-proxy#configuring-cluster-wide-proxy)
{%- endif %}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Configuring a custom PKI (custom CA certificate)](/networking/configuring_network_settings/configuring-a-custom-pki#configuring-a-custom-pki)
{%- endif %}

{% leveloffset +1 %}{% include "./modules/olm-overriding-proxy-settings.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-injecting-custom-ca.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Proxy certificates](/security/certificate_types_descriptions/proxy-certificates#proxy-certificates)
*   [Replacing the default ingress certificate](/security/certificates/replacing-default-ingress-certificate#replacing-default-ingress)
*   [Updating the CA bundle](/security/certificates/updating-ca-bundle#updating-ca-bundle)
{% endif %}