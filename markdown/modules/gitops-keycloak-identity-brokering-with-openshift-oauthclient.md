{%- set _mod_docs_content_type = "PROCEDURE" %}
# Keycloak Identity Brokering with {{ product_title }} {id="keycloak-identity-brokering-with-openshift-oauthclient_{{ context }}"}

You can configure a Keycloak instance to use {{ product_title }} for authentication through Identity Brokering. This allows for Single Sign-On (SSO) between the {{ product_title }} cluster and the Keycloak instance.

**Prerequisites**

*   `jq` CLI tool is installed.

**Procedure**

1.  Obtain the {{ product_title }} API URL:
    ```terminal
    $ curl -s -k -H "Authorization: Bearer $(oc whoami -t)" https://<openshift-user-facing-api-url>/apis/config.openshift.io/v1/infrastructures/cluster | jq ".status.apiServerURL".
    ```

    :::note

    The address of the {{ product_title }} API is often protected by HTTPS. Therefore, you must configure X509_CA_BUNDLE in the container and set it to `/var/run/secrets/kubernetes.io/serviceaccount/ca.crt`. Otherwise, Keycloak cannot communicate with the API Server.
    
    :::

1.  In the Keycloak server dashboard, navigate to **Identity Providers** and select **Openshift v4**. Specify the following values:

**Base Url**
:   {{ product_title }} 4 API URL

**Client ID**
:   `keycloak-broker`

**Client Secret**
:   A secret that you want define
    Now you can log in to Argo CD with your {{ product_title }} credentials through Keycloak as an Identity Broker.