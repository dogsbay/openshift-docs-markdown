{%- set _mod_docs_content_type = "REFERENCE" %}
# Impact of the failed management cluster component {id="hcp-mgmt-component-loss-impact_{{ context }}"}

If the management cluster component fails, your workload remains unaffected. In the {{ product_title }} management cluster, the control plane is decoupled from the data plane to provide resiliency. {._abstract}

The following table covers the impact of a failed management cluster component on the control plane and the data plane. However, the table does not cover all scenarios for the management cluster component failures.

**Impact of the failed component on {{ hcp }}**

| Name of the failed component | Hosted control plane API status | Hosted cluster data plane status |
| --- | --- | --- |
| Worker node | Available | Available |
| Availability zone | Available | Available |
| Management cluster control plane | Available | Available |
| Management cluster control plane and worker nodes | Not available | Available |