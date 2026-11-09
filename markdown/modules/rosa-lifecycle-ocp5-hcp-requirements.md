{%- set _mod_docs_content_type = "CONCEPT" %}
# OpenShift 5 architecture and lifecycle requirements {id="rosa-lifecycle-ocp5-hcp-requirements_{{ context }}"}

{% if openshift_rosa_hcp %}
Starting with Red&#160;Hat {{ OCP_short }} 5.0, hosted control planes (HCP) is the mandatory architecture for {{ product_title }}.
{% endif %}

{% if openshift_rosa or openshift_dedicated %}
Starting with Red&#160;Hat {{ OCP_short }} 5.0, hosted control planes (HCP) is the mandatory architecture for managed {{ OCP_short }} deployments.
{% endif %}


:::important

Red&#160;Hat {{ OCP_short }} 5.x does not support classic cluster architectures. New installations of {{ OCP_short }} 5.x and in-place upgrades from {{ OCP_short }} 4.x to 5.x are only available on hosted control planes.

:::


## Key lifecycle considerations for OpenShift 5 {id="key-lifecycle-ocp5_{{ context }}"}
{%- if openshift_rosa_hcp %}
*   **Supported deployment architecture:** {{ OCP_short }} 5.x clusters on {{ product_title }} can only be provisioned using hosted control planes.
{%- endif %}
{%- if openshift_rosa or openshift_dedicated %}
*   **Supported deployment architecture:** Managed {{ OCP_short }} 5.x clusters can only be provisioned using hosted control planes.
{%- endif %}
*   **{{ OCP_short }} 4.x Classic support:** {{ OCP_short }} 4.x Classic clusters remain fully supported through the standard {{ OCP_short }} 4 lifecycle policy. Customers can continue to deploy new {{ OCP_short }} 4.x Classic clusters where supported.
*   **In-place upgrades:** Direct in-place upgrades from {{ OCP_short }} 4.x Classic clusters to OpenShift 5.x are not supported. Customers on Classic 4.x clusters must migrate workloads to a hosted control planes cluster before updating to {{ OCP_short }} 5.x.