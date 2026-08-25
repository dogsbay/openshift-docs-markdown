{%- set _mod_docs_content_type = "SNIPPET" %}


:::important

To enable FIPS mode for your cluster, you must run the installation program from a {{ op_system_base_full }} computer configured to operate in FIPS mode. For more information about configuring FIPS mode on {{ op_system_base }}, see [Switching {{ op_system_base }} to FIPS mode](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/security_hardening/switching-rhel-to-fips-mode_security-hardening).

When running {{ op_system_base_full }} or {{ op_system_first }} booted in FIPS mode, {{ product_title }} core components use the {{ op_system_base }} cryptographic libraries that have been submitted to NIST for FIPS 140-2/140-3 Validation on only the x86_64, ppc64le, and s390x architectures.

:::