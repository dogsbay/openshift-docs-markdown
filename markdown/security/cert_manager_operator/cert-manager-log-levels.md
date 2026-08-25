---
title: "Configuring log levels for cert-manager and the {{ cert_manager_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring log levels for cert-manager and the {{ cert_manager_operator }} {id="cert-manager-log-levels"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cert-manager-log-levels" %}

To troubleshoot issues with the cert-manager components and the {{ cert_manager_operator }}, you can configure the log level verbosity.


:::note

To use different log levels for different cert-manager components, see _Customizing cert-manager Operator API fields_.

:::


{% leveloffset +1 %}{% include "./modules/cert-manager-enable-operand-log-level.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cert-manager-enable-operator-log-level.md" %}{% endleveloffset %}

## Additional resources {id="cert-manager-log-levels_additional-resources"}

*   [Customizing cert-manager Operator API fields](/security/cert_manager_operator/cert-manager-customizing-api-fields#cert-manager-customizing-api-fields)