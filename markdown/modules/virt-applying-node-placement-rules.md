{%- set _mod_docs_content_type = "PROCEDURE" %}
# Applying node placement rules {id="virt-applying-node-place-rules_{{ context }}"}

You can apply node placement rules to ensure that virtualization components run on the most suitable nodes for your workload requirements. You can apply node placement rules by editing {{ VirtProductName }} objects. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You are logged in with cluster administrator permissions.

**Procedure**

1.  Edit the object in your default editor by running the following command:
    ```terminal {minja}
    $ oc edit <resource_type> <resource_name> -n {{ CNVNamespace }}
    ```
1.  Save the file to apply the changes.