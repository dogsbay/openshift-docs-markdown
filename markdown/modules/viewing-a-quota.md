{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing a quota {id="viewing-a-quota_{{ context }}"}

To monitor usage statistics against defined hard limits, navigate to the **Quota** page in the web console. Alternatively, you can use the CLI to view detailed quota information for the project. {._abstract}

**Procedure**

1.  Get the list of quotas defined in the project by entering the following command:
    ```terminal title="Example command with a project called demoproject"
    $ oc get quota -n demoproject
    ```
    ```terminal title="Example output"
    NAME                AGE
    besteffort          11m
    compute-resources   2m
    core-object-counts  29m
    ```
1.  Describe the target quota by entering the following command:
    ```terminal title="Example command for the core-object-counts quota"
    $ oc describe quota core-object-counts -n demoproject
    ```
    ```terminal title="Example output"
    Name:			core-object-counts
    Namespace:		demoproject
    Resource		Used	Hard
    --------		----	----
    configmaps		3	10
    persistentvolumeclaims	0	4
    replicationcontrollers	3	20
    secrets			9	10
    services		2	10
    ```