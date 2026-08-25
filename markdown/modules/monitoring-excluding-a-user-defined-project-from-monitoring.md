{%- set _mod_docs_content_type = "PROCEDURE" %}
# Exclude a user-defined project from monitoring {id="excluding-a-user-defined-project-from-monitoring_{{ context }}"}

You can exclude individual user-defined projects from monitoring to reduce resource consumption or when projects use custom monitoring solutions. Exclusion is controlled by applying a label to the project namespace. {._abstract}

**Procedure**

1.  Add the label to the project namespace:
    ```terminal
    $ oc label namespace my-project 'openshift.io/user-monitoring=false'
    ```
1.  To re-enable monitoring, remove the label from the namespace:
    ```terminal
    $ oc label namespace my-project 'openshift.io/user-monitoring-'
    ```

    :::note

    If there were any active monitoring targets for the project, it can take a few minutes for Prometheus to stop scraping them after adding the label.
    
    :::