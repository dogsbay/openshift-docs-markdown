{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure certificate rotation in `HyperConverged` CR {id="virt-configuring-certificate-rotation_{{ context }}"}

If you did not configure certificate rotation during {{ VirtProductName }} installation in the web console, you can use the `HyperConverged` custom resource (CR) to apply the configuration after installation. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Open the `HyperConverged` CR by running the following command:
    ```terminal {minja}
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Edit the `spec.security.certConfig` fields as shown in the following example. To avoid overloading the system, ensure that all values are greater than or equal to 10 minutes. Express all values as strings that comply with the golang `ParseDuration` format.
    ```yaml {minja}
    apiVersion: hco.kubevirt.io/v1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
      namespace: {{ CNVNamespace }}
    spec:
      security:
        certConfig:
          ca:
            duration: 48h0m0s
            renewBefore: 24h0m0s
          server:
            duration: 24h0m0s
            renewBefore: 12h0m0s
    ```
    *   `ca.renewBefore`: Set to a value less than or equal to the value of `ca.duration`.
    *   `server.duration`: Set to a value less than or equal to the value of `ca.duration`.
    *   `server.renewBefore`; Set to a value less than or equal to the value of `server.duration`.
1.  Apply updates to the `HyperConverged` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

    For example:
    ```terminal
    $ oc apply -f kubevirt-hyperconverged.yaml
    ```