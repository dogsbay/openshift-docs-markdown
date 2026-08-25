{%- set _mod_docs_content_type = "PROCEDURE" %}
# Moving applications to pods within the cluster {id="troubleshooting-bmn-move-apps-to-pods_{{ context }}"}

For scheduled hardware maintenance, you need to consider how to move your application pods to other nodes within the cluster without affecting the pod workload. {._abstract}

**Procedure**

*   Mark the node as unschedulable by running the following command:
    ```terminal
    $ oc adm cordon <node_name>
    ```

    When the node is unschedulable, no pods can be scheduled on the node. For more information, see "Working with nodes".

    :::note

    When moving CNF applications, you might need to verify ahead of time that there are enough additional worker nodes in the cluster due to anti-affinity and pod disruption budget.
    
    :::