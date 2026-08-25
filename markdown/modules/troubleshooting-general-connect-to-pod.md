{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connecting to a pod {id="troubleshooting-general-connect-to-pod_{{ context }}"}

You can directly connect to a currently running pod with the `oc rsh` command, which provides you with a shell on that pod. {._abstract}


:::warning

In pods that run a low-latency application, latency issues can occur when you run the `oc rsh` command.
Use the `oc rsh` command only if you cannot connect to the node by using the `oc debug` command.

:::


**Procedure**

*   Connect to your pod by running the following command:
    ```terminal
    $ oc rsh -n <namespace> busybox-1
    ```

    For more information, see "oc rsh" and "Accessing running pods".