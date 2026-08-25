{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disable the Network Observability Operator FlowCollectorSlice {id="network-observability-per-tenant-flowcollector-slice-disable_{{ context }}"}

Disable slice-based filtering in the Network Observability Operator to resume global flow collection while preserving existing `FlowCollectorSlice` resources. {._abstract}

**Procedure**

1.  Edit the `FlowCollector` resource by running the following command:
    ```terminal
    $ oc edit flowcollector cluster
    ```
1.  Set the `spec.processor.slicesConfig.collectionMode` field to `AlwaysCollect`:
    ```yaml
    apiVersion: flows.netobserv.io/v1beta2
    kind: FlowCollector
    metadata:
      name: cluster
    spec:
      processor:
        slicesConfig:
          enable: true
          collectionMode: AlwaysCollect
          ...
    ```
1.  Save the changes.

    Flow collection resumes for all traffic, and existing `FlowCollectorSlice` resources remain available for future use.