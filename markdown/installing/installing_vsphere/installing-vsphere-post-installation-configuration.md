---
title: Configuring the vSphere connection settings after an installation
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the vSphere connection settings after an installation {id="installing-vsphere-post-installation-configuration"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-vsphere-post-installation-configuration" %}

After installing an {{ product_title }} cluster on vSphere with the platform integration feature enabled, you might need to update the vSphere connection settings manually, depending on the installation method.

For installations using the Assisted Installer, you must update the connection settings. This is because the Assisted Installer adds default connection settings to the **vSphere connection configuration** wizard as placeholders during the installation.

For installer-provisioned or user-provisioned infrastructure installations, you should have entered valid connection settings during the installation. You can use the **vSphere connection configuration** wizard at any time to validate or modify the connection settings, but this is not mandatory for completing the installation.

{% leveloffset +1 %}{% include "./modules/configuring-vsphere-connection-settings.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-vsphere-verifying-configuration.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Dynamic provisioning](/storage/dynamic-provisioning#dynamic-provisioning)