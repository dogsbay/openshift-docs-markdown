{%- set _mod_docs_content_type = "REFERENCE" %}
# Understanding image stream reference types {id="images-imagestream-reference-types_{{ context }}"}

By using image streams in {{ product_title }}, you can reference container images by using different reference types. These reference types define which specific image version your builds and deployments use. {._abstract}

`ImageStreamImage` objects are automatically created in {{ product_title }} when you import or tag an image into the image stream. You never have to explicitly define an `ImageStreamImage` object in any image stream definition that you use to create image streams.


:::note

Example image stream definitions often contain definitions of `ImageStreamTag` and references to `DockerImage`, but never contain definitions of `ImageStreamImage`.

:::


**Imagestream reference types**

| Reference Type | Description | Syntax Examples  |
| --- | --- | --- |
| `ImageStreamTag` | References or retrieves an image for a given image stream and human-readable tag. | `image_stream_name:tag`  |
| `ImageStreamImage` | References or retrieves an image for a given image stream and immutable SHA ID (digest). | `image_stream_name@id`  |
| `DockerImage` | References or retrieves an image from an external registry. Uses the standard `docker pull` specification. | `openshift/ruby-20-centos7:2.0`, `registry.redhat.io/rhel7:latest`, `centos/ruby-22-centos7@sha256:3a335d7d...`  |