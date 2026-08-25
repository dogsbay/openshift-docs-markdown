{%- set _mod_docs_content_type = "CONCEPT" %}
# Reduced platform management footprint {id="ztp-sno-du-configuring-the-container-mountspace_{{ context }}"}

To reduce the overall management footprint of the platform, a `MachineConfig` custom resource (CR) is required that places all Kubernetes-specific mount points in a new namespace separate from the host operating system.
The following base64-encoded example `MachineConfig` CR illustrates this configuration. {._abstract}

```yaml title="Recommended container mount namespace configuration (01-container-mount-ns-and-kubelet-conf-master.yaml)" {minja}
{% include "./snippets/ztp_01-container-mount-ns-and-kubelet-conf-master.yaml" %}
```