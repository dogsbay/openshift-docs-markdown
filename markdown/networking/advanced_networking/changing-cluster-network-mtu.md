---
title: Changing the MTU for the cluster network
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Changing the MTU for the cluster network {id="changing-cluster-network-mtu"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "changing-cluster-network-mtu" %}

As a cluster administrator, you can change the maximum transmission unit (MTU) for the cluster network after cluster installation. This change is disruptive as cluster nodes must be rebooted to finalize the MTU change.

{% leveloffset +1 %}{% include "./modules/nw-cluster-mtu-change-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-cluster-mtu-change.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-cluster-mtu-change-prerequisites.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-cluster-mtu-checking.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-cluster-mtu-preparing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-cluster-mtu-creating-mc-objects.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-cluster-mtu-migration.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-cluster-mtu-verifying-configuration.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-cluster-mtu-applying-mtu-value.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-cluster-mtu-finalizing-migration.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources-mtu-cluster-network"}

*   [Using advanced networking options for PXE and ISO installations](/installing/installing_bare_metal/upi/installing-bare-metal#installation-user-infra-machines-advanced_network_installing-bare-metal)
*   [Manually creating NetworkManager profiles in key file format](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/configuring_and_managing_networking/index#proc_manually-creating-a-networkmanager-profile-in-keyfile-format_assembly_networkmanager-connection-profiles-in-keyfile-format)
*   [Configuring a dynamic Ethernet connection using nmcli](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/configuring_and_managing_networking/index#configuring-a-dynamic-ethernet-connection-using-nmcli_configuring-an-ethernet-connection)