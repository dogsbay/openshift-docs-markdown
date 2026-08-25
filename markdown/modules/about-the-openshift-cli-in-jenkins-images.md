{%- set _mod_docs_content_type = "CONCEPT" %}

# About the OpenShift CLI tool in OpenShift Jenkins images {id="about-the-openshift-cli-in-jenkins-images_{{ context }}"}

If your Jenkins pipelines require a **specific** {{ oc_first }} version for compatibility or reproducibility, you must explicitly configure the desired client version in the Jenkins pipeline DSL. {._abstract}

Starting with 4.12, the OpenShift Jenkins container images ship with the **latest available version** of the `oc` CLI tool bundled inside the image, rather than the client version matching the cluster release.

If your Jenkins pipelines require a **specific** `oc` client version for compatibility or reproducibility, you must explicitly configure the desired client version in the Jenkins pipeline DSL.