{%- set _mod_docs_content_type = "PROCEDURE" %}
# Gathering data on demand with the {{ insights_operator }} from the OpenShift CLI {id="running-insights-operator-gather-openshift-cli_{{ context }}"}

You can run a custom {{ insights_operator }} gather operation on-demand from the  {{ product_title }} command-line interface (CLI).
An on-demand `DataGather` operation is useful for one-off data collections that require different configurations to the periodic data gathering (`InsightsDataGather`) specification. {._abstract}

Use the following procedure to create a `DataGather` custom resource definition (CRD), and then run the data gather operation on demand from the CLI.

**Prerequisites**

*   You are logged in to {{ product_title }} as a user with the `cluster-admin` role.

**Procedure**

1.  Create a YAML file with the following `DataGather` specification:
    ```yaml

    apiVersion: insights.openshift.io/v1
    kind: DataGather
    metadata:
      name: <your_data_gather>
    spec:
    # Gatherers configuration
      gatherers:
        mode: All # Options: All, Custom
    # ...
    ```

    :::important

    *   The name you specify for your gather operation, `<your_data_gather>`, must be unique and must not include a prefix of `periodic-gathering-` because this string is reserved for other administrative operations and might impact the intended gather operation.
    *   If the `spec` of `DataGather` CRD is undefined, the default {{ insights_operator }} data collection job will run. This means that all gather operations will run, the collected data will be unobfuscated and the archive file will not be retained.
    
    :::

1.  Optional: To customize the data gather operation, you can configure any of the following options in your `DataGather` YAML file:
    *   To disable specific gatherers, change the value of `mode` to **Custom**, and then specify the individual gatherer that you intend to disable. For example, to disable the workload gatherer, add the following example:
        ```yaml
        apiVersion: insights.openshift.io/v1
        kind: DataGather
        metadata:
          name: <your_data_gather>
        spec:
            # Gatherers configuration
          gatherers:
            mode: Custom  # Options: All, Custom
            custom:
              configs:
                # Essential cluster configuration gatherers
                - name: clusterconfig/authentication
                  state: Enabled
                - name: clusterconfig/clusteroperators
                  state: Enabled
                - name: workloads
                  state: Disabled
        ```
    *   To enable persistent storage to retain the data archive file and history for up to the last 10 data gathering jobs, define the `storage` specification. Set `type` to `PersistentVolume`, and define the `mountPath` and `name` of the volume:
        ```yaml
        apiVersion: insights.openshift.io/v1
        kind: DataGather
        metadata:
          name: <your_data_gather>
        spec:
          storage:
            type: PersistentVolume
            mountPath: /data
            persistentVolume:
              claim:
                name: on-demand-gather-pvc
        ```

        :::important

        Ensure that the volume name specified matches the existing `PersistentVolumeClaim` value in the `openshift-insights` namespace. For more information, see [Persistent volume claims](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/storage/understanding-persistent-storage#persistent-volume-claims_understanding-persistent-storage).
        
        :::

    *   To enable data obfuscation, define the `dataPolicy` key and required values. For example, to obfuscate IP addresses and workload names, add the following configuration:
        ```yaml
        apiVersion: insights.openshift.io/v1
        kind: DataGather
        metadata:
          name: <your_data_gather>
        spec:
          dataPolicy:
            - ObfuscateNetworking
            - WorkloadNames
        ```
1.  On the {{ product_title }} CLI, enter the following command to run the gather operation:
    ```terminal
    $ oc apply -f <your_data_gather_definition>.yaml
    ```

**Verification**

*   Check that your new gather operation is prefixed with your chosen name under the list of pods in the `openshift-insights` project. Upon completion, the {{ insights_operator }} automatically uploads the data to Red Hat for processing.