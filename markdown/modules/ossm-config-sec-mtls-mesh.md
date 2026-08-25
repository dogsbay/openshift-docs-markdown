{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling strict mTLS across the service mesh {id="ossm-security-enabling-strict-mtls_{{ context }}"}

If your workloads do not communicate with outside services, you can quickly enable mTLS across your mesh without communication interruptions. You can enable it by setting `spec.security.dataPlane.mtls` to `true` in the `ServiceMeshControlPlane` resource. The Operator creates the required resources.

```yaml {minja}
apiVersion: maistra.io/v2
kind: ServiceMeshControlPlane
spec:
  version: v{{ MaistraVersion }}
  security:
    dataPlane:
      mtls: true
```

You can also enable mTLS by using the {{ product_title }} web console.

**Procedure**

1.  Log in to the web console.
1.  Click the **Project** menu and select the project where you installed the {{ SMProductShortName }} control plane, for example **istio-system**.
1.  Click **Ecosystem** → **Installed Operators**.
1.  Click **Service Mesh Control Plane** under **Provided APIs**.
1.  Click the name of your `ServiceMeshControlPlane` resource, for example, `basic`.
1.  On the **Details** page, click the toggle in the **Security** section for **Data Plane Security**.