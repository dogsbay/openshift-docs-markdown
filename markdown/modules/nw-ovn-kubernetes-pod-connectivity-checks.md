{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking the OVN-Kubernetes pod network connectivity {id="nw-ovn-kubernetes-pod-connectivity-checks_{{ context }}"}

To verify pod network connectivity in {{ product_title }}, you can inspect `PodNetworkConnectivityCheck` resources in the `openshift-network-diagnostics` namespace. {._abstract}

The connectivity check controller, in {{ product_title }} 4.10 and later, orchestrates connection verification checks in your cluster. These include Kubernetes API, OpenShift API and individual nodes. The results for the connection tests are stored in `PodNetworkConnectivity` objects in the `openshift-network-diagnostics` namespace. Connection tests are performed every minute in parallel.

**Prerequisites**

*   You have access to the {{ oc_first }}.
*   You are logged in to the cluster with the `cluster-admin` role.
*   You have installed `jq`.

**Procedure**

1.  To list the current `PodNetworkConnectivityCheck` objects, enter the following command:
    ```terminal
    $ oc get podnetworkconnectivitychecks -n openshift-network-diagnostics
    ```
1.  View the most recent success for each connection object by using the following command:
    ```terminal
    $ oc get podnetworkconnectivitychecks -n openshift-network-diagnostics \
    -o json | jq '.items[]| .spec.targetEndpoint,.status.successes[0]'
    ```
1.  View the most recent failures for each connection object by using the following command:
    ```terminal
    $ oc get podnetworkconnectivitychecks -n openshift-network-diagnostics \
    -o json | jq '.items[]| .spec.targetEndpoint,.status.failures[0]'
    ```
1.  View the most recent outages for each connection object by using the following command:
    ```terminal
    $ oc get podnetworkconnectivitychecks -n openshift-network-diagnostics \
    -o json | jq '.items[]| .spec.targetEndpoint,.status.outages[0]'
    ```

    The connectivity check controller also logs metrics from these checks into Prometheus.
1.  View all the metrics by running the following command:
    ```terminal
    $ oc exec prometheus-k8s-0 -n openshift-monitoring -- \
    promtool query instant  http://localhost:9090 \
    '{component="openshift-network-diagnostics"}'
    ```
1.  View the latency between the source pod and the openshift api service for the last 5 minutes:
    ```terminal
    $ oc exec prometheus-k8s-0 -n openshift-monitoring -- \
    promtool query instant  http://localhost:9090 \
    '{component="openshift-network-diagnostics"}'
    ```