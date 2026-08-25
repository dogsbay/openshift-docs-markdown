{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding or removing projects from the mesh using the ServiceMeshMemberRoll resource with the web console {id="ossm-add-project-member-roll-recourse-console_{{ context }}"}

You can add or remove projects from the mesh using the `ServiceMeshMemberRoll` resource with the {{ product_title }} web console. You can add any number of projects, but a project can only belong to one mesh.

The `ServiceMeshMemberRoll` resource is deleted when its corresponding `ServiceMeshControlPlane` resource is deleted.

**Prerequisites**

*   An installed, verified {{ SMProductName }} Operator.
*   An existing `ServiceMeshMemberRoll` resource.
*   The name of the project with the `ServiceMeshMemberRoll` resource.
*   The names of the projects you want to add or remove from the mesh.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Ecosystem** → **Installed Operators**.
1.  Click the **Project** menu and choose the project where your `ServiceMeshControlPlane` resource is deployed from the list. For example `istio-system`.
1.  Click the {{ SMProductName }} Operator.
1.  Click the **Istio Service Mesh Member Roll** tab.
1.  Click the `default` link.
1.  Click the YAML tab.
1.  Modify the YAML to add projects as members (or delete them to remove existing members). You can add any number of projects, but a project can only belong to one `ServiceMeshMemberRoll` resource.
    ```yaml title="Example servicemeshmemberroll-default.yaml"
    apiVersion: maistra.io/v1
    kind: ServiceMeshMemberRoll
    metadata:
      name: default
      namespace: istio-system #control plane project
    spec:
      members:
        # a list of projects joined into the service mesh
        - your-project-name
        - another-project-name
    ```
1.  Click **Save**.
1.  Click **Reload**.