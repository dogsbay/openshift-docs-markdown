{%- set _mod_docs_content_type = "CONCEPT" %}
# Host-model CPU {id="virt-about-host-model_{{ context }}"}

`host-model` is the default CPU configuration. When a virtual machine instance (VMI) is created, libvirt selects the CPU model closest to the physical node’s CPU, including required features in the VMI’s domain definition. {._abstract}

The CPU model chosen by `host-model` is often not a standard named model supported by libvirt, which may  include additional CPU features. Libvirt creates a CPU definition that only includes the available features on the initial node. This approach ensures:

*   The VMI can start successfully on the initial node.
*   Future live migrations only require the subset of CPU features used in the host-model, even if target nodes have different or additional features.

## Homogeneous clusters {id="virt-cpu-model-homogeneous-clusters_{{ context }}"}

In a homogeneous cluster, all nodes have similar CPU features. The `host-model` CPU model is recommended for homogeneous clusters, and provides the following benefits:

*   Provides VMs with the closest match to the physical CPU.
*   VMs can use all CPU features available on the nodes.
*   Live migration works smoothly because all nodes share the same CPU features.

## Live migration with host-model {id="live-migration-with-host-model_{{ context }}"}

Since the CPU model and features are determined by the initial node, all the host model required CPU features exposed to the VMI must also exist on any future live migration target nodes.

{{ VirtProductName }} ensures compatibility by:

1.  Detecting all `host-model-required-features.node.kubevirt.io/<cpuFeature>` labels on the initial node.
1.  Storing these labels per VMI.
1.  Using these same required CPU features to set node selectors for all future live migrations.

This approach guarantees that VM migrations only target nodes that provide the CPU features actually needed by the VMI.


:::important

Target nodes may support more CPU features than required, but they must support at minimum all features used by the VMI.

:::