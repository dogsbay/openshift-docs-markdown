---
title: Additional CRI-O storage locations for faster container startup
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Additional CRI-O storage locations for faster container startup {id="nodes-nodes-additional-crio-storage"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "nodes-nodes-additional-crio-storage" %}

To reduce application startup time, make your applications run more efficiently, and configure lazy pulling, you can configure additional storage locations for the CRI-O container engine. 

Fields in the `ContainerRuntimeConfig` custom resource (CR) let you specify where CRI-O stores and resolves container image layers, complete container images, and OCI artifacts.

{%- set FeatureName = "Using additional CRI-O storage locations" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-additional-crio-storage-about.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/nodes-nodes-additional-crio-storage-configuring.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Stargz Store plugin](https://github.com/containerd/stargz-snapshotter)
*   [Install Stargz Snapshotter and Stargz Store](https://github.com/containerd/stargz-snapshotter/blob/main/docs/INSTALL.md)
*   [Nydus Storage Plugin](https://github.com/containers/nydus-storage-plugin)
*   [eStargz format](https://github.com/containerd/stargz-snapshotter/blob/main/docs/estargz.md)
*   [Nydus format](https://nydus.dev/)
*   [Running background tasks on nodes automatically with daemon sets](/nodes/jobs/nodes-pods-daemonsets#nodes-pods-daemonsets)
*   [Using machine config objects to configure nodes](/machine_configuration/machine-configs-configure#machine-configs-configure)
*   [Image mode for OpenShift](/machine_configuration/mco-coreos-layering#mco-coreos-layering)