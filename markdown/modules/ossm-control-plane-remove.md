{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing the {{ SMProductName }} control plane {id="ossm-control-plane-remove_{{ context }}"}

To uninstall {{ SMProductShortName }} from an existing {{ product_title }} instance, first you delete the {{ SMProductShortName }} control plane and the Operators. Then, you run commands to remove residual resources.

## Removing the {{ SMProductShortName }} control plane using the web console {id="ossm-control-plane-remove-operatorhub_{{ context }}"}

You can remove the {{ SMProductName }} control plane by using the web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Click the **Project** menu and select the project where you installed the {{ SMProductShortName }} control plane, for example **istio-system**.
1.  Navigate to **Ecosystem** -> **Installed Operators**.
1.  Click **Service Mesh Control Plane** under **Provided APIs**.
1.  Click the `ServiceMeshControlPlane` menu {{ kebab }}.
1.  Click **Delete Service Mesh Control Plane**.
1.  Click **Delete** on the confirmation dialog window to remove the `ServiceMeshControlPlane`.

## Removing the {{ SMProductShortName }} control plane using the CLI {id="ossm-control-plane-remove-cli_{{ context }}"}

You can remove the {{ SMProductName }} control plane by using the CLI.  In this example, `istio-system` is the name of the control plane project.

**Procedure**

1.  Log in to the {{ product_title }} CLI.
1.  Run the following command to delete the `ServiceMeshMemberRoll` resource.
    ```terminal
    $ oc delete smmr -n istio-system default
    ```
1.  Run this command to retrieve the name of the installed `ServiceMeshControlPlane`:
    ```terminal
    $ oc get smcp -n istio-system
    ```
1.  Replace `<name_of_custom_resource>` with the output from the previous command, and run this command to remove the custom resource:
    ```terminal
    $ oc delete smcp -n istio-system <name_of_custom_resource>
    ```