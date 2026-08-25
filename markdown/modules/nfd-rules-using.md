{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the NodeFeatureRule custom resource {id="nfd-rules-using_{{ context }}"}

Create a `NodeFeatureRule` object to apply custom labels to nodes based on detected features, enabling targeted workload scheduling and hardware-specific configuration. {._abstract}

**Procedure**

1.  Create a custom resource file named `nodefeaturerule.yaml` that contains the following text:
    ```yaml
    apiVersion: nfd.openshift.io/v1
    kind: NodeFeatureRule
    metadata:
      name: example-rule
    spec:
      rules:
        - name: "example rule"
          labels:
            "example-custom-feature": "true"
          # Label is created if all of the rules below match
          matchFeatures:
            # Match if "veth" kernel module is loaded
            - feature: kernel.loadedmodule
              matchExpressions:
                veth: {op: Exists}
            # Match if any PCI device with vendor 8086 exists in the system
            - feature: pci.device
              matchExpressions:
                vendor: {op: In, value: ["8086"]}
    ```

    This custom resource specifies that labeling occurs when the `veth` module is loaded and a PCI device with vendor code `8086` exists in the cluster.
1.  Apply the `nodefeaturerule.yaml` file to your cluster by running the following command:
    ```terminal
    $ oc apply -f https://raw.githubusercontent.com/kubernetes-sigs/node-feature-discovery/v0.13.6/examples/nodefeaturerule.yaml
    ```

    The example applies the feature label on nodes where the `veth` module is loaded and a PCI device with vendor code `8086` exists.

    :::note

    A relabeling delay of up to 1 minute might occur.
    
    :::