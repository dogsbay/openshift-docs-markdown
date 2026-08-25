{%- set _mod_docs_content_type = "REFERENCE" %}
# FileIntegrityNodeStatus CR status types {id="file-integrity-node-status-types_{{ context }}"}

These conditions are reported in the results array of the corresponding `FileIntegrityNodeStatus` CR status. {._abstract}

*   `Succeeded` - The integrity check passed; the files and directories covered by the AIDE check have not been modified since the database was last initialized.
*   `Failed` - The integrity check failed; some files or directories covered by the AIDE check have been modified since the database was last initialized.
*   `Errored` - The AIDE scanner encountered an internal error.