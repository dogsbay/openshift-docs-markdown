{%- set _mod_docs_content_type = "PROCEDURE" %}
# Collecting data for Red Hat Support {id="gathering-cluster-data_{{ context }}"}

You can use the `oc adm must-gather` CLI command to collect the information about your {{ kueue_name }} instance that is most likely needed for debugging issues. {._abstract}

Information collected includes:

*   {{ kueue_name }} custom resources, such as workloads, cluster queues, local queues, resource flavors, admission checks, and their corresponding cluster resource definitions (CRDs)
*   Services
*   Endpoints
*   Webhook configurations
*   Logs from the `openshift-kueue-operator` namespace and `kueue-controller-manager` pods

Collected data is written into a new directory named `must-gather/` in the current working directory by default.

**Prerequisites**

*   The {{ kueue_name }} Operator is installed on your cluster.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Navigate to the directory where you want to store the `must-gather` data.
1.  Collect `must-gather` data by running the following command:
    ```terminal
    $ oc adm must-gather \
      --image=registry.redhat.io/kueue/kueue-must-gather-rhel9:<version>
    ```

    Where `<version>` is your current version of {{ kueue_name }}.
1.  Create a compressed file from the `must-gather` directory that was just created in your working directory. Make sure you provide the date and cluster ID for the unique `must-gather` data. For more information about how to find the cluster ID, see "How to find the cluster-id or name on OpenShift cluster".
1.  Attach the compressed file to your support case on the **Customer Support** page of the Red&#160;Hat Customer Portal.