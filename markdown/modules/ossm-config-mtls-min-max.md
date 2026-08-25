{%- set _mod_docs_content_type = "PROCEDURE" %}
## Setting the minimum and maximum protocol versions {id="ossm-security-min-max-tls_{{ context }}"}

If your environment has specific requirements for encrypted traffic in your service mesh, you can control the cryptographic functions that are allowed by setting the `spec.security.controlPlane.tls.minProtocolVersion` or `spec.security.controlPlane.tls.maxProtocolVersion` in your `ServiceMeshControlPlane` resource. Those values, configured in your {{ SMProductShortName }} control plane resource, define the minimum and maximum TLS version used by mesh components when communicating securely over TLS.

The default is `TLS_AUTO` and does not specify a version of TLS.

**Valid values**

| Value | Description |
| --- | --- |
| `TLS_AUTO` | default |
| `TLSv1_0` | TLS version 1.0 |
| `TLSv1_1` | TLS version 1.1 |
| `TLSv1_2` | TLS version 1.2 |
| `TLSv1_3` | TLS version 1.3 |

**Procedure**

1.  Log in to the web console.
1.  Click the **Project** menu and select the project where you installed the {{ SMProductShortName }} control plane, for example **istio-system**.
1.  Click **Ecosystem** -> **Installed Operators**.
1.  Click **Service Mesh Control Plane** under **Provided APIs**.
1.  Click the name of your `ServiceMeshControlPlane` resource, for example, `basic`.
1.  Click the **YAML** tab.
1.  Insert the following code snippet in the YAML editor. Replace the value in the `minProtocolVersion` with the TLS version value. In this example, the minimum TLS version is set to `TLSv1_2`.
    ```yaml title="ServiceMeshControlPlane snippet"
    kind: ServiceMeshControlPlane
    spec:
      security:
        controlPlane:
          tls:
            minProtocolVersion: TLSv1_2
    ```
1.  Click **Save**.
1.  Click **Refresh** to verify that the changes updated correctly.