{%- set _mod_docs_content_type = "CONCEPT" %}
# FIPS mode with {{ op_system_base }} RPM-based installations {id="microshift-fips-rpm-system_{{ context }}"}

Using FIPS with {{ microshift_short }} requires enabling the cryptographic module self-checks in your {{ op_system_base_full }} installation. After the host operating system has been configured to start with the FIPS modules, {{ microshift_short }} containers are automatically enabled to run in FIPS mode. {._abstract}

*   When {{ op_system_base }} is started in FIPS mode, {{ microshift_short }} core components use the {{ op_system_base }} cryptographic libraries that have been submitted to NIST for FIPS 140-2/140-3 validation on only the x86_64 architectures.
*   You must enable FIPS mode when you install {{ op_system_base }} {{ op_system_version_major }} on the machines that you plan to use as worker machines.

    :::important

    Because FIPS must be enabled before the operating system that your node uses starts for the first time, you cannot enable FIPS after you deploy a node.
    
    :::

*   {{ microshift_short }} uses a FIPS-compatible Golang compiler.
*   FIPS is supported in the CRI-O container runtime.

## Limitations {id="microshift-fips-limitations_{{ context }}"}

*   TLS implementation FIPS support is not complete.
*   The FIPS implementation does not offer a single function that both computes hash functions and validates the keys that are based on that hash. This limitation continues to be evaluated for improvement in future {{ microshift_short }} releases.