{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reset the component routes to the default using the {{ rosa_cli }} {id="cloud-experts-update-component-routes-reset-component-routes-to-default_{{ context }}"}

You can use the {{ rosa_cli_first }} tool to reset the component routes to the default configuration if you no longer need your custom domain. {._abstract}

**Procedure**

*   Reset your component routes by running the following command:
    ```terminal
    $ rosa edit ingress -c ${CLUSTER_NAME} ${INGRESS_ID} --component-routes 'console: hostname="";tlsSecretRef="",downloads: hostname="";tlsSecretRef="", oauth: hostname="";tlsSecretRef=""'
    ```