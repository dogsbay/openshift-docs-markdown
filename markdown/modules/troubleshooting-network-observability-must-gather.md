{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the must-gather tool {id="network-observability-must-gather_{{ context }}"}

Use the must-gather tool to collect diagnostic information about Network Observability Operator resources, including pod logs and configuration details, to assist in troubleshooting cluster issues. {._abstract}

**Procedure**

1.  Navigate to the directory where you want to store the must-gather data.
1.  Run the following command to collect cluster-wide must-gather resources:
    ```terminal
    $ oc adm must-gather
     --image-stream=openshift/must-gather \
     --image=quay.io/netobserv/must-gather
    ```