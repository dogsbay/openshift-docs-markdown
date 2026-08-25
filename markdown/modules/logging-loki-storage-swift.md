{%- set _mod_docs_content_type = "PROCEDURE" %}
# Swift storage {id="logging-loki-storage-swift_{{ context }}"}

**Prerequisites**

*   You installed the {{ loki_op }}.
*   You installed the {{ oc_first }}.
*   You created a [bucket](https://docs.openstack.org/newton/user-guide/cli-swift-create-containers.html) on Swift.

**Procedure**

*   Create an object storage secret with the name `logging-loki-swift` by running the following command:
    ```terminal
    $ oc create secret generic logging-loki-swift \
      --from-literal=auth_url="<swift_auth_url>" \
      --from-literal=username="<swift_usernameclaim>" \
      --from-literal=user_domain_name="<swift_user_domain_name>" \
      --from-literal=user_domain_id="<swift_user_domain_id>" \
      --from-literal=user_id="<swift_user_id>" \
      --from-literal=password="<swift_password>" \
      --from-literal=domain_id="<swift_domain_id>" \
      --from-literal=domain_name="<swift_domain_name>" \
      --from-literal=container_name="<swift_container_name>"
    ```
*   You can optionally provide project-specific data, region, or both by running the following command:
    ```terminal
    $ oc create secret generic logging-loki-swift \
      --from-literal=auth_url="<swift_auth_url>" \
      --from-literal=username="<swift_usernameclaim>" \
      --from-literal=user_domain_name="<swift_user_domain_name>" \
      --from-literal=user_domain_id="<swift_user_domain_id>" \
      --from-literal=user_id="<swift_user_id>" \
      --from-literal=password="<swift_password>" \
      --from-literal=domain_id="<swift_domain_id>" \
      --from-literal=domain_name="<swift_domain_name>" \
      --from-literal=container_name="<swift_container_name>" \
      --from-literal=project_id="<swift_project_id>" \
      --from-literal=project_name="<swift_project_name>" \
      --from-literal=project_domain_id="<swift_project_domain_id>" \
      --from-literal=project_domain_name="<swift_project_domain_name>" \
      --from-literal=region="<swift_region>"
    ```