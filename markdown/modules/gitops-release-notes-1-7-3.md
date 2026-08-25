{%- set _mod_docs_content_type = "REFERENCE" %}

# Release notes for {{ gitops_title }} 1.7.3 {id="gitops-release-notes-1-7-3_{{ context }}"}

{{ gitops_title }} 1.7.3 is now available on {{ product_title }} 4.10, 4.11, and 4.12.

## Errata updates {id="errata-updates-1-7-3_{{ context }}"}

### RHSA-2023:1454 - {{ gitops_title }} 1.7.3 security update advisory {id="_rhsa-20231454_-_gitops_title_173_security_update_advisory"}

Issued: 2023-03-23

The list of security fixes that are included in this release is documented in the [RHSA-2023:1454](https://access.redhat.com/errata/RHSA-2023:1454) advisory.

If you have installed the {{ gitops_title }} Operator, run the following command to view the container images in this release:

```terminal
$ oc describe deployment gitops-operator-controller-manager -n openshift-operators
```