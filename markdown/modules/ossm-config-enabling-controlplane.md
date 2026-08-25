{%- set _mod_docs_content_type = "PROCEDURE" %}
## Enabling strict mTLS for Mixer telemetry or policy components {id="ossm-security-enabling-controlplane_{{ context }}"}

Secure connections are always used when proxies communicate with the {{ SMProductShortName }} control plane regardless of the `spec.security.controlPlane.mtls` setting. If Mixer telemetry or policies are part of your configuration, set `spec.security.controlPlane.mtls` to `true` in your `ServiceMeshControlPlane` resource to enable strict mTLS.

```yaml {minja}
apiVersion: maistra.io/v2
kind: ServiceMeshControlPlane
spec:
  version: v{{ MaistraVersion }}
  security:
    controlPlane:
      mtls: true
```

You can also enable mTLS for the {{ SMProductShortName }} control plane by using the {{ product_title }} web console. In this example, `istio-system` is the {{ SMProductShortName }} control plane namespace.

**Procedure**

1.  Log in to the web console.
1.  Click the **Project** menu and select the project where you installed the {{ SMProductShortName }} control plane, for example **istio-system**.
1.  Click **Ecosystem** → **Installed Operators**.
1.  Click **Service Mesh Control Plane** under **Provided APIs**.
1.  Click the name of your `ServiceMeshControlPlane` resource, for example, `production`.
1.  On the **Details** page, click the toggle in the **Security** section for **Control Plane Security**.