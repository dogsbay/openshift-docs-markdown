{% if context == "hcp-manage-non-bm" %}
{%- set non_bm = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
{% if not non_bm %}
# Disabling machine health checks on bare metal {id="hcp-bm-machine-health-disable_{{ context }}"}

{% endif %}

{% if non_bm %}
# Disabling machine health checks on non-bare-metal agent machines {id="_disabling_machine_health_checks_on_non-bare-metal_agent_machines"}

{% endif %}

To disable machine health checks for the managed cluster nodes, modify the `NodePool` resource. {._abstract}

**Procedure**

1.  Disable machine health checks by setting the `spec.management.autoRepair` field to `false` in the `NodePool` resource. Run the following command:
    ```terminal
    $ oc patch nodepool -n <hosted_cluster_namespace> <nodepool_name> -p '{"spec": {"management": {"autoRepair":false}}}' --type=merge
    ```
1.  Verify that the `NodePool` resource is updated with the `autoRepair: false` value by running the following command:
    ```terminal
    $ oc get nodepool -n <hosted_cluster_namespace> <nodepool_name> -o yaml | grep autoRepair
    ```

{% if context == "hcp-manage-non-bm" %}
{%- set non_bm = "" -%}
{% endif %}