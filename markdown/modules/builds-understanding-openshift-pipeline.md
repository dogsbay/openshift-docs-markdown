{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding {{ product_title }} pipelines {id="builds-understanding-openshift-pipeline_{{ context }}"}


:::important

The Pipeline build strategy is deprecated in {{ product_title }} 4. Equivalent and improved functionality is present in the {{ product_title }} Pipelines based on Tekton.

Jenkins images on {{ product_title }} are fully supported and users should follow Jenkins user documentation for defining their `jenkinsfile` in a job or store it in a Source Control Management system.

:::


Pipelines give you control over building, deploying, and promoting your applications on {{ product_title }}. Using a combination of the Jenkins Pipeline build strategy, `jenkinsfiles`, and the {{ product_title }} Domain Specific Language (DSL) provided by the Jenkins Client Plugin, you can create advanced build, test, deploy, and promote pipelines for any scenario.

**{{ product_title }} Jenkins Sync Plugin**

The {{ product_title }} Jenkins Sync Plugin keeps the build configuration and build objects in sync with Jenkins jobs and builds, and provides the following:

*   Dynamic job and run creation in Jenkins.
*   Dynamic creation of agent pod templates from image streams, image stream tags, or config maps.
*   Injection of environment variables.
*   Pipeline visualization in the {{ product_title }} web console.
*   Integration with the Jenkins Git plugin, which passes commit information from {{ product_title }} builds to the Jenkins Git plugin.
*   Synchronization of secrets into Jenkins credential entries.

**{{ product_title }} Jenkins Client Plugin**

The {{ product_title }} Jenkins Client Plugin is a Jenkins plugin which aims to provide a readable, concise, comprehensive, and fluent Jenkins Pipeline syntax for rich interactions with the {{ product_title }} API Server. The plugin uses the {{ product_title }} command-line tool, `oc`, which must be available on the nodes executing the script.

The Jenkins Client Plugin must be installed on your Jenkins master so the {{ product_title }} DSL will be available to use within the `jenkinsfile` for your application. This plugin is installed and enabled by default when using the {{ product_title }} Jenkins image.

For {{ product_title }} Pipelines within your project, you will must use the Jenkins Pipeline Build Strategy. This strategy defaults to using a `jenkinsfile` at the root of your source repository, but also provides the following configuration options:

*   An inline `jenkinsfile` field within your build configuration.
*   A `jenkinsfilePath` field within your build configuration that references the location of the `jenkinsfile` to use relative to the source `contextDir`.


:::note

The optional `jenkinsfilePath` field specifies the name of the file to use, relative to the source `contextDir`. If `contextDir` is omitted, it defaults to the root of the repository. If `jenkinsfilePath` is omitted, it defaults to `jenkinsfile`.

:::