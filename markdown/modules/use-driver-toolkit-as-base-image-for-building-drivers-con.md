{%- set _mod_docs_content_type = "CONCEPT" %}
# Use the Driver Toolkit as a base image for building drivers {id="use-driver-toolkit-as-base-image-for-building-drivers-con_{{ context }}"}

The Driver Toolkit image contains the kernel packages and build tools that match a specific {{ product_title }} release. Use it as the base image for driver containers so that you can build kernel modules without entitled builds or privileged access to node content.