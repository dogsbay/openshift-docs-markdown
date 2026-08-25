---
title: Support for FIPS cryptography
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Support for FIPS cryptography {id="installing-fips"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-fips" %}

You can install an {{ product_title }} cluster in FIPS mode.

{{ product_title }} is designed for FIPS. When running {{ op_system_base_full }} or {{ op_system_first }} booted in FIPS mode, {{ product_title }} core components use the {{ op_system_base }} cryptographic libraries that have been submitted to NIST for FIPS 140-2/140-3 Validation on only the x86_64, ppc64le, and s390x architectures.

For more information about the NIST validation program, see "Cryptographic Module Validation Program" in the _Additional resources_ section. For the latest NIST status for the individual versions of {{ op_system_base }} cryptographic libraries that have been submitted for validation, see "Compliance Activities and Government Standards" in the _Additional resources_ section.


:::important

To enable FIPS mode for your cluster, you must run the installation program from a {{ op_system_base }} 9 computer that is configured to operate in FIPS mode, and you must use a FIPS-capable version of the installation program. See the section titled _Obtaining a FIPS-capable installation program using `oc adm extract`_.

For more information about configuring FIPS mode on {{ op_system_base }}, see "Installing the system in FIPS mode" in the _Additional resources_ section.

:::


For the {{ op_system_first }} machines in your cluster, this change is applied when the machines are deployed based on the status of an option in the `install-config.yaml` file, which governs the cluster options that a user can change during cluster deployment. With {{ op_system_base_full }} machines, you must enable FIPS mode when you install the operating system on the machines that you plan to use as worker machines.

Because FIPS must be enabled before the operating system that your cluster uses boots for the first time, you cannot enable FIPS after you deploy a cluster.

{% leveloffset +1 %}{% include "./modules/installation-obtaining-fips-installer-oc.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Cryptographic Module Validation Program](https://csrc.nist.gov/Projects/cryptographic-module-validation-program/validated-modules)
*   [Compliance Activities and Government Standards](https://access.redhat.com/articles/2918071#fips-140-2-and-fips-140-3-2)
*   [Installing the system in FIPS mode](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/security_hardening/assembly_installing-the-system-in-fips-mode_security-hardening)
*   [Extracting the OpenShift Container Platform installation program](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#retrieving-the-openshift-installer_ipi-install-installation-workflow)

{% leveloffset +1 %}{% include "./modules/installation-obtaining-fips-installer-mirror.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-about-fips-validation.md" %}{% endleveloffset %}

**Additional resources**

*   [RHEL core crypto components](https://access.redhat.com/articles/3655361)

{% leveloffset +1 %}{% include "./modules/installation-about-fips-components.md" %}{% endleveloffset %}

**Additional resources**

*   [Encrypt the etcd data](/etcd/etcd-encrypt#etcd-encrypt)
*   [Customizing nodes](/installing/install_config/installing-customizing#installing-customizing)

{% leveloffset +1 %}{% include "./modules/installing-fips-mode.md" %}{% endleveloffset %}

**Additional resources**

*   [Encrypting etcd data](/etcd/etcd-encrypt#etcd-encrypt)