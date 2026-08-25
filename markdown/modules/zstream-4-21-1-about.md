{%- set _mod_docs_content_type = "CONCEPT" %}

# RHSA-2026:9562 - {{ product_title }} {{ product_version }}.1 fixed issues and security update advisory {id="ocp-4-21-1-ga_{{ context }}"}

Issued: 12 February 2026 {._abstract}

{{ product_title }} release {{ product_version }}.1, which includes security updates, is now available. The list of bug fixes that are included in the update is documented in the [RHSA-2026:9562](https://access.redhat.com/errata/RHSA-2026:9562) advisory. The RPM packages that are included in the update are provided by the [RHEA-2026:4782](https://access.redhat.com/errata/RHEA-2026:4782) advisory.

Space precluded documenting all of the container images for this release in the advisory.

You can view the container images in this release by running the following command:

```terminal
$ oc adm release info 4.21.1 --pullspecs
```