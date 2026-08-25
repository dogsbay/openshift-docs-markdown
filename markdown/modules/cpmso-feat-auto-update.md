{% if context == "control-plane" %}
{%- set rosa_classic = true -%}
{%- set osd = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Automatic updates to the control plane configuration {id="cpmso-feat-auto-update_{{ context }}"}

The `RollingUpdate` update strategy automatically propagates changes to your control plane configuration to minimize manual intervention. {._abstract}

{%- if not (openshift_dedicated or openshift_rosa) %}
This update strategy is the default configuration for the control plane machine set.

For clusters that use the `RollingUpdate` update strategy, the Operator creates a replacement control plane machine with the configuration that is specified in the CR.
When the replacement control plane machine is ready, the Operator deletes the control plane machine that is marked for replacement.
The replacement machine then joins the control plane.

If multiple control plane machines are marked for replacement, the Operator protects etcd health during replacement by repeating this replacement process one machine at a time until it has replaced each machine.
{%- endif %}

{%- if openshift_dedicated or openshift_rosa %}

On {{ product_title }} clusters, control plane machine sets automatically propagate changes to your control plane configuration.
When a control plane machine needs to be replaced, the Control Plane Machine Set Operator creates a replacement machine based on the configuration specified by the `ControlPlaneMachineSet` custom resource (CR). When the new control plane machine is ready, the Operator safely drains and terminates the old control plane machine in a way that mitigates any potential negative effects on cluster API or workload availability.


:::important

You cannot request that control plane machine replacements happen only during maintenance windows. The Control Plane Machine Set Operator acts to ensure cluster stability. Waiting for a maintenance window could result in cluster stability being compromised.

:::


A control plane machine can be marked for replacement at any time, typically because the machine has fallen out of spec or entered an unhealthy state. Such replacements are a normal part of a cluster’s lifecycle and not a cause for concern. SRE will be alerted to the issue automatically if any part of a control plane node replacement fails.


:::note

Depending on when the {{ product_title }} cluster was originally created, the introduction of control plane machine sets might leave one or two control plane nodes with labels or machine names that are inconsistent with the other control plane nodes. For example `clustername-master-0`, `clustername-master-1`,and `clustername-master-2-abcxyz`. Such naming inconsistencies do not affect the workings of the cluster and are not a cause for concern.

:::

{%- endif %}

{% if context == "control-plane" %}
{%- set rosa_classic = "" -%}
{%- set osd = "" -%}
{% endif %}