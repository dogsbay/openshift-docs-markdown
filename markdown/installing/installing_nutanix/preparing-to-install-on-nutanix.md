---
title: Installation methods
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installation methods {id="preparing-to-install-on-nutanix"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "preparing-to-install-on-nutanix" %}

You can install an {{ product_title }} cluster on Nutanix by using a variety of different installation methods. Each method has qualities that can make the method more suitable for different use cases, such as installing a cluster in a disconnected environment or installing a cluster that requires minimal configuration and provisioning. Before you install {{ product_title }}, ensure that your Nutanix environment meets specific requirements.

{% leveloffset +1 %}{% include "./modules/installation-nutanix-infrastructure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/preparing-to-install-on-nutanix-agent-based-installer-reference.md" %}{% endleveloffset %}

**Additional resources**

*   [Preparing to install with the Agent-based Installer](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#preparing-to-install-with-agent-based-installer)

{% leveloffset +1 %}{% include "./modules/installation-nutanix-installer-infra-reqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cco-ccoctl-configuring.md" %}{% endleveloffset %}

**Additional resources**

*   [Preparing to update a cluster with manually maintained credentials](/updating/preparing_for_updates/preparing-manual-creds-update#preparing-manual-creds-update)