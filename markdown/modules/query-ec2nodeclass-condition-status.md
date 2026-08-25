{%- set _mod_docs_content_type = "PROCEDURE" %}
# Query EC2NodeClass condition status {id="query-ec2nodeclass-condition-status_{{ context }}"}

Use the `oc` command-line interface to inspect EC2NodeClass status conditions and identify which AWS resources require configuration changes. {._abstract}

**Procedure**

1.  To view the full condition status for an EC2NodeClass, run:
    ```terminal
    $ oc get ec2nodeclass/default -o json | jq .status.conditions
    ```

    The output displays all condition types with their status, reason, and explanatory message.
1.  Optional: To view only the overall `Ready` condition, run:
    ```terminal
    $ oc get ec2nodeclass/default -o json | jq '.status.conditions[] | select(.type=="Ready")'
    ```

    The output shows the `Ready` condition type, status, reason, and message explaining why the condition is in that state.

**Verification**

*   Review the output to identify which conditions show `"status": "False"`.
*   Check the `message` field for each failed condition to determine what AWS resources need configuration changes.