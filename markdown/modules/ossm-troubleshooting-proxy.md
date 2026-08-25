{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting Envoy proxy {id="ossm-troubleshooting-proxy_{{ context }}"}

The Envoy proxy intercepts all inbound and outbound traffic for all services in the service mesh. Envoy also collects and reports telemetry on the service mesh. Envoy is deployed as a sidecar to the relevant service in the same pod.

## Enabling Envoy access logs {id="_enabling_envoy_access_logs"}

Envoy access logs are useful in diagnosing traffic failures and flows, and help with end-to-end traffic flow analysis.

To enable access logging for all istio-proxy containers, edit the `ServiceMeshControlPlane` (SMCP) object to add a file name for the logging output.

**Procedure**

1.  Log in to the OpenShift Container Platform CLI as a user with the cluster-admin role. Enter the following command. Then, enter your username and password when prompted.
    ```terminal
    $ oc login --username=<NAMEOFUSER> https://<HOSTNAME>:6443
    ```
1.  Change to the project where you installed the {{ SMProductShortName }} control plane, for example `istio-system`.
    ```terminal
    $ oc project istio-system
    ```
1.  Edit the `ServiceMeshControlPlane` file.
    ```terminal
    $ oc edit smcp <smcp_name>
    ```
1.  As show in the following example, use `name` to specify the file name for the proxy log. If you do not specify a value for `name`, no log entries will be written.
    ```yaml
    apiVersion: maistra.io/v2
    kind: ServiceMeshControlPlane
    metadata:
      name: basic
      namespace: istio-system
    spec:
      proxy:
        accessLogging:
          file:
            name: /dev/stdout     #file name
    ```