{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying `WasmPlugin` resources {id="ossm-wasmplugin-deploy_{{ context }}"}

You can enable {{ SMProductName }} extensions using the `WasmPlugin` resource. In this example, `istio-system` is the name of the {{ SMProductShortName }} control plane project. The following example creates an `openid-connect` filter that performs an OpenID Connect flow to authenticate the user.

**Procedure**

1.  Create the following example resource:
    ```yaml title="Example plugin.yaml"
    apiVersion: extensions.istio.io/v1alpha1
    kind: WasmPlugin
    metadata:
      name: openid-connect
      namespace: istio-system
    spec:
      selector:
        matchLabels:
          istio: ingressgateway
      url: oci://private-registry:5000/openid-connect/openid:latest
      imagePullPolicy: IfNotPresent
      imagePullSecret: private-registry-pull-secret
      phase: AUTHN
      pluginConfig:
        openid_server: authn
        openid_realm: ingress
    ```
1.  Apply your `plugin.yaml` file with the following command:
    ```terminal
    $ oc apply -f plugin.yaml
    ```