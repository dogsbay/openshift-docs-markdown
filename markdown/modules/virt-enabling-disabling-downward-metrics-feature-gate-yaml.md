{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling or disabling the downward metrics feature gate in a YAML file {id="virt-enabling-disabling-downward-metrics-feature-gate-yaml_{{ context }}"}

To expose downward metrics for a host virtual machine, you can enable the `downwardMetrics` feature gate by editing a YAML file. {._abstract}

**Prerequisites**

*   You must have administrator privileges to enable the feature gate.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Open the HyperConverged custom resource (CR) in your default editor by running the following command:
    ```terminal
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Choose to enable or disable the downwardMetrics feature gate as follows:
    *   To enable the `downwardMetrics` feature gate, add and then set `spec.featureGates.downwardMetrics` to `true`. For example:
        ```yaml
        apiVersion: hco.kubevirt.io/v1beta1
        kind: HyperConverged
        metadata:
          name: kubevirt-hyperconverged
          namespace: {{ CNVNamespace }}
        spec:
            featureGates:
              downwardMetrics: true
        # ...
        ```
    *   To disable the `downwardMetrics` feature gate, set `spec.featureGates.downwardMetrics` to `false`. For example:
        ```yaml
        apiVersion: hco.kubevirt.io/v1beta1
        kind: HyperConverged
        metadata:
          name: kubevirt-hyperconverged
          namespace: {{ CNVNamespace }}
        spec:
            featureGates:
              downwardMetrics: false
        # ...
        ```