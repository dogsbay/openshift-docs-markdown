{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the CoreDNS logs {id="nw-dns-viewlog_{{ context }}"}

You can view CoreDNS pod logs to troubleshoot DNS issues by using the `oc logs` command. {._abstract}

**Procedure**

*   View the logs of a specific CoreDNS pod by entering the following command:
    ```terminal
    $ oc -n openshift-dns logs -c dns <core_dns_pod_name>
    ```
*   Follow the logs of all CoreDNS pods by entering the following command:
    ```terminal
    $ oc -n openshift-dns logs -c dns -l dns.operator.openshift.io/daemonset-dns=default -f --max-log-requests=<number> (1)
    ```
    *   `<number>`: Specifies the number of DNS pods to stream logs from. The maximum is 6.