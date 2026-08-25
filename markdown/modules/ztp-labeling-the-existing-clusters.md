{%- set _mod_docs_content_type = "PROCEDURE" %}
# Labeling the existing clusters {id="ztp-labeling-the-existing-clusters_{{ context }}"}

To ensure that existing clusters remain untouched by the tool updates, label all existing managed clusters with the `ztp-done` label. {._abstract}


:::note

This procedure only applies when updating clusters that were not provisioned with {{ cgu_operator_first }}. Clusters that you provision with {{ cgu_operator }} are automatically labeled with `ztp-done`.

:::


**Procedure**

1.  Find a label selector that lists the managed clusters that were deployed with {{ ztp_first }}, such as `local-cluster!=true`:
    ```terminal
    $ oc get managedcluster -l 'local-cluster!=true'
    ```
1.  Ensure that the resulting list contains all the managed clusters that were deployed with {{ ztp }}, and then use that selector to add the `ztp-done` label:
    ```terminal
    $ oc label managedcluster -l 'local-cluster!=true' ztp-done=
    ```