{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating a kmod image {id="kmm-creating-kmod-image_{{ context }}"}

A kmod image is a standard OCI container image that holds `.ko` kernel module files for use with Kernel Module Management (KMM) on {{ product_title }}. You must place `.ko` files under a path that matches `<prefix>/lib/modules/[kernel-version]/`. {._abstract}

Keep the following in mind when working with the `.ko` files:

*   In most cases, `<prefix>` should be equal to `/opt`. This is the `Module` CRD’s default value.
*   `kernel-version` must not be empty and must be equal to the kernel version the kernel modules were built for.

In addition to the `.ko` files, the kmod image also requires the `cp` binary to be present because the `.ko` files are copied from this image to the image-loader worker pod created by the Operator. This is a minimal requirement and no other binary tool is required in the image.