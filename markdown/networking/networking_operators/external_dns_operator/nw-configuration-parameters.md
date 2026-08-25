---
title: External DNS Operator configuration parameters
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# External DNS Operator configuration parameters {id="external-dns-operator-configuration-parameters"}
{%- set context = "external-dns-operator-configuration-parameters" %}

To customize the behavior of the External DNS Operator, configure the available parameters in the `ExternalDNS` custom resource (CR). By configuraing parameters, you can control how the Operator synchronizes services and routes with your external DNS provider. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-external-dns-operator-configuration-parameters.md" %}{% endleveloffset %}