{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing a CNI plugin {id="rosa-hcp-no-cni-install-cni-plugin_{{ context }}"}

After creating a {{ product_title }} cluster without a CNI plugin, you must install the CNI plugin before the cluster nodes are ready and workloads can deploy. Until you install a CNI provider, components such as the web console, Ingress Controller, image registry, and monitoring stack are not available. {._abstract}

**Procedure**

*   Install your CNI plugin.

    The nodes change from the `not ready` to `ready` state.