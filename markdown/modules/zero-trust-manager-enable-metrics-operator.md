{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring metrics collection for the Operator by using a ServiceMonitor {id="zero-trust-manager-enable-metrics-operator_{{ context }}"}

The {{ zero_trust_full }} exposes metrics by default on port 8443 at the `/metrics` service endpoint. You can configure metrics collection for the Operator by creating a `ServiceMonitor` custom resource (CR) that enables the Prometheus Operator to collect custom metrics. For more information, see "Configuring user workload monitoring". {._abstract}

The SPIRE Server operand exposes metrics by default on port `9402` at the `/metrics` endpoint. You can configure metrics collection for the SPIRE Server by creating a `ServiceMonitor` custom resource (CR) that enables the Prometheus Operator to collect custom metrics.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have installed the {{ zero_trust_full }}.
*   You have enabled the user workload monitoring.

**Procedure**

1.  Configure the Operator to use HTTP or HTTPS protocols for the metrics server.
    1.  Update the subscription object for {{ zero_trust_full }} to configure the HTTP protocol by running the following command:
        ```terminal
        $ oc -n zero-trust-workload-identity-manager patch subscription zero-trust-workload-identity-manager-subscription --type='merge' -p '{"spec":{"config":{"env":[{"name":"METRICS_BIND_ADDRESS","value":":8080"}, {"name": "METRICS_SECURE", "value": "false"}]}}}'
        ```
    1.  Verify the {{ zero_trust_full }} pod is redeployed and that the configured values for `METRICS_BIND_ADDRESS` and `METRICS_SECURE` is updated by running the following command:
        ```terminal
        $ oc set env --list deployment/zero-trust-workload-identity-manager-controller-manager -n zero-trust-workload-identity-manager | grep -e METRICS_BIND_ADDRESS -e METRICS_SECURE -e container
        ```
        ```text title="Example output"
        deployments/zero-trust-workload-identity-manager-controller-manager, container manager
        METRICS_BIND_ADDRESS=:8080
        METRICS_SECURE=false
        ```
1.  Create the `Secret` resource with `kubernetes.io/service-account.name` annotation to inject the token required for authenticating with the metrics server.
    1.  Create the `secret-zero-trust-workload-identity-manager.yaml` YAML file:
        ```yaml
        apiVersion: v1
        kind: Secret
        metadata:
         labels:
           name: zero-trust-workload-identity-manager
         name: zero-trust-workload-identity-manager-metrics-auth
         namespace: zero-trust-workload-identity-manager
         annotations:
           kubernetes.io/service-account.name: zero-trust-workload-identity-manager-controller-manager
        type: kubernetes.io/service-account-token
        ```
    1.  Create the `Secret` resource by running the following command:
        ```terminal
        $ oc apply -f secret-zero-trust-workload-identity-manager.yaml
        ```
1.  Create the `ClusterRoleBinding` resource required for granting permissions to access the metrics.
    1.  Create the `clusterrolebinding-zero-trust-workload-identity-manager.yaml` YAML file:
        ```yaml
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
         labels:
           name: zero-trust-workload-identity-manager
         name: zero-trust-workload-identity-manager-allow-metrics-access
        roleRef:
         apiGroup: rbac.authorization.k8s.io
         kind: ClusterRole
         name: zero-trust-workload-identity-manager-metrics-reader
        subjects:
        - kind: ServiceAccount
          name: zero-trust-workload-identity-manager-controller-manager
          namespace: zero-trust-workload-identity-manager
        ```
    1.  Create the `ClusterRoleBinding` resource by running the following command:
        ```terminal
        $ oc apply -f clusterrolebinding-zero-trust-workload-identity-manager.yaml
        ```
1.  Create the following `ServiceMonitor` CR if the metrics server is configured to use `http`.
    1.  Create the `servicemonitor-zero-trust-workload-identity-manager-http.yaml` YAML file:
        ```yaml
        apiVersion: monitoring.coreos.com/v1
        kind: ServiceMonitor
        metadata:
          labels:
            name: zero-trust-workload-identity-manager
          name: zero-trust-workload-identity-manager-metrics-monitor
          namespace: zero-trust-workload-identity-manager
        spec:
          endpoints:
            - authorization:
                credentials:
                  name: zero-trust-workload-identity-manager-metrics-auth
                  key: token
                type: Bearer
              interval: 60s
              path: /metrics
              port: metrics-http
              scheme: http
              scrapeTimeout: 30s
          namespaceSelector:
            matchNames:
              - zero-trust-workload-identity-manager
          selector:
            matchLabels:
              name: zero-trust-workload-identity-manager
        ```
    1.  Create the `ServiceMonitor` CR by running the following command:
        ```terminal
        $ oc apply -f servicemonitor-zero-trust-workload-identity-manager-http.yaml
        ```
1.  Create the following `ServiceMonitor` CR if the metrics server is configured to use `https`.
    1.  Create the `servicemonitor-zero-trust-workload-identity-manager-https.yaml` YAML file:
        ```yaml
        apiVersion: monitoring.coreos.com/v1
        kind: ServiceMonitor
        metadata:
          labels:
            name: zero-trust-workload-identity-manager
          name: zero-trust-workload-identity-manager-metrics-monitor
          namespace: zero-trust-workload-identity-manager
        spec:
          endpoints:
            - authorization:
                credentials:
                  name: zero-trust-workload-identity-manager-metrics-auth
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
                serverName: zero-trust-workload-identity-manager-metrics-service.zero-trust-workload-identity-manager.svc.cluster.local
          namespaceSelector:
            matchNames:
              - zero-trust-workload-identity-manager
          selector:
            matchLabels:
              name: zero-trust-workload-identity-manager
        ```
    1.  Create the `ServiceMonitor` CR by running the following command:
        ```terminal
        $ oc apply -f servicemonitor-zero-trust-workload-identity-manager-https.yaml
        ```

        After the `ServiceMonitor` CR is created, the user workload Prometheus instance begins metrics collection from the SPIRE Server. The collected metrics are labeled with `job="zero-trust-workload-identity-manager-metrics-service"`.

**Verification**

1.  In the {{ product_title }} web console, navigate to **Observe** → **Targets**.
1.  In the **Label** filter field, enter the following label to filter the metrics targets:
    ```terminal
    $ service=zero-trust-workload-identity-manager-metrics-service
    ```
1.  Confirm that the **Status** column shows `Up` for the `zero-trust-workload-identity-manager` entry.