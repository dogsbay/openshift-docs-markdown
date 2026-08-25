{%- set _mod_docs_content_type = "PROCEDURE" %}
# Capturing metrics {id="network-observability-cli-capturing-metrics_{{ context }}"}

Generate on-demand network observability dashboards in Prometheus using a service monitor. This allows you to quickly view and analyze network metrics. {._abstract}

**Prerequisites**

*   Install the {{ oc_first }}.
*   Install the Network Observability CLI (`oc netobserv`) plugin.

**Procedure**

1.  Capture metrics with filters enabled by running the following command:
    ```terminal title="Example output"
    $ oc netobserv metrics --enable_filter=true --cidr=0.0.0.0/0 --protocol=TCP --port=49051
    ```
1.  Open the link provided in the terminal to view the **NetObserv / On-Demand** dashboard:
    ```terminal title="Example URL"
    https://console-openshift-console.apps.rosa...openshiftapps.com/monitoring/dashboards/netobserv-cli
    ```

    :::note

    Features that are not enabled present as empty graphs.
    
    :::