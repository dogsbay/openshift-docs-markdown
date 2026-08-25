{%- set _mod_docs_content_type = "CONCEPT" %}
# High availability For ExternalIP {id="nw-ipfailover-cluster-ha-ingress_{{ context }}"}

High availability for `ExternalIP` in non-cloud clusters of {{ product_title }} combines IP failover with `ExternalIP` auto-assignment to ensure services remain accessible when nodes fail. You can configure this by using the same CIDR range for both `ExternalIP` auto-assignment and IP failover. {._abstract}

To configure high availability for `ExternalIP`, you can specify a `spec.ExternalIP.autoAssignCIDRs` range of the cluster network configuration, and then use the same range in creating the IP failover configuration.

Because IP failover can support up to a maximum of 255 VIPs for the entire cluster, the `spec.ExternalIP.autoAssignCIDRs` must be `/24` or smaller.