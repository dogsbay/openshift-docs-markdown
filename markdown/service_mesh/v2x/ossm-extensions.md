---
title: Extensions
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Extensions {id="ossm-extensions"}
{%- set context = "ossm-extensions" %}

You can use WebAssembly extensions to add new features directly into the {{ SMProductName }} proxies. This lets you move even more common functionality out of your applications, and implement them in a single language that compiles to WebAssembly bytecode.

{% if not (openshift_rosa or openshift_rosa_hcp) %}

:::note

WebAssembly extensions are not supported on {{ ibm_z_name }} and {{ ibm_power_name }}.

:::


{% endif %}

{% leveloffset +1 %}{% include "./modules/ossm-extensions-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-extensions-wasmplugin-format.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-extensions-ref-wasmplugin.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-extensions-wasmplugin-deploy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-extensions-smextension-format.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-extensions-ref-smextension.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-extensions-smextension-deploy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-extensions-migration-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-extensions-migrating-to-wasmplugin.md" %}{% endleveloffset %}