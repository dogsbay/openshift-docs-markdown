{%- set _mod_docs_content_type = "PROCEDURE" %}
# Cleaning the Network Observability CLI {id="network-observability-cli-uninstall_{{ context }}"}

Use `oc netobserv cleanup` to manually remove all components installed by the Network Observability CLI from your cluster. While the client runs this command automatically after a capture, you may need to run it manually if you face connectivity issues. {._abstract}

**Procedure**

*   Run the following command:
    ```terminal
    $ oc netobserv cleanup
    ```