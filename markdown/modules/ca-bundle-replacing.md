{%- set _mod_docs_content_type = "PROCEDURE" %}
# Replacing the CA Bundle certificate {id="ca-bundle-replacing_{{ context }}"}

To trust a custom certificate authority for egress connections in {{ product_title }}, you can replace the CA bundle by creating a config map with your root CA certificate and updating the cluster proxy configuration. {._abstract}

**Procedure**

1.  Create a config map that includes the root CA certificate used to sign the wildcard certificate:
    ```terminal
    $ oc create configmap custom-ca \
         --from-file=ca-bundle.crt=</path/to/example-ca.crt> \
         -n openshift-config
    ```

    `</path/to/example-ca.crt>` is the path to the CA certificate bundle on your local file system.
1.  Update the cluster-wide proxy configuration with the newly created config map:
    ```terminal
    $ oc patch proxy/cluster \
         --type=merge \
         --patch='{"spec":{"trustedCA":{"name":"custom-ca"}}}'
    ```