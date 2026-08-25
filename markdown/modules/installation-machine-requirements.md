{% if context == "installing-bare-metal" %}
{%- set bare_metal = true -%}
{% endif %}
{% if context == "installing-bare-metal-network-customizations" %}
{%- set bare_metal = true -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set bare_metal = true -%}
{% endif %}
{% if context == "installing-ibm-z-reqs" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-power" %}
{%- set ibm_power = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Required machines for cluster installation {id="installation-machine-requirements_{{ context }}"}

You must specify the minimum required machines or hosts for your cluster so that your cluster remains stable if a node fails. {._abstract}

The smallest {{ product_title }} clusters require the following hosts:


:::important

For a cluster that has user-provisioned infrastructure, you must deploy all of the required machines.

:::


**Minimum required hosts**

| Hosts | Description |
| --- | --- |
| One temporary bootstrap machine | The cluster requires the bootstrap machine to deploy the {{ product_title }} cluster on the three control plane machines. You can remove the bootstrap machine after you install the cluster. |
| Three control plane machines | The control plane machines run the Kubernetes and {{ product_title }} services that form the control plane. |
| At least two compute machines, which are also known as worker machines. | The workloads requested by {{ product_title }} users run on the compute machines. |

{% if bare_metal %}

:::note

As an exception, you can run zero compute machines in a bare metal cluster that consists of three control plane machines only. This provides smaller, more resource efficient clusters for cluster administrators and developers to use for testing, development, and production. Running one compute machine is not supported.

:::

{% endif %}


:::important

{%- if ibm_z %}
To improve high availability of your cluster, distribute the control plane machines over different hypervisor instances on at least two physical machines.
{% endif %}
{% if not ibm_z %}
To keep high availability of your cluster, use separate physical hosts for these cluster machines.
{%- endif %}

:::


{% if not (ibm_z or ibm_power) %}
The bootstrap and control plane machines must use {{ op_system_first }} as the operating system. However, the compute machines can use {{ op_system_first }}, {{ op_system_base_full }} 8.6 and later.
{% endif %}
{% if ibm_z or ibm_power %}
The bootstrap, control plane, and compute machines must use {{ op_system_first }} as the operating system.
{% endif %}

{% if not openshift_origin %}
{{ op_system }} is based on {{ op_system_base_full }} 9.8 and inherits all of its hardware certifications and requirements.
{%- endif %}
See [Red Hat Enterprise Linux technology capabilities and limits](https://access.redhat.com/articles/rhel-limits).

{% if context == "installing-bare-metal" %}
{%- set bare_metal = false -%}
{% endif %}
{% if context == "installing-bare-metal-network-customizations" %}
{%- set bare_metal = false -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set bare_metal = false -%}
{% endif %}
{% if context == "installing-ibm-z-reqs" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-ibm-power" %}
{%- set ibm_power = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = false -%}
{% endif %}