{%- set _mod_docs_content_type = "CONCEPT" %}
# About disk encryption with TPM and PCR protection {id="ztp-sno-du-disk-encryption_{{ context }}"}

You can use the `diskEncryption` field in the `ClusterInstance` custom resource (CR) to configure disk encryption with Trusted Platform Module (TPM) and Platform Configuration Registers (PCRs) protection. 

TPM is a hardware component that stores cryptographic keys and evaluates the security state of your system. PCRs within the TPM store hash values that represent the current hardware and software configuration of your system. You can use the following PCR registers to protect the encryption keys for disk encryption:


PCR 1
:   Represents the Unified Extensible Firmware Interface (UEFI) state.

PCR 7
:   Represents the secure boot state. 

The TPM safeguards encryption keys by linking them to the system’s current state, as recorded in PCR 1 and PCR 7. The `dmcrypt` utility uses these keys to encrypt the disk. The binding between the encryption keys and the expected PCR registers is automatically updated after upgrades, if needed.

During the system boot process, the `dmcrypt` utility uses the TPM PCR values to unlock the disk. If the current PCR values match with the previously linked values, the unlock succeeds. If the PCR values do not match, the encryption keys cannot be released, and the disk remains encrypted and inaccessible.

{%- set FeatureName = "Configuring disk encryption by using the `diskEncryption` field in the `ClusterInstance` CR" %}
{% include "./snippets/technology-preview.md" %}
{%- set FeatureName = false -%}