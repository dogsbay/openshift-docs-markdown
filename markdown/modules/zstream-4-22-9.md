{%- set _mod_docs_content_type = "REFERENCE" %}
# RHSA-2026:51038 - {{ product_title }} {{ product_version }}.9 bug fix and security update {id="zstream-4-22-9_{{ context }}"}

Issued: 11 August 2026

{{ product_title }} release {{ product_version }}.9 is now available. The list of fixed issues that are included in the update is documented in the [RHSA-2026:51038](https://access.redhat.com/errata/RHSA-2026:51038) advisory. The RPM packages that are included in the update are provided by the [RHSA-2026:51036](https://access.redhat.com/errata/RHSA-2026:51036) advisory. {._abstract}

Space precluded documenting all of the container images for this release in the advisory.

You can view the container images in this release by running the following command:

```terminal
$ oc adm release info 4.22.9 --pullspecs
```

## Enhancements {id="zstream-4-22-9-enhancements_{{ context }}"}

*   Dry-run was not generating cluster resource files before this enhancement. Now in disk-to-mirror (`d2m`) and mirror-to-mirror (`m2m`) workflows, the dry-run also generates the resource files without the need of mirroring the images. ([OCPBUGS-93773](https://redhat.atlassian.net/browse/OCPBUGS-93773))

## Fixed issues {id="zstream-4-22-9-fixed-issues_{{ context }}"}

There are no notable fixed issues in this release.

## Updating {id="zstream-4-22-9-updating_{{ context }}"}

To update an {{ product_title }} 4.22 cluster to this latest release, see [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli).