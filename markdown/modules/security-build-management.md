{%- set _mod_docs_content_type = "CONCEPT" %}
# Managing builds {id="security-build-management_{{ context }}"}

You can use Source-to-Image (S2I) builder images that enable development and operations teams to collaborate on reproducible builds, using Red Hat Universal Base Images that you can freely redistribute with your applications. {._abstract}

You can use Source-to-Image (S2I) to combine source code and base images. _Builder images_ make use of S2I to enable your development and operations teams to collaborate on a reproducible build environment. With Red Hat S2I images available as Universal Base Image (UBI) images, you can now freely redistribute your software with base images built from real {{ op_system_base }} RPM packages. Red Hat has removed subscription restrictions to allow this.

When developers commit code with Git for an application by using build images, {{ product_title }} can perform the following functions:

*   Trigger, either by using webhooks on the code repository or other automated continuous integration (CI) process, to automatically assemble a new image from available artifacts, the S2I builder image, and the newly committed code.
*   Automatically deploy the newly built image for testing. 
*   Promote the tested image to production where it can be automatically deployed using a CI process.

![Source-to-Image Builds](/images/build_process1.png)

You can use the integrated OpenShift Container Registry to manage access to final images. Both S2I and native build images are automatically pushed to your OpenShift Container Registry.

In addition to the included Jenkins for CI, you can also integrate your own build and CI environment with {{ product_title }} using RESTful APIs, and use any API-compliant image registry.