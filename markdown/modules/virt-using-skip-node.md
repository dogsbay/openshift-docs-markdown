{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using skip-node annotation {id="virt-using-skip-node_{{ context }}"}

If you want the `node-labeller` to skip a node, annotate that node by using the {{ oc_first }}. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

*   Annotate the node that you want to skip by running the following command:
    ```terminal
    $ oc annotate node <node_name> node-labeller.kubevirt.io/skip-node=true
    ```

    Replace `<node_name>` with the name of the relevant node to skip.

    Reconciliation resumes on the next cycle after the node annotation is removed or set to false.