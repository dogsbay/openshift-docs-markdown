{%- set _mod_docs_content_type = "REFERENCE" %}
# Example: Ethernet interface node network configuration policy {id="virt-example-ethernet-nncp_{{ context }}"}

You can configure an Ethernet interface on nodes in the cluster by applying a `NodeNetworkConfigurationPolicy` manifest to the cluster. {._abstract}

The following YAML file is an example of a manifest for an Ethernet interface.
It includes sample values that you must replace with your own information.

```yaml
apiVersion: nmstate.io/v1
kind: NodeNetworkConfigurationPolicy
metadata:
  name: eth1-policy
spec:
  nodeSelector:
    kubernetes.io/hostname: <node01>
  desiredState:
    interfaces:
    - name: eth1
      description: Configuring eth1 on node01
      type: ethernet
      state: up
      ipv4:
        dhcp: true
        enabled: true
```

*   `metadata.name` defines the name of the policy.
*   `spec.nodeSelector` defines  the nodes in the cluster the networking policy is applied to. If not defined, the default is all nodes.
*   `spec.nodeSelector.kubernetes.io/hostname` uses a hostname node selector.
*   `spec.desiredState.interfaces.name` defines the name of the interface.
*   `spec.desiredState.interfaces.description` is optional and defines a human-readable description of the interface.
*   `spec.desiredState.interfaces.type` defines the type of interface. This example creates an Ethernet networking interface.
*   `spec.desiredState.interfaces.state` defines the requested state for the interface after creation.
*   `spec.desiredState.interfaces.ipv4.dhcp` is optional. If you do not use `dhcp`, you can either set a static IP or leave the interface without an IP address.
*   `spec.desiredState.interfaces.ipv4.enabled` defines that `ipv4` is enabled in this example.