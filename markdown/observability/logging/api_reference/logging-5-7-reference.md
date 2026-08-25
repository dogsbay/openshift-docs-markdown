{%- set _mod_docs_content_type = "ASSEMBLY" %}
# 5.7 Logging API reference {id="logging-5-7-reference"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "logging-5-7-reference" %}

Many factors, including hosted cluster workload and worker node count, affect how many hosted clusters can fit within a certain number of control-plane nodes. Use this sizing guide to help with hosted cluster capacity planning. This guidance assumes a highly available {{ hcp }} topology. The load-based sizing examples were measured on a bare-metal cluster. Cloud-based instances might have different limiting factors, such as memory size.

You can override the following resource utilization sizing measurements and disable the metric service monitoring.

See the following highly available {{ hcp }} requirements, which were tested with {{ product_title }} version 4.12.9 and later:

*   78 pods
*   Three 8 GiB PVs for etcd
*   Minimum vCPU: approximately 5.5 cores
*   Minimum memory: approximately 19 GiB

{% leveloffset +1 %}{% include "./modules/hcp-pod-limits.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   For more information about supported identity providers, see [Configuring the maximum number of pods per node](/observability/nodes/nodes/nodes-nodes-managing-max-pods#nodes-nodes-managing-max-pods-proc_nodes-nodes-managing-max-pods) in _Managing the maximum number of pods per node_.

{% leveloffset +1 %}{% include "./modules/hcp-resource-limit.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/hcp-load-based-limit.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/hcp-sizing-calculation.md" %}{% endleveloffset %}