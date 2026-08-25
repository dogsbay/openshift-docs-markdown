{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specifying multiple subnets for your network {id="nw-operator-vsphere-multiple-subnets_{{ context }}"}

Before you install an {{ product_title }} cluster on a {{ vmw_short }} host, you can specify multiple subnets for a networking implementation so that the {{ vmw_short }} cloud controller manager (CCM) can select the appropriate subnet for a given networking situation. {{ vmw_short }} can use the subnet for managing pods and services on your cluster. {._abstract}

For this configuration, you must specify internal and external Classless Inter-Domain Routing (CIDR) implementations in the {{ vmw_short }} CCM configuration. Each CIDR implementation lists an IP address range that the CCM uses to decide what subnets interact with traffic from internal and external networks.


:::important

Failure to configure internal and external CIDR implementations in the {{ vmw_short }} CCM configuration can cause the {{ vmw_short }} CCM to select the wrong subnet. This situation causes the following error:

```
ERROR Bootstrap failed to complete: timed out waiting for the condition
ERROR Failed to wait for bootstrapping to complete. This error usually happens when there is a problem with control plane hosts that prevents the control plane operators from creating the control plane.
```

This configuration can cause new nodes that associate with a `MachineSet` object with a single subnet to become unusable as each new node receives the `node.cloudprovider.kubernetes.io/uninitialized` taint. These situations can cause communication issues with the Kubernetes API server that can cause installation of the cluster to fail.

:::


**Prerequisites**

*   You created Kubernetes manifest files for your {{ product_title }} cluster.

**Procedure**

1.  From the directory where you store your {{ product_title }} cluster manifest files, open the `manifests/cluster-infrastructure-02-config.yml` manifest file.
1.  Add a `nodeNetworking` object to the file and specify internal and external network subnet CIDR implementations for the object.

    :::tip

    For most networking situations, consider setting the standard multiple-subnet configuration. This configuration requires that you set the same IP address ranges in the `nodeNetworking.internal.networkSubnetCidr` and `nodeNetworking.external.networkSubnetCidr` parameters.
    
    :::

    ```yaml title="Example of a configured cluster-infrastructure-02-config.yml manifest file"
    apiVersion: config.openshift.io/v1
    kind: Infrastructure
    metadata:
      name: cluster
    spec:
      cloudConfig:
        key: config
        name: cloud-provider-config
      platformSpec:
        type: VSphere
        vsphere:
          failureDomains:
          - name: generated-failure-domain
          ...
           nodeNetworking:
             external:
               networkSubnetCidr:
               - <machine_network_cidr_ipv4>
               - <machine_network_cidr_ipv6>
             internal:
               networkSubnetCidr:
               - <machine_network_cidr_ipv4>
               - <machine_network_cidr_ipv6>
    # ...
    ```