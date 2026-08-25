{%- set _mod_docs_content_type = "CONCEPT" %}
# Disable automatic CRI-O cache wipe {id="ztp-sno-du-disabling-crio-wipe_{{ context }}"}

After an uncontrolled host shutdown or cluster reboot, CRI-O automatically deletes the entire CRI-O cache, causing all images to be pulled from the registry when the node reboots.
This can result in unacceptably slow recovery times or recovery failures.
To prevent this from happening in {{ sno }} clusters that you install with {{ ztp }}, disable the CRI-O delete cache feature during cluster installation. {._abstract}

```yaml title="Recommended MachineConfig CR to disable CRI-O cache wipe on control plane nodes (99-crio-disable-wipe-master.yaml)"
{% include "./snippets/ztp_99-crio-disable-wipe-master.yaml" %}
```

```yaml title="Recommended MachineConfig CR to disable CRI-O cache wipe on worker nodes (99-crio-disable-wipe-worker.yaml)"
{% include "./snippets/ztp_99-crio-disable-wipe-worker.yaml" %}
```