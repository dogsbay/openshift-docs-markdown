{%- set _mod_docs_content_type = "REFERENCE" %}

# Release notes for {{ gitops_title }} 1.5.7 {id="gitops-release-notes-1-5-7_{{ context }}"}

{{ gitops_title }} 1.5.7 is now available on {{ product_title }} 4.8, 4.9, 4.10, and 4.11.

## Fixed issues {id="fixed-issues-1-5-7_{{ context }}"}

The following issues have been resolved in the current release:

*   From {{ product_title }} 4.12, it is optional to install the console. This fix updates the {{ gitops_title }} Operator to prevent errors with the Operator if the console is not installed. [GITOPS-2353](https://issues.redhat.com/browse/GITOPS-2353)