{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling stream-based retention with Loki {id="logging-loki-retention_{{ context }}"}

With Logging version 5.6 and higher, you can configure retention policies based on log streams. Rules for these may be set globally, per tenant, or both. If you configure both, tenant rules apply before global rules.

{% include "./snippets/logging-retention-period-snip.md" %}


:::note

Although logging version 5.9 and higher supports schema v12, v13 is recommended.

:::


1.  To enable stream-based retention, create a `LokiStack` CR:
    ```yaml title="Example global stream-based retention for AWS"
    apiVersion: loki.grafana.com/v1
    kind: LokiStack
    metadata:
      name: logging-loki
      namespace: openshift-logging
    spec:
      limits: 
       global: (1)
          retention: (2)
            days: 20
            streams:
            - days: 4
              priority: 1
              selector: '{kubernetes_namespace_name=~"test.+"}' (3)
            - days: 1
              priority: 1
              selector: '{log_type="infrastructure"}'
      managementState: Managed
      replicationFactor: 1
      size: 1x.small
      storage:
        schemas:
        - effectiveDate: "2020-10-11"
          version: v11
        secret:
          name: logging-loki-s3
          type: aws
      storageClassName: gp3-csi
      tenants:
        mode: openshift-logging
    ```
    1.  Sets retention policy for all log streams. **Note: This field does not impact the retention period for stored logs in object storage.**
    1.  Retention is enabled in the cluster when this block is added to the CR.
    1.  Contains the [LogQL query](https://grafana.com/docs/loki/latest/logql/query_examples/#query-examples) used to define the log stream.spec:
      limits:

```yaml title="Example per-tenant stream-based retention for AWS"
apiVersion: loki.grafana.com/v1
kind: LokiStack
metadata:
  name: logging-loki
  namespace: openshift-logging
spec:
  limits:
    global:
      retention:
        days: 20
    tenants: (1)
      application:
        retention:
          days: 1
          streams:
            - days: 4
              selector: '{kubernetes_namespace_name=~"test.+"}' (2)
      infrastructure:
        retention:
          days: 5
          streams:
            - days: 1
              selector: '{kubernetes_namespace_name=~"openshift-cluster.+"}'
  managementState: Managed
  replicationFactor: 1
  size: 1x.small
  storage:
    schemas:
    - effectiveDate: "2020-10-11"
      version: v11
    secret:
      name: logging-loki-s3
      type: aws
  storageClassName: gp3-csi
  tenants:
    mode: openshift-logging
```
1.  Sets retention policy by tenant. Valid tenant types are `application`, `audit`, and `infrastructure`.
1.  Contains the [LogQL query](https://grafana.com/docs/loki/latest/logql/query_examples/#query-examples) used to define the log stream.

2 Apply the `LokiStack` CR:

```terminal
$ oc apply -f <filename>.yaml
```


:::note

This is not for managing the retention for stored logs. Global retention periods for stored logs to a supported maximum of 30 days is configured with your object storage.

:::