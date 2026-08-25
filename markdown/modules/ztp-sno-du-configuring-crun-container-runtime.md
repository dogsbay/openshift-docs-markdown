{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring crun as the default container runtime {id="ztp-sno-du-configuring-crun-container-runtime_{{ context }}"}

The following `ContainerRuntimeConfig` custom resources (CRs) configure crun as the default OCI container runtime for control plane and worker nodes.
The crun container runtime is fast and lightweight and has a low memory footprint. {._abstract}


:::important

For optimal performance, enable crun for control plane and worker nodes in {{ sno }}, {{ 3no }}, and standard clusters.
To avoid the cluster rebooting when the CR is applied, apply the change as a {{ ztp }} additional Day 0 install-time manifest.

:::


```yaml title="Recommended ContainerRuntimeConfig CR for control plane nodes (enable-crun-master.yaml)" {minja}
{% include "./snippets/ztp_enable-crun-master.yaml" %}
```

```yaml title="Recommended ContainerRuntimeConfig CR for worker nodes (enable-crun-worker.yaml)" {minja}
{% include "./snippets/ztp_enable-crun-worker.yaml" %}
```