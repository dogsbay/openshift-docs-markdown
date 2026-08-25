{%- set _mod_docs_content_type = "REFERENCE" %}
# Supported cluster versions for {{ VirtProductName }} {id="virt-supported-cluster-version-osd_{{ context }}"}

{{ VirtProductName }} on {{ gcp_short }} is supported on {{ product_title }} using either {{ gcp_short }} Hyperdisk or {{ gcp_short }} NetApp Volumes (GCNV) for persistent storage. {._abstract}

Refer to the following table for the minimum version you need to install based on your chosen storage solution.

| Component | Version required with {{ gcp_short }} Hyperdisk | Version required with {{ gcp_short }} NetApp Volumes (GCNV) |
| --- | --- | --- |
| {{ product_title }} | 4.21.5 or later | 4.21 or later |
| {{ VirtProductName }} Operator | 4.21.1 or later | 4.21.2 or later |
| NetApp Trident CSI Operator | N/A | 26.02.0 or later |