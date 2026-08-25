{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing DNS Operator logs {id="nw-dns-operator-logs_{{ context }}"}

You can view DNS Operator logs to troubleshoot DNS issues, verify configuration changes, and monitor activity by using the by using the `oc logs` command. {._abstract}

**Procedure**

*   View the logs of the DNS Operator by running the following command:
    ```terminal
    $ oc logs -n openshift-dns-operator deployment/dns-operator -c dns-operator
    ```