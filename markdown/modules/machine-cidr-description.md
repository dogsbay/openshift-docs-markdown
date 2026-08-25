{%- set _mod_docs_content_type = "CONCEPT" %}
# Machine CIDR {id="machine-cidr-description_{{ context }}"}

In the Machine classless inter-domain routing (CIDR) field, you must specify the IP address range for machines or cluster nodes. {._abstract}


:::note

You cannot change Machine CIDR ranges after you create your cluster.

:::


{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
This range must encompass all CIDR address ranges for your virtual private cloud (VPC) subnets. Subnets must be contiguous. A minimum range of 128 IP addresses, using the subnet prefix `/25`, is supported for single availability zone deployments. A minimum address range of 256 addresses, using the subnet prefix `/24`, is supported for deployments that use multiple availability zones.
{% endif %}

The default is `10.0.0.0/16`. This range must not conflict with any connected networks.

{% if openshift_rosa_hcp %}

:::note

When using {{ product_title }}, the static IP address `172.20.0.1` is reserved for the internal Kubernetes API address. The machine, pod, and service CIDR ranges must not conflict with this IP address.

:::

{% endif %}