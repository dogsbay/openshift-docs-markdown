{%- set _mod_docs_content_type = "CONCEPT" %}
# Automatic kernel crash dumps with kdump {id="ztp-sno-du-enabling-kdump_{{ context }}"}

`kdump` is a Linux kernel feature that creates a kernel crash dump when the kernel crashes. `kdump` is enabled with the following `MachineConfig` CRs. {._abstract}

```yaml title="Recommended control plane node kdump configuration (06-kdump-master.yaml)" {minja}
{% include "./snippets/ztp_06-kdump-master.yaml" %}
```

```yaml title="Recommended kdump worker node configuration (06-kdump-worker.yaml)" {minja}
{% include "./snippets/ztp_06-kdump-worker.yaml" %}
```