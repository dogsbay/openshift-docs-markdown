{% if context == "cpmso-supported-features-aws" %}
{%- set cpmso = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the {{ aws_short }} EC2 Instance Metadata Service by using machine sets {id="machineset-creating-imds-options_{{ context }}"}

You can use machine sets to create machines that use the version of the Amazon EC2 Instance Metadata Service (IMDS) that meets the security requirements of your organization. {._abstract}

Machine sets can create machines that allow the use of both IMDSv1 and [IMDSv2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html) or machines that require the use of IMDSv2.

You can specify whether to require the use of IMDSv2 by adding or editing the value of `metadataServiceOptions.authentication` in the machine set.


:::important

Before configuring a machine set to create machines that require IMDSv2, ensure that any workloads that interact with the {{ aws_short }} metadata service support IMDSv2.

:::


**Prerequisites**

*   To use IMDSv2, your {{ aws_short }} cluster must have been created with {{ product_title }} version 4.7 or later.
{%- if not cpmso %}

    :::note

    To use IMDSv2 on {{ aws_short }} clusters that were created with {{ product_title }} version 4.6 or earlier, you must update your boot image.
    For more information, see "Boot image management".
    
    :::

{%- endif %}

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
                imetadataServiceOptions:
                  authentication: Required
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
              metadataServiceOptions:
                authentication: Required
    {% endif %}
    ```

    To require IMDSv2, set the `metadataServiceOptions.authentication` parameter value to `Required`.
    To allow the use of both IMDSv1 and IMDSv2, set the parameter value to `Optional`.
    If you do not specify a value, machines that the machine set creates allow the use of both IMDSv1 and IMDSv2.
1.  Save your changes and exit the object specification.
{%- if cpmso %}

    When you save an update to the control plane machine set, the Control Plane Machine Set Operator updates the control plane machines according to your configured update strategy.
    *   For clusters that use the default `RollingUpdate` update strategy, the Operator automatically propagates the changes to your control plane configuration.
    *   For clusters that are configured to use the `OnDelete` update strategy, you must replace your control plane machines manually.
{%- endif %}

{% if context == "cpmso-supported-features-aws" %}
{%- set cpmso = "" -%}
{% endif %}