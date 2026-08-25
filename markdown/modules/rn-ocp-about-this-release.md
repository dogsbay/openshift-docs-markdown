{%- set _mod_docs_content_type = "CONCEPT" %}
# About this release {id="rn-ocp-about-this-release_{{ context }}"}

{{ product_title }} {{ product_version }} release uses [Kubernetes 1.35](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) with CRI-O runtime. New features, changes, and known issues that pertain to {{ product_title }} {{ product_version }} are included in this topic. {._abstract}

{{ product_title }} {{ product_version }} clusters are available at https://console.redhat.com/openshift. From the {{ hybrid_console }}, you can deploy {{ product_title }} clusters to either on-premises or cloud environments.

You must use {{ op_system }} machines for the control plane and for the compute machines.

Starting from {{ product_title }} 4.14, the Extended Update Support (EUS) phase for even-numbered releases increases the total available lifecycle to 24 months on all supported architectures, including `x86_64`, 64-bit ARM (`aarch64`), {{ ibm_power_name }} (`ppc64le`), and {{ ibm_z_name }} (`s390x`) architectures. Beyond this, Red&#160;Hat also offers a 12-month additional EUS add-on, denoted as _Additional EUS Term 2_, that extends the total available lifecycle from 24 months to 36 months. The Additional EUS Term 2 is available on all architecture variants of {{ product_title }}. For more information about support for all versions, see the [Red Hat {{ product_title }} Life Cycle Policy](https://access.redhat.com/support/policy/updates/openshift).

## About FIPS compliance {id="about-fips-compliance_{{ context }}"}

{{ product_title }} is designed for FIPS. When running {{ op_system_base_full }} or {{ op_system_first }} booted in FIPS mode, {{ product_title }} core components use the {{ op_system_base }} cryptographic libraries that have been submitted to NIST for FIPS 140-2/140-3 Validation on only the `x86_64`, `ppc64le`, and `s390x` architectures.

For more information about the NIST validation program, see [Cryptographic Module Validation Program](https://csrc.nist.gov/Projects/cryptographic-module-validation-program/validated-modules). For the latest NIST status for the individual versions of {{ op_system_base }} cryptographic libraries that have been submitted for validation, see [Compliance Activities and Government Standards](https://access.redhat.com/articles/2918071#fips-140-2-and-fips-140-3-2).

## About PQC compliance {id="about-pqc-compliance_{{ context }}"}

{{ product_title }} supports post-quantum cryptography (PQC) readiness for secure cluster communication. When running on {{ op_system_base_full }} or {{ op_system_first }}, core {{ product_title }} components use the cryptographic capabilities provided by the platform operating system and TLS 1.3 security profiles, including hybrid Module-Lattice-Based Key-Encapsulation Mechanism (ML-KEM) key exchange where enabled by the configured TLS security profile and supported by the component.

For more information about NIST post-quantum cryptography standards, see [Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography). For the latest compliance information for {{ product_title }}, {{ op_system_base }}, and {{ op_system_first }}, see [Compliance Activities and Government Standards](https://access.redhat.com/articles/2918071).