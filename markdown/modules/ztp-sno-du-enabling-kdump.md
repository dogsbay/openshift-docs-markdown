{%- set _mod_docs_content_type = "CONCEPT" %}
# Automatic kernel crash dumps with kdump {id="ztp-sno-du-enabling-kdump_{{ context }}"}

`kdump` is a Linux kernel feature that creates a kernel crash dump when the kernel crashes.
You can use the crash dump to debug and find the cause of the kernel crash.
To enable `kdump`, you apply `MachineConfig` custom resources (CRs) that reserve memory for the crash kernel and enable the `kdump` systemd service.
The `ztp-site-generate` container provides the following reference CRs for this configuration: {._abstract}

*   `06-kdump-master.yaml` for control plane nodes
*   `06-kdump-worker.yaml` for worker nodes


:::note

Use the reference `MachineConfig` CRs from the `ztp-site-generate` container image as the source of truth for kdump configuration values.
You can extract the CRs from the container image and find them in the `out/source-crs/extra-manifest/` folder.

:::