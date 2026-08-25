{%- set _mod_docs_content_type = "PROCEDURE" %}
# Watching for failed pods {id="troubleshooting-clusters-check-for-failed-pods_{{ context }}"}

To reduce troubleshooting time, regularly monitor for failed pods in your cluster. {._abstract}

**Procedure**

*   To watch for failed pods, run the following command:
    ```terminal
    $ oc get po -A | grep -Eiv 'complete|running'
    ```