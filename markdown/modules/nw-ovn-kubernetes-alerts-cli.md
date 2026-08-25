{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing OVN-Kubernetes alerts in the CLI {id="nw-ovn-kubernetes-alerts-cli_{{ context }}"}

To view OVN-Kubernetes alerts from the command line in {{ product_title }}, you can query the `Alertmanager` API for active alerts and related rules. {._abstract}

**Prerequisites**

*   Access to the cluster as a user with the `cluster-admin` role.
*   The OpenShift CLI (`oc`) installed.
*   You have installed `jq`.

**Procedure**

1.  View active or firing alerts by running the following commands.
    1.  Set the alert manager route environment variable by running the following command:
        ```terminal
        $ ALERT_MANAGER=$(oc get route alertmanager-main -n openshift-monitoring \
        -o jsonpath='{@.spec.host}')
        ```
    1.  Issue a `curl` request to the alert manager route API by running the following command, replacing `$ALERT_MANAGER` with the URL of your `Alertmanager` instance:
        ```terminal
        $ curl -s -k -H "Authorization: Bearer $(oc create token prometheus-k8s -n openshift-monitoring)" https://$ALERT_MANAGER/api/v1/alerts | jq '.data[] | "\(.labels.severity) \(.labels.alertname) \(.labels.pod) \(.labels.container) \(.labels.endpoint) \(.labels.instance)"'
        ```
1.  View alerting rules by running the following command:
    ```terminal
    $ oc -n openshift-monitoring exec -c prometheus prometheus-k8s-0 -- curl -s 'http://localhost:9090/api/v1/rules' | jq '.data.groups[].rules[] | select(((.name|contains("ovn")) or (.name|contains("OVN")) or (.name|contains("Ovn")) or (.name|contains("North")) or (.name|contains("South"))) and .type=="alerting")'
    ```