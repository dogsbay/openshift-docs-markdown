{%- set _mod_docs_content_type = "CONCEPT" %}
# Builds {id="cloud-experts-getting-started-openshift-concepts-builds_{{ context }}"}

A build is the process of transforming input parameters into a resulting object. Most often, the process is used to transform input parameters or source code into a runnable image. A `BuildConfig` object is the definition of the entire build process. {._abstract}

OpenShift Container Platform leverages Kubernetes by creating Docker-formatted containers from build images and pushing them to a container image registry.

Build objects share common characteristics:

*   Inputs for a build
*   Requirements to complete a build process
*   Logging the build process
*   Publishing resources from successful builds
*   Publishing the final status of the build

Builds take advantage of resource restrictions, specifying limitations on resources such as CPU usage, memory usage, and build or pod execution time.