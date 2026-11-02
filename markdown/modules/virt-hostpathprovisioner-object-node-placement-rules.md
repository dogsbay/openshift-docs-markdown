{%- set _mod_docs_content_type = "REFERENCE" %}
# HostPathProvisioner object node placement rule example {id="virt-hostpathprovisioner-object-node-placement-rules_{{ context }}"}

You can edit the `HostPathProvisioner` object directly or by using the web console. {._abstract}


:::warning

You must schedule the hostpath provisioner (HPP) and the {{ VirtProductName }} components on the same nodes. Otherwise, virtualization pods that use the hostpath provisioner cannot run. You cannot run virtual machines.

:::


After you deploy a virtual machine (VM) with the HPP storage class, you can remove the hostpath provisioner pod from the same node by using the node selector. However, you must first revert that change, at least for that specific node, and wait for the pod to run before trying to delete the VM.

You can configure node placement rules by specifying `nodeSelector`, `affinity`, or `tolerations` for the `spec.workload` field of the `HostPathProvisioner` object that you create when you install the hostpath provisioner.

**Example `HostPathProvisioner` object with `nodeSelector` rule:**

```yaml
apiVersion: hostpathprovisioner.kubevirt.io/v1beta1
kind: HostPathProvisioner
metadata:
  name: hostpath-provisioner
spec:
  imagePullPolicy: IfNotPresent
  pathConfig:
    path: "</path/to/backing/directory>"
    useNamingPrefix: false
  workload:
    nodeSelector:
      example.io/example-workloads-key: example-workloads-value
```

Workloads are placed on nodes labeled `example.io/example-workloads-key = example-workloads-value`.