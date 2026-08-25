{%- set _mod_docs_content_type = "REFERENCE" %}

# Release notes for {{ gitops_title }} 1.5.4 {id="gitops-release-notes-1-5-4_{{ context }}"}

{{ gitops_title }} 1.5.4 is now available on {{ product_title }} 4.8, 4.9, 4.10, and 4.11.

## Fixed issues {id="fixed-issues-1-5-4_{{ context }}"}

The following issues have been resolved in the current release:

*   Before this update, the {{ gitops_title }} was using an older version of the **REDIS 5** image tag. This update fixes the issue and upgrades the `rhel8/redis-5` image tag. [GITOPS-2037](https://issues.redhat.com/browse/GITOPS-2037)