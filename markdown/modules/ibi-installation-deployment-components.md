{%- set _mod_docs_content_type = "REFERENCE" %}
# Image-based installation and deployment components {id="ibi-installation-deployment-components_{{ context }}"}

The following content describes the components in an image-based installation and deployment. {._abstract}


Seed image
:   OCI container image generated from a dedicated cluster with the target {{ product_title }} version.


Seed cluster
:   Dedicated {{ sno }} cluster that you use to create a seed image and is deployed with the target {{ product_title }} version.


{{ lcao }}
:   Generates the seed image.


Image Based Install (IBI) Operator
:   When you deploy managed clusters, the IBI Operator creates a configuration ISO from the site-specific resources you define in the hub cluster, and attaches the configuration ISO to the preinstalled host by using a bare-metal provisioning service.


`openshift-install` program
:   Creates the installation and configuration ISO, and embeds the seed image URL in the live installation ISO. If the IBI Operator is not used, you must manually attach the configuration ISO to a preinstalled host to complete the deployment.