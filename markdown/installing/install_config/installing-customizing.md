---
title: Customizing nodes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Customizing nodes {id="installing-customizing"}
{%- set context = "installing-customizing" %}

You can customize nodes both cluster-wide and per-machine configuration through Ignition, which allows arbitrary partitioning and file content changes to the operating system.  {._abstract}

If a configuration file is documented in {{ op_system_base_full }}, you can modify the file through Ignition.

There are two ways to deploy machine config changes:

*   Creating machine configs that are included in manifest files to start up a cluster during `openshift-install`.
*   Creating machine configs that are passed to running {{ product_title }} nodes through the Machine Config Operator.

Additionally, modifying the reference config, such as the Ignition config that is passed to `coreos-installer` when installing bare-metal nodes allows per-machine configuration. The Machine Config Operator cannot yet see these changes.

The following sections describe features that you might want to configure on your nodes.

{% leveloffset +1 %}{% include "./modules/installation-special-config-butane.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-special-config-butane-about.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Butane config specification](https://coreos.github.io/butane/specs/)

{% leveloffset +2 %}{% include "./modules/installation-special-config-butane-install.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-special-config-butane-create.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [The addition of kernel modules to nodes](/installing/install_config/installing-customizing#installation-special-config-kmod_installing-customizing)
*   [Encrypting and mirroring disks during installation](/installing/install_config/installing-customizing#installation-special-config-storage_installing-customizing)

{% leveloffset +1 %}{% include "./modules/installation-special-config-kargs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Kernel.org kernel parameters](https://www.kernel.org/doc/Documentation/admin-guide/kernel-parameters.txt)

{% leveloffset +1 %}{% include "./modules/installation-special-config-kmod.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/building-testing-kernel-module-container.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/provisioning-kernel-module-to-ocp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/provision-kernel-modules-via-machineconfig.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [kmods-via-containers (GitHub)](https://github.com/kmods-via-containers/kmods-via-containers)

{% leveloffset +1 %}{% include "./modules/installation-special-config-storage.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-special-config-encryption-threshold.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-special-config-mirrored-disk.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-special-config-storage-procedure.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Network-bound disk encryption](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/{{ op_system_version_9 }}/html/security_hardening/configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption_security-hardening#network-bound-disk-encryption_configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption)
*   [Installing the system in FIPS mode](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/{{ op_system_version_9 }}/html-single/security_hardening/index#proc_installing-the-system-with-fips-mode-enabled_switching-rhel-to-fips-mode)
*   [Configuring automated unlocking of encrypted volumes using policy-based decryption](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/{{ op_system_version_9 }}/html/security_hardening/configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption_security-hardening)

{% leveloffset +1 %}{% include "./modules/installation-special-config-raid.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-special-config-raid-intel-vroc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-special-config-chrony.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating machine configs with Butane](/installing/install_config/installing-customizing#installation-special-config-butane_installing-customizing)

{% if not openshift_origin %}
*   [Support for FIPS cryptography](/installing/overview/installing-fips#installing-fips)
{% endif %}