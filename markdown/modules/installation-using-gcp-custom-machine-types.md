{% if context == "installing-gcp-customizations" %}
{%- set ipi = true -%}
{% endif %}
{% if context == "installing-gcp-network-customizations" %}
{%- set ipi = true -%}
{% endif %}
{% if context == "installing-gcp-private" %}
{%- set ipi = true -%}
{% endif %}
{% if context == "installing-gcp-vpc" %}
{%- set ipi = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set ipi = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using custom machine types {id="installation-custom-machine-types_{{ context }}"}

Using a custom machine type to install a {{ product_title }} cluster is supported.

Consider the following when using a custom machine type:

*   Similar to predefined instance types, custom machine types must meet the minimum resource requirements for control plane and compute machines. For more information, see "Minimum resource requirements for cluster installation".
*   The name of the custom machine type must adhere to the following syntax:
    `custom-<number_of_cpus>-<amount_of_memory_in_mb>`

    For example, `custom-6-20480`.

{% if ipi %}
As part of the installation process, you specify the custom machine type in the `install-config.yaml` file.

```yaml title="Sample install-config.yaml file with a custom machine type"
compute:
- architecture: amd64
  hyperthreading: Enabled
  name: worker
  platform:
    gcp:
      type: custom-6-20480
  replicas: 2
controlPlane:
  architecture: amd64
  hyperthreading: Enabled
  name: master
  platform:
    gcp:
      type: custom-6-20480
  replicas: 3
```
{% endif %}

{% if context == "installing-gcp-customizations" %}
{%- set ipi = false -%}
{% endif %}
{% if context == "installing-gcp-network-customizations" %}
{%- set ipi = false -%}
{% endif %}
{% if context == "installing-gcp-private" %}
{%- set ipi = false -%}
{% endif %}
{% if context == "installing-gcp-vpc" %}
{%- set ipi = false -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set ipi = false -%}
{% endif %}