{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing cert-manager by overriding environment variables from the cert-manager Operator API {id="cert-manager-override-environment-variables_{{ context }}"}

To refine your deployment for specific operational requirements, override supported environment variables for the {{ cert_manager_operator }}. You can customize these variables through the Operator API to apply configurations, such as proxy settings or system-level adjustments, that differ from the default values. {._abstract}

You can override the supported environment variables for the {{ cert_manager_operator }} by adding a `spec.controllerConfig` section in the `CertManager` resource.

**Prerequisites**

*   You have access to the {{ product_title }} cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Edit the `CertManager` resource by running the following command:
    ```terminal
    $ oc edit certmanager cluster
    ```
1.  Add a `spec.controllerConfig` section with the following override arguments:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: CertManager
    metadata:
      name: cluster
      ...
    spec:
      ...
      controllerConfig:
        overrideEnv:
          - name: HTTP_PROXY
            value: http://<proxy_url>
          - name: HTTPS_PROXY
            value: https://<proxy_url>
          - name: NO_PROXY
            value: <ignore_proxy_domains>
    ```

    where:

    `HTTP_PROXY`
    :   Specifies the proxy server URL.

    `NO_PROXY`
    :   Specifies a comma separated list of domains. These domains are ignored by the proxy server.

    :::note

    For more information about the overridable environment variables, see "Overridable environment variables for the cert-manager components" in "Explanation of fields in the CertManager custom resource".
    
    :::


1.  Save your changes and quit the text editor to apply your changes.

**Verification**

1.  Verify that the cert-manager controller pod is redeployed by running the following command:
    ```terminal
    $ oc get pods -l app.kubernetes.io/name=cert-manager -n cert-manager
    ```
    ```terminal title="Example output"
    NAME                          READY   STATUS    RESTARTS   AGE
    cert-manager-bd7fbb9fc-wvbbt  1/1     Running   0          39s
    ```
1.  Verify that environment variables are updated for the cert-manager pod by running the following command:
    ```terminal
    $ oc get pod <redeployed_cert-manager_controller_pod> -n cert-manager -o yaml
    ```
    ```yaml title="Example output"
        env:
        ...
        - name: HTTP_PROXY
          value: http://<PROXY_URL>
        - name: HTTPS_PROXY
          value: https://<PROXY_URL>
        - name: NO_PROXY
          value: <IGNORE_PROXY_DOMAINS>
    ```