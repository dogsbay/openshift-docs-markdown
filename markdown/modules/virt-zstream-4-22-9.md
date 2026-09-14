{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ VirtProductName }} 4.22.9 updates {id="virt-zstream-4-22-9_{{ context }}"}

{{ VirtProductName }} {{ product_version }}.9 is now available with updates to packages and images that fix several bugs and add enhancements. {._abstract}

## New features and enhancements {id="virt-4-22-9-new_{{ context }}"}


Boot source image support for heterogeneous clusters is generally available
:   Boot source image support for heterogeneous clusters is now generally available. After you enable the `enableMultiArchBootImageImport` feature gate, {{ VirtProductName }} creates architecture-specific boot sources for each supported architecture, such as `rhel9-amd64` and `rhel9-arm64`. You can also specify the architecture for standalone data volumes and virtual machines. For more information, see [Heterogeneous cluster support](/virt/storage/virt-boot-source-image-heterogeneous-clusters#virt-boot-source-image-heterogeneous-clusters).

    [CNV-68646](https://redhat.atlassian.net/browse/CNV-68646)