{%- set _mod_docs_content_type = "PROCEDURE" %}
# Re-running a build {id="builds-basic-start-re-run_{{ context }}"}

You can manually re-run a build using the `--from-build` flag.

**Procedure**

*   To manually re-run a build, enter the following command:
    ```terminal
    $ oc start-build --from-build=<build_name>
    ```