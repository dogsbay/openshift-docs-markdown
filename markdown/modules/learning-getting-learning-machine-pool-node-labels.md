{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding node labels {id="learning-getting-started-learning-machine-pool-node-labels_{{ context }}"}

To provide a description or extra information, you can add node labels to your machine pools by using the {{ rosa_cli }}. {._abstract}

**Procedure**

*   Use the following command to add node labels:
    ```terminal
    $ rosa edit machinepool --cluster=<cluster-name> --replicas=<number-nodes> --labels='key=value' <machinepool-name>
    ```

    **For example**:
    ```terminal
    $ rosa edit machinepool --cluster=my-rosa-cluster --replicas=2 --labels 'foo=bar','baz=one' new-mp
    ```

    This adds 2 labels to the new machine pool.

    :::important

    This command replaces all machine pool configurations with the newly defined configuration. If you want to add another label **and** keep the old label, you must state both the new and the preexisting label. Otherwise the command will replace all preexisting labels with the one you wanted to add. Similarly, if you want to delete a label, run the command and state the ones you want, excluding the one you want to delete.
    
    :::