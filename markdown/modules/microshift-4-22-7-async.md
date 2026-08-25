{%- set _mod_docs_content_type = "REFERENCE" %}
# RHBA-2026:45112 - {{ microshift_short }} 4.22.7 fixed issue update {id="microshift-4-22-7-async_{{ context }}"}

Issued: 30 July 2026

{{ product_title }} release 4.22.7 is now available. Fixed issues are listed in the [RHBA-2026:45112](https://access.redhat.com/errata/RHBA-2026:45112) advisory. Release notes for fixed issues are provided in this documentation. The images that are included in the update are provided by the {{ OCP }} [RHSA-2026:44237](https://access.redhat.com/errata/RHSA-2026:44237) advisory. {._abstract}

See the latest images included with {{ microshift_short }} by using the following instructions:

*   [Listing the contents of the {{ microshift_short }} RPM release package](/microshift_updating/microshift-list-update-contents#microshift-get-rpm-release-info_microshift-list-update-contents)
*   [Getting the published bootc image for {{ microshift_short }}](/microshift_install_bootc/microshift-install-bootc-image#microshift-install-bootc-get-published-image_microshift-install-publish-bootc-image)

## Fixed issues {id="microshift-4-22-7-fixed-issues_{{ context }}"}

*   Before this release, {{ microshift_short }} did not support Cluster to Cluster Communication (C2CC), limiting the ability to establish direct connectivity between {{ microshift_short }} clusters at the edge. With this release, the C2CC feature is available as a Technology Preview in {{ microshift_short }} 4.22, enabling cluster-to-cluster networking for edge deployments. This backport includes the full feature implementation with code and tests. ([OCPBUGS-99419](https://issues.redhat.com/browse/OCPBUGS-99419))
*   Before this release, {{ microshift_short }} did not support custom DNS configuration, which required users to rely on the default DNS settings without the ability to tailor name resolution to their specific edge environment. With this release, custom DNS configuration is available in {{ microshift_short }} 4.22, and allows administrators to customize DNS behavior to meet site-specific requirements. This backport includes the full feature implementation with code and tests. ([OCPBUGS-99406](https://issues.redhat.com/browse/OCPBUGS-99406))

## Known issues {id="microshift-4-22-7-known-issues_{{ context }}"}

*   {{ microshift_short }} 4.22.7 images have a prioritizer compatibility issue with unsupported paths that lead to an incomplete fixed issue in the release notes. There is no workaround for OCPBUGS-98603. As a result, users should apply a system update to resolve the issue. ([OCPBUGS-99904](https://issues.redhat.com/browse/OCPBUGS-99904))