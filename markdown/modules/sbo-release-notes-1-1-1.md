{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ servicebinding_title }} 1.1.1 {id="sbo-release-notes-1-1-1_{{ context }}"}

{{ servicebinding_title }} 1.1.1 is now available on {{ product_title }} 4.7, 4.8, 4.9, and 4.10.

## Fixed issues {id="fixed-issues-1-1-1_{{ context }}"}
*   Before this update, a security vulnerability `CVE-2021-38561` was noted for {{ servicebinding_title }} Helm chart. This update fixes the `CVE-2021-38561` error and updates the `golang.org/x/text` package from v0.3.6 to v0.3.7. [APPSVC-1124](https://issues.redhat.com/browse/APPSVC-1124)
*   Before this update, users of the Developer Sandbox did not have sufficient permissions to read `ClusterWorkloadResourceMapping` resources. As a result, {{ servicebinding_title }} prevented all service bindings from being successful. With this update, the {{ servicebinding_title }} now includes the appropriate role-based access control (RBAC) rules for any authenticated subject including the Developer Sandbox users. These RBAC rules allow the {{ servicebinding_title }} to `get`, `list`, and `watch` the `ClusterWorkloadResourceMapping` resources for the Developer Sandbox users and to process service bindings successfully. [APPSVC-1135](https://issues.redhat.com/browse/APPSVC-1135)

## Known issues {id="known-issues-1-1-1_{{ context }}"}
*   There is currently a known issue with installing {{ servicebinding_title }} in a single namespace installation mode. The absence of an appropriate namespace-scoped role-based access control (RBAC) rule prevents the successful binding of an application to a few known Operator-backed services that the {{ servicebinding_title }} can automatically detect and bind to. When this happens, it generates an error message similar to the following example:
    ```text title="Example error message"
    `postgresclusters.postgres-operator.crunchydata.com "hippo" is forbidden:
            User "system:serviceaccount:my-petclinic:service-binding-operator" cannot
            get resource "postgresclusters" in API group "postgres-operator.crunchydata.com"
            in the namespace "my-petclinic"`
    ```

    Workaround 1: Install the {{ servicebinding_title }} in the `all namespaces` installation mode. As a result, the appropriate cluster-scoped RBAC rule now exists and the binding succeeds.

    Workaround 2: If you cannot install the {{ servicebinding_title }} in the `all namespaces` installation mode, install the following role binding into the namespace where the {{ servicebinding_title }} is installed:
    ```yaml title="Example: Role binding for Crunchy Postgres Operator"
    kind: RoleBinding
    apiVersion: rbac.authorization.k8s.io/v1
    metadata:
      name: service-binding-crunchy-postgres-viewer
    subjects:
      - kind: ServiceAccount
        name: service-binding-operator
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: ClusterRole
      name: service-binding-crunchy-postgres-viewer-role
    ```

    [APPSVC-1062](https://issues.redhat.com/browse/APPSVC-1062)
*   Currently, when you modify the `ClusterWorkloadResourceMapping` resources, the {{ servicebinding_title }} does not implement correct behavior. As a workaround, perform the following steps:
    1.  Delete any `ServiceBinding` resources that use the corresponding `ClusterWorkloadResourceMapping` resource.
    1.  Modify the `ClusterWorkloadResourceMapping` resource.
    1.  Re-apply the `ServiceBinding` resources that you previously removed in step 1.

    [APPSVC-1102](https://issues.redhat.com/browse/APPSVC-1102)