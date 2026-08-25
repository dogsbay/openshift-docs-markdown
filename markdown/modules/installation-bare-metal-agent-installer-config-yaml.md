{%- set _mod_docs_content_type = "CONCEPT" %}
# Sample install-config.yaml file for bare metal {id="installation-bare-metal-agent-installer-config-yaml_{{ context }}"}

You can customize the `install-config.yaml` file to specify more details about your {{ product_title }} cluster’s platform or modify the values of the required parameters. {._abstract}

```yaml title="Sample install-config.yaml file for bare metal"
apiVersion: v1
baseDomain: example.com
compute:
- name: worker
  replicas: 0
  architecture: amd64
controlPlane:
  name: master
  replicas: 1
  architecture: amd64
metadata:
  name: sno-cluster
networking:
  clusterNetwork:
  - cidr: 10.128.0.0/14
    hostPrefix: 23
  machineNetwork:
  - cidr: 192.168.0.0/16
  networkType: OVNKubernetes
  serviceNetwork:
  - 172.30.0.0/16
platform:
  none: {}
fips: false
pullSecret: '{"auths": ...}'
sshKey: 'ssh-ed25519 AAAA...'
```
where:


`baseDomain`
:   Specifies the base domain of the cluster. All DNS records must be sub-domains of this base and include the cluster name.

`compute`
:   Specifies a sequence of mappings. To meet the requirements of the different data structures, the first line of the `compute` section must begin with a hyphen, -.

`compute.replicas`
:   Specifies the number of compute machines that the Agent-based Installer waits to discover before triggering the installation process. It is the number of compute machines that must be booted with the generated ISO.

    :::note


    If you are installing a three-node cluster, do not deploy any compute machines when you install the {{ op_system_first }} machines.
    
    :::


`controlPlane`
:   Specifies a single mapping. To meet the requirements of the different data structures, the first line of the `controlPlane` section must not begin with a hyphen, -. Only one control plane pool is used.

`controlPlane.replicas`
:   Specifies the number of control plane machines that you add to the cluster. Because the cluster uses these values as the number of etcd endpoints in the cluster, the value must match the number of control plane machines that you deploy.

`metadata.name`
:   Specifies the cluster name that you specified in your DNS records.

`networking.clusterNetwork.cidr`
:   Specifies a block of IP addresses from which pod IP addresses are allocated. This block must not overlap with existing physical networks. These IP addresses are used for the pod network. If you need to access the pods from an external network, you must configure load balancers and routers to manage the traffic.

    :::note


    Class E CIDR range is reserved for a future use. To use the Class E CIDR range, you must ensure your networking environment accepts the IP addresses within the Class E CIDR range.
    
    :::


`networking.clusterNetwork.hostPrefix`
:   Specifies the subnet prefix length to assign to each individual node. For example, if `hostPrefix` is set to `23`, then each node is assigned a `/23` subnet out of the given `cidr`, which allows for 510 (2^(32 - 23) - 2) pod IP addresses. If you are required to provide access to nodes from an external network, configure load balancers and routers to manage the traffic.

`networking.networkType`
:   Specifies the cluster network plugin to install. The default value `OVNKubernetes` is the only supported value.

`networking.serviceNetwork`
:   Specifies the IP address pool to use for service IP addresses. You can enter only one IP address pool. This block must not overlap with existing physical networks. If you need to access the services from an external network, configure load balancers and routers to manage the traffic.

`platform.none`
:   Specifies platform `none`. You must set the platform to `none` for a single-node cluster. You can set the platform to `vsphere`, `baremetal`, or `none` for multi-node clusters.

    :::note


    If you set the platform to `vsphere` or `baremetal`, you can configure IP address endpoints for cluster nodes in three ways:

    *   IPv4
    *   IPv6
    *   IPv4 and IPv6 in parallel (dual-stack)

    ```yaml title="Example of dual-stack networking"
    networking:
      clusterNetwork:
        - cidr: 172.21.0.0/16
          hostPrefix: 23
        - cidr: fd02::/48
          hostPrefix: 64
      machineNetwork:
        - cidr: 192.168.11.0/16
        - cidr: 2001:DB8::/32
      serviceNetwork:
        - 172.22.0.0/16
        - fd03::/112
      networkType: OVNKubernetes
    platform:
      baremetal:
        apiVIPs:
        - 192.168.11.3
        - 2001:DB8::4
        ingressVIPs:
        - 192.168.11.4
        - 2001:DB8::5
    ```
    
    :::


`fips`
:   Specifies whether to enable or disable FIPS mode. By default, FIPS mode is not enabled. If FIPS mode is enabled, the {{ op_system_first }} machines that {{ product_title }} runs on bypass the default Kubernetes cryptography suite and use the cryptography modules that are provided with {{ op_system }} instead.

    :::important


    When running {{ op_system_base_full }} or {{ op_system_first }} booted in FIPS mode, {{ product_title }} core components use the {{ op_system_base }} cryptographic libraries that have been submitted to NIST for FIPS 140-2/140-3 Validation on only the x86_64, ppc64le, and s390x architectures.
    
    :::


`pullSecret`
:   Specifies a pull secret that allows you to authenticate with the services that are provided by the included authorities, including Quay.io, which serves the container images for {{ product_title }} components.

`sshKey`
:   Specifies the SSH public key for the `core` user in {{ op_system_first }}.

    :::note


    For production {{ product_title }} clusters on which you want to perform installation debugging or disaster recovery, specify an SSH key that your `ssh-agent` process uses.
    
    :::