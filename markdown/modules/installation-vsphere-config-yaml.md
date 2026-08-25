{% if context == "installing-vsphere" %}
{%- set vsphere_upi = true -%}
{% endif %}
{% if context == "installing-restricted-networks-vsphere" %}
{%- set vsphere_upi = true -%}
{% endif %}
{% if context == "installing-vsphere-network-customizations" %}
{%- set vsphere_upi = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample install-config.yaml file for a {{ vmw_first }} cluster {id="installation-vsphere-config-yaml_{{ context }}"}

You can customize the `install-config.yaml` file to specify more details about your {{ product_title }} cluster’s platform or change the values of the required parameters. {._abstract}


:::important

Carefully review the "Installation configuration parameters for {{ vmw_short }}" page for detailed parameter explanations.

:::


```yaml
apiVersion: v1
baseDomain: example.com
metadata:
  name: test
sshKey: ssh-ed25519 AAAA...
compute:
- name:  <worker_name>
  platform: {}
{%- if vsphere_upi %}
  replicas: 0
{% endif %}
{% if not vsphere_upi %}
  replicas: 3
{%- endif %}
controlPlane:
  name: <control_plane_name>
  platform: {}
  replicas: 3
networking:
  clusterNetwork:
  - cidr: 10.128.0.0/14
    hostPrefix: 23
platform:
  vsphere:
{%- if not vsphere_upi %}
    apiVIPs:
    - 10.0.0.1
    ingressVIPs:
    - 10.0.0.2
      {%- endif %}
    failureDomains:
    - name: <failure_domain_name>
      region: <default_region_name>
      server: <fully_qualified_domain_name>
      topology:
        computeCluster: "/<data_center>/host/<cluster>"
        datacenter: <data_center>
        datastore: "/<data_center>/datastore/<datastore>"
        networks:
        - <VM_Network_name>
      zone: <default_zone_name>
    vcenters:
    - datacenters:
      - <data_center>
      server: <fully_qualified_domain_name>
      user: administrator@vsphere.local
```
where:


`compute`
:   Specifes the parameters that apply to compute nodes.

`controlPlane`
:   Specifies the parameters that apply to control plane nodes.

`networking`
:   Specifies the parameters that apply to cluster networking configuration.

`platform`
:   Specifies the parameters that apply to the configuration of the platform hosting the cluster.

{% if context == "installing-vsphere" %}
{%- set vsphere_upi = false -%}
{% endif %}
{% if context == "installing-restricted-networks-vsphere" %}
{%- set vsphere_upi = false -%}
{% endif %}
{% if context == "installing-vsphere-network-customizations" %}
{%- set vsphere_upi = false -%}
{% endif %}