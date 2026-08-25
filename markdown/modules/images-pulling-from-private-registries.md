{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pulling from private registries with delegated authentication {id="images-pulling-from-private-registries_{{ context }}"}

To pull images from private registries that delegate authentication to a separate service in {{ product_title }}, you can create pull secrets for both the authentication server and the registry endpoint. Use the `oc create secret docker-registry` command to create separate secrets for each service. {._abstract}

**Procedure**

1.  Create a secret for the delegated authentication server by entering the following command:
    ```terminal
    $ oc create secret docker-registry \
        --docker-server=sso.redhat.com \
        --docker-username=developer@example.com \
        --docker-password=******** \
        --docker-email=unused \
        redhat-connect-sso
    ```
1.  Create a secret for the private registry by entering the following command:
    ```terminal
    $ oc create secret docker-registry \
        --docker-server=privateregistry.example.com \
        --docker-username=developer@example.com \
        --docker-password=******** \
        --docker-email=unused \
        private-registry
    ```