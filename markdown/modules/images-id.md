{%- set _mod_docs_content_type = "REFERENCE" %}
# Image IDs {id="images-id_{{ context }}"}

Image IDs are Secure Hash Algorithm (SHA) codes that uniquely identify container images in {{ product_title }}. You can use image IDs to pull specific versions of images that never change.  {._abstract}

For example, the following image ID is for the `docker.io/openshift/jenkins-2-centos7` image:

```text
docker.io/openshift/jenkins-2-centos7@sha256:ab312bda324
```