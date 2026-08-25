{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a project to the mesh using the ServiceMeshMember resource with the CLI {id="ossm-adding-project-using-smm-resource-cli_{{ context }}"}

You can add one or more projects to the mesh using the `ServiceMeshMember` resource with the CLI.

**Prerequisites**

*   You have installed the {{ SMProductName }} Operator.
*   You know the name of the `ServiceMeshControlPlane` resource and the name of the project it belongs to.
*   You know the name of the project you want to add to the mesh.
*   A service mesh administrator must explicitly grant access to the service mesh. Administrators can grant users permissions to access the mesh by assigning them the `mesh-user` `Role` using a `RoleBinding` or `ClusterRoleBinding`. For more information, see _Creating the {{ SMProductName }} members_.

**Procedure**

1.  Log in to the {{ product_title }} CLI.
1.  Create the YAML file for the `ServiceMeshMember` manifest. The manifest adds the `my-application` project to the service mesh that was created by the `ServiceMeshControlPlane` resource deployed in the `istio-system` namespace:
    ```yaml
    apiVersion: maistra.io/v1
    kind: ServiceMeshMember
    metadata:
      name: default
      namespace: my-application
    spec:
      controlPlaneRef:
        namespace: istio-system
        name: basic
    ```
1.  Apply the YAML file to create the `ServiceMeshMember` resource:
    ```terminal
    $ oc apply -f <file-name>
    ```

**Verification**

*   Verify that the namespace is part of the mesh by running the following command. Confirm the that the value `True` appears in the `READY` column.
    ```terminal
    $ oc get smm default -n my-application
    ```
    ```terminal title="Example output"
    NAME      CONTROL PLANE        READY   AGE
    default   istio-system/basic   True    2m11s
    ```
*   Alternatively, view the `ServiceMeshMemberRoll` resource to confirm that the `my-application` namespace is displayed in the `status.members` and `status.configuredMembers` fields of the `ServiceMeshMemberRoll` resource.
    ```terminal
    $ oc describe smmr default -n istio-system
    ```
    ```terminal title="Example output"
    Name:         default
    Namespace:    istio-system
    Labels:       <none>
    # ...
    Status:
    # ...
      Configured Members:
        default
        my-application
    # ...
      Members:
        default
        my-application
    ```