{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Running {{ gitops_shortname }} control plane workloads on infrastructure nodes {id="run-gitops-control-plane-workload-on-infra-nodes"}
{%- set context = "run-gitops-control-plane-workload-on-infra-nodes" %}
{% include "./_attributes/common-attributes.md" %}

You can use infrastructure nodes to prevent additional billing cost against subscription counts.

You can use the {{ product_title }} to run certain workloads on infrastructure nodes installed by the {{ gitops_title }} Operator. This comprises the workloads that are installed by the {{ gitops_title }} Operator by default in the `openshift-gitops` namespace, including the default Argo CD instance in that namespace.


:::note

Any other Argo CD instances installed to user namespaces are not eligible to run on infrastructure nodes.

:::


{% leveloffset +1 %}{% include "./modules/go-add-infra-nodes.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_run-gitops-control-plane-workload-on-infra-nodes" ._additional-resources}
{%- if not (openshift_dedicated or openshift_rosa) %}
*   To learn more about taints and tolerations, see [Controlling pod placement using node taints](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations).
{%- endif %}
*   For more information on infrastructure machine sets, see [Creating infrastructure machine sets](/machine_management/creating-infrastructure-machinesets#creating-infrastructure-machinesets).