{%- set _mod_docs_content_type = "CONCEPT" %}
# Docker build {id="builds-strategy-docker-build_{{ context }}"}

{{ product_title }} uses Buildah to build a container image from a Dockerfile. For more information on building container images with Dockerfiles, see [the Dockerfile reference documentation](https://docs.docker.com/engine/reference/builder/).


:::tip

If you set Docker build arguments by using the `buildArgs` array, see [Understand how ARG and FROM interact](https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact) in the Dockerfile reference documentation.

:::