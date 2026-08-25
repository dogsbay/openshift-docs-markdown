{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a namespace for secondary user-defined networks by using the CLI {id="virt-creating-secondary-udn-namespace_{{ context }}"}

You can create a namespace to be used with an existing secondary cluster-scoped user-defined network (CUDN) by using the CLI. {._abstract}

**Prerequisites**

*   You are logged in to the cluster as a user with `cluster-admin` permissions.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a `Namespace` object similar to the following example:
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: red
    # ...
    ```
1.  Apply the `Namespace` manifest by running the following command:
    ```terminal
    oc apply -f <filename>.yaml
    ```

    where:

    `<filename>`
    :   Specifies the name of your `Namespace` manifest YAML file.