{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing build details {id="builds-basic-view-build-details_{{ context }}"}

You can view build details with the web console or by using the `oc describe` CLI command.

This displays information including:

*   The build source.
*   The build strategy.
*   The output destination.
*   Digest of the image in the destination registry.
*   How the build was created.

If the build uses the
{%- if openshift_origin or openshift_enterprise %}
`Docker` or
{%- endif %}
`Source` strategy, the `oc describe` output also includes information about the source revision used for the build, including the commit ID, author, committer, and message.

**Procedure**

*   To view build details, enter the following command:
    ```terminal
    $ oc describe build <build_name>
    ```