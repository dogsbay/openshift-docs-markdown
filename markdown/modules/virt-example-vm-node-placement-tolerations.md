{%- set _mod_docs_content_type = "REFERENCE" %}
# Example: VM node placement with tolerations {id="virt-example-vm-node-placement-tolerations_{{ context }}"}

In this example, nodes that are reserved for virtual machines are already labeled with the `key=virtualization:NoSchedule` taint. Because this virtual machine has matching `tolerations`, it can schedule onto the tainted nodes. {._abstract}


:::note

A virtual machine that tolerates a taint is not required to schedule onto a node with that taint.

:::


**Example VM manifest**

```yaml
metadata:
  name: example-vm-tolerations
apiVersion: kubevirt.io/v1
kind: VirtualMachine
spec:
  tolerations:
  - key: "key"
    operator: "Equal"
    value: "virtualization"
    effect: "NoSchedule"
# ...
```