{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites {id="prerequisites_{{ context }}"}

You must meet several prerequisites before you can mirror images using the `oc adm release mirror` command. {._abstract}

You must meet the following prerequisites:

*   You must have a container image registry that supports [Docker v2-2](https://docs.docker.com/registry/spec/manifest-v2-2) in the location that will host the {{ product_title }} cluster, such as one of the following registries:
    *   [{{ quay }}](https://www.redhat.com/en/technologies/cloud-computing/quay)
    *   [JFrog Artifactory](https://jfrog.com/artifactory/)
    *   [Sonatype Nexus Repository](https://www.sonatype.com/products/repository-oss?topnav=true)
    *   [Harbor](https://goharbor.io/)

    If you have an entitlement to {{ quay }}, see the documentation on deploying {{ quay }} [for proof-of-concept purposes](https://docs.redhat.com/en/documentation/red_hat_quay/3.9/html/deploy_red_hat_quay_for_proof-of-concept_non-production_purposes/index) or [by using the {{ quay }} Operator](https://access.redhat.com/documentation/en-us/red_hat_quay/3/html/deploying_the_red_hat_quay_operator_on_openshift_container_platform/index). If you need additional assistance selecting and installing a registry, contact your sales representative or Red Hat Support.
*   If you do not already have an existing solution for a container image registry, subscribers of {{ product_title }} are provided a [mirror registry for Red Hat OpenShift](/disconnected/installing-mirroring-creating-registry#installing-mirroring-creating-registry). The _mirror registry for Red&#160;Hat OpenShift_ is included with your subscription and is a small-scale container registry that can be used to mirror the required container images of {{ product_title }} in disconnected installations.