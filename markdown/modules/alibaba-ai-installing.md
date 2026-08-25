{%- set _mod_docs_content_type = "CONCEPT" %}
# Process outline for creating a cluster with the {{ ai_full }} {id="alibaba-ai-installing_{{ context }}"}

You can install an {{ product_title }} cluster on {{ alibaba }} by using both the {{ ai_full }} and the {{ alibaba }} consoles. {._abstract}

The main steps of the installation process are as follows:

1.  Create the cluster with the {{ ai_full }} and download the generated image.
1.  Convert the image to `QCOW2` format. For more information, see the following section.
1.  Upload the image to the Object Storage Service bucket in {{ alibaba }}.
1.  Import the image to the Elastic Compute Service in {{ alibaba }}.
1.  Provision the {{ alibaba }} resources:
    1.  In the Virtual Private Cloud (VPC) console, set the networking configurations.
    1.  In the {{ alibaba }} DNS console, define the Domain Name System.
    1.  In the Elastic Compute Service (ECS) console, provision the compute instances.
1.  Complete host discovery in the {{ ai_full }}.
1.  Complete the network configurations in {{ alibaba }}.
1.  Complete the cluster configuration and installation in the {{ ai_full }}.