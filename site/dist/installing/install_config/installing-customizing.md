---
title: Customizing nodes
---

# Customizing nodes {#installing-customizing}

You can customize nodes both cluster-wide and per-machine configuration through Ignition, which allows arbitrary partitioning and file content changes to the operating system.

If a configuration file is documented in {{ op_system_base_full }}, you can modify the file through Ignition.

There are two ways to deploy machine config changes:

- Creating machine configs that are included in manifest files to start up a cluster during `openshift-install`.
- Creating machine configs that are passed to running OpenShift Container Platform nodes through the Machine Config Operator.

Additionally, modifying the reference config, such as the Ignition config that is passed to `coreos-installer` when installing bare-metal nodes allows per-machine configuration. The Machine Config Operator cannot yet see these changes.

The following sections describe features that you might want to configure on your nodes.

**Additional resources**

- [Butane config specification](https://coreos.github.io/butane/specs/)

## Additional resources {#additional-resources_installing-customizing}

- [The addition of kernel modules to nodes](/installing/install_config/installing-customizing#installation-special-config-kmod_installing-customizing)
- [Encrypting and mirroring disks during installation](/installing/install_config/installing-customizing#installation-special-config-storage_installing-customizing)

**Additional resources**

- [Kernel.org kernel parameters](https://www.kernel.org/doc/Documentation/admin-guide/kernel-parameters.txt)

**Additional resources**

- [kmods-via-containers (GitHub)](https://github.com/kmods-via-containers/kmods-via-containers)

## Additional resources {#_additional_resources}

- \[Network-bound disk encryption\](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/{{ op_system_version_9 }}/html/security_hardening/configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption_security-hardening#network-bound-disk-encryption_configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption)
- \[Installing the system in FIPS mode\](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/{{ op_system_version_9 }}/html-single/security_hardening/index#proc_installing-the-system-with-fips-mode-enabled_switching-rhel-to-fips-mode)
- \[Configuring automated unlocking of encrypted volumes using policy-based decryption\](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/{{ op_system_version_9 }}/html/security_hardening/configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption_security-hardening)

**Additional resources**

- [Creating machine configs with Butane](/installing/install_config/installing-customizing#installation-special-config-butane_installing-customizing)
- [Support for FIPS cryptography](/installing/overview/installing-fips#installing-fips)
