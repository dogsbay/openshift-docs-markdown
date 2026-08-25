{%- set _mod_docs_content_type = "REFERENCE" %}

# Release notes for {{ gitops_title }} 1.7.1 {id="gitops-release-notes-1-7-1_{{ context }}"}

{{ gitops_title }} 1.7.1 is now available on {{ product_title }} 4.10, 4.11, and 4.12.

## Errata updates {id="errata-updates-1-7-1_{{ context }}"}

### RHSA-2023:0467 - {{ gitops_title }} 1.7.1 security update advisory {id="_rhsa-20230467_-_gitops_title_171_security_update_advisory"}

Issued: 2023-01-25

The list of security fixes that are included in this release is documented in the [RHSA-2023:0467](https://access.redhat.com/errata/RHSA-2023:0467) advisory.

If you have installed the {{ gitops_title }} Operator, run the following command to view the container images in this release:

```terminal
$ oc describe deployment gitops-operator-controller-manager -n openshift-operators
```