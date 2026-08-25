{%- set _mod_docs_content_type = "SNIPPET" %}

*   The `DeclarativeHotplugVolumes` feature gate is enabled. To ensure this, the `HyperConverged` CR must contain the `declarativeHotplugVolumes: true` line in the `spec.featureGates` configuration section:
    ```yaml
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
      namespace: {{ CNVNamespace }}
    spec:
        featureGates:
          declarativeHotplugVolumes: true
    ```

    :::note

    The `DeclarativeHotplugVolumes` feature gate does not support hot plugging ephemeral volumes.
    
    :::