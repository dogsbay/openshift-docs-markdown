{% if context == "cpmso-supported-features-gcp" %}
{%- set cpmso = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring persistent disk types by using machine sets {id="machineset-gcp-pd-disk-types_{{ context }}"}

Configure the persistent disk type for your machine set on {{ gcp_first }} to match your workload requirements. Editing the `MachineSet` YAML file allows you to choose between standard, balanced, or SSD persistent disks. {._abstract}

For more information about persistent disk types, compatibility, regional availability, and limitations, see the {{ gcp_short }} Compute Engine documentation about [persistent disks](https://cloud.google.com/compute/docs/disks#pdspecs).

**Procedure**

1.  In a text editor, open the YAML file for an existing machine set or create a new one.
1.  Edit the following line under the `providerSpec` field:
    ```yaml {minja}
    {% if not cpmso %}
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    {% endif %}
    {% if cpmso %}
    apiVersion: machine.openshift.io/v1
    kind: ControlPlaneMachineSet
    {%- endif %}
    ...
    spec:
      template:
        spec:
          providerSpec:
            value:
              disks:
    {%- if not cpmso %}
                type: <pd-disk-type>
    {%- endif %}
    {%- if cpmso %}
                type: pd-ssd
    {%- endif %}
    ```

{% if not cpmso %}

    where:

    `spec.template.spec.providerSpec.value.disks.type`
    :   Specifies the persistent disk type. Valid values are `pd-ssd`, `pd-standard`, and `pd-balanced`. The default value is `pd-standard`.
{% endif %}
{% if cpmso %}

    where:

    `spec.template.spec.providerSpec.value.disks.type`
    :   Uses the `pd-ssd` disk type for control plane nodes. Using the `pd-ssd` disk type is required for control plane nodes.
{% endif %}

**Verification**

*   Using the {{ gcp_full }} console, review the details for a machine deployed by the machine set and verify that the `Type` field matches the configured disk type.

{% if context == "cpmso-supported-features-gcp" %}
{%- set cpmso = "" -%}
{% endif %}