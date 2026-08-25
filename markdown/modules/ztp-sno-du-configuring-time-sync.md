{%- set _mod_docs_content_type = "REFERENCE" %}
# Configuring cluster time synchronization {id="ztp-sno-du-configuring-time-sync_{{ context }}"}

Run a one-time system time synchronization job for control plane or worker nodes. {._abstract}

```yaml title="Recommended one time time-sync for control plane nodes (99-sync-time-once-master.yaml)" {minja}
{% include "./snippets/ztp_99-sync-time-once-master.yaml" %}
```

```yaml title="Recommended one time time-sync for worker nodes (99-sync-time-once-worker.yaml)" {minja}
{% include "./snippets/ztp_99-sync-time-once-worker.yaml" %}
```