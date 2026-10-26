{%- set _mod_docs_content_type = "REFERENCE" %}
# VM node placement with tolerations {id="virt-example-vm-node-placement-tolerations_{{ context }}"}

Use tolerations to let a virtual machine (VM) run on nodes that are reserved by a taint, such as nodes set aside for virtualization workloads. {._abstract}

In this example, nodes that are reserved for virtual machines are already tainted with `key=virtualization:NoSchedule`. Because this virtual machine has matching `tolerations`, it can schedule onto the tainted nodes.


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