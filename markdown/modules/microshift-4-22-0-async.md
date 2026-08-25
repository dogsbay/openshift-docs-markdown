{%- set _mod_docs_content_type = "REFERENCE" %}
# RHEA-2026:2640 - {{ microshift_short }} 4.22.0 bug fix and enhancement update {id="microshift-4-22-0-async_{{ context }}"}

Issued: 09 June 2026 {._abstract}

{{ product_title }} release 4.22.0 is now available. Bug fixes and enhancements are listed in the [RHEA-2026:2640](https://access.redhat.com/errata/RHEA-2026:2640) advisory. Release notes for bug fixes and enhancements are provided in this documentation. The images that are included in the update are provided by the {{ OCP }} [RHBA-2026:449](https://access.redhat.com/errata/RHBA-2026:449) advisory.

See the latest images included with {{ microshift_short }} by using the following instructions:

*   [Listing the contents of the {{ microshift_short }} RPM release package](/microshift_updating/microshift-list-update-contents#microshift-get-rpm-release-info_microshift-list-update-contents)
*   [Getting the published bootc image for {{ microshift_short }}](/microshift_install_bootc/microshift-install-bootc-image#microshift-install-bootc-get-published-image_microshift-install-publish-bootc-image)

## Enhancement {id="microshift-4-22-0-enhancement_{{ context }}"}

*   With this release, the {{ microshift_short }} certificate manager container images now reference platform-specific digests instead of multi-platform manifest lists. ([OCPBUGS-66414](https://issues.redhat.com/browse/OCPBUGS-66414))