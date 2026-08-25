{%- set _mod_docs_content_type = "CONCEPT" %}
# Source-to-image build process overview {id="images-s2i-build-process-overview_{{ context }}"}

Source-to-image (S2I) is a build process in {{ product_title }} that injects your source code into a container image. S2I automates the creation of ready-to-run container images from your application source code without manual configuration. {._abstract}

S2I performs the following steps:

1.  Runs the `FROM <builder image>` command
1.  Copies the source code to a defined location in the builder image
1.  Runs the assemble script in the builder image
1.  Sets the run script in the builder image as the default command

Buildah then creates the container image.