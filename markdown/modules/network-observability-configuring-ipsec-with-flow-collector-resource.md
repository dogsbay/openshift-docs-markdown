{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring IPsec with the FlowCollector custom resource {id="network-observability-configuring-ipsec-with-flow-collector-resource_{{ context }}"}

Enable IPsec tracking in the `FlowCollector` resource to monitor encrypted traffic, adding an IPsec status column to the traffic flow view and generating a dedicated encryption dashboard. {._abstract}

In {{ product_title }}, IPsec is disabled by default. You can enable IPsec by following the instructions in "Configuring IPsec encryption".

**Prerequisite**

*   You have enabled IPsec encryption on {{ product_title }}.

**Procedure**

1.  In the web console, navigate to **Ecosystem** → **Installed Operators**.
1.  Under the **Provided APIs** heading for the **NetObserv Operator**, select **Flow Collector**.
1.  Select **cluster** then select the **YAML** tab.
1.  Configure the `FlowCollector` custom resource for IPsec:
    ```yaml title="Example configuration of FlowCollector for IPsec"
    apiVersion: flows.netobserv.io/v1beta2
    kind: FlowCollector
    metadata:
      name: cluster
    spec:
      namespace: netobserv
      agent:
        type: eBPF
        ebpf:
          features:
          - "IPSec"
    ```

**Verification**

When IPsec is enabled:

*   A new column named **IPsec Status** is displayed in the network observability **Traffic flows** view to show whether a flow was successfully IPsec-encrypted or if there was an error during encryption/decryption.
*   A new dashboard showing the percent of encrypted traffic is generated.