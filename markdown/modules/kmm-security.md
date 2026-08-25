{%- set _mod_docs_content_type = "REFERENCE" %}
# Security and permissions {id="kmm-security_{{ context }}"}

KMM security and permissions govern how privileged workloads load kernel modules on {{ product_title }} nodes. Review `ServiceAccount`, `SecurityContextConstraint`, and pod security requirements before deploying `Module` resources. {._abstract}


:::important

Loading kernel modules is a highly sensitive operation.
After they are loaded, kernel modules have all possible permissions to do any kind of operation on the node.

:::


## ServiceAccounts and SecurityContextConstraints {id="serviceaccounts-and-securitycontextconstraint_{{ context }}"}

Kernel Module Management (KMM) creates a privileged workload to load the kernel modules on nodes.
That workload needs `ServiceAccounts` allowed to use the `privileged` `SecurityContextConstraint` (SCC) resource.

The authorization model for that workload depends on the namespace of the `Module` resource, as well as its spec.

*   If the `.spec.moduleLoader.serviceAccountName` or `.spec.devicePlugin.serviceAccountName` fields are set, they are always used.
*   If those fields are not set, then:
    *   If the `Module` resource is created in the Operator’s namespace (`openshift-kmm` by default), then KMM uses its default, powerful `ServiceAccounts` to run the worker and device plugin pods.
    *   If the `Module` resource is created in any other namespace, then KMM runs the pods with the namespace’s `default` `ServiceAccount`. The `Module` resource cannot run a privileged workload unless you manually enable it to use the `privileged` SCC.


    :::important

    `openshift-kmm` is a trusted namespace.

    When setting up RBAC permissions, remember that any user or `ServiceAccount` creating a `Module` resource in the `openshift-kmm` namespace results in KMM automatically running privileged workloads on potentially all nodes in the cluster.
    
    :::


To allow any `ServiceAccount` to use the `privileged` SCC and run worker or device plugin pods, you can use the `oc adm policy` command, as in the following example:

```terminal
$ oc adm policy add-scc-to-user privileged -z "${serviceAccountName}" [ -n "${namespace}" ]
```

## Pod security standards {id="pod-security-standards_{{ context }}"}

OpenShift runs a synchronization mechanism that sets the namespace Pod Security level automatically based on
the security contexts in use. No action is needed.