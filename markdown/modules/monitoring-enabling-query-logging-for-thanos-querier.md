{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling query logging for Thanos Querier {id="enabling-query-logging-for-thanos-querier_{{ context }}"}

For default platform monitoring in the `openshift-monitoring` project, you can enable the {{ cmo_first }} to log all queries run by Thanos Querier.


:::important

Because log rotation is not supported, only enable this feature temporarily when you need to troubleshoot an issue. After you finish troubleshooting, disable query logging by reverting the changes you made to the `ConfigMap` object to enable the feature.

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have created the `cluster-monitoring-config` `ConfigMap` object.

**Procedure**

You can enable query logging for Thanos Querier in the `openshift-monitoring` project:

1.  Edit the `cluster-monitoring-config` `ConfigMap` object in the `openshift-monitoring` project:
    ```terminal
    $ oc -n openshift-monitoring edit configmap cluster-monitoring-config
    ```
1.  Add a `thanosQuerier` section under `data/config.yaml` and add values as shown in the following example:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: cluster-monitoring-config
      namespace: openshift-monitoring
    data:
      config.yaml: |
        thanosQuerier:
          enableRequestLogging: <value> (1)
          logLevel: <value> (2)


    ```
    1.  Set the value to `true` to enable logging and `false` to disable logging. The default value is `false`.
    1.  Set the value to `debug`, `info`, `warn`, or `error`. If no value exists for `logLevel`, the log level defaults to `error`.
1.  Save the file to apply the changes. The pods affected by the new configuration are automatically redeployed.

**Verification**

1.  Verify that the Thanos Querier pods are running. The following sample command lists the status of pods in the `openshift-monitoring` project:
    ```terminal
    $ oc -n openshift-monitoring get pods
    ```
1.  Run a test query using the following sample commands as a model:
    ```terminal
    $ token=`oc create token prometheus-k8s -n openshift-monitoring`
    ```
    ```terminal
    $ oc -n openshift-monitoring exec -c prometheus prometheus-k8s-0 -- curl -k -H "Authorization: Bearer $token" 'https://thanos-querier.openshift-monitoring.svc:9091/api/v1/query?query=cluster_version'
    ```
1.  Run the following command to read the query log:
    ```terminal
    $ oc -n openshift-monitoring logs <thanos_querier_pod_name> -c thanos-query
    ```

    :::note

    Because the `thanos-querier` pods are highly available (HA) pods, you might be able to see logs in only one pod.
    
    :::

1.  After you examine the logged query information, disable query logging by changing the `enableRequestLogging` value to `false` in the config map.