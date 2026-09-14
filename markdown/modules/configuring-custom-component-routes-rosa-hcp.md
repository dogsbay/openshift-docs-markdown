{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure custom component routes for {{ product_title }} {id="configuring-custom-component-routes-rosa-hcp_{{ context }}"}

You can configure custom component routes for the web console and downloads page on your {{ product_title }} cluster. To configure custom routes, you create a TLS secret, configure DNS records, and update the ingress configuration by using the {{ rosa_cli }}. {._abstract}

**Prerequisites**

*   You have installed the {{ rosa_cli_first }}.
*   You have administrator access to a {{ product_title }} cluster.
*   You have a custom domain or fully qualified domain name (FQDN) registered, for example, `my-custom-hostname.dev`.
*   You have a valid TLS certificate (`tls.crt`) and private key (`tls.key`) for the custom domain.

**Procedure**

1.  Create a TLS secret in the `openshift-config` namespace that has your custom domain’s certificate and private key by running the following command:
    ```terminal
    $ oc create secret tls <secret_name> --cert=<path_to_tls_cert> --key=<path_to_tls_key> -n openshift-config
    ```

    where:

    `<secret_name>`
    :   Specifies a name for the TLS secret, for example, `custom-console-tls`.

    `<path_to_tls_cert>`
    :   Specifies the path to your TLS certificate file.

    `<path_to_tls_key>`
    :   Specifies the path to your TLS private key file.
1.  In your DNS provider’s management console, add a `CNAME` or an `A` record pointing your custom domain to your cluster’s router canonical domain name. The router canonical domain name is the load balancer hostname value for your cluster.
    *   For example, in your AWS Route 53 Dashboard, add a CNAME record where
        *   Name: `my-custom-hostname.dev` (your custom hostname)
        *   Value: `a234gsr3242rsfsfs-1342r624.us-east-1.elb.amazonaws.com` (your cluster’s load balancer hostname)

            :::important

            If you do not configure proper DNS records, you cannot access the custom routes.
            
            :::

1.  Update the component routes by using the {{ rosa_cli }}:
    *   To set a custom domain for the web console, run the following command:
        ```terminal
        $ rosa edit ingress -c <cluster_name> <ingress_id> --component-routes 'console: hostname=<custom_hostname>;tlsSecretRef=<secret_name>'
        ```

        where:

        `<custom_hostname>`
        :   Specifies the custom hostname for the web console, for example, `my-custom-hostname.dev`.

        `<secret_name>`
        :   Specifies the name of the TLS secret you created earlier.
    *   To set a custom domain for the downloads page, run the following command:
        ```terminal
        $ rosa edit ingress -c <cluster_name> <ingress_id> --component-routes 'downloads: hostname=<custom_hostname>;tlsSecretRef=<secret_name>'
        ```

        where:

        `<custom_hostname>`
        :   Specifies the custom hostname for the downloads page, for example, `my-custom-hostname.dev`.

        `<secret_name>`
        :   Specifies the name of the TLS secret you created for the downloads page.

        :::note

        You can update both routes by running the following single command:
        ```terminal
        $ rosa edit ingress -c <cluster_name> <ingress_id> --component-routes 'console: hostname=<custom_hostname>;tlsSecretRef=<secret_name>, downloads: hostname=<custom_hostname>;tlsSecretRef=<secret_name>'
        ```
        
        :::


**Verification**

1.  Verify the ingress is updated by running the following command:
    ```terminal
    $ rosa list ingress -c <cluster_name>
    ```
    ```text title="Example output"
    ID    APPLICATION ROUTER                                                         PRIVATE  
    r218  https://openshift-console.apps.rosa.dy5e.p1.my-custom-hostname.dev         true
    ```
1.  Add your certificate to the truststore on your local system, then confirm that you can access your components at their new routes by using your local web browser.