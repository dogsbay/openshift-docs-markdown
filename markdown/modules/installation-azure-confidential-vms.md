{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling confidential VMs {id="installation-azure-confidential-vms_{{ context }}"}

To enable confidential VMs on Azure for your {{ product_title }} cluster, you can configure the `install-config.yaml` file before deployment. Apply the settings to control plane nodes, compute nodes, or all nodes as needed. {._abstract}

You can use confidential VMs with the following VM sizes:

*   DCasv5-series
*   DCadsv5-series
*   ECasv5-series
*   ECadsv5-series
*   DCesv5-series
*   DCedsv5-series
*   ECesv5-series
*   ECedsv5-series
*   NCCads_H100_v5


:::important

Confidential VMs are currently not supported on 64-bit ARM architectures.

:::


**Prerequisites**

*   You have created an `install-config.yaml` file.

**Procedure**

*   Edit the `install-config.yaml` file before deploying your cluster:
    *   Enable confidential VMs only on control plane by adding the following stanza:
        ```yaml
        controlPlane:
          platform:
            azure:
              settings:
                securityType: ConfidentialVM
                confidentialVM:
                  uefiSettings:
                    secureBoot: Enabled
                    virtualizedTrustedPlatformModule: Enabled
              osDisk:
                securityProfile:
                  securityEncryptionType: VMGuestStateOnly
        ```
    *   Enable confidential VMs only on compute nodes by adding the following stanza:
        ```yaml
        compute:
          platform:
            azure:
              settings:
                securityType: ConfidentialVM
                confidentialVM:
                  uefiSettings:
                    secureBoot: Enabled
                    virtualizedTrustedPlatformModule: Enabled
              osDisk:
                securityProfile:
                  securityEncryptionType: VMGuestStateOnly
        ```
    *   Enable confidential VMs on all nodes by adding the following stanza:
        ```yaml
        platform:
          azure:
            defaultMachinePlatform:
              settings:
                securityType: ConfidentialVM
                confidentialVM:
                  uefiSettings:
                    secureBoot: Enabled
                    virtualizedTrustedPlatformModule: Enabled
              osDisk:
                securityProfile:
                  securityEncryptionType: VMGuestStateOnly
        ```