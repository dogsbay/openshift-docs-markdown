{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring cluster monitoring {id="configuring-cluster-monitoring_{{ context }}"}

You can increase the storage capacity for the Prometheus component in the cluster monitoring stack. {._abstract}

**Procedure**

1.  To increase the storage capacity for Prometheus, create a YAML configuration file, `cluster-monitoring-config.yaml`, as in the following example:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    data:
      config.yaml: |
        prometheusK8s:
          retention: <prometheus_retention_period>
          nodeSelector:
            node-role.kubernetes.io/infra: ""
          volumeClaimTemplate:
            spec:
              storageClassName: <storage_class>
              resources:
                requests:
                  storage: <prometheus_storage_size>
        alertmanagerMain:
          nodeSelector:
            node-role.kubernetes.io/infra: ""
          volumeClaimTemplate:
            spec:
              storageClassName: <storage_class>
              resources:
                requests:
                  storage: <alertmanager_storage_size>
    metadata:
      name: cluster-monitoring-config
      namespace: openshift-monitoring
    ```
    *   `<prometheus_retention_period>` specifies the Prometheus retention period. The default value is `15d`. Units are measured in time using one of these suffixes: s, m, h, d.
    *   `<storage_class>` specifies the storage class for your cluster.
    *   `<prometheus_storage_size>` specifies the Prometheus storage size. A typical value is `2000Gi`. Storage values can be a plain integer or a fixed-point integer using one of these suffixes: E, P, T, G, M, K. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki.
    *   `<alertmanager_storage_size>` specifies the Alertmanager storage size. A typical value is `20Gi`. Storage values can be a plain integer or a fixed-point integer using one of these suffixes: E, P, T, G, M, K. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki.
1.  Add values for the retention period, storage class, and storage sizes.
1.  Save the file.
1.  Apply the changes by running:
    ```terminal
    $ oc create -f cluster-monitoring-config.yaml
    ```