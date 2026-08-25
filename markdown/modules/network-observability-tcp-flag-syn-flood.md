{%- set _mod_docs_content_type = "PROCEDURE" %}
# Detecting SYN flooding using the FlowMetric API and TCP flags {id="network-observability-tcp-flag-syn-flood_{{ context }}"}

Deploy a custom `AlertingRule` and `FlowMetric` configuration to monitor TCP flags, enabling real-time detection and alerting for SYN flooding attacks on the cluster. {._abstract}

**Procedure**

1.  In the web console, navigate to **Ecosystem** -> **Installed Operators**.
1.  In the **Provided APIs** heading for the **NetObserv Operator**, select **FlowMetric**.
1.  In the **Project**  dropdown list, select the project of the Network Observability Operator instance.
1.  Click **Create FlowMetric**.
1.  Create `FlowMetric` resources to add the following configurations:
    ```yaml title="Configuration counting flows per destination host and resource, with TCP flags"
    apiVersion: flows.netobserv.io/v1alpha1
    kind: FlowMetric
    metadata:
      name: flows-with-flags-per-destination
    spec:
      metricName: flows_with_flags_per_destination_total
      type: Counter
      labels: [SrcSubnetLabel,DstSubnetLabel,DstK8S_Name,DstK8S_Type,DstK8S_HostName,DstK8S_Namespace,Flags]
    ```
    ```yaml title="Configuration counting flows per source host and resource, with TCP flags"
    apiVersion: flows.netobserv.io/v1alpha1
    kind: FlowMetric
    metadata:
      name: flows-with-flags-per-source
    spec:
      metricName: flows_with_flags_per_source_total
      type: Counter
      labels: [DstSubnetLabel,SrcSubnetLabel,SrcK8S_Name,SrcK8S_Type,SrcK8S_HostName,SrcK8S_Namespace,Flags]
    ```
1.  Deploy the following `AlertingRule` resource to alert for SYN flooding:
    ```yaml title="AlertingRule for SYN flooding"
    apiVersion: monitoring.openshift.io/v1
    kind: AlertingRule
    metadata:
      name: netobserv-syn-alerts
      namespace: openshift-monitoring
    # ...
      spec:
      groups:
      - name: NetObservSYNAlerts
        rules:
        - alert: NetObserv-SYNFlood-in
          annotations:
            message: |-
{{ $labels.job }}: incoming SYN-flood attack suspected to Host={{ $labels.DstK8S_HostName}}, Namespace={{ $labels.DstK8S_Namespace }}, Resource={{ $labels.DstK8S_Name }}. This is characterized by a high volume of SYN-only flows with different source IPs and/or ports.
            summary: "Incoming SYN-flood"
          expr: sum(rate(netobserv_flows_with_flags_per_destination_total{Flags="2"}[1m])) by (job, DstK8S_HostName, DstK8S_Namespace, DstK8S_Name) > 300
          for: 15s
          labels:
            severity: warning
            app: netobserv
        - alert: NetObserv-SYNFlood-out
          annotations:
            message: |-
{{ $labels.job }}: outgoing SYN-flood attack suspected from Host={{ $labels.SrcK8S_HostName}}, Namespace={{ $labels.SrcK8S_Namespace }}, Resource={{ $labels.SrcK8S_Name }}. This is characterized by a high volume of SYN-only flows with different source IPs and/or ports.
            summary: "Outgoing SYN-flood"
          expr: sum(rate(netobserv_flows_with_flags_per_source_total{Flags="2"}[1m])) by (job, SrcK8S_HostName, SrcK8S_Namespace, SrcK8S_Name) > 300
          for: 15s
          labels:
            severity: warning
            app: netobserv
    # ...
    ```

    In this example, the threshold for the alert is `300`; however, you can adapt this value empirically. A threshold that is too low might produce false-positives, and if it’s too high it might miss actual attacks.

**Verification**

1.  In the web console, click **Manage Columns** in the **Network Traffic** table view and click **TCP flags**.
1.  In the **Network Traffic** table view, filter on **TCP protocol SYN TCPFlag**. A large number of flows with the same **byteSize** indicates a SYN flood.
1.  Go to **Observe** -> **Alerting** and select the **Alerting Rules** tab.
1.  Filter on **netobserv-synflood-in alert**. The alert should fire when SYN flooding occurs.