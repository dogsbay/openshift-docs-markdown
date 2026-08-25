{%- set _mod_docs_content_type = "CONCEPT" %}
# SCTP {id="ztp-sno-du-enabling-sctp_{{ context }}"}

Stream Control Transmission Protocol (SCTP) is a key protocol used in RAN applications. This `MachineConfig` object adds the SCTP kernel module to the node to enable this protocol. {._abstract}

```yaml title="Recommended control plane node SCTP configuration (03-sctp-machine-config-master.yaml)" {minja}
{% include "./snippets/ztp_03-sctp-machine-config-master.yaml" %}
```

```yaml title="Recommended worker node SCTP configuration (03-sctp-machine-config-worker.yaml)" {minja}
{% include "./snippets/ztp_03-sctp-machine-config-worker.yaml" %}
```