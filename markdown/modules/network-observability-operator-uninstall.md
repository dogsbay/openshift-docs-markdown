{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the Network Observability Operator {id="network-observability-operator-uninstall_{{ context }}"}

Uninstall the Network Observability Operator using the {{ product_title }} web console Operator Hub, working in the **Ecosystem** → **Installed Operators** area. {._abstract}

**Procedure**

1.  Remove the `FlowCollector` custom resource.
    1.  Click **Flow Collector**, which is next to the **Network Observability Operator** in the **Provided APIs** column.
    1.  Click the Options menu {{ kebab }} for the **cluster** and select **Delete FlowCollector**.
1.  Uninstall the Network Observability Operator.
    1.  Navigate back to the **Ecosystem** → **Installed Operators** area.
    1.  Click the Options menu {{ kebab }} next to the  **Network Observability Operator** and select **Uninstall Operator**.
    1.  **Home** → **Projects** and select `openshift-netobserv-operator`
    1.  Navigate to **Actions** and select **Delete Project**
1.  Remove the `FlowCollector` custom resource definition (CRD).
    1.  Navigate to **Administration** → **CustomResourceDefinitions**.
    1.  Look for **FlowCollector** and click the Options menu {{ kebab }}.
    1.  Select **Delete CustomResourceDefinition**.

        :::important

        The {{ loki_op }} and Kafka remain if they were installed and must be removed separately. Additionally, you might have remaining data stored in an object store, and a persistent volume that must be removed.
        
        :::