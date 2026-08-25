{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing downward metrics by using the CLI {id="virt-viewing-downward-metrics-cli_{{ context }}"}

You can view downward metrics by entering a command from inside a guest virtual machine (VM). {._abstract}

**Procedure**

*   Run the following commands:
    ```terminal
    $ sudo sh -c 'printf "GET /metrics/XML\n\n" > /dev/virtio-ports/org.github.vhostmd.1'
    ```
    ```terminal
    $ sudo cat /dev/virtio-ports/org.github.vhostmd.1
    ```