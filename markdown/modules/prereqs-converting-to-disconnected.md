{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites for converting a connected cluster to a disconnected cluster {id="prerequisites_connected-to-disconnected_{{ context }}"}

You must meet several prerequisites before converting a connected cluster to a disconnected cluster. {._abstract}

The following prerequisites must be met:

*   The `oc` client is installed.
*   A running cluster.
*   An installed mirror registry, which is a container image registry that supports Docker v2-2 in the location that will host the {{ product_title }} cluster, such as one of the following registries:
    *   Red&#160;Hat Quay
    *   JFrog Artifactory
    *   Sonatype Nexus Repository
    *   Harbor

    If you have a subscription to Red&#160;Hat Quay, see the documentation on "Deploying Red&#160;Hat Quay for proof-of-concept purposes" or "Deploying Red&#160;Hat Quay by using the Quay Operator".
*   The mirror repository must be configured to share images. For example, a {{ quay }} repository requires organizations to share images. For more information, see the "Red&#160;Hat Quay documentation on organizations".
*   Access to the internet to obtain the necessary container images.