{%- set _mod_docs_content_type = "PROCEDURE" %}
# Overriding CPU and memory defaults {id="virt-overriding-cpu-and-memory-defaults_{{ context }}"}

Modify the default settings for CPU and memory requests and limits for your use case by adding the `spec.resourceRequirements.storageWorkloads` stanza to the `HyperConverged` custom resource (CR). {._abstract}

**Prerequisites**

*   Install the OpenShift CLI (`oc`).

**Procedure**

1.  Edit the `HyperConverged` CR by running the following command:
    ```terminal
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Add the `spec.resourceRequirements.storageWorkloads` stanza to the CR, setting the values based on your use case. For example:
    ```yaml
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
    spec:
      resourceRequirements:
        storageWorkloads:
          limits:
            cpu: "500m"
            memory: "2Gi"
          requests:
            cpu: "250m"
            memory: "1Gi"
    ```
1.  Save and exit the editor to update the `HyperConverged` CR.