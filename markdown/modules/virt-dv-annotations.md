{%- set _mod_docs_content_type = "REFERENCE" %}
# Example: Data volume annotations {id="virt-dv-annotations_{{ context }}"}

You can configure data volume (DV) annotations to control which network the importer pod uses. The `v1.multus-cni.io/default-network: bridge-network` annotation causes the pod to use the Multus network named `bridge-network` as its default network. {._abstract}

If you want the importer pod to use both the default network from the cluster and the secondary Multus network, use the `k8s.v1.cni.cncf.io/networks: <network_name>` annotation.

Multus network annotation example:

```yaml
apiVersion: cdi.kubevirt.io/v1beta1
kind: DataVolume
metadata:
  name: datavolume-example
  annotations:
    v1.multus-cni.io/default-network: bridge-network
# ...
```

The `v1.multus-cni.io/default-network` annotation specifies the Multus network name.