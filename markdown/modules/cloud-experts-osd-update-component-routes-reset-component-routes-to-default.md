{%- set _mod_docs_content_type = "PROCEDURE" %}
# Resetting routes to defaults {id="cloud-experts-osd-update-component-routes-reset-component-routes-to-default_{{ context }}"}

Reset the routes, use default hostnames, and remove custom TLS certs. {._abstract}

**Procedure**

*   Reset your routes by running the following command:
    ```bash
    $ ocm edit ingress -c ${CLUSTER_NAME} ${INGRESS_ID} --component-routes 'console: hostname="";tlsSecretRef="",downloads: hostname="";tlsSecretRef="", oauth: hostname="";tlsSecretRef=""'
    ```

**Verification**

*   Check that hostnames and TLS cert refs use defaults:
    ```bash
    $ ocm get /api/clusters_mgmt/v1/clusters/${CLUSTER_ID}/ingresses/${INGRESS_ID} | jq .component_routes                                                                                                
    ```
    ```bash title="Example output"
    {
      "console": {
        "hostname": "console.my-new-domain.dev",
        "tls_secret_ref": "console-tls"
      },
      "downloads": {
        "hostname": "downloads.my-new-domain.dev",
        "tls_secret_ref": "downloads-tls"
      },
      "oauth": {
        "hostname": "oauth.my-new-domain.dev",
        "tls_secret_ref": "oauth-tls"
      }
    }
    ```

    The output shows empty `hostname` and `tls_secret_ref` for each route.