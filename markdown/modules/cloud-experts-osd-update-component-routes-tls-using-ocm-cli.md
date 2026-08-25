{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the component routes and TLS certificates {id="cloud-experts-osd-update-component-routes-tls-using-ocm-cli_{{ context }}"}

Use the {{ cluster_manager_first }} CLI to apply your custom hostnames and TLS certificates to the component routes. {._abstract}

**Procedure**

1.  Use the `ocm edit ingress` command to update your default ingress route with the new base domain and the secret reference associated with it, and update the hostnames for each component route.
    ```bash
    $ ocm edit ingress -c ${CLUSTER_NAME} ${INGRESS_ID} --component-routes 'console: hostname=console.my-new-domain.dev;tlsSecretRef=console-tls,downloads: hostname=downloads.my-new-domain.dev;tlsSecretRef=downloads-tls,oauth: hostname=oauth.my-new-domain.dev;tlsSecretRef=oauth-tls'
    ```

    :::note

    You can also edit only a subset of the component routes by leaving the component routes you do not want to change set to an empty string. For example, if you only want to change the Console and OAuth server hostnames and TLS certificates, you would run the following command:
    ```bash
    $ ocm edit ingress -c ${CLUSTER_NAME} ${INGRESS_ID} --component-routes 'console: hostname=console.my-new-domain.dev;tlsSecretRef=console-tls,downloads: hostname="";tlsSecretRef="", oauth: hostname=oauth.my-new-domain.dev;tlsSecretRef=oauth-tls'
    ```
    
    :::

1.  Run the `ocm list ingress` command to verify your changes:
    ```bash
    $ ocm list ingress -c ${CLUSTER_NAME} -ojson | jq ".[] | select(.id == \"${INGRESS_ID}\") | .component_routes"
    ```
    ```text title="Example output"
    {
      "console": {
        "kind": "ComponentRoute",
        "hostname": "console.my-new-domain.dev",
        "tls_secret_ref": "console-tls"
      },
      "downloads": {
        "kind": "ComponentRoute",
        "hostname": "downloads.my-new-domain.dev",
        "tls_secret_ref": "downloads-tls"
      },
      "oauth": {
        "kind": "ComponentRoute",
        "hostname": "oauth.my-new-domain.dev",
        "tls_secret_ref": "oauth-tls"
      }
    }
    ```