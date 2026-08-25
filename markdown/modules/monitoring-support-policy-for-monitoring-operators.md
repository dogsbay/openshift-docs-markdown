{%- set _mod_docs_content_type = "CONCEPT" %}
# Support policy for monitoring Operators {id="support-policy-for-monitoring-operators_{{ context }}"}

You must not override Cluster Version Operator (CVO) control of monitoring Operators. Overriding CVO control prevents Operators from responding to configuration changes, reconciling cluster state, and receiving updates, placing your cluster in an unsupported state. {._abstract}

## Overriding the Cluster Version Operator {id="_overriding_the_cluster_version_operator"}

While overriding CVO control for an Operator can be helpful during debugging, this is unsupported and the cluster administrator assumes full control of the individual component configurations and upgrades.

The `spec.overrides` parameter can be added to the configuration for the CVO to allow administrators to provide a list of overrides to the behavior of the CVO for a component. Setting the `spec.overrides[].unmanaged` parameter to `true` for a component blocks cluster upgrades and alerts the administrator after a CVO override has been set:

```terminal
Disabling ownership via cluster version overrides prevents upgrades. Please remove overrides before continuing.
```


:::warning

Setting a CVO override puts the entire cluster in an unsupported state and prevents the monitoring stack from being reconciled to its intended state. This impacts the reliability features built into Operators and prevents updates from being received. Reported issues must be reproduced after removing any overrides for support to proceed.

:::