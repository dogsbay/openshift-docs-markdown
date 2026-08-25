{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the FlowCollector resource {id="network-observability-config-FLP-sampling_{{ context }}"}

As an alternative to using the web console, use the `oc patch` command with the `flowcollector` custom resource to quickly update specific specifications, such as eBPF sampling {._abstract}

**Procedure**

1.  Run the following command to patch the `flowcollector` CR and update the `spec.agent.ebpf.sampling` value:
    ```terminal
    $ oc patch flowcollector cluster --type=json -p "[{"op": "replace", "path": "/spec/agent/ebpf/sampling", "value": <new value>}] -n netobserv"
    ```