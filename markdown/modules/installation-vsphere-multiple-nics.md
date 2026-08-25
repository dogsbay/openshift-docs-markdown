{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring multiple NICs {id="installation-vsphere-multiple-nics_{{ context }}"}

For scenarios requiring multiple network interface controller (NIC), you can configure multiple network adapters per node. {._abstract}

**Procedure**

1.  Specify the network adapter names in the networks section of `platform.vsphere.failureDomains[*].topology` as shown in the following `install-config.yaml` file:
    ```yaml
    platform:
      vsphere:
        vcenters:
          ...
        failureDomains:
        - name: <failure_domain_name>
          region: <default_region_name>
          zone: <default_zone_name>
          server: <fully_qualified_domain_name>
          topology:
            datacenter: <data_center>
            computeCluster: "/<data_center>/host/<cluster>"
            networks:
            - <VM_network1_name>
            - <VM_network2_name>
            - ...
            - <VM_network10_name>
    ```

    Where the `networks` section is a list that you populate with network adapter names. You can specify up to 10 network adapters.
1.  Specify at least one of the following configurations in the `install-config.yaml` file:
    *   `networking.machineNetwork`
        ```yaml title="Example configuration"
        networking:
          ...
          machineNetwork:
          - cidr: 10.0.0.0/16
          ...
        ```

        :::note

        The `networking.machineNetwork.cidr` field must correspond to an address on the first adapter defined in `topology.networks`.
        
        :::

    *   Add a `nodeNetworking` object to the `install-config.yaml` file and specify internal and external network subnet CIDR implementations for the object.
        ```yaml title="Example configuration"
        platform:
          vsphere:
            nodeNetworking:
             external:
               networkSubnetCidr:
               - <machine_network_cidr_ipv4>
               - <machine_network_cidr_ipv6>
             internal:
               networkSubnetCidr:
               - <machine_network_cidr_ipv4>
               - <machine_network_cidr_ipv6>
            failureDomains:
            - name: <failure_domain_name>
              region: <default_region_name>
        ```