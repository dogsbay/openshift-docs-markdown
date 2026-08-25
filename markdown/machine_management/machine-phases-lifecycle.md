---
title: Machine phases and lifecycle
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Machine phases and lifecycle {id="machine-phases-lifecycle"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "machine-phases-lifecycle" %}

Machines move through a _lifecycle_ that has several defined phases. Understanding the machine lifecycle and its phases can help you verify whether a procedure is complete or troubleshoot undesired behavior. In {{ product_title }}, the machine lifecycle is consistent across all supported cloud providers.

{% leveloffset +1 %}{% include "./modules/machine-about-phases.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-about-lifecycle.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-determine-phase-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-determine-phase-gui.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Lifecycle hooks for the machine deletion phase](/machine_management/deleting-machine#machine-lifecycle-hook-deletion_deleting-machine)