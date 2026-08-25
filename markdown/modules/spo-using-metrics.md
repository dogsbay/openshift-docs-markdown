{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using metrics {id="spo-using-metrics_{{ context }}"}

The `openshift-security-profiles` namespace provides metrics endpoints, which are secured by the `kube-rbac-proxy` container. All metrics are exposed by the `metrics` service within the `openshift-security-profiles` namespace. {._abstract}

The Security Profiles Operator includes a cluster role and corresponding binding `spo-metrics-client` to retrieve the metrics from within the cluster. There are two metrics paths available:

*   `metrics.openshift-security-profiles/metrics`: for controller runtime metrics
*   `metrics.openshift-security-profiles/metrics-spod`: for the Operator daemon metrics

**Procedure**

1.  To view the status of the metrics service, run the following command:
    ```terminal
    $ oc get svc/metrics -n openshift-security-profiles
    ```
    ```terminal title="Example output"
    NAME      TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
    metrics   ClusterIP   10.0.0.228   <none>        443/TCP   43s
    ```
1.  To retrieve the metrics, query the service endpoint using the default `ServiceAccount` token in the `openshift-security-profiles` namespace by running the following command:
    ```terminal
    $ oc run --rm -i --restart=Never --image=registry.fedoraproject.org/fedora-minimal:latest \
        -n openshift-security-profiles metrics-test -- bash -c \
        'curl -ks -H "Authorization: Bearer $(cat /var/run/secrets/kubernetes.io/serviceaccount/token)" https://metrics.openshift-security-profiles/metrics-spod'
    ```
    ```terminal title="Example output"
    # HELP security_profiles_operator_seccomp_profile_total Counter about seccomp profile operations.
    # TYPE security_profiles_operator_seccomp_profile_total counter
    security_profiles_operator_seccomp_profile_total{operation="delete"} 1
    security_profiles_operator_seccomp_profile_total{operation="update"} 2
    ```
1.  To retrieve metrics from a different namespace, link the `ServiceAccount` to the `spo-metrics-client` `ClusterRoleBinding` by running the following command:
    ```terminal
    $ oc get clusterrolebinding spo-metrics-client -o wide
    ```
    ```terminal title="Example output"
    NAME                 ROLE                             AGE   USERS   GROUPS   SERVICEACCOUNTS
    spo-metrics-client   ClusterRole/spo-metrics-client   35m                    openshift-security-profiles/default
    ```