{%- set _mod_docs_content_type = "CONCEPT" %}
# About FIPS compliance for {{ external_secrets_operator }} {id="external-secrets-fips-support_{{ context }}"}

The {{ external_secrets_operator }} supports FIPS compliance. When running on {{ product_title }} in FIPS mode, {{ external_secrets_operator_short }} uses the RHEL cryptographic libraries submitted to NIST for FIPS validation on the x86_64, ppc64le, and s390X architectures. For more information about the NIST validation program, see "Cryptographic module validation program" in Additional resources. For more information about the latest NIST status for the individual versions of the RHEL cryptographic libraries submitted for validation, see "Compliance activities and government standards" in Additional resources. {._abstract}

To enable FIPS mode, install the {{ external_secrets_operator_short }} on an {{ product_title }} cluster that runs in FIPS mode. For more information, see "Do you need extra security for your cluster?".