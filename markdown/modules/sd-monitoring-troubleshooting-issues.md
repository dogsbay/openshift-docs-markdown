{%- set _mod_docs_content_type = "PROCEDURE" %}
# Determining why user-defined project metrics are unavailable {id="troubleshooting-monitoring-issues_{{ context }}"}

You can determine why user-defined project metrics are unavailable by checking metric endpoints, verifying monitor configurations, and validating service-to-pod label matching. {._abstract}

**Procedure**

1.  Query the metric name and verify that the project is correct:
    1.  In the **Developer** perspective of the web console, click **Observe** and go to the **Metrics** tab.
    1.  Select the project that you want to view metrics for in the **Project:** list.
    1.  Select an existing query from the **Select query** list, or run a custom query by adding a PromQL query to the **Expression** field.

        The metrics are displayed in a chart.

        Queries must be done on a per-project basis. The metrics that are shown relate to the project that you have selected.
1.  Verify that the pod that you want metrics from is actively serving metrics. Run the following `oc exec` command into a pod to target the `podIP`, `port`, and `/metrics`.
    ```terminal
    $ oc exec <sample_pod> -n <sample_namespace> -- curl <target_pod_IP>:<port>/metrics
    ```

    :::note

    You must run the command on a pod that has `curl` installed.
    
    :::


    The following example output shows a result with a valid version metric.
    ```terminal title="Example output"
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    # HELP version Version information about this binary-- --:--:-- --:--:--     0
    # TYPE version gauge
    version{version="v0.1.0"} 1
    100   102  100   102    0     0  51000      0 --:--:-- --:--:-- --:--:-- 51000
    ```

    An invalid output indicates that there is a problem with the corresponding application.
1.  If you are using a `PodMonitor` CRD, verify that the `PodMonitor` CRD is configured to point to the correct pods using label matching.
1.  If you are using a `ServiceMonitor` CRD, and if the `/metrics` endpoint of the pod is showing metric data, follow these steps to verify the configuration:
    1.  Verify that the service is pointed to the correct `/metrics` endpoint. The service `labels` in this output must match the services monitor `labels` and the `/metrics` endpoint defined by the service in the subsequent steps.
        ```terminal
        $ oc get service
        ```
        ```terminal title="Example output"
        apiVersion: v1
        kind: Service
        metadata:
          labels:
            app: prometheus-example-app
          name: prometheus-example-app
          namespace: ns1
        spec:
          ports:
          - port: 8080
            protocol: TCP
            targetPort: 8080
            name: web
          selector:
            app: prometheus-example-app
          type: ClusterIP
        ```
        where:


        `kind`
        :   Specifies an API type. This example shows a service API.

        `metadata.labels`
        :   Specifies the labels that are used for this service.
    1.  Query the `serviceIP`, `port`, and `/metrics` endpoints to see if the same metrics from the `curl` command you ran on the pod previously:
        1.  Run the following command to find the service IP:
            ```terminal
            $ oc get service -n <target_namespace>
            ```
        1.  Query the `/metrics` endpoint:
            ```terminal
            $ oc exec <sample_pod> -n <sample_namespace> -- curl <service_IP>:<port>/metrics
            ```

            Valid metrics are returned in the following example.
            ```terminal title="Example output"
            % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                           Dload  Upload   Total   Spent    Left  Speed
            100   102  100   102    0     0  51000      0 --:--:-- --:--:-- --:--:--   99k
            # HELP version Version information about this binary
            # TYPE version gauge
            version{version="v0.1.0"} 1
            ```
    1.  Use label matching to verify that the `ServiceMonitor` object is configured to point to the required service. To do this, compare the `Service` object from the `oc get service` output to the `ServiceMonitor` object from the `oc get servicemonitor` output. The labels must match for the metrics to be displayed.

        For example, from the previous steps, notice how the `Service` object has the `app: prometheus-example-app` label and the `ServiceMonitor` object has the same `app: prometheus-example-app` match label.
1.  If the configuration is valid and metrics remain unavailable, contact the support team.