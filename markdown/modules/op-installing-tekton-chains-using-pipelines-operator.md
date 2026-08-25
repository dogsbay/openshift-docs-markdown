{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ tekton_chains }} using the {{ pipelines_title }} Operator {id="installing-tekton-chains-using-pipelines-operator_{{ context }}"}

Cluster administrators can use the `TektonChain` custom resource (CR) to install and manage {{ tekton_chains }}.


:::note

{{ tekton_chains }} is an optional component of {{ pipelines_title }}. Currently, you cannot install it using the `TektonConfig` CR.

:::


**Prerequisites**

*   Ensure that the {{ pipelines_title }} Operator is installed in the `openshift-pipelines` namespace on your cluster.

**Procedure**

1.  Create the `TektonChain` CR for your {{ product_title }} cluster.
    ```yaml
    apiVersion: operator.tekton.dev/v1alpha1
    kind: TektonChain
    metadata:
      name: chain
    spec:
      targetNamespace: openshift-pipelines
    ```
1.  Apply the `TektonChain` CR.
    ```terminal
    $ oc apply -f TektonChain.yaml (1)
    ```
    1.  Substitute with the file name of the `TektonChain` CR.
1.  Check the status of the installation.
    ```terminal
    $ oc get tektonchains.operator.tekton.dev
    ```