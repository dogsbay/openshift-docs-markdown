{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting CIDR values in internal subnet fields {id="hcp-ts-identical-subnet-fields_{{ context }}"}

If the `internalJoinSubnet` field and the `internalTransitSwitchSubnet` field are set to the same classless inter-domain routing (CIDR) values, an error occurs. {._abstract}

**Procedure**

*   Use different subnets for each field, as shown in the following example:
    ```yaml
    apiVersion: hypershift.openshift.io/v1beta1
    kind: HostedCluster
    metadata:
      # ...
    spec:
      #...
      operatorConfiguration:
        clusterNetworkOperator:
          ovnKubernetesConfig:
            ipv4:
              internalJoinSubnet: "100.99.0.0/16"
              internalTransitSwitchSubnet: "100.69.0.0/16"
    # ...
    ```