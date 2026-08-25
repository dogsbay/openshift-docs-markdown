---
title: "Perform {{ sno }} network reconfiguration"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Perform {{ sno }} network reconfiguration {id="cnf-configuring-sno-ip-configuration"}
{%- set context = "configuring-sno-ip-configuration" %}

You can perform a network reconfiguration on a {{ sno }} cluster by editing the `IPConfig` custom resource (CR) and transitioning through the configuration stages.

{% leveloffset +1 %}{% include "./modules/cnf-changing-sno-ip-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-rollback-sno-ip-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-automatic-rollback-sno-ip-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-ipconfig-cr-reference.md" %}{% endleveloffset %}