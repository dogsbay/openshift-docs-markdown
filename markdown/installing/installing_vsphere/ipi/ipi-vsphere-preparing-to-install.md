---
title: Preparing to install a cluster using installer-provisioned infrastructure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Preparing to install a cluster using installer-provisioned infrastructure {id="ipi-vsphere-preparing-to-install"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ipi-vsphere-preparing-to-install" %}

You should familiarize yourself with the steps you must perform before install an {{ product_title }} cluster on vSphere.

You prepare to install an {{ product_title }} cluster on vSphere by completing the following steps:

*   Downloading the installation program.

    :::note

    If you are installing in a disconnected environment, you extract the installation program from the mirrored content. For more information, see "Mirroring images for a disconnected installation".
    
    :::

*   Installing the {{ oc_first }}.

    :::note

    If you are installing in a disconnected environment, install `oc` to the mirror host.
    
    :::

*   Generating an SSH key pair. You can use this key pair to authenticate into the {{ product_title }} cluster’s nodes after it is deployed.
*   Adding your vCenter’s trusted root CA certificates to your system trust.

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-adding-vcenter-root-certificates.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_ipi-vsphere-preparing-to-install"}

*   [Mirroring images for a disconnected installation](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)