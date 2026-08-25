{% if context == "creating-machineset-vsphere" %}
{%- set vsphere = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Requirements for clusters with user-provisioned infrastructure to use compute machine sets {id="compute-machineset-upi-reqs_{{ context }}"}

To enable the Machine API to manage and scale compute nodes on user-provisioned infrastructure, you can configure a `MachineSet` YAML file with specific vSphere parameters, for example data center and disk image. To use compute machine sets on clusters that have user-provisioned infrastructure, you must ensure that you cluster configuration supports using the Machine API. {._abstract}

{% if context == "creating-machineset-vsphere" %}
{%- set vsphere = false -%}
{% endif %}