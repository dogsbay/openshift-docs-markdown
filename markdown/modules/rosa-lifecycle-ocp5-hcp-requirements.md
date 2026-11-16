{%- set _mod_docs_content_type = "CONCEPT" %}
# OpenShift 5 architecture and lifecycle requirements {id="rosa-lifecycle-ocp5-hcp-requirements_{{ context }}"}

{% if openshift_rosa_hcp %}
Starting with Red&#160;Hat {{ OCP_short }} 5.0, hosted control planes (HCP) is the standard architecture for {{ product_title }}.
{% endif %}

{% if openshift_rosa or openshift_dedicated %}
Starting with Red&#160;Hat {{ OCP_short }} 5.0, hosted control planes (HCP) is the standard architecture for managed {{ OCP_short }} deployments.
{% endif %}

## Key lifecycle considerations for OpenShift 5 {id="key-lifecycle-ocp5_{{ context }}" ._abstract}
{%- if openshift_rosa_hcp %}
*   **Supported deployment architecture:** {{ OCP_short }} 5.x clusters on {{ product_title }} can only be provisioned using hosted control planes.
{%- endif %}
{%- if openshift_rosa or openshift_dedicated %}
*   **Supported deployment architecture:** Managed {{ OCP_short }} 5.x clusters can only be provisioned using hosted control planes.
{%- endif %}
*   **{{ product_title }} 4.x support:** {{ product_title }} 4.x clusters remain fully supported through the standard {{ product_title }} 4 lifecycle policy. Customers can continue to deploy new {{ product_title }} 4.x clusters where supported.
*   **In-place upgrades:** Direct in-place upgrades from {{ product_title }} 4.x clusters to {{ OCP_short }} 5.x are only available on {{ hcp }}.