{%- set _mod_docs_content_type = "PROCEDURE" %}
# Impersonating a user when you create a project {id="impersonation-project-creation_{{ context }}"}

You can impersonate a different user when you create a project request.
Because `system:authenticated:oauth` is the only bootstrap group that can create project requests, you must impersonate that group. {._abstract}

**Procedure**

*   To create a project request on behalf of a different user:
    ```terminal
    $ oc new-project <project> --as=<user> \
        --as-group=system:authenticated --as-group=system:authenticated:oauth
    ```