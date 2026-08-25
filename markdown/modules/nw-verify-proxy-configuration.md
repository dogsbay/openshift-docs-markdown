{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying the cluster-wide proxy configuration {id="nw-verify-proxy-configuration_{{ context }}"}

To verify that your cluster-wide proxy configuration is working correctly in {{ product_title }}, you can check the `Proxy` object status, review Machine Config Operator logs, and confirm that system components are routing external requests through the proxy. {._abstract}

**Prerequisites**

*   You have cluster administrator permissions.
*   You have the {{ product_title }} `oc` CLI tool installed.

**Procedure**

1.  Check the proxy configuration status using the `oc` command:
    ```terminal
    $ oc get proxy/cluster -o yaml
    ```
1.  Verify the proxy fields in the output to ensure they match your configuration. Specifically, check the `spec.httpProxy`, `spec.httpsProxy`, `spec.noProxy`, and `spec.trustedCA` fields.
1.  Inspect the status of the `Proxy` object:
    ```terminal
    $ oc get proxy/cluster -o jsonpath='{.status}'
    ```
    ```terminal title="Example output"
    {
    status:
        httpProxy: http://user:xxx@xxxx:3128
        httpsProxy: http://user:xxx@xxxx:3128
        noProxy: .cluster.local,.svc,10.0.0.0/16,10.128.0.0/14,127.0.0.1,169.254.169.254,172.30.0.0/16,localhost,test.no-proxy.com
    }
    ```
1.  Check the logs of the Machine Config Operator (MCO) to ensure that the configuration changes were applied successfully:
    ```terminal
    $ oc logs -n openshift-machine-config-operator $(oc get pods -n openshift-machine-config-operator -l k8s-app=machine-config-operator -o name)
    ```
1.  Look for messages that indicate the proxy settings were applied and the nodes were rebooted if necessary.
1.  Verify that system components are using the proxy by checking the logs of a component that makes external requests, such as the Cluster Version Operator (CVO):
    ```terminal
    $ oc logs -n openshift-cluster-version $(oc get pods -n openshift-cluster-version -l k8s-app=machine-config-operator -o name)
    ```
1.  Look for log entries that show that external requests have been routed through the proxy.