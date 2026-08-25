{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure the FlowCollectorSlice as a project administrator {id="network-observability-per-tenant-flowcollector-slice-configure-project-administrator_{{ context }}"}

Project administrators can manage flow collection and data enrichment within their own namespaces by configuring a `FlowCollectorSlice` custom resource for decentralized network traffic analysis. {._abstract}

**Prerequisites**

*   The Network Observability Operator is installed.
*   You have `project-admin` permissions for the namespace.

**Procedure**

1.  Create a YAML file named `flowCollectorSlice.yaml`:
    ```yaml
    apiVersion: flows.netobserv.io/v1alpha1
    kind: FlowCollectorSlice
    metadata:
      name: flowcollectorslice-sample
      namespace: my-app
    spec:
      sampling: 1
      subnetLabels:
        - name: EXT:Database
          cidrs:
            - 192.168.50.0/24
    ```
1.  Apply the configuration by running the following command:
    ```terminal
    $ oc apply -f flowCollectorSlice.yaml
    ```

**Verification**

1.  In the {{ product_title }} console, navigate to **Observe** -> **Network Traffic**.
1.  Ensure flows to `192.168.50.0/24` subnet are observed with the `EXT:Database` label.