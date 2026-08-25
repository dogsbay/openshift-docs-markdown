{% if context == "installing-aws-localzone" %}
{%- set local_zone = true -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Customizing the cluster network MTU {id="installation-aws-cluster-network-mtu_{{ context }}"}

Before you deploy a cluster on AWS, you can customize the cluster network maximum transmission unit (MTU) for your cluster network to meet the needs of your infrastructure. {._abstract}

By default, when you install a cluster with supported {{ zone_type }} capabilities, the MTU value for the cluster network is automatically adjusted to the lowest value that the network plugin accepts.


:::important

Setting an unsupported MTU value for EC2 instances that operate in the {{ zone_type }} infrastructure can cause issues for your {{ product_title }} cluster.

:::


{% if local_zone %}
If the Local Zone supports higher MTU values in between EC2 instances in the Local Zone and the AWS Region, you can manually configure the higher value to increase the network performance of the cluster network.
{% endif %}

{% if wavelength_zone %}
If the Wavelength Zone supports higher MTU values in between EC2 instances running in the Wavelength Zone and the AWS Region, you must manually configure the higher value to increase the network performance of the cluster network.
{% endif %}

You can customize the MTU for a cluster by specifying the `networking.clusterNetworkMTU` parameter in the `install-config.yaml` configuration file.


:::important

All subnets in {{ zone_type }} must support the higher MTU value, so that each node in that zone can successfully communicate with services in the AWS Region and deploy your workloads.

:::


{% if local_zone %}
```yaml title="Example of overwriting the default MTU value"
apiVersion: v1
baseDomain: devcluster.openshift.com
metadata:
  name: edge-zone
networking:
  clusterNetworkMTU: 8901
compute:
- name: edge
  platform:
    aws:
      zones:
      - us-west-2-lax-1a
      - us-west-2-lax-1b
platform:
  aws:
    region: us-west-2
pullSecret: '{"auths": ...}'
sshKey: ssh-ed25519 AAAA...
```
{% endif %}

{% if context == "installing-aws-localzone" %}
{%- set local_zone = false -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = false -%}
{% endif %}