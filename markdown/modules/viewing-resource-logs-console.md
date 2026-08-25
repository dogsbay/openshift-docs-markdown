{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing resource logs by using the web console {id="viewing-resource-logs-console_{{ context }}"}

You can view resource logs by using the {{ product_title }} web console. By viewing logs for resources, you can troubleshoot issues and monitor resource behavior. {._abstract}

**Procedure**

1.  In the {{ product_title }} console, navigate to **Workloads** -> **Pods** or navigate to the pod through the resource you want to investigate.

    :::note

    Some resources, such as builds, do not have pods to query directly. In such instances, you can locate the **Logs** link on the **Details** page for the resource.
    
    :::

1.  Select a project from the drop-down menu.
1.  Click the name of the pod you want to investigate.
1.  Click **Logs**.