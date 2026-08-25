{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding or removing projects from the mesh using ServiceMeshMemberRoll resource with the CLI {id="ossm-add-project-member-roll-resource-cli_{{ context }}"}

You can add one or more projects to the mesh using the `ServiceMeshMemberRoll` resource with the CLI. You can add any number of projects, but a project can only belong to one mesh.

The `ServiceMeshMemberRoll` resource is deleted when its corresponding `ServiceMeshControlPlane` resource is deleted.

**Prerequisites**

*   An installed, verified {{ SMProductName }} Operator.
*   An existing `ServiceMeshMemberRoll` resource.
*   The name of the project with the `ServiceMeshMemberRoll` resource.
*   The names of the projects you want to add or remove from the mesh.
*   Access to the OpenShift CLI (`oc`).

**Procedure**

1.  Log in to the {{ product_title }} CLI.
1.  Edit the `ServiceMeshMemberRoll` resource.
    ```terminal
    $ oc edit smmr -n <controlplane-namespace>
    ```
1.  Modify the YAML to add or remove projects as members. You can add any number of projects, but a project can only belong to one `ServiceMeshMemberRoll` resource.
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
1.  Save the file and exit the editor.