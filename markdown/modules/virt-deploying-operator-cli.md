{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the {{ VirtProductName }} Operator by using the CLI {id="virt-deploying-operator-cli_{{ context }}"}

You can deploy the {{ VirtProductName }} Operator by using the `oc` CLI. {._abstract}

**Prerequisites**

*   Install the {{ oc_first }}.
*   Subscribe to the {{ VirtProductName }} catalog in the `{{ CNVNamespace }}`{minja} namespace.
*   Log in as a user with `cluster-admin` privileges.
{%- if openshift_rosa or openshift_dedicated or openshift_rosa_hcp %}
*   Create a machine pool based on a bare metal compute node instance type.
{%- endif %}

**Procedure**

1.  Create a YAML file that contains the following manifest:
    ```yaml {minja}
    apiVersion: hco.kubevirt.io/v1beta1
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