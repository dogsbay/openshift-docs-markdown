---
title: Configuring MCO-related custom resources
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "machine-configs-custom" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring MCO-related custom resources {id="machine-configs-custom"}

In addition to `MachineConfig` objects, you can use `KubeletConfig` or `ContainerRuntimeConfig` custom resources to change node-level settings that impact how the kubelet and CRI-O container runtime services behave. {._abstract}

The kubelet configuration is currently serialized as an Ignition configuration, so it can be directly edited. However, there is also a new `kubelet-config-controller` added to the Machine Config Controller (MCC). This lets you use a `KubeletConfig` custom resource (CR) to edit the kubelet parameters.

{% leveloffset +1 %}{% include "./modules/create-a-kubeletconfig-crd-to-edit-kubelet-parameters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/create-a-containerruntimeconfig-crd.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/config-container-runtime.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/set-the-default-max-container-root-partition-size-for-overlay-with-crio.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/create-crio-default-capabilities.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [About the container engine and container runtime](/nodes/containers/nodes-containers-using#nodes-containers-runtimes)