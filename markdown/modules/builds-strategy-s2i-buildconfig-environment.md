{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using source-to-image build configuration environment {id="builds-strategy-s2i-buildconfig-environment_{{ context }}"}

You can add environment variables to the `sourceStrategy` definition of the build configuration. The environment variables defined there are visible during the `assemble` script execution and will be defined in the output image, making them also available to the `run` script and application code.

**Procedure**

*   For example, to disable assets compilation for your Rails application:
    ```yaml
    sourceStrategy:
    ...
      env:
        - name: "DISABLE_ASSET_COMPILATION"
          value: "true"
    ```

**Additional resources**
{._additional-resources}

*   The build environment section provides more advanced instructions.
*   You can also manage environment variables defined in the build configuration with the `oc set env` command.