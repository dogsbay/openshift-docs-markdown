---
title: "Preparing to install a cluster on {{ ibm_z_title }} and {{ ibm_linuxone_title }} using user-provisioned infrastructure"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Preparing to install a cluster on {{ ibm_z_title }} and {{ ibm_linuxone_title }} using user-provisioned infrastructure {id="upi-ibm-z-preparing-to-install"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "upi-ibm-z-preparing-to-install" %}

Before installing {{ product_title }} on {{ ibm_z_name }} or {{ ibm_linuxone_name }} with user-provisioned infrastructure, you must verify connectivity, download the installation program, and prepare your pull secret and SSH key.

*   Verifying internet connectivity for your cluster.
*   Downloading the installation program.

    :::note

    If you are installing in a disconnected environment, you extract the installation program from the mirrored content. For more information, see Mirroring images for a disconnected installation in the Additional resources section.
    
    :::

*   Installing the {{ oc_first }}.

    :::note

    If you are installing in a disconnected environment, install `oc` to the mirror host.
    
    :::

*   Generating an SSH key pair. You can use this key pair to authenticate into the {{ product_title }} cluster’s nodes after it is deployed.

*   Validating DNS resolution.

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-provisioned-validating-dns.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Mirroring images for a disconnected installation](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)