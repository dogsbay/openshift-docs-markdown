{%- set _mod_docs_content_type = "CONCEPT" %}
# Windows EFI installer pipeline {id="virt-windows-efi-installer-pipeline_{{ context }}"}

You can run the Windows EFI installer pipeline by using the web console or CLI. {._abstract}

The Windows EFI installer pipeline installs Windows 10, Windows 11, or Windows Server 2022 into a new data volume from a Windows installation image (ISO file). A custom answer file is used to run the installation process.


:::note

The Windows EFI installer pipeline uses a config map file with `sysprep` predefined by {{ product_title }} and suitable for Microsoft ISO files. For ISO files pertaining to different Windows editions, it may be necessary to create a new config map file with a system-specific `sysprep` definition.

:::