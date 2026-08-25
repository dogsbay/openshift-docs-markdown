{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the {{ SMProductName }} member roll {id="ossm-member-roll-create_{{ context }}"}

The `ServiceMeshMemberRoll` lists the projects that belong to the {{ SMProductShortName }} control plane. Only projects listed in the `ServiceMeshMemberRoll` are affected by the control plane. A project does not belong to a service mesh until you add it to the member roll for a particular control plane deployment.

You must create a `ServiceMeshMemberRoll` resource named `default` in the same project as the `ServiceMeshControlPlane`, for example `istio-system`.

## Creating the member roll from the web console {id="ossm-member-roll-create-console_{{ context }}"}

You can add one or more projects to the {{ SMProductShortName }} member roll from the web console. In this example, `istio-system` is the name of the {{ SMProductShortName }} control plane project.

**Prerequisites**

*   An installed, verified {{ SMProductName }} Operator.
*   List of existing projects to add to the service mesh.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  If you do not already have services for your mesh, or you are starting from scratch, create a project for your applications. It must be different from the project where you installed the {{ SMProductShortName }} control plane.
    1.  Navigate to **Home** -> **Projects**.
    1.  Enter a name in the **Name** field.
    1.  Click **Create**.
1.  Navigate to **Ecosystem** -> **Installed Operators**.
1.  Click the **Project** menu and choose the project where your `ServiceMeshControlPlane` resource is deployed from the list, for example `istio-system`.
1.  Click the {{ SMProductName }} Operator.
1.  Click the **Istio Service Mesh Member Roll** tab.
1.  Click **Create ServiceMeshMemberRoll**
1.  Click **Members**, then enter the name of your project in the **Value** field. You can add any number of projects, but a project can only belong to one `ServiceMeshMemberRoll` resource.
1.  Click **Create**.

## Creating the member roll from the CLI {id="ossm-member-roll-create-cli_{{ context }}"}

You can add a project to the `ServiceMeshMemberRoll` from the command line.

**Prerequisites**

*   An installed, verified {{ SMProductName }} Operator.
*   List of projects to add to the service mesh.
*   Access to the OpenShift CLI (`oc`).

**Procedure**

1.  Log in to the {{ product_title }} CLI.
    ```terminal
    $ oc login --username=<NAMEOFUSER> https://<HOSTNAME>:6443
    ```
1.  If you do not already have services for your mesh, or you are starting from scratch, create a project for your applications. It must be different from the project where you installed the {{ SMProductShortName }} control plane.
    ```terminal
    $ oc new-project <your-project>
    ```
1.  To add your projects as members, modify the following example YAML. You can add any number of projects, but a project can only belong to one `ServiceMeshMemberRoll` resource. In this example, `istio-system` is the name of the {{ SMProductShortName }} control plane project.
    ```yaml title="Example servicemeshmemberroll-default.yaml"
    apiVersion: maistra.io/v1
    kind: ServiceMeshMemberRoll
    metadata:
      name: default
      namespace: istio-system
    spec:
      members:
        # a list of projects joined into the service mesh
        - your-project-name
        - another-project-name
    ```
1.  Run the following command to upload and create the `ServiceMeshMemberRoll` resource in the `istio-system` namespace.
    ```terminal
    $ oc create -n istio-system -f servicemeshmemberroll-default.yaml
    ```
1.  Run the following command to verify the `ServiceMeshMemberRoll` was created successfully.
    ```terminal
    $ oc get smmr -n istio-system default
    ```

    The installation has finished successfully when the `STATUS` column is `Configured`.