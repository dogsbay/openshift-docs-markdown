{%- set _mod_docs_content_type = "PROCEDURE" %}
# Trusting the certificate authority of the cluster-wide proxy {id="nw-configuring-cluster-wide-proxy_{{ context }}"}

You can configure the External DNS Operator to trust the certificate authority of the cluster-wide proxy. {._abstract}

**Procedure**

1.  Create the config map to contain the CA bundle in the `external-dns-operator` namespace by running the following command:
    ```terminal
    $ oc -n external-dns-operator create configmap trusted-ca
    ```
1.  To inject the trusted CA bundle into the config map, add the `config.openshift.io/inject-trusted-cabundle=true` label to the config map by running the following command:
    ```terminal
    $ oc -n external-dns-operator label cm trusted-ca config.openshift.io/inject-trusted-cabundle=true
    ```
1.  Update the subscription of the External DNS Operator by running the following command:
    ```terminal
    $ oc -n external-dns-operator patch subscription external-dns-operator --type='json' -p='[{"op": "add", "path": "/spec/config", "value":{"env":[{"name":"TRUSTED_CA_CONFIGMAP_NAME","value":"trusted-ca"}]}}]'
    ```

**Verification**

*   After deploying the External DNS Operator, verify that the trusted CA environment variable is added by running the following command. The output must show `trusted-ca` for the `external-dns-operator` deployment.
    ```terminal
    $ oc -n external-dns-operator exec deploy/external-dns-operator -c external-dns-operator -- printenv TRUSTED_CA_CONFIGMAP_NAME
    ```