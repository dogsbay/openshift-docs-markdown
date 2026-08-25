{%- set _mod_docs_content_type = "CONCEPT" %}
# Image-based installation for {{ sno }} clusters {id="ibi-image-based-installation-overview_{{ context }}"}

Using the {{ lcao }}, you can generate an OCI container image that encapsulates an instance of a {{ sno }} cluster. {._abstract}

This image is derived from a dedicated cluster that you can configure with the target {{ product_title }} version.

You can reference this image in a live installation ISO to consistently preinstall configured and validated instances of {{ sno }} to multiple hosts. This approach enables the preparation of hosts at a central location, for example in a factory or service depot, before shipping the preinstalled hosts to a remote site for rapid reconfiguration and deployment. The instructions for preinstalling a host are the same whether you deploy the host by using only the `openshift-install` program or using the program with the IBI Operator.

The following is a high-level overview of the image-based installation process:

1.  Generate an image from a {{ sno }} cluster.
1.  Use the `openshift-install` program to embed the seed image URL, and other installation artifacts, in a live installation ISO.
1.  Start the host using the live installation ISO to preinstall the host.

    During this process, the `openshift-install` program installs {{ op_system_first }} to the disk, pulls the image you generated, and precaches release container images to the disk.
1.  When the installation completes, the host is ready to ship to the remote site for rapid reconfiguration and deployment.