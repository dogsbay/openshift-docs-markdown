---
title: "Understand {{ sno }} network reconfiguration"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understand {{ sno }} network reconfiguration {id="cnf-understanding-sno-ip-configuration"}
{%- set context = "understanding-sno-ip-configuration" %}

Use the {{ lcao }} to change the network configuration of a {{ sno }} cluster without performing a full redeployment. This is critical for many edge computing use cases such as disaster recovery and network rehoming. {._abstract}

{% leveloffset +1 %}{% include "./modules/cnf-sno-ip-configuration-use-cases.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-sno-ip-configuration-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-sno-ip-configuration-supported-changes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-sno-ip-configuration-requirements.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing the {{ lcao }} using the CLI](/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/cnf-image-based-upgrade-install-operators#cnf-image-based-upgrade-installing-lifecycle-agent-using-cli_install-operators)