{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating new alerting rules {id="creating-new-alerting-rules_{{ context }}"}

As a cluster administrator, you can create new alerting rules based on platform metrics.
These alerting rules trigger alerts based on the values of chosen metrics.


:::note

*   If you create a customized `AlertingRule` resource based on an existing platform alerting rule, silence the original alert to avoid receiving conflicting alerts.
*   To help users understand the impact and cause of the alert, ensure that your alerting rule contains an alert message and severity value.

:::


**Prerequisites**

*   You have access to the cluster as a user that has the `cluster-admin` cluster role.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a new YAML configuration file named `example-alerting-rule.yaml`.
1.  Add an `AlertingRule` resource to the YAML file.
The following example creates a new alerting rule named `example`, similar to the default `Watchdog` alert:
    ```yaml
    apiVersion: monitoring.openshift.io/v1
    kind: AlertingRule
    metadata:
      name: example
      namespace: openshift-monitoring (1)
    spec:
      groups:
      - name: example-rules
        rules:
        - alert: ExampleAlert (2)
          for: 1m (3)
          expr: vector(1) (4)
          labels:
            severity: warning (5)
          annotations:
            message: This is an example alert. (6)
    ```
    1.  Ensure that the namespace is `openshift-monitoring`.
    1.  The name of the alerting rule you want to create.
    1.  The duration for which the condition should be true before an alert is fired.
    1.  The PromQL query expression that defines the new rule.
    1.  The severity that alerting rule assigns to the alert.
    1.  The message associated with the alert.

    :::important

    You must create the `AlertingRule` object in the `openshift-monitoring` namespace. Otherwise, the alerting rule is not accepted.
    
    :::

1.  Apply the configuration file to the cluster:
    ```terminal
    $ oc apply -f example-alerting-rule.yaml
    ```