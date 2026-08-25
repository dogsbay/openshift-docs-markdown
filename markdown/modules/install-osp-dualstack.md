{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring a cluster with dual-stack networking {id="install-osp-dualstack_{{ context }}"}

Deploy a cluster with both IPv4 and IPv6 addressing on {{ rh_openstack_first }}. From {{ rh_openstack }} 17.1, you can use single-stack IPv6 infrastructure while the cluster provides internal IPv4 connectivity. {._abstract}

{%- set FeatureName = "Dual-stack configuration for OpenStack" %}

You can create a dual-stack cluster on {{ rh_openstack }}. 

For {{ rh_openstack }} 17.1, you can deploy a dual-stack {{ product_title }} cluster on a single-stack IPv6 {{ rh_openstack }} infrastructure. The {{ product_title }} cluster offers IPv4 connectivity internally, even when the underlying {{ rh_openstack }} network only has IPv6 subnets.

For earlier versions of {{ rh_openstack }}, you can enable the dual-stack configuration only if you are using an {{ rh_openstack }} network with IPv4 and IPv6 subnets.


:::note

{{ rh_openstack }} does not support the conversion of an IPv4 single-stack cluster to a dual-stack cluster network.

:::