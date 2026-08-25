{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring custom health rules {id="network-observability-configuring-custom-health-rules_{{ context }}"}

Create custom health rules by using Prometheus Query Language (PromQL) to define an `AlertingRule` resource. These rules trigger alerts based on specific network metrics, such as traffic surges. {._abstract}

**Prerequisites**

*   Access to the cluster with `cluster-admin` privileges.
*   The Network Observability Operator is installed.
*   {{ product_title }} 4.16 or later is installed.
*   Familiarity with PromQL.


:::important

Custom `PrometheusRule` resources are not owned by the `FlowCollector` resource. Custom rules created in the `netobserv` namespace might be deleted if the Network Observability Operator is uninstalled. To prevent data loss, create custom rules in a different namespace, such as `openshift-monitoring`, and maintain a backup in version control.

:::


**Procedure**

1.  Define an `AlertingRule` resource in a YAML file, for example, `custom-alert.yaml`.
1.  Apply the custom alert rule by running the following command:
    ```terminal
    $ oc apply -f custom-alert.yaml
    ```

**Verification**

1.  Confirm the `PrometheusRule` resource was created in the target namespace by running the following command:
    ```terminal
    $ oc get prometheusrules -n <namespace> -o yaml
    ```
1.  Confirm the rule is active in the {{ product_title }} web console:
    1.  Navigate to **Observe** → **Alerting** to see the firing status.
    1.  Navigate to **Observe** → **Network Health** to view the dashboard integration.