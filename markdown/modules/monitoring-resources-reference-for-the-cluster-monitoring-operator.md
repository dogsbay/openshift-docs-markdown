{%- set _mod_docs_content_type = "REFERENCE" %}
# Resources reference for the Cluster Monitoring Operator {id="resources-reference-for-the-cluster-monitoring-operator_{{ context }}"}

This document describes the following resources deployed and managed by the Cluster Monitoring Operator (CMO):

*   [Routes](#cmo-routes-resources_{{ context }})
*   [Services](#cmo-services-resources_{{ context }})

Use this information when you want to configure API endpoint connections to retrieve, send, or query metrics data.


:::important

In certain situations, accessing endpoints can degrade the performance and scalability of your cluster, especially if you use endpoints to retrieve, send, or query large amounts of metrics data.

To avoid these issues, follow these recommendations:

*   Avoid querying endpoints frequently. Limit queries to a maximum of one every 30 seconds.
*   Do not try to retrieve all metrics data via the `/federate` endpoint. Query it only when you want to retrieve a limited, aggregated data set. For example, retrieving fewer than 1,000 samples for each request helps minimize the risk of performance degradation.

:::

## CMO routes resources {id="cmo-routes-resources_{{ context }}"}

### openshift-monitoring/alertmanager-main {id="_openshift-monitoringalertmanager-main"}

Expose the `/api` endpoints of the `alertmanager-main` service via a router.

### openshift-monitoring/prometheus-k8s {id="_openshift-monitoringprometheus-k8s"}

Expose the `/api` endpoints of the `prometheus-k8s` service via a router.

### openshift-monitoring/prometheus-k8s-federate {id="_openshift-monitoringprometheus-k8s-federate"}

Expose the `/federate` endpoint of the `prometheus-k8s` service via a router.

### openshift-user-workload-monitoring/federate {id="_openshift-user-workload-monitoringfederate"}

Expose the `/federate` endpoint of the `prometheus-user-workload` service via a router.

### openshift-monitoring/thanos-querier {id="_openshift-monitoringthanos-querier"}

Expose the `/api` endpoints of the `thanos-querier` service via a router.

### openshift-user-workload-monitoring/thanos-ruler {id="_openshift-user-workload-monitoringthanos-ruler"}

Expose the `/api` endpoints of the `thanos-ruler` service via a router.

## CMO services resources {id="cmo-services-resources_{{ context }}"}

### openshift-monitoring/prometheus-operator-admission-webhook {id="_openshift-monitoringprometheus-operator-admission-webhook"}

Expose the admission webhook service which validates `PrometheusRules` and `AlertmanagerConfig` custom resources on port 8443.

### openshift-user-workload-monitoring/alertmanager-user-workload {id="_openshift-user-workload-monitoringalertmanager-user-workload"}

Expose the user-defined Alertmanager web server within the cluster on the following ports:

*   Port 9095 provides access to the Alertmanager endpoints. Granting access requires binding a user to the `monitoring-alertmanager-api-reader` role (for read-only operations) or the `monitoring-alertmanager-api-writer` role in the `openshift-user-workload-monitoring` project.
*   Port 9092 provides access to the Alertmanager endpoints restricted to a given project. Granting access requires binding a user to the `monitoring-rules-edit` cluster role or `monitoring-edit` cluster role in the project.
*   Port 9097 provides access to the `/metrics` endpoint only. This port is for internal use, and no other usage is guaranteed.

### openshift-monitoring/alertmanager-main {id="_openshift-monitoringalertmanager-main"}

Expose the Alertmanager web server within the cluster on the following ports:

*   Port 9094 provides access to all the Alertmanager endpoints. Granting access requires binding a user to the `monitoring-alertmanager-view` role (for read-only operations) or the `monitoring-alertmanager-edit` role in the `openshift-monitoring` project.

Example monitoring-alertmanager-view permissions
:   The following example exercises permissions granted by the `monitoring-alertmanager-view` role. The binding commands must be run by a user with the necessary privileges.

1.  Create a test namespace and a service account.
    ```terminal
    $ oc create namespace test-alertmanager-web-monitoring-alertmanager-view
    ```
    ```terminal
    $ oc create serviceaccount am-client --namespace=test-alertmanager-web-monitoring-alertmanager-view
    ```
1.  Bind the role to the service account. The binding in this example is applied to a service account but can also be applied to any user.
    ```terminal
    $ oc create rolebinding test-alertmanager-web-monitoring-alertmanager-view \
      --namespace=openshift-monitoring \
      --role=monitoring-alertmanager-view \
      --serviceaccount=test-alertmanager-web-monitoring-alertmanager-view:am-client
    ```
1.  Generate a token to access the endpoints.
    ```terminal
    $ TOKEN=$(oc create token am-client --namespace=test-alertmanager-web-monitoring-alertmanager-view)
    ```
1.  Access Alertmanager endpoints externally.
    ```terminal
    $ ROUTE=$(oc get route alertmanager-main --namespace=openshift-monitoring -ojsonpath={.spec.host})
    ```
    ```terminal
    $ curl -k -H "Authorization: Bearer $TOKEN" "https://$ROUTE/api/v2/alerts?filter=alertname=Watchdog"
    ```
1.  Access Alertmanager endpoints from within the cluster.
    ```terminal
    $ curl -k -H "Authorization: Bearer $TOKEN" "https://alertmanager-main.openshift-monitoring:9094/api/v2/alerts?filter=alertname=Watchdog"
    ```

    Example monitoring-alertmanager-edit permissions
    :   The following example exercises permissions granted by the `monitoring-alertmanager-edit` role. The binding commands must be run by a user with the necessary privileges.

1.  Create a test namespace and a service account.
    ```terminal
    $ oc create namespace test-alertmanager-web-monitoring-alertmanager-edit
    ```
    ```terminal
    $ oc create serviceaccount am-client --namespace=test-alertmanager-web-monitoring-alertmanager-edit
    ```
1.  Bind the role to the service account. The binding in this example is applied to a service account but can also be applied to any user.
    ```terminal
    $ oc create rolebinding test-alertmanager-web-monitoring-alertmanager-edit \
      --namespace=openshift-monitoring \
      --role=monitoring-alertmanager-edit \
      --serviceaccount=test-alertmanager-web-monitoring-alertmanager-edit:am-client
    ```
1.  Generate a token to access the endpoints.
    ```terminal
    $ TOKEN=$(oc create token am-client --namespace=test-alertmanager-web-monitoring-alertmanager-edit)
    ```
1.  Access Alertmanager endpoints externally.
    ```terminal
    $ ROUTE=$(oc get route alertmanager-main --namespace=openshift-monitoring -ojsonpath={.spec.host})
    ```
    ```terminal
    $ curl -k -X POST  "https://$ROUTE/api/v2/silences" \
      -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
      -d '{
        "matchers": [
          {
            "name": "alertname",
            "value": "MyTestAlert1",
            "isRegex": false
          }
        ],
        "startsAt": "2044-01-01T00:00:00Z",
        "endsAt": "2044-01-01T00:00:01Z",
        "createdBy": "test-alertmanager-web-monitoring-alertmanager-edit/am-client",
        "comment": "Silence test"
      }'
    ```
1.  Access Alertmanager endpoints from within the cluster.
    ```terminal
    $ curl -k -X POST  "https://alertmanager-main.openshift-monitoring:9094/api/v2/silences" \
      -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
      -d '{
        "matchers": [
          {
            "name": "alertname",
            "value": "MyTestAlert2",
            "isRegex": false
          }
        ],
        "startsAt": "2044-01-01T00:00:00Z",
        "endsAt": "2044-01-01T00:00:01Z",
        "createdBy": "test-alertmanager-web-monitoring-alertmanager-edit/am-client",
        "comment": "Silence test"
      }'
    ```
*   Port 9092 provides access to the Alertmanager endpoints restricted to a given project. Granting access requires binding a user to the `monitoring-rules-edit` cluster role or `monitoring-edit` cluster role in the project.

Example monitoring-rules-edit permissions
:   The following example exercises permissions granted by the `monitoring-rules-edit` cluster role. The binding commands must be run by a user with the necessary privileges.

1.  Create a test namespace and a service account.
    ```terminal
    $ oc create namespace test-alertmanager-tenancy-monitoring-rules-edit
    ```
    ```terminal
    $ oc create serviceaccount am-client --namespace=test-alertmanager-tenancy-monitoring-rules-edit
    ```
1.  Bind the role to the service account. The binding in this example is applied to a service account but can also be applied to any user.
    ```terminal
    $ oc create rolebinding test-alertmanager-tenancy-monitoring-rules-edit \
      --namespace=test-alertmanager-tenancy-monitoring-rules-edit \
      --clusterrole=monitoring-rules-edit \
      --serviceaccount=test-alertmanager-tenancy-monitoring-rules-edit:am-client
    ```
1.  Generate a token to access the endpoints.
    ```terminal
    $ TOKEN=$(oc create token am-client --namespace=test-alertmanager-tenancy-monitoring-rules-edit)
    ```
1.  Access Alertmanager endpoints from within the cluster. The port is not exposed externally by default.
    ```terminal
    $ curl -k -f -H "Authorization: Bearer $TOKEN" "https://alertmanager-main.openshift-monitoring:9092/api/v2/alerts?namespace=test-alertmanager-tenancy-monitoring-rules-edit"
    ```
    ```terminal
    $ curl -k -X POST -f "https://alertmanager-main.openshift-monitoring:9092/api/v2/silences?namespace=test-alertmanager-tenancy-monitoring-rules-edit" \
      -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
      -d '{
        "matchers": [
          {
            "name": "alertname",
            "value": "MyTestAlert",
            "isRegex": false
          }
        ],
        "startsAt": "2044-01-01T00:00:00Z",
        "endsAt": "2044-01-01T00:00:01Z",
        "createdBy": "test-alertmanager-tenancy-monitoring-rules-edit/am-client",
        "comment": "Silence test"
      }'
    ```

    Example monitoring-edit permissions
    :   The following example exercises permissions granted by the `monitoring-edit` cluster role. The binding commands must be run by a user with the necessary privileges.

1.  Create a test namespace and a service account.
    ```terminal
    $ oc create namespace test-alertmanager-tenancy-monitoring-edit
    ```
    ```terminal
    $ oc create serviceaccount am-client --namespace=test-alertmanager-tenancy-monitoring-edit
    ```
1.  Bind the role to the service account. The binding in this example is applied to a service account but can also be applied to any user.
    ```terminal
    $ oc create rolebinding test-alertmanager-tenancy-monitoring-edit \
      --namespace=test-alertmanager-tenancy-monitoring-edit \
      --clusterrole=monitoring-edit \
      --serviceaccount=test-alertmanager-tenancy-monitoring-edit:am-client
    ```
1.  Generate a token to access the endpoints.
    ```terminal
    $ TOKEN=$(oc create token am-client --namespace=test-alertmanager-tenancy-monitoring-edit)
    ```
1.  Access Alertmanager endpoints from within the cluster. The port is not exposed externally by default.
    ```terminal
    $ curl -k -f -H "Authorization: Bearer $TOKEN" "https://alertmanager-main.openshift-monitoring:9092/api/v2/alerts?namespace=test-alertmanager-tenancy-monitoring-edit"
    ```
    ```terminal
    $ curl -k -X POST -f "https://alertmanager-main.openshift-monitoring:9092/api/v2/silences?namespace=test-alertmanager-tenancy-monitoring-edit" \
      -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
      -d '{
        "matchers": [
          {
            "name": "alertname",
            "value": "MyTestAlert",
            "isRegex": false
          }
        ],
        "startsAt": "2044-01-01T00:00:00Z",
        "endsAt": "2044-01-01T00:00:01Z",
        "createdBy": "test-alertmanager-tenancy-monitoring-edit/am-client",
        "comment": "Silence test"
      }'
    ```
*   Port 9097 provides access to the `/metrics` endpoint only. This port is for internal use, and no other usage is guaranteed.

### openshift-monitoring/kube-state-metrics {id="_openshift-monitoringkube-state-metrics"}

Expose kube-state-metrics `/metrics` endpoints within the cluster on the following ports:

*   Port 8443 provides access to the Kubernetes resource metrics. This port is for internal use, and no other usage is guaranteed.
*   Port 9443 provides access to the internal kube-state-metrics metrics. This port is for internal use, and no other usage is guaranteed.

### openshift-monitoring/metrics-server {id="_openshift-monitoringmetrics-server"}

Expose the metrics-server web server on port 443. This port is for internal use, and no other usage is guaranteed.

### openshift-monitoring/monitoring-plugin {id="_openshift-monitoringmonitoring-plugin"}

Expose the monitoring plugin service on port 9443. This port is for internal use, and no other usage is guaranteed.

### openshift-monitoring/node-exporter {id="_openshift-monitoringnode-exporter"}

Expose the `/metrics` endpoint on port 9100. This port is for internal use, and no other usage is guaranteed.

### openshift-monitoring/openshift-state-metrics {id="_openshift-monitoringopenshift-state-metrics"}

Expose openshift-state-metrics `/metrics` endpoints within the cluster on the following ports:

*   Port 8443 provides access to the OpenShift resource metrics. This port is for internal use, and no other usage is guaranteed.
*   Port 9443 provides access to the internal `openshift-state-metrics` metrics. This port is for internal use, and no other usage is guaranteed.

### openshift-monitoring/prometheus-k8s {id="_openshift-monitoringprometheus-k8s"}

Expose the Prometheus web server within the cluster on the following ports:

*   Port 9091 provides access to all the Prometheus endpoints. Granting access requires binding a user to the `cluster-monitoring-view` cluster role or `cluster-monitoring-metrics-api` cluster role in the `openshift-monitoring` project.

Example cluster-monitoring-view permissions
:   The following example exercises permissions granted by the `cluster-monitoring-view` cluster role. The binding commands must be run by a user with the necessary privileges.

1.  Create a test namespace and a service account.
    ```terminal
    $ oc create namespace test-prometheus-web-cluster-monitoring-view
    ```
    ```terminal
    $ oc create serviceaccount prom-client --namespace=test-prometheus-web-cluster-monitoring-view
    ```
1.  Bind the role to the service account. The binding in this example is applied to a service account but can also be applied to any user.
    ```terminal
    $ oc create rolebinding test-prometheus-web-cluster-monitoring-view \
      --namespace=openshift-monitoring \
      --clusterrole=cluster-monitoring-view \
      --serviceaccount=test-prometheus-web-cluster-monitoring-view:prom-client
    ```
1.  Generate a token to access the endpoints.
    ```terminal
    $ TOKEN=$(oc create token prom-client --namespace=test-prometheus-web-cluster-monitoring-view)
    ```
1.  Access Prometheus endpoints externally.
    ```terminal
    $ ROUTE=$(oc get route prometheus-k8s --namespace=openshift-monitoring -ojsonpath={.spec.host})
    ```
    ```terminal
    $ curl -k -H "Authorization: Bearer $TOKEN" "https://$ROUTE/api/v1/query?query=up"
    ```
1.  Access Prometheus endpoints from within the cluster.
    ```terminal
    $ curl -k -H "Authorization: Bearer $TOKEN" "https://prometheus-k8s.openshift-monitoring:9091/api/v1/query?query=up"
    ```

    Example cluster-monitoring-metrics-api permissions
    :   The following example exercises permissions granted by the `cluster-monitoring-metrics-api` role. The binding commands must be run by a user with the necessary privileges.

1.  Create a test namespace and a service account.
    ```terminal
    $ oc create namespace test-prometheus-web-cluster-monitoring-metrics-api
    ```
    ```terminal
    $ oc create serviceaccount prom-client --namespace=test-prometheus-web-cluster-monitoring-metrics-api
    ```
1.  Bind the role to the service account. The binding in this example is applied to a service account but can also be applied to any user.
    ```terminal
    $ oc create rolebinding test-prometheus-web-cluster-monitoring-metrics-api \
      --namespace=openshift-monitoring \
      --role=cluster-monitoring-metrics-api  \
      --serviceaccount=test-prometheus-web-cluster-monitoring-metrics-api:prom-client
    ```
1.  Generate a token to access the endpoints.
    ```terminal
    $ TOKEN=$(oc create token prom-client --namespace=test-prometheus-web-cluster-monitoring-metrics-api)
    ```
1.  Access Prometheus endpoints externally.
    ```terminal
    $ ROUTE=$(oc get route prometheus-k8s --namespace=openshift-monitoring -ojsonpath={.spec.host})
    ```
    ```terminal
    $ curl -k -H "Authorization: Bearer $TOKEN" "https://$ROUTE/api/v1/query?query=up"
    ```
1.  Access Prometheus endpoints from within the cluster.
    ```terminal
    $ curl -k -H "Authorization: Bearer $TOKEN" "https://prometheus-k8s.openshift-monitoring:9091/api/v1/query?query=up"
    ```
*   Port 9092 provides access to the `/metrics` and `/federate` endpoints only. This port is for internal use, and no other usage is guaranteed.

### openshift-user-workload-monitoring/prometheus-operator {id="_openshift-user-workload-monitoringprometheus-operator"}

Expose the `/metrics` endpoint on port 8443. This port is for internal use, and no other usage is guaranteed.

### openshift-monitoring/prometheus-operator {id="_openshift-monitoringprometheus-operator"}

Expose the `/metrics` endpoint on port 8443. This port is for internal use, and no other usage is guaranteed.

### openshift-user-workload-monitoring/prometheus-user-workload {id="_openshift-user-workload-monitoringprometheus-user-workload"}

Expose the Prometheus web server within the cluster on the following ports:

*   Port 9091 provides access to the `/metrics` endpoint only. This port is for internal use, and no other usage is guaranteed.
*   Port 9092 provides access to the `/federate` endpoint only. Granting access requires binding a user to the `cluster-monitoring-view` cluster role.

This also exposes the `/metrics` endpoint of the Thanos sidecar web server on port 10902. This port is for internal use, and no other usage is guaranteed.

### openshift-monitoring/telemeter-client {id="_openshift-monitoringtelemeter-client"}

Expose the `/metrics` endpoint on port 8443. This port is for internal use, and no other usage is guaranteed.

### openshift-monitoring/thanos-querier {id="_openshift-monitoringthanos-querier"}

Expose the Thanos Querier web server within the cluster on the following ports:

*   Port 9091 provides access to all the Thanos Querier endpoints. Granting access requires binding a user to the `cluster-monitoring-view` cluster role or `cluster-monitoring-metrics-api` cluster role in the `openshift-monitoring` project.

Example cluster-monitoring-view permissions
:   The following example exercises permissions granted by the `cluster-monitoring-view` cluster role. The binding commands must be run by a user with the necessary privileges.

1.  Create a test namespace and a service account.
    ```terminal
    $ oc create namespace test-thanos-querier-web-cluster-monitoring-view
    ```
    ```terminal
    $ oc create serviceaccount thanos-client --namespace=test-thanos-querier-web-cluster-monitoring-view
    ```
1.  Bind the role to the service account. The binding in this example is applied to a service account but can also be applied to any user.
    ```terminal
    $ oc create rolebinding test-thanos-querier-web-cluster-monitoring-view \
      --namespace=openshift-monitoring \
      --clusterrole=cluster-monitoring-view \
      --serviceaccount=test-thanos-querier-web-cluster-monitoring-view:thanos-client
    ```
1.  Generate a token to access the endpoints.
    ```terminal
    $ TOKEN=$(oc create token thanos-client --namespace=test-thanos-querier-web-cluster-monitoring-view)
    ```
1.  Access Thanos Querier endpoints externally.
    ```terminal
    $ ROUTE=$(oc get route thanos-querier --namespace=openshift-monitoring -ojsonpath={.spec.host})
    ```
    ```terminal
    $ curl -k -H "Authorization: Bearer $TOKEN" "https://$ROUTE/api/v1/query?query=up"
    ```
1.  Access Thanos Querier endpoints from within the cluster.
    ```terminal
    $ curl -k -H "Authorization: Bearer $TOKEN" "https://thanos-querier.openshift-monitoring:9091/api/v1/query?query=up"
    ```

    Example cluster-monitoring-metrics-api permissions
    :   The following example exercises permissions granted by the `cluster-monitoring-metrics-api` role. The binding commands must be run by a user with the necessary privileges.

1.  Create a test namespace and a service account.
    ```terminal
    $ oc create namespace test-thanos-querier-web-cluster-monitoring-metrics-api
    ```
    ```terminal
    $ oc create serviceaccount thanos-client --namespace=test-thanos-querier-web-cluster-monitoring-metrics-api
    ```
1.  Bind the role to the service account. The binding in this example is applied to a service account but can also be applied to any user.
    ```terminal
    $ oc create rolebinding test-thanos-querier-web-cluster-monitoring-metrics-api \
      --namespace=openshift-monitoring \
      --role=cluster-monitoring-metrics-api  \
      --serviceaccount=test-thanos-querier-web-cluster-monitoring-metrics-api:thanos-client
    ```
1.  Generate a token to access the endpoints.
    ```terminal
    $ TOKEN=$(oc create token thanos-client --namespace=test-thanos-querier-web-cluster-monitoring-metrics-api)
    ```
1.  Access Thanos Querier endpoints externally.
    ```terminal
    $ ROUTE=$(oc get route thanos-querier --namespace=openshift-monitoring -ojsonpath={.spec.host})
    ```
    ```terminal
    $ curl -k -H "Authorization: Bearer $TOKEN" "https://$ROUTE/api/v1/query?query=up"
    ```
1.  Access Thanos Querier endpoints from within the cluster.
    ```terminal
    $ curl -k -H "Authorization: Bearer $TOKEN" "https://thanos-querier.openshift-monitoring:9091/api/v1/query?query=up"
    ```
*   Port 9092 provides access to the `/api/v1/query`, `/api/v1/query_range/`, `/api/v1/labels`, `/api/v1/label/*/values`, and `/api/v1/series` endpoints restricted to a given project. Granting access requires binding a user to the `view` cluster role in the project.

Example view permissions
:   The following example exercises permissions granted by the `view` cluster role. The binding commands must be run by a user with the necessary privileges.

1.  Create a test namespace and a service account.
    ```terminal
    $ oc create namespace test-thanos-querier-tenancy-view
    ```
    ```terminal
    $ oc create serviceaccount thanos-client --namespace=test-thanos-querier-tenancy-view
    ```
1.  Bind the role to the service account. The binding in this example is applied to a service account but can also be applied to any user.
    ```terminal
    $ oc create rolebinding test-thanos-querier-tenancy-view \
      --namespace=test-thanos-querier-tenancy-view \
      --clusterrole=view \
      --serviceaccount=test-thanos-querier-tenancy-view:thanos-client
    ```
1.  Generate a token to access the endpoints.
    ```terminal
    $ TOKEN=$(oc create token thanos-client --namespace=test-thanos-querier-tenancy-view)
    ```
1.  Access Thanos Querier endpoints from within the cluster. The port is not exposed externally by default.
    ```terminal
    $ curl -k -f -H "Authorization: Bearer $TOKEN" "https://thanos-querier.openshift-monitoring:9092/api/v1/query?query=up&namespace=test-thanos-querier-tenancy-view"
    ```
*   Port 9093 provides access to the `/api/v1/alerts`, and `/api/v1/rules` endpoints restricted to a given project. Granting access requires binding a user to the `monitoring-rules-edit`, `monitoring-edit`, or `monitoring-rules-view` cluster role in the project.

Example monitoring-rules-edit permissions
:   The following example exercises permissions granted by the `monitoring-rules-edit` cluster role. The binding commands must be run by a user with the necessary privileges.

1.  Create a test namespace and a service account.
    ```terminal
    $ oc create namespace test-thanos-querier-tenancy-rules-monitoring-rules-edit
    ```
    ```terminal
    $ oc create serviceaccount thanos-client --namespace=test-thanos-querier-tenancy-rules-monitoring-rules-edit
    ```
1.  Bind the role to the service account. The binding in this example is applied to a service account but can also be applied to any user.
    ```terminal
    $ oc create rolebinding test-thanos-querier-tenancy-rules-monitoring-rules-edit \
      --namespace=test-thanos-querier-tenancy-rules-monitoring-rules-edit \
      --clusterrole=monitoring-rules-edit \
      --serviceaccount=test-thanos-querier-tenancy-rules-monitoring-rules-edit:thanos-client
    ```
1.  Generate a token to access the endpoints.
    ```terminal
    $ TOKEN=$(oc create token thanos-client --namespace=test-thanos-querier-tenancy-rules-monitoring-rules-edit)
    ```
1.  Access Thanos Querier endpoints from within the cluster. The port is not exposed externally by default.
    ```terminal
    $ curl -k -f -H "Authorization: Bearer $TOKEN" "https://thanos-querier.openshift-monitoring:9093/api/v1/rules?namespace=test-thanos-querier-tenancy-rules-monitoring-rules-edit"
    ```
    ```terminal
    $ curl -k -f -H "Authorization: Bearer $TOKEN" "https://thanos-querier.openshift-monitoring:9093/api/v1/alerts?namespace=test-thanos-querier-tenancy-rules-monitoring-rules-edit"
    ```

    Example monitoring-edit permissions
    :   The following example exercises permissions granted by the `monitoring-edit` cluster role. The binding commands must be run by a user with the necessary privileges.

1.  Create a test namespace and a service account.
    ```terminal
    $ oc create namespace test-thanos-querier-tenancy-rules-monitoring-edit
    ```
    ```terminal
    $ oc create serviceaccount thanos-client --namespace=test-thanos-querier-tenancy-rules-monitoring-edit
    ```
1.  Bind the role to the service account. The binding in this example is applied to a service account but can also be applied to any user.
    ```terminal
    $ oc create rolebinding test-thanos-querier-tenancy-rules-monitoring-edit \
      --namespace=test-thanos-querier-tenancy-rules-monitoring-edit \
      --clusterrole=monitoring-edit \
      --serviceaccount=test-thanos-querier-tenancy-rules-monitoring-edit:thanos-client
    ```
1.  Generate a token to access the endpoints.
    ```terminal
    $ TOKEN=$(oc create token thanos-client --namespace=test-thanos-querier-tenancy-rules-monitoring-edit)
    ```
1.  Access Thanos Querier endpoints from within the cluster. The port is not exposed externally by default.
    ```terminal
    $ curl -k -f -H "Authorization: Bearer $TOKEN" "https://thanos-querier.openshift-monitoring:9093/api/v1/rules?namespace=test-thanos-querier-tenancy-rules-monitoring-edit"
    ```
    ```terminal
    $ curl -k -f -H "Authorization: Bearer $TOKEN" "https://thanos-querier.openshift-monitoring:9093/api/v1/alerts?namespace=test-thanos-querier-tenancy-rules-monitoring-edit"
    ```

    Example monitoring-rules-view permissions
    :   The following example exercises permissions granted by the `monitoring-rules-view` cluster role. The binding commands must be run by a user with the necessary privileges.

1.  Create a test namespace and a service account.
    ```terminal
    $ oc create namespace test-thanos-querier-tenancy-rules-monitoring-rules-view
    ```
    ```terminal
    $ oc create serviceaccount thanos-client --namespace=test-thanos-querier-tenancy-rules-monitoring-rules-view
    ```
1.  Bind the role to the service account. The binding in this example is applied to a service account but can also be applied to any user.
    ```terminal
    $ oc create rolebinding test-thanos-querier-tenancy-rules-monitoring-rules-view \
      --namespace=test-thanos-querier-tenancy-rules-monitoring-rules-view \
      --clusterrole=monitoring-rules-view \
      --serviceaccount=test-thanos-querier-tenancy-rules-monitoring-rules-view:thanos-client
    ```
1.  Generate a token to access the endpoints.
    ```terminal
    $ TOKEN=$(oc create token thanos-client --namespace=test-thanos-querier-tenancy-rules-monitoring-rules-view)
    ```
1.  Access Thanos Querier endpoints from within the cluster. The port is not exposed externally by default.
    ```terminal
    $ curl -k -f -H "Authorization: Bearer $TOKEN" "https://thanos-querier.openshift-monitoring:9093/api/v1/rules?namespace=test-thanos-querier-tenancy-rules-monitoring-rules-view"
    ```
    ```terminal
    $ curl -k -f -H "Authorization: Bearer $TOKEN" "https://thanos-querier.openshift-monitoring:9093/api/v1/alerts?namespace=test-thanos-querier-tenancy-rules-monitoring-rules-view"
    ```
*   Port 9094 provides access to the `/metrics` endpoint only. This port is for internal use, and no other usage is guaranteed.

### openshift-user-workload-monitoring/thanos-ruler {id="_openshift-user-workload-monitoringthanos-ruler"}

Expose the Thanos Ruler web server within the cluster on the following ports:

*   Port 9091 provides access to all Thanos Ruler endpoints. Granting access requires binding a user to the `cluster-monitoring-view` cluster role.
*   Port 9092 provides access to the `/metrics` endpoint only. This port is for internal use, and no other usage is guaranteed.

This also exposes the gRPC endpoints on port 10901. This port is for internal use, and no other usage is guaranteed.

### openshift-monitoring/cluster-monitoring-operator {id="_openshift-monitoringcluster-monitoring-operator"}

Expose the `/metrics` and `/validate-webhook` endpoints on port 8443. This port is for internal use, and no other usage is guaranteed.