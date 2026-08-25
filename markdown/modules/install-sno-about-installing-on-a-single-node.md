{%- set _mod_docs_content_type = "CONCEPT" %}
# About OpenShift on a single node {id="install-sno-about-installing-on-a-single-node_{{ context }}"}

You can create a single-node cluster with standard installation methods. {{ product_title }} on a single node is a specialized installation that requires the creation of a special Ignition configuration file. 


:::important

After cluster installation, no configuration option exists to change a single-node cluster to a high availability (HA) cluster or a two-node cluster. The architecture topology you choose at installation time sets the architecture topology for the lifecycle of the cluster. 

:::


The primary use case is for edge computing workloads, including intermittent connectivity, portable clouds, and 5G radio access networks (RAN) close to a base station. The major tradeoff with an installation on a single node is the lack of high availability.

{% if not openshift_origin %}

:::important

The use of OpenShiftSDN with {{ sno }} is not supported. OVN-Kubernetes is the default network plugin for {{ sno }} deployments.

:::

{% endif %}
{% if openshift_origin %}

:::important

The use of OpenShiftSDN with {{ sno_okd }} is not supported. OVN-Kubernetes is the default network plugin for {{ sno_okd }} deployments.

:::

{% endif %}