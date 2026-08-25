{%- set _mod_docs_content_type = "PROCEDURE" %}
# Upgrading the Service Mesh control plane {id="ossm-upgrading-smcp_{{ context }}"}

To upgrade {{ SMProductName }}, you must update the version field of the {{ SMProductName }} `ServiceMeshControlPlane` v2 resource. Then, once it is configured and applied, restart the application pods to update each sidecar proxy and its configuration.

**Prerequisites**

*   You are running {{ product_title }} 4.9 or later.
*   You have the latest {{ SMProductName }} Operator.

**Procedure**

1.  Switch to the project that contains your `ServiceMeshControlPlane` resource. In this example, `istio-system` is the name of the {{ SMProductShortName }} control plane project.
    ```terminal
    $ oc project istio-system
    ```
1.  Check your v2 `ServiceMeshControlPlane` resource configuration to verify it is valid.
    1.  Run the following command to view your `ServiceMeshControlPlane` resource as a v2 resource.
        ```terminal
        $ oc get smcp -o yaml
        ```

        :::tip

        Back up your {{ SMProductShortName }} control plane configuration.
        
        :::

1.  Update the `.spec.version` field and apply the configuration.

    For example:
    ```yaml
    apiVersion: maistra.io/v2
    kind: ServiceMeshControlPlane
    metadata:
      name: basic
    spec:
      version: v{{ MaistraVersion }}
    ```

    Alternatively, instead of using the command line, you can use the web console to edit the {{ SMProductShortName }} control plane. In the {{ product_title }} web console, click **Project** and select the project name you just entered.
    1.  Click **Ecosystem** -> **Installed Operators**.
    1.  Find your `ServiceMeshControlPlane` instance.
    1.  Select **YAML view** and update text of the YAML file, as shown in the previous example.
    1.  Click **Save**.