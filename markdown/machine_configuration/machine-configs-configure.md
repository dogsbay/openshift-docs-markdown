---
title: Using machine config objects to configure nodes
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "machine-configs-configure" %}
{% include "./_attributes/common-attributes.md" %}
# Using machine config objects to configure nodes {id="machine-configs-configure"}

You can create `MachineConfig` custom resources (CR) that modify files, systemd unit files, and other operating system features running on {{ product_title }} nodes. By using `MachineConfig` objects, you can perform tasks such as disabling chronyd, adding kernel arguments, enabling multipathing, and adding {{ op_system }} extensions. {._abstract}

For more ideas on working with machine configs, see "How to update ssh keys after installation in OpenShift 4?", "Container image signatures", "Enabling SCTP in Openshift Container Platform 4", and "How to provide custom iSCSI initiatornames for nodes".

{{ product_title }} supports Ignition specification version 3.5. For more information, see "Configuration Specification v3.5.0 (Ignition documentation)". You should base all new machine configs you create going forward on Ignition specification version 3.5. If you are upgrading your {{ product_title }} cluster, any existing machine configs with a previous Ignition specification will be translated automatically to specification version 3.5.

There might be situations where the configuration on a node does not fully match what the currently-applied machine config specifies. This state is called _configuration drift_. The Machine Config Daemon (MCD) regularly checks the nodes for configuration drift. If the MCD detects configuration drift, the MCO marks the node `degraded` until an administrator corrects the node configuration. A degraded node is online and operational, but, it cannot be updated. For more information on configuration drift, see "Understanding configuration drift detection".


:::tip

Use the following "Configuring chrony time service" procedure as a model for how to go about adding other configuration files to {{ product_title }} nodes.

:::


{% leveloffset +1 %}{% include "./modules/installation-special-config-chrony.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-disable-chronyd.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-kernel-arguments.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rhcos-enabling-multipath-day-2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-rtkernel-arguments.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineconfig-modify-journald.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rhcos-add-extensions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rhcos-load-firmware-blobs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-user-password.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-config-install-time-configs.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [How to update ssh keys after installation in OpenShift 4? (Red&#160;Hat Knowledgebase article)](https://access.redhat.com/solutions/3868301)
*   [Container image signatures](/security/container_security/security-container-signature#security-container-signature)
*   [Enabling SCTP in {{ product_title }} 4 (Red&#160;Hat Knowledgebase article)](https://access.redhat.com/solutions/4727321)
*   [How to provide custom iSCSI initiatornames for nodes in {{ product_title }} 4.x (Red&#160;Hat Knowledgebase article)](https://access.redhat.com/solutions/5170251)
*   [Configuration Specification v3.5.0 (Ignition documentation)](https://coreos.github.io/ignition/configuration-v3_5/)
*   [Understanding configuration drift detection](/machine_configuration/index#machine-config-drift-detection_machine-config-overview)
*   [Creating machine configs with Butane](/installing/install_config/installing-customizing#installation-special-config-butane_installing-customizing)
*   [Enabling multipathing with kernel arguments on RHCOS](/installing/installing_bare_metal/upi/installing-bare-metal#rhcos-enabling-multipath_installing-bare-metal)
*   [Creating machine configs with Butane](/installing/install_config/installing-customizing#installation-special-config-butane_installing-customizing)
*   [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)