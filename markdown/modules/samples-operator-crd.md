{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing the Cluster Samples Operator configuration {id="samples-operator-crd_{{ context }}"}

You can configure the Cluster Samples Operator by editing the file with the provided parameters. {._abstract}

**Prerequisites**

*   You installed the {{ oc_first }}.

**Procedure**

*   Access the Cluster Samples Operator configuration by running the following command:
    ```terminal
    $ oc edit configs.samples.operator.openshift.io/cluster
    ```

    The Cluster Samples Operator configuration resembles the following example:
    ```yaml
    apiVersion: samples.operator.openshift.io/v1
    kind: Config
    # ...
    ```