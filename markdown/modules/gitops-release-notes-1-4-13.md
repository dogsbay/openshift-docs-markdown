{%- set _mod_docs_content_type = "REFERENCE" %}

# Release notes for {{ gitops_title }} 1.4.13 {id="gitops-release-notes-1-4-13_{{ context }}"}

{{ gitops_title }} 1.4.13 is now available on {{ product_title }} 4.7, 4.8, 4.9, and 4.10.

## Fixed issues {id="fixed-issues-1-4-13_{{ context }}"}

The following issues have been resolved in the current release:

*   From {{ product_title }} 4.12, it is optional to install the console. This fix updates the {{ gitops_title }} Operator to prevent errors with the Operator if the console is not installed. [GITOPS-2354](https://issues.redhat.com/browse/GITOPS-2354)