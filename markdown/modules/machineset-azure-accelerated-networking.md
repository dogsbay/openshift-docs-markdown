{% if context == "creating-machineset-azure" %}
{%- set compute = true -%}
{% endif %}
{% if context == "cpmso-supported-features-azure" %}
{%- set cpmso = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Accelerated Networking for {{ azure_first }} VMs {id="machineset-azure-accelerated-networking_{{ context }}"}

You can enable Accelerated Networking, which uses single root I/O virtualization (SR-IOV) to provide {{ azure_first }} VMs with a more direct path to the switch,
{% if compute %}
during or 
{% endif %}
after installation. This enhances network performance.  {._abstract}

## Limitations {id="machineset-azure-accelerated-networking-limits_{{ context }}"}

Consider the following limitations when deciding whether to use Accelerated Networking:

*   Accelerated Networking is only supported on clusters where the Machine API is operational.
*   
{% if compute %}

    Although the minimum requirement for an {{ azure_short }} worker node is two vCPUs, 
{% endif %}
    Accelerated Networking requires an {{ azure_short }} VM size that includes at least four vCPUs. To satisfy this requirement, you can change the value of `vmSize` in your machine set. For information about {{ azure_short }} VM sizes, see [{{ azure_first }} documentation](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes).

{%- if compute %}
*   When this feature is enabled on an existing {{ azure_short }} cluster, only newly provisioned nodes are affected. Currently running nodes are not reconciled. To enable the feature on all nodes, you must replace each existing machine. This can be done for each machine individually, or by scaling the replicas down to zero, and then scaling back up to your desired number of replicas.
{% endif %}

{% if context == "creating-machineset-azure" %}
{%- set compute = false -%}
{% endif %}
{% if context == "cpmso-supported-features-azure" %}
{%- set cpmso = false -%}
{% endif %}