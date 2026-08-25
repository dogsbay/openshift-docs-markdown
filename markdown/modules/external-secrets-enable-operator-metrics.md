{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring metrics collection for {{ external_secrets_operator }} by using a ServiceMonitor {id="external-secrets-enable-operator-metrics_{{ context }}"}

The {{ external_secrets_operator }} exposes metrics by default on port `8443` at the `/metrics` service endpoint. You can configure metrics collection for the Operator by creating a `ServiceMonitor` custom resource (CR) that enables the Prometheus Operator to collect custom metrics. For more information, see "Configuring user workload monitoring". {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ external_secrets_operator }}.
*   You have enabled the user workload monitoring.

**Procedure**

1.  Configure the Operator to use `HTTP` for the metrics server. `HTTPS` is enabled by default.
    1.  Update the subscription object for {{ external_secrets_operator }} to configure the `HTTP` protocol by running the following command:
        ```terminal
        $ oc -n external-secrets-operator patch subscription openshift-external-secrets-operator --type='merge' -p '{"spec":{"config":{"env":[{"name":"METRICS_BIND_ADDRESS","value":":8080"}, {"name": "METRICS_SECURE", "value": "false"}]}}}'
        ```
    1.  To verify that the {{ external_secrets_operator_short }} pod is redeployed and that the configured values for `METRICS_BIND_ADDRESS` and `METRICS_SECURE` are updated, run the following command:
        ```terminal
        $ oc set env --list deployment/external-secrets-operator-controller-manager -n external-secrets-operator | grep -e METRICS_BIND_ADDRESS -e METRICS_SECURE -e container
        ```

        The following example shows that the `METRICS_BIND_ADDRESS` and `METRICS_SECURE` have been updated:
        ```terminal
        # deployments/external-secrets-operator-controller-manager, container manager
        METRICS_BIND_ADDRESS=:8080
        METRICS_SECURE=false
        ```
1.  Create the `Secret` resource with the `kubernetes.io/service-account.name` annotation to inject the token required for authenticating with the metrics server.
    1.  Create the `secret-external-secrets-operator.yaml` YAML file:
        ```yaml
        apiVersion: v1
        kind: Secret
        metadata:
          labels:
            app: external-secrets-operator
          name: external-secrets-operator-metrics-auth
          namespace: external-secrets-operator
          annotations:
            kubernetes.io/service-account.name: external-secrets-operator-controller-manager
        type: kubernetes.io/service-account-token
        ```
    1.  Create the `Secret` resource by running the following command:
        ```terminal
        $ oc apply -f secret-external-secrets-operator.yaml
        ```
1.  Create the `ClusterRoleBinding` resource required for granting permissions to access metrics:
    1.  Create the `clusterrolebinding-external-secrets.yaml` YAML file:

        The following example shows a `clusterrolebinding-external-secrets.yaml` file.
        ```yaml
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          labels:
            app: external-secrets-operator
          name: external-secrets-allow-metrics-access
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: external-secrets-operator-metrics-reader
        subjects:
          - kind: ServiceAccount
            name: external-secrets-operator-controller-manager
            namespace: external-secrets-operator
        ```
    1.  Create the `ClusterRoldeBinding` custom resource by running the following command:
        ```terminal
        $ oc apply -f clusterrolebinding-external-secrets.yaml
        ```
1.  Create the `ServiceMonitor` CR if using the default `HTTPS`:
    1.  Create the `servicemonitor-external-secrets-operator-https.yaml` YAML file:
        ```yaml
        apiVersion: monitoring.coreos.com/v1
        kind: ServiceMonitor
        metadata:
          labels:
            app: external-secrets-operator
          name: external-secrets-operator-metrics-monitor
          namespace: external-secrets-operator
        spec:
          endpoints:
            - authorization:
                credentials:
                  name: external-secrets-operator-metrics-auth
                  key: token
                type: Bearer
              interval: 60s
              path: /metrics
              port: metrics-https
              scheme: https
              scrapeTimeout: 30s
              tlsConfig:
                ca:
                  configMap:
                    name: openshift-service-ca.crt
                    key: service-ca.crt
                serverName: external-secrets-operator-controller-manager-metrics-service.external-secrets-operator.svc.cluster.local
          namespaceSelector:
            matchNames:
              - external-secrets-operator
          selector:
            matchLabels:
              app: external-secrets-operator
              svc: external-secrets-operator-controller-manager-metrics-service
        ```
    1.  Create the `ServiceMonitor` CR by running the following command:
        ```terminal
        $ oc apply -f servicemonitor-external-secrets-operator-https.yaml
        ```
1.  Create the `ServiceMonitor` CR if configured to use `HTTP`:
    1.  Create the `servicemonitor-external-secrets-operator-http.yaml` YAML file:
        ```yaml
        apiVersion: monitoring.coreos.com/v1
        kind: ServiceMonitor
        metadata:
          labels:
            app: external-secrets-operator
          name: external-secrets-operator-metrics-monitor
          namespace: external-secrets-operator
        spec:
          endpoints:
            - authorization:
                credentials:
                  name: external-secrets-operator-metrics-auth
                  key: token
                type: Bearer
              interval: 60s
              path: /metrics
              port: metrics-http
              scheme: http
              scrapeTimeout: 30s
          namespaceSelector:
            matchNames:
              - external-secrets-operator
          selector:
            matchLabels:
              app: external-secrets-operator
              svc: external-secrets-operator-controller-manager-metrics-service
        ```
    1.  Create the `ServiceMonitor` CR by running the following command:
        ```terminal
        $ oc apply -f servicemonitor-external-secrets-operator-http.yaml
        ```

        After the `ServiceMonitor` CR is created, the user workload Prometheus instance begins metrics collection from the Operator. The collected metrics are labeled with `job="external-secrets-operator-controller-manager-metrics-service"`.

**Verification**

1.  In the {{ product_title }} web console, navigate to **Observe** -> **Targets**.
1.  In the Label filter field, enter the following labels to filter the metrics targets for each operand:
    ```terminal
    $ service=external-secrets-operator-controller-manager-metrics-service
    ```
1.  Confirm that the **Status** column shows `Up` for the `external-secrets-operator`.