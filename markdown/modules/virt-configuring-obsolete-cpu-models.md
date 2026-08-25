{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring obsolete CPU models {id="virt-configuring-obsolete-cpu-models_{{ context }}"}

You can configure a list of obsolete CPU models by editing the `HyperConverged` custom resource (CR). {._abstract}

**Procedure**

*   Edit the `HyperConverged` custom resource, specifying the obsolete CPU models in the `obsoleteCPUs` array. For example:
    ```yaml {minja}
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
      namespace: {{ CNVNamespace }}
    spec:
      obsoleteCPUs:
        cpuModels:
          - "<obsolete_cpu_1>"
          - "<obsolete_cpu_2>"
    ```

    Replace the example values in the `cpuModels` array with obsolete CPU models. Any value that you specify is added to a predefined list of obsolete CPU models. The predefined list is not visible in the CR.