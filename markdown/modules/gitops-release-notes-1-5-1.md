{%- set _mod_docs_content_type = "REFERENCE" %}

# Release notes for {{ gitops_title }} 1.5.1 {id="gitops-release-notes-1-5-1_{{ context }}"}

{{ gitops_title }} 1.5.1 is now available on {{ product_title }} 4.8, 4.9, 4.10, and 4.11.

## Fixed issues {id="fixed-issues-1-5-1_{{ context }}"}

The following issues have been resolved in the current release:

*   Before this update, if Argo CD’s anonymous access was enabled, an unauthenticated user was able to craft a JWT token and get full access to the Argo CD instance. This issue is fixed now. [CVE-2022-29165](https://bugzilla.redhat.com/show_bug.cgi?id=2081686)
*   Before this update, an unauthenticated user was able to display error messages on the login screen while SSO was enabled. This issue is now fixed. [CVE-2022-24905](https://bugzilla.redhat.com/show_bug.cgi?id=2081689)
*   Before this update, all unpatched versions of Argo CD v0.7.0 and later were vulnerable to a symlink-following bug. As a result, an unauthorized user with repository write access would be able to leak sensitive files from Argo CD’s repo-server. This issue is now fixed. [CVE-2022-24904](https://bugzilla.redhat.com/show_bug.cgi?id=2081686)