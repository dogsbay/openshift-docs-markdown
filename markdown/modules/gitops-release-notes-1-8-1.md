{%- set _mod_docs_content_type = "REFERENCE" %}

# Release notes for {{ gitops_title }} 1.8.1 {id="gitops-release-notes-1-8-1_{{ context }}"}

{{ gitops_title }} 1.8.1 is now available on {{ product_title }} 4.10, 4.11, 4.12, and 4.13.

## Errata updates {id="errata-updates-1-8-1_{{ context }}"}

### RHSA-2023:1452 - {{ gitops_title }} 1.8.1 security update advisory {id="_rhsa-20231452_-_gitops_title_181_security_update_advisory"}

Issued: 2023-03-23

The list of security fixes that are included in this release is documented in the [RHSA-2023:1452](https://access.redhat.com/errata/RHSA-2023:1452) advisory.

If you have installed the {{ gitops_title }} Operator, run the following command to view the container images in this release:

```terminal
$ oc describe deployment gitops-operator-controller-manager -n openshift-operators
```