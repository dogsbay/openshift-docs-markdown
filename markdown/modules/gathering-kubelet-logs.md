{%- set _mod_docs_content_type = "PROCEDURE" %}
# Gathering kubelet logs {id="gathering-kubelet-logs_{{ context }}"}

**Procedure**

*   After the kubelet’s log level verbosity is configured properly, you can gather logs by running the following commands:
    ```terminal
    $ oc adm node-logs --role master -u kubelet
    ```
    ```terminal
    $ oc adm node-logs --role worker -u kubelet
    ```

    Alternatively, inside the node, run the following command:
    ```terminal
    $ journalctl -b -f -u kubelet.service
    ```
*   To collect master container logs, run the following command:
    ```terminal
    $ sudo tail -f /var/log/containers/*
    ```
*   To directly gather the logs of all nodes, run the following command:
    ```terminal
    - for n in $(oc get node --no-headers | awk '{print $1}'); do oc adm node-logs $n | gzip > $n.log.gz; done
    ```