{%- set _mod_docs_content_type = "PROCEDURE" %}
# Quick start with ViaQ {id="quick-start-viaq_{{ context }}"}

To use the default ViaQ data model, follow these steps:  

**Prerequisites**

*   You have access to an {{ product_title }} cluster with `cluster-admin` permissions.
*   You installed the {{ oc_first }}.
*   You have access to a supported object store. For example, AWS S3, {{ gcp_full }} Storage, {{ azure_short }}, Swift, Minio, or {{ rh_storage }}.

**Procedure**

1.  Install the `{{ clo }}`{minja}, `{{ loki_op }}`{minja}, and `{{ coo_first }}`{minja} from the software catalog.
1.  Create a `LokiStack` custom resource (CR) in the `openshift-logging` namespace:
    ```yaml
    apiVersion: loki.grafana.com/v1
    kind: LokiStack
    metadata:
      name: logging-loki
      namespace: openshift-logging
    spec:
      managementState: Managed
      size: 1x.extra-small
      storage:
        schemas:
        - effectiveDate: '2024-10-01'
          version: v13
        secret:
          name: logging-loki-s3
          type: s3
      storageClassName: gp3-csi
      tenants:
        mode: openshift-logging
    ```

    :::note

    Ensure that the `logging-loki-s3` secret is created beforehand. The contents of this secret vary depending on the object storage in use. For more information, see Secrets and TLS Configuration.
    
    :::

1.  Create a service account for the collector:
    ```terminal
    $ oc create sa collector -n openshift-logging
    ```
1.  Allow the collector’s service account to write data to the `LokiStack` CR:
    ```terminal
    $ oc adm policy add-cluster-role-to-user logging-collector-logs-writer -z collector -n openshift-logging
    ```

    :::note

    The `ClusterRole` resource is created automatically during the Cluster Logging Operator installation and does not need to be created manually.
    
    :::

1.  To collect logs, use the service account of the collector by running the following commands:
    ```terminal
    $ oc adm policy add-cluster-role-to-user collect-application-logs -z collector -n openshift-logging
    ```
    ```terminal
    $ oc adm policy add-cluster-role-to-user collect-audit-logs -z collector -n openshift-logging
    ```
    ```terminal
    $ oc adm policy add-cluster-role-to-user collect-infrastructure-logs -z collector -n openshift-logging
    ```

    :::note

    The example binds the collector to all three roles (application, infrastructure, and audit), but by default, only application and infrastructure logs are collected. To collect audit logs, update your `ClusterLogForwarder` configuration to include them. Assign roles based on the specific log types required for your environment.
    
    :::

1.  Create a `UIPlugin` CR to enable the **Log** section in the **Observe** tab:
    ```yaml
    apiVersion: observability.openshift.io/v1alpha1
    kind: UIPlugin
    metadata:
      name: logging
    spec:
      type: Logging
      logging:
        lokiStack:
          name: logging-loki
    ```
1.  Create a `ClusterLogForwarder` CR to configure log forwarding:
    ```yaml
    apiVersion: observability.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
      name: collector
      namespace: openshift-logging
    spec:
      serviceAccount:
        name: collector
      outputs:
      - name: default-lokistack
        type: lokiStack
        lokiStack:
          authentication:
            token:
              from: serviceAccount
          target:
            name: logging-loki
            namespace: openshift-logging
        tls:
          ca:
            key: service-ca.crt
            configMapName: openshift-service-ca.crt
      pipelines:
      - name: default-logstore
        inputRefs:
        - application
        - infrastructure
        outputRefs:
        - default-lokistack
    ```

    :::note

    The `dataModel` field is optional and left unset (`dataModel: ""`) by default. This allows the Cluster Logging Operator (CLO) to automatically select a data model. Currently, the CLO defaults to the ViaQ model when the field is unset, but this will change in future releases. Specifying `dataModel: ViaQ` ensures the configuration remains compatible if the default changes.
    
    :::


**Verification**

*   Verify that logs are visible in the **Log** section of the **Observe** tab in the {{ product_title }} web console.