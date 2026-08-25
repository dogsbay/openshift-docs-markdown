{%- set _mod_docs_content_type = "CONCEPT" %}
# Sample agent-config.yaml file for a two-node cluster with fencing for Agent-based Installer {id="sample-agent-config-two-node-fencing-abi_{{ context }}"}

You can use the following `agent-config.yaml` configuration file as a template for deploying a two-node {{ product_title }} cluster with fencing (TNF) by using the Agent-based Installer method: {._abstract}

See the following sample `agent-config.yaml` file with minimal configuration:

```yaml
apiVersion: v1beta1
metadata:
  name: <cluster_name>
rendezvousIP: <rendezvous_ip>
```

*   `rendezvousIP`: Specifies the IP address of the node that will act as the rendezvous host during installation. This node runs the Assisted Service and coordinates the installation of both nodes.

See the following sample `agent-config.yaml` file with host configuration and static networking:


:::note

The `hostname` values in the `agent-config.yaml` file must match the `hostname` values in the fencing credentials section of the `install-config.yaml`.

:::


```yaml
apiVersion: v1beta1
metadata:
  name: <cluster_name>
rendezvousIP: <rendezvous_ip>
additionalNTPSources:
- 0.rhel.pool.ntp.org
- 1.rhel.pool.ntp.org
hosts:
- hostname: master-0
  role: master
  interfaces:
  - name: <nic_name>
    macAddress: <mac_address_0>
  networkConfig:
    interfaces:
    - name: <nic_name>
      type: ethernet
      state: up
      ipv4:
        enabled: true
        dhcp: false
        address:
        - ip: <master_0_ip>
          prefix-length: <prefix_length>
      ipv6:
        enabled: false
    dns-resolver:
      config:
        server:
        - <dns_server>
    routes:
      config:
      - destination: 0.0.0.0/0
        next-hop-address: <gateway>
        next-hop-interface: <nic_name>
        table-id: 254
- hostname: master-1
  role: master
  interfaces:
  - name: <nic_name>
    macAddress: <mac_address_1>
  networkConfig:
    interfaces:
    - name: <nic_name>
      type: ethernet
      state: up
      ipv4:
        enabled: true
        dhcp: false
        address:
        - ip: <master_1_ip>
          prefix-length: <prefix_length>
      ipv6:
        enabled: false
    dns-resolver:
      config:
        server:
        - <dns_server>
    routes:
      config:
      - destination: 0.0.0.0/0
        next-hop-address: <gateway>
        next-hop-interface: <nic_name>
        table-id: 254
```