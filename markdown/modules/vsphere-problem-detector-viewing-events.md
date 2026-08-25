{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the events from the {{ operator_name }} {id="vsphere-problem-detector-viewing-events_{{ context }}"}

After the {{ operator_name }} runs and performs the configuration checks, the Operator creates events that you can view from the command-line interface (CLI) or from the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   The {{ operator_name }} ran checks on your cluster.

**Procedure**

*   To view the events by using the CLI, run the following command:
    ```terminal
    $ oc get event -n openshift-cluster-storage-operator \
        --sort-by={.metadata.creationTimestamp}
    ```
    ```terminal title="Example output"
    16m     Normal    Started             pod/vsphere-problem-detector-operator-xxxxx         Started container vsphere-problem-detector
    16m     Normal    Created             pod/vsphere-problem-detector-operator-xxxxx         Created container vsphere-problem-detector
    16m     Normal    LeaderElection      configmap/vsphere-problem-detector-lock    vsphere-problem-detector-operator-xxxxx became leader
    ```
*   To view the events by using the {{ product_title }} web console, navigate to **Home** → **Events** and select `openshift-cluster-storage-operator` from the **Project** menu.