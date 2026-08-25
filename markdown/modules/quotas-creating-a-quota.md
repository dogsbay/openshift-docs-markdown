{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a quota {id="quotas-creating-a-quota_{{ context }}"}

Create a defined quota in the project to limit resource consumption and object counts, preventing cluster resource exhaustion. {._abstract}

**Procedure**

1.  Define the quota in a file.
1.  Use the file to create the quota and apply it to a project:
    ```terminal
    $ oc create -f <file> [-n <project_name>]
    ```

    For example:
    ```terminal
    $ oc create -f core-object-counts.yaml -n demoproject
    ```