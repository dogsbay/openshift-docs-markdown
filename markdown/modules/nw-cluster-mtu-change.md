{% if context == "aws-compute-edge-tasks-local-zone" %}
{%- set local_zone = true -%}
{% endif %}
{% if context == "aws-compute-edge-tasks-wavelength-zone" %}
{%- set wavelength_zone = true -%}
{% endif %}
{% if context == "aws-compute-edge-zone-tasks" %}
{%- set post_aws_zones = true -%}
{% endif %}
{% if context == "installing-aws-outposts" %}
{%- set outposts = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}

{% if not outposts %}
# Changing the cluster network MTU {id="nw-cluster-mtu-change_{{ context }}"}
{% endif %}

{% if outposts %}
# Changing the cluster network MTU to support AWS Outposts {id="_changing_the_cluster_network_mtu_to_support_aws_outposts"}
{% endif %}

{% if outposts %}
You might need to decrease the maximum transmission unit (MTU) value for the cluster network to support an AWS Outposts subnet. During installation, the MTU for the cluster network is detected automatically based on the MTU of the primary network interface of nodes in the cluster.
{% endif %}
{% if not outposts %}
As a cluster administrator, you can increase or decrease the maximum transmission unit (MTU) for your cluster. {._abstract}
{% endif %}


:::important

You cannot roll back an MTU value for nodes during the MTU migration process, but you can roll back the value after the MTU migration process completes.

The migration is disruptive and nodes in your cluster might be temporarily unavailable as the MTU update takes effect.

:::


{% if outposts %}
For more details about the migration process, including important service interruption considerations, see "Changing the MTU for the cluster network".
{% endif %}

{% if not (local_zone or wavelength_zone or post_aws_zones or outposts) %}
The following procedures describe how to change the cluster network MTU by using machine configs, Dynamic Host Configuration Protocol (DHCP), or an ISO image. If you use either the DHCP or ISO approaches, you must refer to configuration artifacts that you kept after installing your cluster to complete the procedure.
{% endif %}