# Release notes for {{ gitops_title }} 1.2 {id="gitops-release-notes-1-2_{{ context }}"}

{{ gitops_title }} 1.2 is now available on {{ product_title }} 4.8.

## Support matrix {id="support-matrix-1-2_{{ context }}"}

Some features in this release are currently in Technology Preview. These experimental features are not intended for production use.

[Technology Preview Features Support Scope](https://access.redhat.com/support/offerings/techpreview)

In the table below, features are marked with the following statuses:

*   **TP**: _Technology Preview_
*   **GA**: _General Availability_

Note the following scope of support on the Red Hat Customer Portal for these features:

**Support matrix**

| Feature | {{ gitops_title }} 1.2 |
| --- | --- |
| Argo CD | GA |
| Argo CD ApplicationSet | TP |
| {{ gitops_title }} Application Manager CLI (`kam`) | TP |

## New features {id="new-features-1-2_{{ context }}"}
In addition to the fixes and stability improvements, the following sections highlight what is new in {{ gitops_title }} 1.2:

*   If you do not have read or write access to the openshift-gitops namespace, you can now use the `DISABLE_DEFAULT_ARGOCD_INSTANCE` environment variable in the GitOps Operator and set the value to `TRUE` to prevent the default Argo CD instance from starting in the `openshift-gitops` namespace.
*   Resource requests and limits are now configured in Argo CD workloads.  Resource quota is enabled in the `openshift-gitops` namespace. As a result, out-of-band workloads deployed manually in the openshift-gitops namespace must be configured with resource requests and limits and the resource quota may need to be increased.
*   Argo CD authentication is now integrated with Red Hat SSO and it is automatically configured with OpenShift 4 Identity Provider on the cluster. This feature is disabled by default.  To enable Red Hat SSO, add SSO configuration in `ArgoCD` CR as shown below. Currently,`keycloak` is the only supported provider.

    ```yaml
    apiVersion: argoproj.io/v1alpha1
    kind: ArgoCD
    metadata:
      name: example-argocd
      labels:
        example: basic
    spec:
      sso:
        provider: keycloak
      server:
        route:
         enabled: true
    ```
*   You can now define hostnames using route labels to support router sharding. Support for setting labels on the `server` (argocd server), `grafana`, and `prometheus` routes is now available. To set labels on a route, add `labels` under the route configuration for a server in the `ArgoCD` CR.
    ```yaml title="Example ArgoCD CR YAML to set labels on argocd server"
    apiVersion: argoproj.io/v1alpha1
    kind: ArgoCD
    metadata:
      name: example-argocd
      labels:
        example: basic
    spec:
      server:
        route:
         enabled: true
         labels:
           key1: value1
           key2: value2
    ```
*   The GitOps Operator now automatically grants permissions to Argo CD instances to manage resources in target namespaces by applying labels. Users can label the target namespace with the label `argocd.argoproj.io/managed-by: <source-namespace>`, where the `source-namespace` is the namespace where the argocd instance is deployed.

## Fixed issues {id="fixed-issues-1-2_{{ context }}"}
The following issues were resolved in the current release:

*   Previously, if a user created additional instances of Argo CD managed by the default cluster instance in the openshift-gitops namespace, the application responsible for the new Argo CD instance would get stuck in an `OutOfSync` status. This issue has now been resolved by adding an owner reference to the cluster secret. [GITOPS-1025](https://issues.redhat.com/browse/GITOPS-1025)

## Known issues {id="known-issues-1-2_{{ context }}"}
These are the known issues in {{ gitops_title }} 1.2:

*   When an Argo CD instance is deleted from the source namespace, the `argocd.argoproj.io/managed-by` labels in the target namespaces are not removed. [GITOPS-1228](https://issues.redhat.com/browse/GITOPS-1228)
*   Resource quota has been enabled in the openshift-gitops namespace in {{ gitops_title }} 1.2. This can affect out-of-band workloads deployed manually and workloads deployed by the default Argo CD instance in the `openshift-gitops` namespace. When you upgrade from {{ gitops_title }} `v1.1.2` to `v1.2` such workloads must be configured with resource requests and limits. If there are any additional workloads, the resource quota in the openshift-gitops namespace must be increased.


    Current Resource Quota for `openshift-gitops` namespace.
    | **Resource** | **Requests** | **Limits** |
    | --- | --- | --- |
    | CPU | 6688m | 13750m |
    | Memory | 4544Mi | 9070Mi |

    You can use the below command to update the CPU limits.
    ```terminal
    $ oc patch resourcequota openshift-gitops-compute-resources -n openshift-gitops --type='json' -p='[{"op": "replace", "path": "/spec/hard/limits.cpu", "value":"9000m"}]'
    ```

    You can use the below command to update the CPU requests.
    ```terminal
    $ oc patch resourcequota openshift-gitops-compute-resources -n openshift-gitops --type='json' -p='[{"op": "replace", "path": "/spec/hard/cpu", "value":"7000m"}]
    ```

    You can replace the path in the above commands from `cpu` to `memory` to update the memory.