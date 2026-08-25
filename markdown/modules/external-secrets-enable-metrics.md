{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring metrics collection for {{ external_secrets_operator }} operands by using a ServiceMonitor {id="external-secrets-enable-metrics_{{ context }}"}

The {{ external_secrets_operator }} operands exposes metrics by default on port `8080` at the `/metrics` service endpoint for all three components (`external-secrets`, `external-secrets-cert-controll`, and `external-secrets-webhook`). You can configure metrics collection for the external-secrets operands by creating a `ServiceMonitor` custom resource (CR) that enables the Prometheus Operator to collect custom metrics. For more information, see "Configuring user workload monitoring". {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ external_secrets_operator }}.
*   You have enabled the user workload monitoring.

**Procedure**

1.  Create the `ClusterRoleBinding` resource required for granting permissions to access metrics:
    1.  Create the `clusterrolebinding-external-secrets.yaml` YAML file:

        The following example shows a `clusterrolebinding-external-secrets.yaml` file.
        ```yaml
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          labels:
            app: external-secrets
          name: external-secrets-allow-metrics-access
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: external-secrets-operator-metrics-reader
        subjects:
          - kind: ServiceAccount
            name: external-secrets
            namespace: external-secrets
          - kind: ServiceAccount
            name: external-secrets-cert-controller
            namespace: external-secrets
          - kind: ServiceAccount
            name: external-secrets-webhook
            namespace: external-secrets
        ```
    1.  Create the `ClusterRoldeBinding` custom resource by running the following command:
        ```terminal
        $ oc apply -f clusterrolebinding-external-secrets.yaml
        ```
1.  Create the `ServiceMonitor` CR:
    1.  Create the `servicemonitor-external-secrets.yaml` YAML file:
        ```yaml
        apiVersion: monitoring.coreos.com/v1
        kind: ServiceMonitor
        metadata:
          labels:
            app: external-secrets
          name: external-secrets-metrics-monitor
          namespace: external-secrets
        spec:
          endpoints:
            - interval: 60s
              path: /metrics
              port: metrics
              scheme: http
              scrapeTimeout: 30s
          namespaceSelector:
            matchNames:
              - external-secrets
          selector:
            matchExpressions:
              - key: app.kubernetes.io/name
                operator: In
                values:
                  - external-secrets
                  - external-secrets-cert-controller
                  - external-secrets-webhook
              - key: app.kubernetes.io/instance
                operator: In
                values:
                  - external-secrets
              - key: app.kubernetes.io/managed-by
                operator: In
                values:
                  - external-secrets-operator
        ```
    1.  Create the `ServiceMonitor` CR by running the following command:
        ```terminal
        $ oc apply -f servicemonitor-external-secrets.yaml
        ```

        After the `ServiceMonitor` CR is created, the user workload Prometheus instance begins metrics collection from the {{ external_secrets_operator }} operands. The collected metrics are labeled with `job="external-secrets"`,`job="external-secrets-cainjector"`, and `job="external-secrets-webhook"`.

**Verification**

1.  In the {{ product_title }} web console, navigate to **Observe** -> **Targets**.
1.  In the Label filter field, enter the following labels to filter the metrics targets for each operand:
    ```terminal
    $ service=external-secrets
    ```
    ```terminal
    $ service=external-secrets-cert-controller-metrics
    ```
    ```terminal
    $ service=external-secrets-webhook
    ```
1.  Confirm that the **Status** column shows `Up` for the `external-secrets`, `external-secrets-cert-controller` and `external-secrets-webhook`.