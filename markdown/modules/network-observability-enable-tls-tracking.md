{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable Transport Layer Security tracking {id="network-observability-enable-tls-tracking_{{ context }}"}

Enable Transport Layer Security (TLS) tracking to monitor encryption protocols and identify security risks in the cluster. {._abstract}


:::note

TLS fields only appear in flows for connections that perform a TLS handshake after the feature is enabled.

:::


**Prerequisites**

*   The Network Observability Operator is installed.
*   The `FlowCollector` custom resource (CR) is configured with `spec.agent.type: eBPF`.
*   Access to the cluster with `cluster-admin` privileges.

**Procedure**

1.  Edit the `FlowCollector` CR by running the following command:
    ```terminal
    $ oc edit flowcollector cluster
    ```
1.  Add `TLSTracking` to the `spec.agent.ebpf.features` list:
    ```yaml
    apiVersion: flows.netobserv.io/v1beta2
    kind: FlowCollector
    metadata:
      name: cluster
    spec:
      agent:
        type: eBPF
        ebpf:
          features:
          - TLSTracking
    # ...
    ```

    where:

    `spec.agent.ebpf.features`
    :   Specifies the list of eBPF agent features to enable. Add `TLSTracking` to this array to enable TLS metadata capture from handshake messages.

1.  Save and exit your editor.

**Verification**

1.  Confirm that the eBPF agent pods have restarted by running the following command:
    ```terminal
    $ oc get pods -n netobserv-privileged
    ```
    ```terminal title="Example output"
    NAME                                    READY   STATUS    RESTARTS   AGE
    netobserv-ebpf-agent-abc12              1/1     Running   0          2m
    ```
1.  Verify the TLS tracking feature is active by running the following command:
    ```terminal
    $ oc logs -n netobserv-privileged ds/netobserv-ebpf-agent | grep "EnableTLSTracking"
    ```
    ```terminal title="Example output"
    EnableTLSTracking:true
    ```

    The output confirms that the TLS tracking feature has been initialized in the eBPF agent.