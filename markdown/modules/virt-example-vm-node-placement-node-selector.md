{%- set _mod_docs_content_type = "REFERENCE" %}
# VM node placement with nodeSelector {id="virt-example-vm-node-placement-node-selector_{{ context }}"}

Use a `nodeSelector` rule to run a virtual machine (VM) only on nodes that carry every label you specify. {._abstract}

In this example, the virtual machine requires a node that has metadata containing both `example-key-1 = example-value-1` and `example-key-2 = example-value-2` labels.


:::warning

If there are no nodes that fit this description, the virtual machine is not scheduled.

:::


**Example VM manifest**

```yaml
metadata:
  name: example-vm-node-selector
apiVersion: kubevirt.io/v1
kind: VirtualMachine
spec:
  template:
    spec:
      nodeSelector:
        example-key-1: example-value-1
        example-key-2: example-value-2
# ...
```