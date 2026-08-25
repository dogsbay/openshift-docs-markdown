{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a secret for the Image Registry Operator {id="registry-operator-config-resources-secret-aws_{{ context }}"}

In addition to the `configs.imageregistry.operator.openshift.io` and ConfigMap
resources, configuration is provided to the Operator by a separate secret
resource located within the `openshift-image-registry` namespace. {._abstract}

The `image-registry-private-configuration-user` secret provides
credentials needed for storage access and management. It overrides the default
credentials used by the Operator, if default credentials were found.

For S3 on AWS storage, the secret is expected to contain two keys:

*   `REGISTRY_STORAGE_S3_ACCESSKEY`
*   `REGISTRY_STORAGE_S3_SECRETKEY`

**Procedure**

*   Create an {{ product_title }} secret that contains the required keys.
    ```terminal
    $ oc create secret generic image-registry-private-configuration-user --from-literal=REGISTRY_STORAGE_S3_ACCESSKEY=myaccesskey --from-literal=REGISTRY_STORAGE_S3_SECRETKEY=mysecretkey --namespace openshift-image-registry
    ```

{%- set KEY1 = "" -%}