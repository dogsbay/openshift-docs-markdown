{%- set _mod_docs_content_type = "PROCEDURE" %}
# Importing images and image streams from private registries {id="images-imagestream-import-images-private-registry_{{ context }}"}

To securely manage content from external sources, configure your image streams to import tag and image metadata from private registries requiring authentication. This procedure is essential if you change the registry that the Cluster Samples Operator uses for pulling content to something other than the default [registry.redhat.io](https://registry.redhat.io). {._abstract}


:::note

When importing from insecure or secure registries, the registry URL defined in the secret must include the `:80` port suffix or the secret is not used when attempting to import from the registry.

:::


**Procedure**

1.  You must create a `secret` object that is used to store your credentials by entering the following command:
    ```terminal
    $ oc create secret generic <secret_name> --from-file=.dockerconfigjson=<file_absolute_path> --type=kubernetes.io/dockerconfigjson
    ```
1.  After the secret is configured, create the new image stream or enter the `oc import-image` command:
    ```terminal
    $ oc import-image <imagestreamtag> --from=<image> --confirm
    ```

    During the import process, {{ product_title }} picks up the secrets and provides them to the remote party.