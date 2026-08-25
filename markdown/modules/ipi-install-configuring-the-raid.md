{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the RAID {id="configuring-the-raid_{{ context }}"}

You can configure a redundant array of independent disks (RAID) using baseboard management controllers (BMCs) during the installation process. {._abstract}


:::note

If you want to configure a hardware RAID for the node, verify that the node has a supported RAID controller. {{ product_title }} {{ product_version }} does not support software RAID.

:::


**Hardware RAID support by vendor**

| Vendor | BMC and protocol | Firmware version | RAID levels |
| --- | --- | --- | --- |
| Fujitsu | iRMC | N/A | 0, 1, 5, 6, and 10 |
| Dell | iDRAC with Redfish | Version 6.10.30.20 or later | 0, 1, and 5 |

**Procedure**

1.  Create the manifests.
1.  Modify the `BareMetalHost` resource corresponding to the node:
    ```terminal
    $ vim clusterconfigs/openshift/99_openshift-cluster-api_hosts-*.yaml
    ```

    :::note

    The following example uses a hardware RAID configuration because {{ product_title }} {{ product_version }} does not support software RAID.
    
    :::

    1.  If you added a specific RAID configuration to the `spec` section, this causes the node to delete the original RAID configuration in the `preparing` phase and perform a specified configuration on the RAID. For example:
        ```yaml
        spec:
          raid:
            hardwareRAIDVolumes:
            - level: "0"
              name: "sda"
              numberOfPhysicalDisks: 1
              rotational: true
              sizeGibibytes: 0
        ```

        The `level` parameter is a required field, and the others are optional fields.
    1.  If you added an empty RAID configuration to the `spec` section, the empty configuration causes the node to delete the original RAID configuration during the `preparing` phase, but does not perform a new configuration. For example:
        ```yaml
        spec:
          raid:
            hardwareRAIDVolumes: []
        ```
    1.  If you do not add a `raid` field in the `spec` section, the original RAID configuration is not deleted, and no new configuration will be performed.
1.  Create the cluster.