{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ servicebinding_title }} 1.2 {id="sbo-release-notes-1-2_{{ context }}"}

{{ servicebinding_title }} 1.2 is now available on {{ product_title }} 4.7, 4.8, 4.9, 4.10, and 4.11.

## New features {id="new-features-1-2_{{ context }}"}
This section highlights what is new in {{ servicebinding_title }} 1.2:

*   Enable {{ servicebinding_title }} to consider optional fields in the annotations by setting the `optional` flag value to `true`.
*   Support for `servicebinding.io/v1beta1` resources.
*   Improvements to the discoverability of bindable services by exposing the relevant binding secret without requiring a workload to be present.

## Known issues {id="known-issues-1-2_{{ context }}"}
*   Currently, when you install {{ servicebinding_title }} on {{ product_title }} 4.11, the memory footprint of {{ servicebinding_title }} increases beyond expected limits. With low usage, however, the memory footprint stays within the expected ranges of your environment or scenarios. In comparison with {{ product_title }} 4.10, under stress, both the average and maximum memory footprint increase considerably. This issue is evident in the previous versions of {{ servicebinding_title }} as well. There is currently no workaround for this issue. [APPSVC-1200](https://issues.redhat.com/browse/APPSVC-1200)
*   By default, the projected files get their permissions set to 0644. {{ servicebinding_title }} cannot set specific permissions due to a bug in Kubernetes that causes issues if the service expects specific permissions such as, `0600`. As a workaround, you can modify the code of the program or the application that is running inside a workload resource to copy the file to the `/tmp` directory and set the appropriate permissions. [APPSVC-1127](https://issues.redhat.com/browse/APPSVC-1127)
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
*   According to the specification, when you change the `ClusterWorkloadResourceMapping` resources, {{ servicebinding_title }} must use the previous version of the `ClusterWorkloadResourceMapping` resource to remove the binding data that was being projected until now. Currently, when you change the `ClusterWorkloadResourceMapping` resources, the {{ servicebinding_title }} uses the latest version of the `ClusterWorkloadResourceMapping` resource to remove the binding data. As a result, {the servicebinding-title} might remove the binding data incorrectly. As a workaround, perform the following steps:
    1.  Delete any `ServiceBinding` resources that use the corresponding `ClusterWorkloadResourceMapping` resource.
    1.  Modify the `ClusterWorkloadResourceMapping` resource.
    1.  Re-apply the `ServiceBinding` resources that you previously removed in step 1.

    [APPSVC-1102](https://issues.redhat.com/browse/APPSVC-1102)