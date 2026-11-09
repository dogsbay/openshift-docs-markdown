{%- set _mod_docs_content_type = "REFERENCE" %}
# RHBA-2026:92328 - {{ product_title }} {{ product_version }}.21 bug fix and security update {id="zstream-4-22-21_{{ context }}"}

Issued: 3 November 2026

{{ product_title }} release {{ product_version }}.21 is now available. The list of fixed issues that are included in the update is documented in the [RHBA-2026:92328](https://access.redhat.com/errata/RHBA-2026:92328) advisory. The RPM packages that are included in the update are provided by the [RHSA-2026:92331](https://access.redhat.com/errata/RHSA-2026:92331) advisory. {._abstract}

Space precluded documenting all of the container images for this release in the advisory.

You can view the container images in this release by running the following command:

```terminal
$ oc adm release info 4.22.21 --pullspecs
```

## Fixed issues {id="zstream-4-22-21-fixed-issues_{{ context }}"}

The following issues are fixed for this release:

*   Before this update, an infinite boot loop occurred during Lenovo SR645 V3 hardware provisioning. As a consequence, the host stalled on a boot option restoration screen and could not complete the provisioning. With this release, the `ironic` resource skips setting the boot device. As a result, NVRAM loss does not occur, and provisioning succeeds. ([OCPBUGS-129569](https://issues.redhat.com/browse/OCPBUGS-129569))
*   Before this update, on the **Observe** → **Metrics** page, multiple queries previously restarted their color index at `0`. As a consequence, series color squares were misaligned with graph lines. With this release, the color index is correctly offset by counting series from earlier queries. As a result, each color square matches its corresponding graph line. ([OCPBUGS-132931](https://issues.redhat.com/browse/OCPBUGS-132931))

## Updating {id="zstream-4-22-21-updating_{{ context }}"}

To update an {{ product_title }} 4.22 cluster to this latest release, see [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli).