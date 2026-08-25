{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a LokiStack custom resource by using the web console {id="create-lokistack-cr-console_{{ context }}"}

You can create a `LokiStack` custom resource (CR) by using the {{ product_title }} web console.

**Prerequisites**

*   You have administrator permissions.
*   You have access to the {{ product_title }} web console.
*   You installed the {{ loki_op }}.

**Procedure**

1.  Go to the **Ecosystem** → **Installed Operators** page. Click the **All instances** tab.
1.  From the **Create new** drop-down list, select **LokiStack**.
1.  Select **YAML view**, and then use the following template to create a `LokiStack` CR:
    ```yaml
    apiVersion: loki.grafana.com/v1
    kind: LokiStack
    metadata:
      name: logging-loki (1)
      namespace: openshift-logging
    spec:
      size: 1x.small (2)
      storage:
        schemas:
        - version: v12
          effectiveDate: '2022-06-01'
        secret:
          name: logging-loki-s3 (3)
          type: s3 (4)
      storageClassName: <storage_class_name> (5)
      tenants:
        mode: openshift-logging (6)
    ```
    1.  Use the name `logging-loki`.
    1.  Specify the deployment size. In the {{ logging }} 5.8 and later versions, the supported size options for production instances of Loki are `1x.extra-small`, `1x.small`, or `1x.medium`.

        :::important

        It is not possible to change the number `1x` for the deployment size.
        
        :::

    1.  Specify the secret used for your log storage.
    1.  Specify the corresponding storage type.
    1.  Enter the name of a storage class for temporary storage. For best performance, specify a storage class that allocates block storage. Available storage classes for your cluster can be listed by using the `oc get storageclasses` command.
    1.  LokiStack defaults to running in multi-tenant mode, which cannot be modified. One tenant is provided for each log type: audit, infrastructure, and application logs. This enables access control for individual users and user groups to different log streams.
1.  Click **Create**.