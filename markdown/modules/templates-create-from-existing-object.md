{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a template from existing objects {id="templates-create-from-existing-object_{{ context }}"}

To create a template from existing objects in your project, export those objects and add parameters and other template customizations. Reusing deployed resources helps you capture a working configuration that others can deploy consistently from the template. {._abstract}

**Procedure**

*   Export objects in a project by running the following command:
    ```terminal
    $ oc get -o yaml all > <yaml_filename>
    ```

    You can also substitute a particular resource type or multiple resources instead of `all`. Run `oc get -h` for more examples.

    The object types included in `oc get -o yaml all` are:
    *   `BuildConfig`
    *   `Build`
    *   `DeploymentConfig`
    *   `ImageStream`
    *   `Pod`
    *   `ReplicationController`
    *   `Route`
    *   `Service`

        :::note

        Using the `all` alias is not recommended because the contents might vary across different clusters and versions. Instead, specify all required resources.
        
        :::