{%- set _mod_docs_content_type = "CONCEPT" %}
# Pipeline build {id="builds-strategy-pipeline-build_{{ context }}"}


:::important

The Pipeline build strategy is deprecated in {{ product_title }} 4. Equivalent and improved functionality is present in the {{ product_title }} Pipelines based on Tekton.

Jenkins images on {{ product_title }} are fully supported and users should follow Jenkins user documentation for defining their `jenkinsfile` in a job or store it in a Source Control Management system.

:::


The Pipeline build strategy allows developers to define a Jenkins pipeline for use by the Jenkins pipeline plugin. The build can be started, monitored, and managed by {{ product_title }} in the same way as any other build type.

Pipeline workflows are defined in a `jenkinsfile`, either embedded directly in the build configuration, or supplied in a Git repository and referenced by the build configuration.