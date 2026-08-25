{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the NUMA Resources Operator using the CLI {id="cnf-installing-numa-resources-operator-cli_{{ context }}"}

To enable NUMA-aware scheduling for high-performance workloads, install the NUMA Resources Operator by using the {{ oc_first }}. As a cluster administrator, you can deploy the Operator efficiently without using the web console. {._abstract}

**Prerequisites**

*   Installed the {{ oc_first }}.
*   Logged in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create a namespace for the NUMA Resources Operator:
    1.  Save the following YAML in the `nro-namespace.yaml` file:
        ```yaml
        apiVersion: v1
        kind: Namespace
        metadata:
          name: openshift-numaresources
        # ...
        ```
    1.  Create the `Namespace` CR by running the following command:
        ```terminal
        $ oc create -f nro-namespace.yaml
        ```
1.  Create the Operator group for the NUMA Resources Operator:
    1.  Save the following YAML in the `nro-operatorgroup.yaml` file:
        ```yaml
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          name: numaresources-operator
          namespace: openshift-numaresources
        spec:
          targetNamespaces:
          - openshift-numaresources
        # ...
        ```
    1.  Create the `OperatorGroup` CR by running the following command:
        ```terminal
        $ oc create -f nro-operatorgroup.yaml
        ```
1.  Create the subscription for the NUMA Resources Operator:
    1.  Save the following YAML in the `nro-sub.yaml` file:
        ```yaml {minja}
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: numaresources-operator
          namespace: openshift-numaresources
        spec:
          channel: "{{ product_version }}"
          name: numaresources-operator
          source: redhat-operators
          sourceNamespace: openshift-marketplace
        # ...
        ```
    1.  Create the `Subscription` CR by running the following command:
        ```terminal
        $ oc create -f nro-sub.yaml
        ```

**Verification**

1.  Verify that the installation succeeded by inspecting the CSV resource in the `openshift-numaresources` namespace. Run the following command:
    ```terminal
    $ oc get csv -n openshift-numaresources
    ```
    ```terminal title="Example output" {minja}
    NAME                             DISPLAY                  VERSION   REPLACES   PHASE
    numaresources-operator.v{{ product_version }}.2   numaresources-operator   {{ product_version }}.2               Succeeded
    ```