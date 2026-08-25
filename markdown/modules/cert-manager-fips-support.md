{%- set _mod_docs_content_type = "CONCEPT" %}
# About FIPS compliance for {{ cert_manager_operator }} {id="cert-manager-fips-support_{{ context }}"}

Starting with version 1.14.0, {{ cert_manager_operator }} is designed for FIPS compliance. When running on {{ product_title }} in FIPS mode, it uses the RHEL cryptographic libraries submitted to NIST for FIPS validation on the x86_64, ppc64le, and s390X architectures. For more information about the NIST validation program, see "Cryptographic module validation program". For the latest NIST status for the individual versions of the RHEL cryptographic libraries submitted for validation, see "Compliance activities and government standards". {._abstract}

To enable FIPS mode, you must install {{ cert_manager_operator }} on an {{ product_title }} cluster configured to operate in FIPS mode. For more information, see "Do you need extra security for your cluster?"