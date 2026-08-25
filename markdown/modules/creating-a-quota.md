{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a quota {id="creating-a-quota_{{ context }}"}

To create a quota, define a `ResourceQuota` object in a file and apply the file to a project. By doing this task, you can restrict aggregate resource consumption and object counts within the project to ensure the project complies with cluster policies. {._abstract}

**Procedure**

*   To apply resource constraints to a specific project, create a `ResourceQuota` object by using the {{ oc_first }}. Run the following `oc create` command with your definition file to enforce the limits on aggregate resource consumption and object counts specified for that namespace:
    ```terminal
    $ oc create -f <resource_quota_definition> [-n <project_name>]
    ```
    ```terminal title="Example command to create a ResourceQuota object"
    $ oc create -f core-object-counts.yaml -n demoproject
    ```