---
title: Proxy certificates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Proxy certificates {id="proxy-certificates"}
{%- set context = "proxy-certificates" %}

Proxy certificates allow platform components to trust custom certificate authorities when making egress connections. Understanding proxy certificates helps you configure secure external access for services that require custom certificate authority (CA) trust bundles. {._abstract}

{% leveloffset +1 %}{% include "./modules/proxy-cert-purpose.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring the cluster-wide proxy](/networking/configuring_network_settings/enable-cluster-wide-proxy#enable-cluster-wide-proxy)

{% leveloffset +1 %}{% include "./modules/proxy-cert-manage-install.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proxy-cert-location.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Using shared system certificates](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/securing_networks/using-shared-system-certificates)

{% leveloffset +1 %}{% include "./modules/proxy-cert-expiration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proxy-cert-services.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proxy-cert-customization.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proxy-cert-renewal.md" %}{% endleveloffset %}