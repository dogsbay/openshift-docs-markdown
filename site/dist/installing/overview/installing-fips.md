---
title: Support for FIPS cryptography
---

# Support for FIPS cryptography {#installing-fips}

You can install an OpenShift Container Platform cluster in FIPS mode.

OpenShift Container Platform is designed for FIPS. When running {{ op_system_base_full }} or {{ op_system_first }} booted in FIPS mode, OpenShift Container Platform core components use the {{ op_system_base }} cryptographic libraries that have been submitted to NIST for FIPS 140-2/140-3 Validation on only the x86_64, ppc64le, and s390x architectures.

For more information about the NIST validation program, see "Cryptographic Module Validation Program" in the *Additional resources* section. For the latest NIST status for the individual versions of {{ op_system_base }} cryptographic libraries that have been submitted for validation, see "Compliance Activities and Government Standards" in the *Additional resources* section.

> [!IMPORTANT]
> To enable FIPS mode for your cluster, you must run the installation program from a {{ op_system_base }} 9 computer that is configured to operate in FIPS mode, and you must use a FIPS-capable version of the installation program. See the section titled *Obtaining a FIPS-capable installation program using `oc adm extract`*.
>
> For more information about configuring FIPS mode on {{ op_system_base }}, see "Installing the system in FIPS mode" in the *Additional resources* section.

For the {{ op_system_first }} machines in your cluster, this change is applied when the machines are deployed based on the status of an option in the `install-config.yaml` file, which governs the cluster options that a user can change during cluster deployment. With {{ op_system_base_full }} machines, you must enable FIPS mode when you install the operating system on the machines that you plan to use as worker machines.

Because FIPS must be enabled before the operating system that your cluster uses boots for the first time, you cannot enable FIPS after you deploy a cluster.

## Additional resources {#additional-resources_installing-fips}

- [Cryptographic Module Validation Program](https://csrc.nist.gov/Projects/cryptographic-module-validation-program/validated-modules)
- [Compliance Activities and Government Standards](https://access.redhat.com/articles/2918071#fips-140-2-and-fips-140-3-2)
- [Installing the system in FIPS mode](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/security_hardening/assembly_installing-the-system-in-fips-mode_security-hardening)
- [Extracting the OpenShift Container Platform installation program](/openshift-docs-markdown/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#retrieving-the-openshift-installer_ipi-install-installation-workflow)

**Additional resources**

- [RHEL core crypto components](https://access.redhat.com/articles/3655361)

**Additional resources**

- [Encrypt the etcd data](/openshift-docs-markdown/etcd/etcd-encrypt#etcd-encrypt)
- [Customizing nodes](/openshift-docs-markdown/installing/install_config/installing-customizing#installing-customizing)

**Additional resources**

- [Encrypting etcd data](/openshift-docs-markdown/etcd/etcd-encrypt#etcd-encrypt)
