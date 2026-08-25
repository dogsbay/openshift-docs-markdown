---
title: Configuring the web terminal
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the web terminal {id="configuring-web-terminal"}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "configuring-web-terminal" %}

You can configure timeout and image settings for the web terminal, either for your current session or for all user sessions if you are a cluster administrator.

{% leveloffset +1 %}{% include "./modules/odc-configure-web-terminal-timeout-session.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configure-web-terminal-timeout-admin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-configure-web-terminal-image-session.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configure-web-terminal-image-admin.md" %}{% endleveloffset %}