{%- set _mod_docs_content_type = "CONCEPT" %}
# oc command errors in {{ microshift_short }} {id="microshift-oc-apis-errors_{{ context }}"}

Not all {{ oc_first }} commands are relevant for {{ microshift_short }} deployments. When you use `oc` to make a request call against an unsupported API, the `oc` binary usually generates an error message about a resource that cannot be found. {._abstract}

*   For example, when you run the following `new-project` command:
    ```terminal
    $ oc new-project test
    ```

    The following error message can be generated:
    ```terminal
    Error from server (NotFound): the server could not find the requested resource (get projectrequests.project.openshift.io)
    ```
*   When you run the `get projects` command, another error can be generated as follows:
    ```terminal
    $ oc get projects
    ```

    The following error message can be generated:
    ```terminal
    error: the server doesn't have a resource type "projects"
    ```