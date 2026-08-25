{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites {id="prerequisites_installing-mirroring-disconnected"}

Before you can mirror images using the oc-mirror plugin, you must meet several prerequisites. {._abstract}

The following prerequisites must be met:

*   You must have a container image registry that supports [Docker v2-2](https://docs.docker.com/registry/spec/manifest-v2-2) in the location that will host the {{ product_title }} cluster, such as {{ quay }}.

    :::note

    If you use {{ quay }}, you must use version 3.6 or later with the oc-mirror plugin. If you have an entitlement to {{ quay }}, see the documentation on deploying {{ quay }} [for proof-of-concept purposes](https://docs.redhat.com/en/documentation/red_hat_quay/3/html/proof_of_concept_-_deploying_red_hat_quay/index) or [by using the {{ quay }} Operator](https://access.redhat.com/documentation/en-us/red_hat_quay/3/html/deploying_the_red_hat_quay_operator_on_openshift_container_platform/index). If you need additional assistance selecting and installing a registry, contact your sales representative or Red Hat Support.
    
    :::


    If you do not already have an existing solution for a container image registry, subscribers of {{ product_title }} are provided a [mirror registry for Red Hat OpenShift](/disconnected/installing-mirroring-creating-registry#installing-mirroring-creating-registry). The _mirror registry for Red&#160;Hat OpenShift_ is included with your subscription and is a small-scale container registry that can be used to mirror the required container images of {{ product_title }} in disconnected installations.