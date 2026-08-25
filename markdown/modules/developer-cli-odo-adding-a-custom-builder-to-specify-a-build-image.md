{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a custom builder to specify a build image {id="adding-a-custom-builder-to-specify-a-build-image_{{ context }}"}

With {{ product_title }}, you can add a custom image to bridge the gap between the creation of custom images.

The following example demonstrates the successful import and use of the `redhat-openjdk-18` image:

**Prerequisites**

*   The OpenShift CLI (oc) is installed.

**Procedure**

1.  Import the image into {{ product_title }}:
    ```terminal
    $ oc import-image openjdk18 \
    --from=registry.access.redhat.com/redhat-openjdk-18/openjdk18-openshift \
    --confirm
    ```
1.  Tag the image to make it accessible to {{ odo_title }}:
    ```terminal
    $ oc annotate istag/openjdk18:latest tags=builder
    ```
1.  Deploy the image with {{ odo_title }}:
    ```terminal
    $ odo create openjdk18 --git \
    https://github.com/openshift-evangelists/Wild-West-Backend
    ```