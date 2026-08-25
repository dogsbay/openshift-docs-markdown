{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using environment variables for pipeline builds {id="builds-strategy-pipeline-environment-variables_{{ context }}"}


:::important

The Pipeline build strategy is deprecated in {{ product_title }} 4. Equivalent and improved functionality is present in the {{ product_title }} Pipelines based on Tekton.

Jenkins images on {{ product_title }} are fully supported and users should follow Jenkins user documentation for defining their `jenkinsfile` in a job or store it in a Source Control Management system.

:::


To make environment variables available to the Pipeline build process, you can add environment variables to the `jenkinsPipelineStrategy` definition of the build configuration.

Once defined, the environment variables will be set as parameters for any Jenkins job associated with the build configuration.

**Procedure**

*   To define environment variables to be used during build, edit the YAML file:
    ```yaml
    jenkinsPipelineStrategy:
    ...
      env:
        - name: "FOO"
          value: "BAR"
    ```

You can also manage environment variables defined in the build configuration with the `oc set env` command.