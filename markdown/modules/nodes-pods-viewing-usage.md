{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing pod usage statistics {id="nodes-pods-viewing-usage_{{ context }}"}

You can display usage statistics about pods, including CPU, memory, and storage consumption. By monitoring pod usage levels you can help ensure efficient resource use. {._abstract}

**Prerequisites**

*   You must have `cluster-reader` permission to view the usage statistics.
*   Metrics must be installed to view the usage statistics.

**Procedure**

1.  View the usage statistics by entering the following command:
    ```terminal
    $ oc adm top pods -n <namespace>
    ```
    ```terminal title="Example output"
    NAME                         CPU(cores)   MEMORY(bytes)
    console-7f58c69899-q8c8k     0m           22Mi
    console-7f58c69899-xhbgg     0m           25Mi
    downloads-594fcccf94-bcxk8   3m           18Mi
    downloads-594fcccf94-kv4p6   2m           15Mi
    ```
1.  Optional: Add the `--selector=''` label to view usage statistics for pods with labels. Note that you must choose the label query to filter on, such as `=`, `==`, or `!=`. For example: 
    ```terminal
    $ oc adm top pod --selector='<pod_name>'
    ```