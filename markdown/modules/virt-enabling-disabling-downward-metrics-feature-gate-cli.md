{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling or disabling the downward metrics feature gate from the CLI {id="virt-enabling-disabling-downward-metrics-feature-gate-cli_{{ context }}"}

To expose downward metrics for a host virtual machine, you can enable the `downwardMetrics` feature gate by using the command line. {._abstract}

**Prerequisites**

*   You must have administrator privileges to enable the feature gate.
*   You have installed the {{ oc_first }}.

**Procedure**

*   Choose to enable or disable the `downwardMetrics` feature gate as follows:
    *   Enable the `downwardMetrics` feature gate by running the command shown in the following example:
        ```terminal
        $ oc patch {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} \
          --type json -p '[{"op": "replace", "path": \
          "/spec/featureGates/downwardMetrics", \
          "value": true}]'
        ```
    *   Disable the `downwardMetrics` feature gate by running the command shown in the following example:
        ```terminal
        $ oc patch {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} \
          --type json -p '[{"op": "replace", "path": \
          "/spec/featureGates/downwardMetrics", \
          "value": false}]'
        ```