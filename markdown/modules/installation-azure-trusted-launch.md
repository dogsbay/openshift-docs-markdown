{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling trusted launch for Azure VMs {id="installation-azure-trusted-launch_{{ context }}"}

To enable trusted launch on Azure virtual machines for your {{ product_title }} cluster, you can configure secure boot and virtualized Trusted Platform Modules in the `install-config.yaml` file. Apply the settings to control plane nodes, compute nodes, or all nodes as needed. {._abstract}

For more information about the sizes of virtual machines that support the trusted launch features, secure boot, and virtualized Trusted Platform Modules, see the Additional resources section.

{%- set FeatureName = "Trusted launch" %}

{% include "./snippets/technology-preview.md" %}

**Prerequisites**

*   You have created an `install-config.yaml` file.

**Procedure**

*   Edit the `install-config.yaml` file before deploying your cluster:
    *   Enable trusted launch only on control plane by adding the following stanza:
        ```yaml
        controlPlane:
          platform:
            azure:
              settings:
                securityType: TrustedLaunch
                trustedLaunch:
                  uefiSettings:
                    secureBoot: Enabled
                    virtualizedTrustedPlatformModule: Enabled
        ```
    *   Enable trusted launch only on compute node by adding the following stanza:
        ```yaml
        compute:
          platform:
            azure:
              settings:
                securityType: TrustedLaunch
                trustedLaunch:
                  uefiSettings:
                    secureBoot: Enabled
                    virtualizedTrustedPlatformModule: Enabled
        ```
    *   Enable trusted launch on all nodes by adding the following stanza:
        ```yaml
        platform:
          azure:
            settings:
              securityType: TrustedLaunch
              trustedLaunch:
                uefiSettings:
                  secureBoot: Enabled
                  virtualizedTrustedPlatformModule: Enabled
        ```