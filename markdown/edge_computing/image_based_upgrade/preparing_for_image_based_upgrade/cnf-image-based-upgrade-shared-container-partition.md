---
title: Configuring a shared container partition for the image-based upgrade
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring a shared container partition for the image-based upgrade {id="cnf-image-based-upgrade-shared-container-partition"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "shared-container-partition" %}

Your {{ sno }} clusters need to have a shared `/var/lib/containers` partition for the image-based upgrade.
You can do this at install time.

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-shared-container-partition.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-image-based-upgrade-shared-container-partition.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing Butane](/installing/install_config/installing-customizing#installation-special-config-butane-install_installing-customizing)