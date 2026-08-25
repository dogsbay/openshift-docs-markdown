{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restricting build strategies to users globally {id="builds-restricting-build-strategy-globally_{{ context }}"}

You can allow a set of specific users to create builds with a particular strategy.

**Procedure**

*   Assign the role that corresponds to the build strategy to a specific user. For
example, to add the `system:build-strategy-docker` cluster role to the user
`devuser`:
    ```terminal
    $ oc adm policy add-cluster-role-to-user system:build-strategy-docker devuser
    ```

    :::warning

    Granting a user access at the cluster level to the `builds/docker` subresource means that the user can create builds with the docker strategy in any project in which they can create builds.
    
    :::