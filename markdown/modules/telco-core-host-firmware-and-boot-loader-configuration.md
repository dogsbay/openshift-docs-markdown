{%- set _mod_docs_content_type = "REFERENCE" %}
# Host firmware and boot loader configuration {id="telco-core-host-firmware-and-boot-loader-configuration_{{ context }}"}

Configure host firmware and boot loader settings to support telco core cluster requirements. {._abstract}


New in this release
:   *   There are no reference design updates in this release.

Engineering considerations
:   *   Enabling secure boot is the recommended configuration.

    :::note


    When secure boot is enabled, only signed kernel modules are loaded by the kernel.
    Out-of-tree drivers are not supported.
    
    :::