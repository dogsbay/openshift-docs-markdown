{%- set _mod_docs_content_type = "REFERENCE" %}
# KMS Technology Preview limitations {id="kms-technology-preview-phases_{{ context }}"}

Review the current limitations of {{ KMS }} to plan deployments and avoid unsupported configurations in {{ product_title }} 4.21 or later. {._abstract}

## Current limitations {id="kms-current-limitations_{{ context }}"}

*   Plugins require manual installation on each control plane node
*   Plugins must listen at `unix:///var/run/kmsplugin/kms.sock`
*   Only one KMS plugin can run at a time
*   KMS-to-KMS migration requires intermediate migration to `identity` or `aescbc`