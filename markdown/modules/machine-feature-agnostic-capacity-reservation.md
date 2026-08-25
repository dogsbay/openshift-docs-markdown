{% if context == "cluster-api-config-options-aws" %}
{%- set aws = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Capacity Reservation configuration options {id="machine-feature-agnostic-capacity-reservation_{{ context }}"}

{{ product_title }} version {{ product_version }} and later supports
{%- if azure %}
on-demand Capacity Reservation with Capacity Reservation groups on {{ azure_full }} clusters.
{%- endif %}
{%- if aws %}
Capacity Reservations on {{ aws_full }} clusters, including On-Demand Capacity Reservations and Capacity Blocks for ML. {._abstract}
{%- endif %}

You can deploy machines on any available resources that match the parameters of a capacity request that you define.
These parameters specify the 
{%- if azure %}
VM size,
{%- endif %}
{%- if aws %}
instance type,
{%- endif %}
region, and number of instances that you want to reserve.
If your 
{%- if azure %}
{{ azure_short }} subscription quota
{%- endif %}
{%- if aws %}
Capacity Reservation
{%- endif %}
can accommodate the capacity request, the deployment succeeds.

To deploy compute machines with your configuration, configure the appropriate values in a machine template YAML file.
Then, configure a machine set YAML file to reference the machine template when it deploys machines.

{% if azure %}

:::note

You cannot change an existing Capacity Reservation configuration for a machine set. 
To use a different Capacity Reservation group, you must replace the machine set and the machines that the previous machine set deployed.

:::

{% endif %}

```yaml title="Sample Capacity Reservation configuration"
apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
kind: AWSMachineTemplate
# ...
spec:
  template:
    spec:
      capacityReservationId: <capacity_reservation>
      capacityReservationPreference: <reservation_preference>
      marketType: <market_type>
# ...
```

where:


`spec.template.spec.capacityReservationId`
:   Specifies the ID of the 
{%- if azure %}
    Capacity Reservation group
{%- endif %}
{%- if aws %}
    Capacity Block for ML or On-Demand Capacity Reservation
{%- endif %}
    that you want to deploy machines on.
{%- if aws %}

`spec.template.spec.capacityReservationPreference`
:   Specifies your preferred capacity reservation behavior.
    The following values are valid:

`CapacityReservationsOnly`
:   Use this option to require a matching capacity reservation.
    If no matching capacity reservation is available, the instance fails to launch.

`Open`
:   Use this option to allow using an open capacity reservation that matches the availability zone and instance type.

`None`
:   Use this option to prohibit using a capacity reservation.
    You might use this option to help keep capacity reservations available for workloads that you want to use them.

`spec.template.spec.marketType`
:   Specifies the market type to use.
    The following values are valid:

`CapacityBlock`
:   Use this market type with Capacity Blocks for ML.

`OnDemand`
:   Use this market type with On-Demand Capacity Reservations.

`Spot`
:   Use this market type with Spot Instances.
    This option is not compatible with Capacity Reservations.
{%- endif %}

    For more information, including limitations and suggested use cases for this offering, see
{%- if aws %}
    On-Demand Capacity Reservations and Capacity Blocks for ML ({{ aws_short }} documentation).
{%- endif %}

{% if context == "cluster-api-config-options-aws" %}
{%- set aws = "" -%}
{% endif %}