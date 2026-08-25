{%- set _mod_docs_content_type = "PROCEDURE" %}
# Managing KubeMacPool by using the CLI {id="virt-managing-kubemacpool-cli_{{ context }}"}

You can disable and re-enable KubeMacPool by using the command line. {._abstract}

KubeMacPool is enabled by default.

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

*   To disable KubeMacPool in two namespaces, run the following command:
    ```terminal
    $ oc label namespace <namespace1> <namespace2> mutatevirtualmachines.kubemacpool.io=ignore
    ```
*   To re-enable KubeMacPool in two namespaces, run the following command:
    ```terminal
    $ oc label namespace <namespace1> <namespace2> mutatevirtualmachines.kubemacpool.io-
    ```