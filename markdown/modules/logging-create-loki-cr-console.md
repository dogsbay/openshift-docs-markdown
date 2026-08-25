{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a LokiStack custom resource by using the web console {id="logging-create-loki-cr-console_{{ context }}"}

You can create a `LokiStack` custom resource (CR) by using the {{ product_title }} web console.

**Prerequisites**

*   You have administrator permissions.
*   You have access to the {{ product_title }} web console.
*   You installed the {{ loki_op }}.

**Procedure**

1.  Go to the **Ecosystem** -> **Installed Operators** page. Click the **All instances** tab.
1.  From the **Create new** drop-down list, select **LokiStack**.
1.  Select **YAML view**, and then use the following template to create a `LokiStack` CR:
    ```yaml
    apiVersion: loki.grafana.com/v1
    kind: LokiStack
    metadata:
      name: logging-loki # (1)
      namespace: openshift-logging
    spec:
      size: 1x.small # (2)
      storage:
        schemas:
        - version: v12
          effectiveDate: '2022-06-01'
        secret:
          name: logging-loki-s3 # (3)
          type: s3 # (4)
          credentialMode: static #
      storageClassName: <storage_class_name> # (5)
      tenants:
        mode: openshift-logging
    ```
    1.  Use the name `logging-loki`.
    1.  Specify the deployment size. In the {{ logging }} 5.8 and later versions, the supported size options for production instances of Loki are `1x.extra-small`, `1x.small`, or `1x.medium`.
    1.  Specify the secret used for your log storage.
    1.  Specify the corresponding storage type.
    1.  Enter the name of a storage class for temporary storage. For best performance, specify a storage class that allocates block storage. Available storage classes for your cluster can be listed by using the `oc get storageclasses` command.


```yaml
apiVersion: loki.grafana.com/v1
kind: LokiStack
metadata:
  name: logging-loki # (1)
  namespace: openshift-logging
spec:
  size: 1x.small # (2)
  storage:
    schemas:
      - effectiveDate: '2023-10-15'
        version: v13
    secret:
      name: logging-loki-s3 # (3)
      type: s3 # (4)
      credentialMode: # (5)
  storageClassName: <storage_class_name> # (6)
  tenants:
    mode: openshift-logging
```
1.  Use the name `logging-loki`.
1.  Specify the deployment size. In the {{ logging }} 5.8 and later versions, the supported size options for production instances of Loki are `1x.extra-small`, `1x.small`, or `1x.medium`.
1.  Specify the secret used for your log storage.
1.  Specify the corresponding storage type.
1.  Optional field, {{ logging }} 5.9 and later. Supported user configured values are as follows: `static` is the default authentication mode available for all supported object storage types using credentials stored in a Secret. `token` for short-lived tokens retrieved from a credential source. In this mode the static configuration does not contain credentials needed for the object storage. Instead, they are generated during runtime using a service, which allows for shorter-lived credentials and much more granular control. This authentication mode is not supported for all object storage types. `token-cco` is the default value when Loki is running on managed STS mode and using CCO on STS/WIF clusters.
1.  Enter the name of a storage class for temporary storage. For best performance, specify a storage class that allocates block storage. Available storage classes for your cluster can be listed by using the `oc get storageclasses` command.