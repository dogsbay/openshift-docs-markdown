{%- set _mod_docs_content_type = "CONCEPT" %}
# About node labeling for obsolete CPU models {id="virt-about-node-labeling-obsolete-cpu-models_{{ context }}"}

The {{ VirtProductName }} Operator uses a predefined list of obsolete CPU models to ensure that a node supports only valid CPU models for scheduled VMs. {._abstract}

By default, the following CPU models are eliminated from the list of labels generated for the node:

<details>
<summary>Obsolete CPU models</summary>

```
"486"
Conroe
athlon
core2duo
coreduo
kvm32
kvm64
n270
pentium
pentium2
pentium3
pentiumpro
phenom
qemu32
qemu64
```
</details>

This predefined list is not visible in the `HyperConverged` CR. You cannot _remove_ CPU models from this list, but you can add to the list by editing the `spec.obsoleteCPUs.cpuModels` field of the `HyperConverged` CR.