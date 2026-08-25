{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure DNS domain tracking for network observability {id="network-observability-dns-resolution-analysis-configure_{{ context }}"}

Enable DNS tracking in the Network Observability Operator to monitor DNS query names, response codes, and latency for network flows within the cluster. {._abstract}

**Prerequisites**

*   The Network Observability Operator is installed.
*   You have `cluster-admin` privileges.
*   You are familiar with the `FlowCollector` custom resource.

**Procedure**

1.  Edit the `FlowCollector` resource by running the following command:
    ```terminal
    $ oc edit flowcollector cluster
    ```
1.  Configure the eBPF agent to enable the DNS tracking feature:
    ```yaml
    apiVersion: flows.netobserv.io/v1alpha1
    kind: FlowCollector
    metadata:
      name: cluster
    spec:
      agent:
        type: eBPF
        ebpf:
          features:
            - DNSTracking
    ```

    where:

    `spec.agent.type.ebpf.features`
    :   Specifies the list of features to enable for the eBPF agent. To enable DNS tracking, add `DNSTracking` to this list.

1.  Save and exit the editor.

**Verification**

1.  In the {{ product_title }} web console, navigate to **Observe** → **Network Traffic**.
1.  In the **Traffic Flows** view, click the **Manage columns** icon.
1.  Ensure that the **DNS Query Name**, **DNS Response Code**, and **DNS Latency** columns are selected.
1.  Filter the results by setting **Port** to `53`.
1.  Confirm that the flow table columns are populated with domain names and DNS metadata.