{% if context == "aws-compute-edge-tasks-local-zone" %}
{%- set local_zone = true -%}
{% endif %}
{% if context == "aws-compute-edge-tasks-wavelength-zone" %}
{%- set wavelength_zone = true -%}
{% endif %}
{% if context == "aws-compute-edge-zone-tasks" %}
{%- set post_aws_zones = true -%}
{% endif %}
{% if context == "installing-aws-outposts" %}
{%- set outposts = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying the machine configuration {id="nw-cluster-mtu-verifying-configuration_{{ context }}"}

Verify the machine configuration on your hosts to confirm that the maximum transmission unit (MTU) migration applied successfully. Checking the configuration state and system settings help ensures that the nodes use the correct migration script. {._abstract}

**Procedure**

*   Confirm the status of the new machine configuration on the hosts:
    1.  To list the machine configuration state and the name of the applied machine configuration, enter the following command:
        ```terminal
        $ oc describe node | egrep "hostname|machineconfig"
        ```
        ```text title="Example output"
        kubernetes.io/hostname=master-0
        machineconfiguration.openshift.io/currentConfig: rendered-master-c53e221d9d24e1c8bb6ee89dd3d8ad7b
        machineconfiguration.openshift.io/desiredConfig: rendered-master-c53e221d9d24e1c8bb6ee89dd3d8ad7b
        machineconfiguration.openshift.io/reason:
        machineconfiguration.openshift.io/state: Done
        ```
    1.  Verify that the following statements are true:
        *   The value of `machineconfiguration.openshift.io/state` field is `Done`.
        *   The value of the `machineconfiguration.openshift.io/currentConfig` field is equal to the value of the `machineconfiguration.openshift.io/desiredConfig` field.
    1.  To confirm that the machine config is correct, enter the following command:
        ```terminal
        $ oc get machineconfig <config_name> -o yaml | grep ExecStart
        ```
        where:


        `<config_name>`
        :   Specifies the name of the machine config from the `machineconfiguration.openshift.io/currentConfig` field.

        The machine config must include the following update to the systemd configuration:
        ```plain
        ExecStart=/usr/local/bin/mtu-migration.sh
        ```

{% if context == "aws-compute-edge-tasks-local-zone" %}
{%- set local_zone = "" -%}
{% endif %}
{% if context == "aws-compute-edge-tasks-wavelength-zone" %}
{%- set wavelength_zone = "" -%}
{% endif %}
{% if context == "aws-compute-edge-zone-tasks" %}
{%- set post_aws_zones = "" -%}
{% endif %}
{% if context == "installing-aws-outposts" %}
{%- set outposts = "" -%}
{% endif %}