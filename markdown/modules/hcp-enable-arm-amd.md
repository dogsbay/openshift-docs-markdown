{%- set _mod_docs_content_type = "CONCEPT" %}
# Running hosted clusters on an ARM64 architecture {id="hcp-enable-arm-amd_{{ context }}"}

By default for {{ hcp }} on {{ aws_first }}, you use an AMD64 hosted cluster. However, you can enable {{ hcp }} to run on an ARM64 hosted cluster. {._abstract}

For compatible combinations of node pools and hosted clusters, see the following table:

**Compatible architectures for node pools and hosted clusters**

| Hosted cluster | Node pools |
| --- | --- |
| AMD64 | AMD64 or ARM64 |
| ARM64 | ARM64 or AMD64 |