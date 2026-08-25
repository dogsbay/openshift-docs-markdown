{%- set _mod_docs_content_type = "PROCEDURE" %}
# Update the component routes and TLS secret using the {{ rosa_cli }} {id="cloud-experts-update-component-routes-tls-using-rosa-cli_{{ context }}"}

When your DNS records have been updated, you can use the {{ rosa_cli }} to change the component routes. {._abstract}

**Procedure**

1.  Use the `rosa edit ingress` command to update your default ingress route with the new base domain and the secret reference associated with it, taking care to update the hostnames for each component route.
    ```bash
    $ rosa edit ingress -c ${CLUSTER_NAME} ${INGRESS_ID} --component-routes 'console: hostname=console.my-new-domain.dev;tlsSecretRef=console-tls,downloads: hostname=downloads.my-new-domain.dev;tlsSecretRef=downloads-tls,oauth: hostname=oauth.my-new-domain.dev;tlsSecretRef=oauth-tls'
    ```

    :::note

    You can also edit only a subset of the component routes by leaving the component routes you do not want to change set to an empty string. For example, if you only want to change the Console and OAuth server hostnames and TLS certificates, you would run the following command:
    ```bash
    $ rosa edit ingress -c ${CLUSTER_NAME} ${INGRESS_ID} --component-routes 'console: hostname=console.my-new-domain.dev;tlsSecretRef=console-tls,downloads: hostname="";tlsSecretRef="", oauth: hostname=oauth.my-new-domain.dev;tlsSecretRef=oauth-tls'
    ```
    
    :::

1.  Run the `rosa list ingress` command to verify that your changes were successfully made:
    ```bash
    $ rosa list ingress -c ${CLUSTER_NAME} -ojson | jq ".[] | select(.id == \"${INGRESS_ID}\") | .component_routes"
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
1.  Add your certificate to the truststore on your local system, then confirm that you can access your components at their new routes using your local web browser.