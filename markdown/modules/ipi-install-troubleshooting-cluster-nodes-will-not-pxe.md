{%- set _mod_docs_content_type = "PROCEDURE" %}

# Cluster nodes will not PXE boot {id="ipi-install-troubleshooting-cluster-nodes-will-not-pxe_{{ context }}"}

When {{ product_title }} cluster nodes will not PXE boot, execute the following checks on the cluster nodes that will not PXE boot. This procedure does not apply when installing an {{ product_title }} cluster without the `provisioning` network.

**Procedure**

1.  Check the network connectivity to the `provisioning` network.
1.  Ensure PXE is enabled on the NIC for the `provisioning` network and PXE is disabled for all other NICs.
1.  Verify that the `install-config.yaml` configuration file includes the `rootDeviceHints` parameter and boot MAC address for the NIC connected to the `provisioning` network. 

    For example:
    *   Control plane node settings
        ```terminal
        bootMACAddress: 24:6E:96:1B:96:90 # MAC of bootable provisioning NIC
        ```
    *   Compute node settings
        ```terminal
        bootMACAddress: 24:6E:96:1B:96:90 # MAC of bootable provisioning NIC
        ```