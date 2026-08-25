{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying a sample application {id="cloud-experts-dynamic-certificate-custom-domain-config-deploy-sample-app_{{ context }}"}

Now, that dynamic certificates are configured, you can deploy a sample application to confirm that certificates are provisioned and trusted when you expose a new route. {._abstract}

**Procedure**

1.  Create a new project for your sample application:
    ```terminal
    $ oc new-project hello-world
    ```
1.  Deploy a hello world application:
    ```terminal
    $ oc -n hello-world new-app --image=docker.io/openshift/hello-openshift
    ```
1.  Create a route to expose the application from outside the cluster:
    ```terminal
    $ oc -n hello-world create route edge --service=hello-openshift hello-openshift-tls --hostname hello.${DOMAIN}
    ```
1.  Verify the certificate for the route is untrusted:
    ```terminal
    $ curl -I https://hello.${DOMAIN}
    ```
    ```text title="Example output"
    curl: (60) SSL: no alternative certificate subject name matches target host name 'hello.example.com'
    More details here: https://curl.se/docs/sslcerts.html

    curl failed to verify the legitimacy of the server and therefore could not
    establish a secure connection to it. To learn more about this situation and
    how to fix it, please visit the web page mentioned above.
    ```
1.  Annotate the route to trigger cert-manager to provision a certificate for the custom domain:
    ```terminal
    $ oc -n hello-world annotate route hello-openshift-tls cert-manager.io/issuer-kind=ClusterIssuer cert-manager.io/issuer-name=letsencrypt-production
    ```

    :::note

    It takes 2-3 minutes for the certificate to be created. The renewal of the certificate will automatically be managed by the cert-manager Operator as it approaches expiration.
    
    :::

1.  Verify the certificate for the route is now trusted:
    ```terminal
    $ curl -I https://hello.${DOMAIN}
    ```
    ```terminal title="Example output"
    HTTP/2 200
    date: Thu, 05 Oct 2023 23:45:33 GMT
    content-length: 17
    content-type: text/plain; charset=utf-8
    set-cookie: 52e4465485b6fb4f8a1b1bed128d0f3b=68676068bb32d24f0f558f094ed8e4d7; path=/; HttpOnly; Secure; SameSite=None
    cache-control: private
    ```