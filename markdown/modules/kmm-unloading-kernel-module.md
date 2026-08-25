{%- set _mod_docs_content_type = "PROCEDURE" %}
# Unloading the kernel module {id="kmm-unloading-kernel-module_{{ context }}"}

To unload a kernel module deployed with KMM on {{ product_title }}, you can delete the corresponding `Module` resource. KMM creates worker pods that run `modprobe -r` on eligible nodes. {._abstract}

You must unload the kernel modules when moving to a newer version or if they introduce some undesirable side effect on the node.

**Procedure**

*   To unload a module loaded with KMM from nodes, delete the corresponding `Module` resource. KMM then creates worker pods, where required, to run `modprobe -r` and unload the kernel module from the nodes.

    :::warning

    When unloading worker pods, KMM needs all the resources it uses when loading the kernel module. This includes the `ServiceAccount` referenced in the `Module` as well as any RBAC defined to allow privileged KMM worker Pods to run. It also includes any pull secret referenced in `.spec.imageRepoSecret`.

    To avoid situations where KMM is unable to unload the kernel module from nodes, make sure those resources are not deleted while the `Module` resource is still present in the cluster in any state, including `Terminating`. KMM includes a validating admission webhook that rejects the deletion of namespaces that contain at least one `Module` resource.
    
    :::