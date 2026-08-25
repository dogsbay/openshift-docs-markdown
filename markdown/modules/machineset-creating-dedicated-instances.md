{% if context == "cpmso-supported-features-aws" %}
{%- set cpmso = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating Dedicated Instances by using machine sets {id="machineset-creating-dedicated-instance_{{ context }}"}

You can configure a machine set to deploy machines as Dedicated Instances that run in a virtual private cloud (VPC) on hardware that only a single customer can use.
To change use Dedicated Instances, you update the placement tenancy value in the machine set custom resource (CR). {._abstract}

{{ aws_first }} Dedicated Instances are EC2 instances that are physically isolated at the host hardware level.
This isolation applies to instances that a single payer account owns even if the instances belong to different {{ aws_short }} accounts.

Public tenancy is the default tenancy.
Instances with public tenancy run on shared hardware and can share hardware with Dedicated Instances that  belong to the same {{ aws_short }} account.

**Prerequisites**

*   You have access to the {{ oc_first }} as a user with administrator privileges.

**Procedure**

{% if cpmso %}
1.  Edit your control plane machine set custom resource (CR) by running the following command:
    ```terminal
    $ oc edit controlplanemachineset.machine.openshift.io cluster --namespace openshift-machine-api
    ```
{% endif %}

{% if not cpmso %}
1.  In a text editor, open an existing machine set custom resource (CR) or create a new one.
{% endif %}

1.  Update the CR to implement your configuration changes:
    ```yaml {minja}
    {% if cpmso %}
    apiVersion: machine.openshift.io/v1
    kind: ControlPlaneMachineSet
    # ...
    spec:
      template:
        machines_v1beta1_machine_openshift_io:
          spec:
            providerSpec:
              value:
                placement:
                  tenancy: dedicated
    {% endif %}
    {% if not cpmso %}
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    # ...
    spec:
      template:
        spec:
          providerSpec:
            value:
              placement:
                tenancy: dedicated
    {% endif %}
    ```

    To use Dedicated Instances, set the `placement.tenancy` parameter value to `dedicated`.
1.  Save your changes and exit the object specification.
{%- if cpmso %}

    When you save an update to the control plane machine set, the Control Plane Machine Set Operator updates the control plane machines according to your configured update strategy.
    *   For clusters that use the default `RollingUpdate` update strategy, the Operator automatically propagates the changes to your control plane configuration.
    *   For clusters that are configured to use the `OnDelete` update strategy, you must replace your control plane machines manually.
{%- endif %}

{% if context == "cpmso-supported-features-aws" %}
{%- set cpmso = "" -%}
{% endif %}