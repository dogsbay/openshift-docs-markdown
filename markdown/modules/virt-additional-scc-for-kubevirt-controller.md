{%- set _mod_docs_content_type = "REFERENCE" %}
# Additional SCCs and permissions for the kubevirt-controller service account {id="virt-additional-scc-for-kubevirt-controller_{{ context }}"}

Security context constraints (SCCs) control permissions for pods. These permissions include actions that a pod, a collection of containers, can perform and what resources it can access. You can use SCCs to define a set of conditions that a pod must run with to be accepted into the system. {._abstract}

The `virt-controller` is a cluster controller that creates the `virt-launcher` pods for virtual machines in the cluster.


:::note

By default, `virt-launcher` pods run with the `default` service account in the namespace. If your compliance controls require a unique service account, assign one to the VM. The setting applies to the `VirtualMachineInstance` object and the `virt-launcher` pod.

:::


The `kubevirt-controller` service account is granted additional SCCs and Linux capabilities so that it can create `virt-launcher` pods with the appropriate permissions. These extended permissions allow virtual machines to use {{ VirtProductName }} features that are beyond the scope of typical pods.

The `kubevirt-controller` service account is granted the following SCCs:


`scc.AllowHostDirVolumePlugin = true`
:   This allows virtual machines to use the hostpath volume plugin.


`scc.AllowPrivilegedContainer = false`
:   This ensures the `virt-launcher` pod is not run as a privileged container.


`scc.AllowedCapabilities = []corev1.Capability{"SYS_NICE", "NET_BIND_SERVICE"}`

:   *   `SYS_NICE` allows setting the CPU affinity.
    *   `NET_BIND_SERVICE` allows DHCP and Slirp operations.

## Viewing the SCC and RBAC definitions for the kubevirt-controller {id="_viewing_the_scc_and_rbac_definitions_for_the_kubevirt-controller"}

You can view the `SecurityContextConstraints` definition for the `kubevirt-controller` by using the `oc` tool:

```terminal
$ oc get scc kubevirt-controller -o yaml
```

You can view the RBAC definition for the `kubevirt-controller` clusterrole by using the `oc` tool:

```terminal
$ oc get clusterrole kubevirt-controller -o yaml
```