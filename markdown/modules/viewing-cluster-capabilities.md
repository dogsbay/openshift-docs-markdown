{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the cluster capabilities {id="viewing-cluster-capabilities_{{ context }}"}

As a cluster administrator, you can view the capabilities by using the `clusterversion` resource status. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

*   To view the status of the cluster capabilities, run the following command:
    ```terminal
    $ oc get clusterversion version -o jsonpath='{.spec.capabilities}{"\n"}{.status.capabilities}{"\n"}'
    ```
    ```terminal title="Example output"
    {"additionalEnabledCapabilities":["openshift-samples"],"baselineCapabilitySet":"None"}
    {"enabledCapabilities":["openshift-samples"],"knownCapabilities":["CSISnapshot","Console","Insights","Storage","baremetal","marketplace","openshift-samples"]}
    ```