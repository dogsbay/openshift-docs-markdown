{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploy the {{ VirtProductName }} Operator by using the CLI {id="virt-deploying-operator-cli_{{ context }}"}

You can deploy the {{ VirtProductName }} Operator by using the `oc` CLI. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in as a user with `cluster-admin` privileges.
*   You have subscribed to the {{ VirtProductName }} catalog in the `{{ CNVNamespace }}`{minja} namespace.

**Procedure**

1.  Create a YAML file that contains the following manifest:
    ```yaml {minja}
    apiVersion: hco.kubevirt.io/v1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
      namespace: {{ CNVNamespace }}
    spec:
    ```
1.  Deploy the {{ VirtProductName }} Operator by running the following command:
    ```terminal
    $ oc apply -f <file_name>.yaml
    ```

**Verification**

*   Ensure that {{ VirtProductName }} deployed successfully by watching the `PHASE` of the cluster service version (CSV) in the `{{ CNVNamespace }}`{minja} namespace. Run the following command:
    ```terminal {minja}
    $ watch oc get csv -n {{ CNVNamespace }}
    ```

    The following output displays if deployment was successful:
    ```terminal {minja}
    NAME                                      DISPLAY                    VERSION   REPLACES   PHASE
    kubevirt-hyperconverged-operator.v{{ HCOVersion }}   {{ VirtProductName }}   {{ HCOVersion }}                Succeeded
    ```