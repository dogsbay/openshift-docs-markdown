{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying with no provisioning network {id="modifying-install-config-for-no-provisioning-network_{{ context }}"}

You can deploy an {{ product_title }} cluster without a `provisioning` network, by changing the `install-config.yaml` file. {._abstract}

**Procedure**

*   Make the following changes to the `install-config.yaml` file:
    ```yaml
    platform:
      baremetal:
        apiVIPs:
          - <api_VIP>
        ingressVIPs:
          - <ingress_VIP>
        provisioningNetwork: "Disabled"
    ```

    Add the `provisioningNetwork` configuration setting, if needed, and set it to `Disabled`.

    :::important

    The `provisioning` network is required for PXE booting. If you deploy without a `provisioning` network, you must use a virtual media BMC addressing option such as `redfish-virtualmedia` or `idrac-virtualmedia`. See "Redfish virtual media for HPE iLO" in the "BMC addressing for HPE iLO" section or "Redfish virtual media for Dell iDRAC" in the "BMC addressing for Dell iDRAC" section for additional details.
    
    :::