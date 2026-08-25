{%- set _mod_docs_content_type = "PROCEDURE" %}
# Querying metrics by using the federation endpoint for Prometheus {id="monitoring-querying-metrics-by-using-the-federation-endpoint-for-prometheus_{{ context }}"}

You can use the federation endpoint for Prometheus to scrape platform and user-defined metrics from a network location outside the cluster.
To do so, access the Prometheus `/federate` endpoint for the cluster via 
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
an {{ product_title }} 
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp %}
a {{ product_title }} 
{%- endif %}
route.


:::important

A delay in retrieving metrics data occurs when you use federation.
This delay can affect the accuracy and timeliness of the scraped metrics.

Using the federation endpoint can also degrade the performance and scalability of your cluster, especially if you use the federation endpoint to retrieve large amounts of metrics data.
To avoid these issues, follow these recommendations:

*   Do not try to retrieve all metrics data via the federation endpoint for Prometheus.
Query it only when you want to retrieve a limited, aggregated data set.
For example, retrieving fewer than 1,000 samples for each request helps minimize the risk of performance degradation.
*   Avoid frequent querying of the federation endpoint for Prometheus.
Limit queries to a maximum of one every 30 seconds.

If you need to forward large amounts of data outside the cluster, use remote write instead. For more information, see the _Configuring remote write storage_ section.

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have access to the cluster as a user with the `cluster-monitoring-view` cluster role or have obtained a bearer token with `get` permission on the `namespaces` resource.

    :::note

    You can only use bearer token authentication to access the Prometheus federation endpoint.
    
    :::

*   You are logged in to an account that has permission to get the Prometheus federation route.

    :::note

    If your account does not have permission to get the Prometheus federation route, a cluster administrator can provide the URL for the route.
    
    :::


**Procedure**

1.  Retrieve the bearer token by running the following the command:
    ```terminal
    $ TOKEN=$(oc whoami -t)
    ```
1.  Get the Prometheus federation route URL by running the following command:
    ```terminal
    $ HOST=$(oc -n openshift-monitoring get route prometheus-k8s-federate -ojsonpath='{.status.ingress[].host}')
    ```
1.  Query metrics from the `/federate` route.
The following example command queries `up` metrics:
    ```terminal
    $ curl -G -k -H "Authorization: Bearer $TOKEN" https://$HOST/federate --data-urlencode 'match[]=up'
    ```
    ```terminal title="Example output"
    # TYPE up untyped
    up{apiserver="kube-apiserver",endpoint="https",instance="10.0.143.148:6443",job="apiserver",namespace="default",service="kubernetes",prometheus="openshift-monitoring/k8s",prometheus_replica="prometheus-k8s-0"} 1 1657035322214
    up{apiserver="kube-apiserver",endpoint="https",instance="10.0.148.166:6443",job="apiserver",namespace="default",service="kubernetes",prometheus="openshift-monitoring/k8s",prometheus_replica="prometheus-k8s-0"} 1 1657035338597
    up{apiserver="kube-apiserver",endpoint="https",instance="10.0.173.16:6443",job="apiserver",namespace="default",service="kubernetes",prometheus="openshift-monitoring/k8s",prometheus_replica="prometheus-k8s-0"} 1 1657035343834
    ...
    ```