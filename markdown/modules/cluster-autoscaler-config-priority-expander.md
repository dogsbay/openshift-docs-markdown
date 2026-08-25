{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a priority expander for the cluster autoscaler {id="cluster-autoscaler-config-priority-expander_{{ context }}"}

Configure a priority expander to control which machine set expands when the cluster autoscaler increases the size of the cluster.
You can create a priority expander config map by listing priority values and regular expressions that define machine sets. {._abstract}

**Prerequisites**

*   You have deployed an {{ product_title }} cluster that uses the Machine API.
*   You have access to the cluster using an account with `cluster-admin` permissions.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  List the compute machine sets on your cluster by running the following command:
    ```terminal
    $ oc get machinesets.machine.openshift.io
    ```
    ```terminal title="Example output"
    NAME                                        DESIRED   CURRENT   READY   AVAILABLE   AGE
    archive-agl030519-vplxk-worker-us-east-1c   1         1         1       1           25m
    fast-01-agl030519-vplxk-worker-us-east-1a   1         1         1       1           55m
    fast-02-agl030519-vplxk-worker-us-east-1a   1         1         1       1           55m
    fast-03-agl030519-vplxk-worker-us-east-1b   1         1         1       1           55m
    fast-04-agl030519-vplxk-worker-us-east-1b   1         1         1       1           55m
    prod-01-agl030519-vplxk-worker-us-east-1a   1         1         1       1           33m
    prod-02-agl030519-vplxk-worker-us-east-1c   1         1         1       1           33m
    ```
1.  Using regular expressions, construct one or more patterns that match the name of any compute machine set that you want to set a priority level for.

    For example, use the regular expression pattern `\*fast*` to match any compute machine set that includes the string `fast` in its name.
1.  Create a `cluster-autoscaler-priority-expander.yml` YAML file that defines a config map similar to the following:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: cluster-autoscaler-priority-expander
      namespace: openshift-machine-api
    data:
      priorities: |-
        10:
          - .*fast.*
          - .*archive.*
        40:
          - .*prod.*
    ```
    Define the priority of your machine sets.
    The `priorities` values must be positive integers.
    The cluster autoscaler uses higher-value priorities before lower-value priorities.
    For each priority level, specify the regular expressions that correspond to the machine sets you want to use.
1.  Create the config map by running the following command:
    ```terminal
    $ oc create configmap cluster-autoscaler-priority-expander \
      --from-file=<location_of_config_map_file>/cluster-autoscaler-priority-expander.yml
    ```

**Verification**

*   Review the config map by running the following command:
    ```terminal
    $ oc get configmaps cluster-autoscaler-priority-expander -o yaml
    ```

**Next steps**

*   To use the priority expander, ensure that the `ClusterAutoscaler` resource definition is configured to use the `expanders: ["Priority"]` parameter.