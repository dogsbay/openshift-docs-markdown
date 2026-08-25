{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a secret for the Image Registry Operator {id="registry-operator-config-resources-secret-openstack_{{ context }}"}

In addition to the `configs.imageregistry.operator.openshift.io` and ConfigMap
resources, configuration is provided to the Operator by a separate secret
resource located within the `openshift-image-registry` namespace. {._abstract}

The `image-registry-private-configuration-user` secret provides
credentials needed for storage access and management. It overrides the default
credentials used by the Operator, if default credentials were found.

For Swift on {{ rh_openstack_first }} storage, the secret is expected to contain the following two keys:

*   `REGISTRY_STORAGE_SWIFT_USERNAME`
*   `REGISTRY_STORAGE_SWIFT_PASSWORD`

**Procedure**

*   Create an {{ product_title }} secret that contains the required keys.
    ```terminal
    $ oc create secret generic image-registry-private-configuration-user --from-literal=REGISTRY_STORAGE_SWIFT_USERNAME=<username> --from-literal=REGISTRY_STORAGE_SWIFT_PASSWORD=<password> -n openshift-image-registry
    ```