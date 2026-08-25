{%- set _mod_docs_content_type = "CONCEPT" %}
# Setting rcu_normal {id="ztp-setting-rcu-normal_{{ context }}"}

The following `MachineConfig` CR configures the system to set `rcu_normal` to 1 after the system has finished startup. This improves kernel latency for vDU applications. {._abstract}

```yaml title="Recommended configuration for disabling rcu_expedited after the node has finished startup (08-set-rcu-normal-master.yaml)"
{% include "./snippets/ztp_08-set-rcu-normal-master.yaml" %}
```