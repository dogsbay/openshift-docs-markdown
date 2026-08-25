{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a LokiStack custom resource {id="network-observability-lokistack-create_{{ context }}"}

Deploy the `LokiStack` custom resource using the web console or {{ oc_first }}, ensuring you configure the correct namespace, deployment size, and secret name for Loki object storage. {._abstract}

You can deploy a `LokiStack` custom resource (CR) to create a namespace or new project.

**Procedure**

1.  Navigate to **Ecosystem** -> **Installed Operators**, viewing **All projects** from the **Project** dropdown.
1.  Look for **{{ loki_op }}**. In the details, under **Provided APIs**, select **LokiStack**.
1.  Click **Create LokiStack**.
1.  Ensure the following fields are specified in either **Form View** or **YAML view**:
    ```yaml
    apiVersion: loki.grafana.com/v1
    kind: LokiStack
    metadata:
      name: loki
      namespace: netobserv-loki
    spec:
      size: 1x.small
      storage:
        schemas:
        - version: v13
          effectiveDate: '2022-06-01'
        secret:
          name: loki-s3
          type: s3
      storageClassName: gp3
      tenants:
        mode: openshift-network
    ```

    where:

    `metadata.namespace`
    :   Specifies the namespace for the `LokiStack` resource. While this example uses `netobserv-loki`, you can use a different namespace for different components.

    `spec.size`
    :   Specifies the deployment size. In {{ loki_op }} 5.8 and later versions, the supported size options for production instances of Loki are `1x.extra-small`, `1x.small`, or `1x.medium`.

    :::important

    It is not possible to change the number `1x` for the deployment size.
    
    :::


    `spec.storageClassName`
    :   Specifies a storage class name that is available on the cluster for `ReadWriteOnce` access mode. For best performance, specify a storage class that allocates block storage. Use the `oc get storageclasses` command to see available storage classes on your cluster.

    :::important

    You must not reuse the same `LokiStack` custom resource that is used for {{ logging }}.
    
    :::


1.  Click **Create**.