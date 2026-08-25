{%- set _mod_docs_content_type = "PROCEDURE" %}
# Registry storage for {{ rh_openstack }} with user-provisioned infrastructure {id="registry-configuring-storage-openstack-user-infra_{{ context }}"}

If the Registry Operator cannot create a Swift bucket, you must set up the storage medium manually and configure the settings in the registry custom resource (CR). {._abstract}

**Prerequisites**

*   A cluster on {{ rh_openstack_first }} with user-provisioned infrastructure.
*   To configure registry storage for {{ rh_openstack }}, you need to provide Registry Operator
cloud credentials.
*   For Swift on {{ rh_openstack }} storage, the secret is expected to contain the following two keys:
    *   `REGISTRY_STORAGE_SWIFT_USERNAME`
    *   `REGISTRY_STORAGE_SWIFT_PASSWORD`

**Procedure**

*   Fill in the storage configuration in `configs.imageregistry.operator.openshift.io/cluster`:
    ```terminal
    $ oc edit configs.imageregistry.operator.openshift.io/cluster
    ```
    ```yaml title="Example configuration"
    apiVersion: imageregistry.operator.openshift.io/v1
    kind: Config
    metadata:
      name: cluster
    spec:
      storage:
        swift:
          container: <container_id>
    ```