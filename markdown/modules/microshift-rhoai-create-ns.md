{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a namespace for your AI model on {{ microshift_short }} {id="microshift-rhoai-create-namespace_{{ context }}"}

Create a namespace for your AI model and all other resources. Namespaces offer resource isolation, resource management, and access control. {._abstract}

**Prerequisites**

*   You have root user access to your machine.
*   The {{ oc_first }} is installed.

**Procedure**

*   Create a new namespace by running the following command:
    ```terminal
    $ oc create ns _<namespace_name>_
    ```

    where:

    `_<namespace_name>_`
    :   Specifies the namespace name to use. In the following examples, `ai-demo` is used.

**Verification**

*   Verify that you created the namespace by running the following command:
    ```terminal
    $ oc get ns _<namespace_name>_
    ```

    where:

    `_<namespace_name>_`
    :   Specifies the namespace name you want to use. In the following examples, `ai-demo` is used.
    ```text title="Example output"
    NAME                STATUS  AGE
    ai-demo             Active  1h
    ```