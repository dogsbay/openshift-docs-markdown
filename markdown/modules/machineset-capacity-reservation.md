{% if context == "creating-machineset-azure" %}
{%- set azure = true -%}
{% endif %}
{% if context == "cpmso-supported-features-azure" %}
{%- set azure = true -%}
{% endif %}
{% if context == "creating-machineset-aws" %}
{%- set aws = true -%}
{% endif %}
{% if context == "cpmso-supported-features-aws" %}
{%- set aws = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Capacity Reservations by using machine sets {id="machineset-capacity-reservation_{{ context }}"}

You can configure a machine set to deploy machines on any available resources that match the parameters of a capacity request that you define by using
{% if azure %}
on-demand Capacity Reservation with Capacity Reservation groups on {{ azure_full }} clusters.
{% endif %}
{% if aws %}
Capacity Reservations on {{ aws_full }} clusters, including On-Demand Capacity Reservations and Capacity Blocks for ML.
{% endif %} {._abstract}

You can configure a machine set to deploy machines on any available resources that match the parameters of a capacity request that you define. {._abstract}

These parameters specify the
{% if azure %}
VM size,
{% endif %}
{% if aws %}
instance type,
{% endif %}
region, and number of instances that you want to reserve.
If your
{% if azure %}
{{ azure_short }} subscription quota
{% endif %}
{% if aws %}
Capacity Reservation
{% endif %}
can accommodate the capacity request, the deployment succeeds.

For more information, including limitations and suggested use cases for this
{% if azure %}
{{ azure_full }} offering, see [On-demand Capacity Reservation](https://learn.microsoft.com/en-us/azure/virtual-machines/capacity-reservation-overview) in the {{ azure_short }} documentation.
{% endif %}
{% if aws %}
{{ aws_full }} offering, see [On-Demand Capacity Reservations and Capacity Blocks for ML](https://docs.aws.amazon.com/en_us/AWSEC2/latest/UserGuide/capacity-reservation-overview.html) in the {{ aws_short }} documentation.
{% endif %}

{% if azure %}

:::note

You cannot change an existing Capacity Reservation configuration for a machine set.
To use a different Capacity Reservation group, you must replace the machine set and the machines that the previous machine set deployed.

:::

{% endif %}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You installed the {{ oc_first }}.
{%- if azure %}
*   You have created a Capacity Reservation group.
For more information, see [Create a Capacity Reservation](https://learn.microsoft.com/en-us/azure/virtual-machines/capacity-reservation-create) in the {{ azure_full }} documentation.
{% endif %}
{% if aws %}
*   You have purchased an On-Demand Capacity Reservation or Capacity Block for ML.
For more information, see [On-Demand Capacity Reservations and Capacity Blocks for ML](https://docs.aws.amazon.com/en_us/AWSEC2/latest/UserGuide/capacity-reservation-overview.html) in the {{ aws_short }} documentation.
{% endif %}

**Procedure**

tag::controlplane[]
. Edit your control plane machine set custom resource (CR) by running the following command:

```terminal
$ oc edit controlplanemachineset.machine.openshift.io cluster --namespace openshift-machine-api
```
end::controlplane[]

tag::compute[]
. In a text editor, open an existing machine set custom resource (CR) or create a new one.
end::compute[]

1.  Update the CR to implement your configuration changes:
    ```yaml title="Sample configuration"
    tag::compute[]
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    # ...
    spec:
      template:
        spec:
          providerSpec:
            value:
{%- if azure %}
              capacityReservationGroupID: <capacity_reservation_group>
{% endif %}
{% if aws %}
              capacityReservationId: <capacity_reservation>
              marketType: <market_type>
{%- endif %}
    end::compute[]
    tag::controlplane[]
    apiVersion: machine.openshift.io/v1
    kind: ControlPlaneMachineSet
    # ...
    spec:
      template:
        machines_v1beta1_machine_openshift_io:
          spec:
            providerSpec:
              value:
{%- if azure %}
                capacityReservationGroupID: <capacity_reservation_group>
{% endif %}
{% if aws %}
                capacityReservationId: <capacity_reservation>
                marketType: <market_type>
{%- endif %}
    end::controlplane[]
    # ...
    ```

    where:

{% if azure %}

    `<capacity_reservation_group>`
    :   Specifies the ID of the Capacity Reservation group that you want the machine set to deploy machines on.
{% endif %}
{% if aws %}

    `<capacity_reservation>`
    :   Specifies the ID of the Capacity Block for ML or On-Demand Capacity Reservation that you want the machine set to deploy machines on.


`<market_type>`
:   Specifies the market type to use.
    The following values are valid:

    `CapacityBlock`
    :   Use this market type with Capacity Blocks for ML.

    `OnDemand`
    :   Use this market type with On-Demand Capacity Reservations.
        tag::compute[]

    `Spot`
    :   Use this market type with Spot Instances.
        This option is not compatible with Capacity Reservations.
        end::compute[]
{% endif %}

1.  Save your changes and exit the object specification.
tag::controlplane[]

    When you save an update to the control plane machine set, the Control Plane Machine Set Operator updates the control plane machines according to your configured update strategy.
    *   For clusters that use the default `RollingUpdate` update strategy, the Operator automatically propagates the changes to your control plane configuration.
    *   For clusters that are configured to use the `OnDelete` update strategy, you must replace your control plane machines manually.
    end::controlplane[]

**Verification**

*   To verify machine deployment, list the machines that the machine set created by running the following command:
    ```terminal
    tag::compute[]
    $ oc get machines.machine.openshift.io \
      -n openshift-machine-api \
      -l machine.openshift.io/cluster-api-machineset=<machine_set_name>
    end::compute[]
    tag::controlplane[]
    $ oc get machine \
      -n openshift-machine-api \
      -l machine.openshift.io/cluster-api-machine-role=master
    end::controlplane[]
    ```

    tag::compute[]

    where `<machine_set_name>` is the name of the compute machine set.
    end::compute[]

    In the output, verify that the characteristics of the listed machines match the parameters of your Capacity Reservation.

{% if context == "creating-machineset-azure" %}
{%- set azure = false -%}
{% endif %}
{% if context == "cpmso-supported-features-azure" %}
{%- set azure = false -%}
{% endif %}
{% if context == "creating-machineset-aws" %}
{%- set aws = false -%}
{% endif %}
{% if context == "cpmso-supported-features-aws" %}
{%- set aws = false -%}
{% endif %}