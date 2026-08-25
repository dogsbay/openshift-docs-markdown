{% if context == "hcp-manage-non-bm" %}
{%- set non_bm = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
{%- if not non_bm %}
# Enabling machine health checks on bare metal {id="hcp-bm-machine-health_{{ context }}"}

{% endif %}

{% if non_bm %}
# Enabling machine health checks on non-bare-metal agent machines {id="_enabling_machine_health_checks_on_non-bare-metal_agent_machines"}

{% endif %}

You can enable machine health checks on bare metal to repair and replace unhealthy managed cluster nodes automatically. You must have additional agent machines that are ready to install in the managed cluster. {._abstract}

Consider the following limitations before enabling machine health checks:

*   You cannot modify the `MachineHealthCheck` object.
*   Machine health checks replace nodes only when at least two nodes stay in the `False` or `Unknown` status for more than 8 minutes.

After you enable machine health checks for the managed cluster nodes, the `MachineHealthCheck` object is created in your hosted cluster.

To enable machine health checks in your hosted cluster, modify the `NodePool` resource.

**Procedure**

1.  Verify that the `spec.nodeDrainTimeout` value in your `NodePool` resource is greater than `0s`. Replace `<hosted_cluster_namespace>` with the name of your hosted cluster namespace and `<nodepool_name>` with the node pool name. Run the following command:
    ```terminal
    $ oc get nodepool -n <hosted_cluster_namespace> <nodepool_name> -o yaml | grep nodeDrainTimeout
    ```
    ```terminal title="Example output"
    nodeDrainTimeout: 30s
    ```
1.  If the `spec.nodeDrainTimeout` value is not greater than `0s`, modify the value by running the following command:
    ```terminal
    $ oc patch nodepool -n <hosted_cluster_namespace> <nodepool_name> -p '{"spec":{"nodeDrainTimeout": "30m"}}' --type=merge
    ```
1.  Enable machine health checks by setting the `spec.management.autoRepair` field to `true` in the `NodePool` resource. Run the following command:
    ```terminal
    $ oc patch nodepool -n <hosted_cluster_namespace> <nodepool_name> -p '{"spec": {"management": {"autoRepair":true}}}' --type=merge
    ```
1.  Verify that the `NodePool` resource is updated with the `autoRepair: true` value by running the following command:
    ```terminal
    $ oc get nodepool -n <hosted_cluster_namespace> <nodepool_name> -o yaml | grep autoRepair
    ```

{% if context == "hcp-manage-non-bm" %}
{%- set non_bm = false -%}
{% endif %}