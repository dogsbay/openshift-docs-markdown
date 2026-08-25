{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reset the component routes to the default using the {{ rosa_cli }} {id="cloud-experts-update-component-routes-reset-component-routes-to-default_{{ context }}"}

You can use the {{ oc_first }} tool to reset the component routes to the default configuration. {._abstract}

**Procedure**

*   Run the following command to reset your component routes:
    ```bash
    $ rosa edit ingress -c ${CLUSTER_NAME} ${INGRESS_ID} --component-routes 'console: hostname="";tlsSecretRef="",downloads: hostname="";tlsSecretRef="", oauth: hostname="";tlsSecretRef=""'
    ```