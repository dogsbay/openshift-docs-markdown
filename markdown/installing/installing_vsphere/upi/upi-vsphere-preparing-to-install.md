---
title: Preparing to install a cluster using user-provisioned infrastructure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Preparing to install a cluster using user-provisioned infrastructure {id="upi-vsphere-preparing-to-install"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "upi-vsphere-preparing-to-install" %}

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
*   Preparing the user-provisioned infrastructure.
*   Validating DNS resolution.

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-infrastructure-user-infra.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-load-balancing-user-infra-example.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-provisioned-validating-dns.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_upi-vsphere-preparing-to-install"}

*   [Mirroring images for a disconnected installation](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)