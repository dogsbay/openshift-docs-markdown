{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding node labels {id="cloud-experts-getting-started-managing-worker-nodes-machine-pool-labels_{{ context }}"}

You can add labels to your worker nodes by using the {{ rosa_cli_first }} tool. {._abstract}

**Procedure**

1.  Use the following command to add node labels:
    ```terminal
    rosa edit machinepool --cluster=<cluster-name> --replicas=<number-nodes> --labels='key=value' <machinepool-name>
    ```

    ***Example input***
    ```terminal
    rosa edit machinepool --cluster=my-rosa-cluster --replicas=2 --labels 'foo=bar','baz=one' new-mp
    ```

    This adds 2 labels to the new machine pool.

    :::important

    This command replaces all machine pool configurations with the newly defined configuration. If you want to add another label **and** keep the old label, you must state both the new and preexisting the label. Otherwise the command will replace all preexisting labels with the one you wanted to add. Similarly, if you want to delete a label, run the command and state the ones you want, excluding the one you want to delete.
    
    :::