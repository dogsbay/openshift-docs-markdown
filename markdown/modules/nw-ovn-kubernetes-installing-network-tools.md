{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing network-tools on local host {id="nw-ovn-kubernetes-installing-network-tools_{{ context }}"}

Install `network-tools` on your local host for debugging {{ product_title }} cluster network issues. {._abstract}

**Procedure**

1.  Clone the `network-tools` repository onto your workstation with the following command:
    ```terminal
    $ git clone git@github.com:openshift/network-tools.git
    ```
1.  Change into the directory for the repository you just cloned:
    ```terminal
    $ cd network-tools
    ```
1.  Optional: List all available commands:
    ```terminal
    $ ./debug-scripts/network-tools -h
    ```