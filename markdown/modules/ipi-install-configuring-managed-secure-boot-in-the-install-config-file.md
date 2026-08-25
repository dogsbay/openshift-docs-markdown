{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring managed Secure Boot {id="configuring-managed-secure-boot-in-the-install-config-file_{{ context }}"}

You can enable managed Secure Boot when deploying an installer-provisioned cluster by using Redfish BMC addressing, such as `redfish`, `redfish-virtualmedia`, or `idrac-virtualmedia`. {._abstract}

**Procedure**

*   Add the `bootMode` configuration setting for each node to enable managed Secure Boot. 
    ```yaml title="Example"
    hosts:
      - name: openshift-master-0
        role: master
        bmc:
          address: redfish://<out_of_band_ip>
          username: <username>
          password: <password>
        bootMACAddress: <NIC1_mac_address>
        rootDeviceHints:
         deviceName: "/dev/sda"
        bootMode: UEFISecureBoot
    ```
    *   For `hosts.bmc.address`: Ensure the `bmc.address` setting uses `redfish`, `redfish-virtualmedia`, or `idrac-virtualmedia` as the protocol. See "BMC addressing for HPE iLO" or "BMC addressing for Dell iDRAC" for additional details.
    *   For `hosts.bbootMode`: The `bootMode` setting is `UEFI` by default. Change it to `UEFISecureBoot` to enable managed Secure Boot.

        :::note

        See "Configuring nodes" in the "Prerequisites" to ensure the nodes can support managed Secure Boot. If the nodes do not support managed Secure Boot, see "Configuring nodes for Secure Boot manually" in the "Configuring nodes" section. Configuring Secure Boot manually requires Redfish virtual media.
        
        :::


        :::note

        Red Hat does not support Secure Boot with IPMI, because IPMI does not provide Secure Boot management facilities.
        
        :::