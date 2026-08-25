{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing External DNS Operator logs {id="nw-external-dns-operator-logs_{{ context }}"}

To troubleshoot DNS configuration issues, view the External DNS Operator logs. Use the `oc logs` command to retrieve diagnostic information directly from the Operator pod. {._abstract}

**Procedure**

*   View the logs of the External DNS Operator by running the following command:
    ```terminal
    $ oc logs -n external-dns-operator deployment/external-dns-operator -c external-dns-operator
    ```