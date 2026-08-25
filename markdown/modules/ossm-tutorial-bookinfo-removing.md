{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing the Bookinfo application {id="ossm-tutorial-bookinfo-removing_{{ context }}"}

Follow these steps to remove the Bookinfo application.

**Prerequisites**

*   {{ product_title }} 4.1 or higher installed.
*   {{ SMProductName }} {{ SMProductVersion }} installed.
*   Access to the OpenShift CLI (`oc`).

## Delete the Bookinfo project {id="ossm-delete-bookinfo-project_{{ context }}"}

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Click to **Home** → **Projects**.
1.  Click the `bookinfo` menu {{ kebab }}, and then click **Delete Project**.
1.  Type `bookinfo` in the confirmation dialog box, and then click **Delete**.
    *   Alternatively, you can run this command using the CLI to create the `bookinfo` project.
        ```terminal
        $ oc delete project bookinfo
        ```

## Remove the Bookinfo project from the {{ SMProductShortName }} member roll {id="ossm-remove-bookinfo-smmr_{{ context }}"}

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Click **Ecosystem** → **Installed Operators**.
1.  Click the **Project** menu and choose `istio-system` from the list.
1.  Click the **Istio Service Mesh Member Roll** link under **Provided APIS** for the **{{ SMProductName }}** Operator.
1.  Click the `ServiceMeshMemberRoll` menu {{ kebab }} and select **Edit Service Mesh Member Roll**.
1.  Edit the default Service Mesh Member Roll YAML and remove `bookinfo` from the **members** list.
    *   Alternatively, you can run this command using the CLI to remove the `bookinfo` project from the `ServiceMeshMemberRoll`. In this example, `istio-system` is the name of the {{ SMProductShortName }} control plane project.
        ```terminal
        $ oc -n istio-system patch --type='json' smmr default -p '[{"op": "remove", "path": "/spec/members", "value":["'"bookinfo"'"]}]'
        ```
1.  Click **Save** to update Service Mesh Member Roll.