{%- set _mod_docs_content_type = "CONCEPT" %}
# Source-to-image build {id="builds-strategy-s2i-build_{{ context }}"}

Source-to-image (S2I) is a tool for building reproducible container images. It produces ready-to-run images by injecting application source into a container image and assembling a new image. The new image incorporates the base image, the builder, and built source and is ready to use with the `buildah run` command. S2I supports incremental builds, which re-use previously downloaded dependencies, previously built artifacts, and so on.