{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a project to the mesh using the ServiceMeshMember resource with the web console {id="ossm-adding-project-using-smm-resource-console_{{ context }}"}

You can add one or more projects to the mesh using the `ServiceMeshMember` resource with the {{ product_title }} web console.

**Prerequisites**

*   You have installed the {{ SMProductName }} Operator.
*   You know the name of the `ServiceMeshControlPlane` resource and the name of the project that the resource belongs to.
*   You know the name of the project you want to add to the mesh.
*   A service mesh administrator must explicitly grant access to the service mesh. Administrators can grant users permissions to access the mesh by assigning them the `mesh-user` `Role` using a `RoleBinding` or `ClusterRoleBinding`. For more information, see _Creating the {{ SMProductName }} members_.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Ecosystem** → **Installed Operators**.
1.  Click the **Project** menu and choose the project that you want to add to the mesh from the drop-down list. For example, `istio-system`.
1.  Click the {{ SMProductName }} Operator.
1.  Click the **Istio Service Mesh Member** tab.
1.  Click **Create ServiceMeshMember**
1.  Accept the default name for the `ServiceMeshMember`.
1.  Click to expand **ControlPlaneRef**.
1.  In the **Namespace** field, select the project that the `ServiceMeshControlPlane` resource belongs to. For example, `istio-system`.
1.  In the **Name** field, enter the name of the `ServiceMeshControlPlane` resource that this namespace belongs to. For example, `basic`.
1.  Click **Create**.

**Verification**

1.  Confirm the `ServiceMeshMember` resource was created and that the project was added to the mesh by using the following steps:
    1.  Click the resource name, for example, `default`. 
    1.  View the **Conditions** section shown at the end of the screen. 
    1.  Confirm that the `Status` of the `Reconciled` and `Ready` conditions is `True`. 

        If the `Status` is `False`, see the `Reason` and `Message` columns for more information.