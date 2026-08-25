{% if context == "creating-machineset-aws" %}
{%- set aws = true -%}
{% endif %}
{% if context == "creating-machineset-azure" %}
{%- set azure = true -%}
{% endif %}
{% if context == "creating-machineset-gcp" %}
{%- set gcp = true -%}
{% endif %}
{% if context == "legacy-preempt" %}
{%- set gcp_legacy_preempt = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}

{% if aws %}
# Creating Spot Instances by using compute machine sets {id="machineset-creating-non-guaranteed-instance_{{ context }}"}
{% endif %}
{% if azure %}
# Creating Spot VMs by using compute machine sets {id="_creating_spot_vms_by_using_compute_machine_sets"}
{% endif %}
{% if gcp %}
# Creating Spot VMs by using compute machine sets {id="_creating_spot_vms_by_using_compute_machine_sets"}
{% endif %}
{% if gcp_legacy_preempt %}
# Creating preemptible VM instances by using compute machine sets {id="_creating_preemptible_vm_instances_by_using_compute_machine_sets"}
{% endif %}

You can save on costs by creating a compute machine set that deploys machines as non-guaranteed instances.
{%- if aws %}
To launch a Spot Instance on {{ aws_short }}, you add `spotMarketOptions` to your compute machine set YAML file.
{%- endif %}
{%- if azure %}
To launch a Spot VM on {{ azure_short }}, you add `spotVMOptions` to your compute machine set YAML file.
{%- endif %}
{%- if gcp %}
To launch a Spot VM on {{ gcp_short }}, you add `provisioningModel: "Spot"` to your compute machine set YAML file.
{%- endif %}
{%- if gcp_legacy_preempt %}
To launch a preemptible VM instance on {{ gcp_short }}, you add `preemptible` to your compute machine set YAML file. {._abstract}


:::note

{{ gcp_short }} recommends using Spot VMs over preemptible VMs because Spot VMs include new features that preemptible VMs do not support.

:::

{%- endif %}

**Procedure**

*   Add the following line under the `providerSpec` field:
{%- if aws %}
    ```yaml
    providerSpec:
      value:
        spotMarketOptions: {}
    ```

    You can optionally set the `spotMarketOptions.maxPrice` field to limit the cost of the Spot Instance. For example you can set `maxPrice: '2.50'`.

    :::note

    If the `maxPrice` is set, this value is used as the hourly maximum spot price. If it is not set, the maximum price defaults to charge up to the On-Demand Instance price.

    It is strongly recommended to use the default On-Demand price as the `maxPrice` value and to not set the maximum price for Spot Instances.
    
    :::

{%- endif %}
{%- if azure %}
    ```yaml
    providerSpec:
      value:
        spotVMOptions: {}
    ```

    You can optionally set the `spotVMOptions.maxPrice` field to limit the cost of the Spot VM. For example you can set `maxPrice: '0.98765'`. If the `maxPrice` is set, this value is used as the hourly maximum spot price. If it is not set, the maximum price defaults to `-1` and charges up to the standard VM price.

    {{ azure_full }} caps Spot VM prices at the standard price. {{ azure_short }} will not evict an instance due to pricing if the instance is set with the default `maxPrice`. However, an instance can still be evicted due to capacity restrictions.

    :::note

    It is strongly recommended to use the default standard VM price as the `maxPrice` value and to not set the maximum price for Spot VMs.
    
    :::

{%- endif %}
{%- if gcp %}
    ```yaml
    providerSpec:
      value:
        provisioningModel: "Spot"
    ```

    If you specify `provisioningModel: "Spot"`, the machine is labeled as an `interruptible-instance` after the instance is launched.

    :::note

    This parameter is not compatible with setting the `providerSpec.value.preemptible` value to `true`.
    
    :::

{%- endif %}
{%- if gcp_legacy_preempt %}
    ```yaml
    providerSpec:
      value:
        preemptible: true
    ```

    If `preemptible` is set to `true`, the machine is labeled as an `interruptible-instance` after the instance is launched.

    :::note

    This parameter is not compatible with setting the `providerSpec.value.provisioningModel` value to `"Spot"`.
    
    :::

{%- endif %}

{% if context == "creating-machineset-aws" %}
{%- set aws = "" -%}
{% endif %}
{% if context == "creating-machineset-azure" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "creating-machineset-gcp" %}
{%- set gcp = "" -%}
{% endif %}
{% if context == "legacy-preempt" %}
{%- set gcp_legacy_preempt = "" -%}
{% endif %}