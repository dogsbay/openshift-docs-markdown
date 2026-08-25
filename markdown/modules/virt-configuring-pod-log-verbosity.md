{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring {{ VirtProductName }} pod log verbosity {id="virt-configuring-pod-log-verbosity_{{ context }}"}

To gather more detailed diagnostic information for troubleshooting, you can configure the verbosity level of {{ VirtProductName }} pod logs. Edit the `HyperConverged` custom resource (CR) to configure this setting. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  To set log verbosity for specific components, open the `HyperConverged` CR in your default text editor by running the following command:
    ```terminal
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Set the log level for one or more components by editing the `spec.logVerbosityConfig` stanza. For example:
    ```yaml
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
    spec:
      logVerbosityConfig:
        kubevirt:
          virtAPI: 5
          virtController: 4
          virtHandler: 3
          virtLauncher: 2
          virtOperator: 6
    ```

    The log verbosity value must be an integer in the range `1–9`, where a higher number indicates a more detailed log. In this example, the `virtAPI` component logs are exposed if their priority level is `5` or higher.
1.  Apply your changes by saving and exiting the editor.