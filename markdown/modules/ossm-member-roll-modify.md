{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding or removing projects from the service mesh {id="ossm-member-roll-modify_{{ context }}"}

You can add or remove projects from an existing {{ SMProductShortName }} `ServiceMeshMemberRoll` resource using the web console.

*   You can add any number of projects, but a project can only belong to one `ServiceMeshMemberRoll` resource.
*   The `ServiceMeshMemberRoll` resource is deleted when its corresponding `ServiceMeshControlPlane` resource is deleted.

## Adding or removing projects from the member roll using the web console {id="ossm-member-roll-modify-console_{{ context }}"}

**Prerequisites**

*   An installed, verified {{ SMProductName }} Operator.
*   An existing `ServiceMeshMemberRoll` resource.
*   Name of the project with the `ServiceMeshMemberRoll` resource.
*   Names of the projects you want to add or remove from the mesh.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Ecosystem** -> **Installed Operators**.
1.  Click the **Project** menu and choose the project where your `ServiceMeshControlPlane` resource is deployed from the list, for example `istio-system`.
1.  Click the {{ SMProductName }} Operator.
1.  Click the **Istio Service Mesh Member Roll** tab.
1.  Click the `default` link.
1.  Click the YAML tab.
1.  Modify the YAML to add or remove projects as members. You can add any number of projects, but a project can only belong to one `ServiceMeshMemberRoll` resource.
1.  Click **Save**.
1.  Click **Reload**.

## Adding or removing projects from the member roll using the CLI {id="ossm-member-roll-modify-cli_{{ context }}"}

You can modify an existing {{ SMProductShortName }} member roll using the command line.

**Prerequisites**

*   An installed, verified {{ SMProductName }} Operator.
*   An existing `ServiceMeshMemberRoll` resource.
*   Name of the project with the `ServiceMeshMemberRoll` resource.
*   Names of the projects you want to add or remove from the mesh.
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