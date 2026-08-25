{%- set _mod_docs_content_type = "PROCEDURE" %}
# Running a command on a pod {id="troubleshooting-run-command-on-pod_{{ context }}"}

If you want to run a command or set of commands on a pod without directly logging into it, you can use the `oc exec -it` command.
You can interact with the pod quickly to get process or output information from the pod.
A common use case is to run the `oc exec -it` command inside a script to run the same command on multiple pods in a replica set or deployment. {._abstract}


:::warning

In pods that run a low-latency application, the `oc exec` command can cause latency issues.

:::


**Procedure**

*   To run a command on a pod without logging into it, run the following command:
    ```terminal
    $ oc exec -it <pod> -- <command>
    ```

    For more information, see "oc exec" and "Executing remote commands in containers".