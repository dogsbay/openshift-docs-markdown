{%- set _mod_docs_content_type = "PROCEDURE" %}

# Installing odo on VS Code {id="installing-odo-on-vs-code_{{ context }}"}

The [OpenShift VS Code extension](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-openshift-connector) uses both `odo` and the `oc` binary to interact with your {{ product_title }} cluster. To work with these features, install the OpenShift VS Code extension on VS Code.

**Prerequisites**

*   You have installed VS Code.

**Procedure**

1.  Open VS Code.
1.  Launch VS Code Quick Open with `Ctrl`+`P`.
1.  Enter the following command:
    ```
    $ ext install redhat.vscode-openshift-connector
    ```