{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling automatic NetworkPolicy creation {id="ossm-config-disable-networkpolicy_{{ context }}"}

If you want to disable the automatic creation and management of `NetworkPolicy` resources, for example to enforce company security policies, or to allow direct access to pods in the mesh, you can do so. You can edit the `ServiceMeshControlPlane` and set `spec.security.manageNetworkPolicy` to `false`.


:::note

When you disable `spec.security.manageNetworkPolicy` {{ SMProductName }} will not create **any** `NetworkPolicy` objects. The system administrator is responsible for managing the network and fixing any issues this might cause.

:::


**Prerequisites**

*   {{ SMProductName }} Operator version 2.1.1 or higher installed.
*   `ServiceMeshControlPlane` resource updated to version 2.1 or higher.

**Procedure**

1.  In the {{ product_title }} web console, click **Ecosystem** -> **Installed Operators**.
1.  Select the project where you installed the {{ SMProductShortName }} control plane, for example `istio-system`, from the **Project** menu.
1.  Click the {{ SMProductName }} Operator. In the **Istio Service Mesh Control Plane** column, click the name of your `ServiceMeshControlPlane`, for example `basic-install`.
1.  On the **Create ServiceMeshControlPlane Details** page, click `YAML` to modify your configuration.
1.  Set the `ServiceMeshControlPlane` field `spec.security.manageNetworkPolicy` to `false`, as shown in this example.
    ```yaml
    apiVersion: maistra.io/v2
    kind: ServiceMeshControlPlane
    spec:
      security:
          manageNetworkPolicy: false
    ```
1.  Click **Save**.