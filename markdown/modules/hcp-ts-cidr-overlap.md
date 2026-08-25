{%- set _mod_docs_content_type = "PROCEDURE" %}
# Avoiding an overlap between OVN subnets and CIDR values {id="hcp-ts-cidr-overlap_{{ context }}"}

If the configured OVN subnets overlap with the machine classless inter-domain routing (CIDR), service CIDR, cluster network CIDR, or with each other, an error occurs. {._abstract}

**Procedure**

*   Use subnets that do not overlap with any network CIDR. You can use a CIDR calculator to verify that no overlaps exist.
    ```yaml title="Example of configuration with no overlaps"
    spec:
      networking:
        machineCIDR: 10.0.0.0/16
        serviceCIDR: 172.30.0.0/16
        clusterNetwork:
        - cidr: 10.128.0.0/14

      operatorConfiguration:
        clusterNetworkOperator:
          ovnKubernetesConfig:
            ipv4:
              internalJoinSubnet: "100.99.0.0/16"
              internalTransitSwitchSubnet: "100.69.0.0/16"
    ```