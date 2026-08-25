{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding custom alerts to oc adm upgrade recommend command output {id="oc-adm-upgrade-recommend-custom-alert_{{ context }}"}

You can configure specific alerts to be checked by the `oc adm upgrade recommend` command, so that if they are firing they appear in the output of the command.
To do this, add the `openShiftUpdatePrecheck` label to an alert and set it to true. {._abstract}

**Procedure**

1.  Edit a `PrometheusRule` custom resource (CR) by running the following command:
    ```terminal
    $ oc edit prometheusrule <rule_name> -n <namespace>
    ```

    where:

    `<rule_name>`
    :   Specifies the name of the `PrometheusRule` CR.


`<namespace>`
:   Specifies the namespace that contains the CR.

1.  Add the following snippet to the `labels` section of the alert you want to be checked by the `oc adm upgrade recommend` command:
    ```yaml
    # ...
         labels:
           openShiftUpdatePrecheck: "true"
    # ...
    ```
    ```yaml title="Example PrometheusRule CR with precheck label"
    apiVersion: monitoring.coreos.com/v1
    kind: PrometheusRule
    metadata:
      name: storage-warning-alerts
      namespace: openshift-monitoring
    spec:
      groups:
      - name: disk-usage-warnings
        rules:
        - alert: VolumeNearingCapacity
          expr: (kubelet_volume_stats_used_bytes / kubelet_volume_stats_capacity_bytes) > 0.85
          for: 15m
          labels:
            severity: warning
            openShiftUpdatePrecheck: "true"
          annotations:
            summary: "Storage volume is over 85% full"
            description: "The volume {{ $labels.persistentvolumeclaim }} in namespace {{ $labels.namespace }} is currently {{ $value | humanizePercentage }} full. This may cause issues during pod restarts or cluster updates."
    ```