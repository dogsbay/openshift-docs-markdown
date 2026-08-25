{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites {id="prerequisites_oc-mirror-v2_{{ context }}"}

Before you can mirror images with the oc-mirror plugin v2, you must meet several prerequisites. {._abstract}

The following prerequisites must be met:

*   You must have a container image registry that supports [Docker V2-2](https://docs.docker.com/registry/spec/manifest-v2-2) in the location that hosts the {{ product_title }} cluster, such as {{ quay }}.

    :::note

    *   If you use {{ quay }}, use version 3.6 or later with the oc-mirror plugin. See [Deploying the Red&#160;Hat Quay Operator on {{ product_title }} (Red&#160;Hat Quay documentation)](https://access.redhat.com/documentation/en-us/red_hat_quay/3/html/deploying_the_red_hat_quay_operator_on_openshift_container_platform/index). If you need additional assistance selecting and installing a registry, contact your sales representative or Red&#160;Hat Support.
    *   If you do not have an existing solution for a container image registry, {{ product_title }} subscribers receive a mirror registry for Red&#160;Hat OpenShift. This mirror registry is included with your subscription and serves as a small-scale container registry. You can use this registry to mirror the necessary container images of {{ product_title }} for disconnected installations.
    
    :::

*   Every machine in the provisioned clusters must have access to the mirror registry. If the registry is unreachable, tasks like installation, updating, or routine operations such as workload relocation, might fail. Mirror registries must be operated in a highly available manner, ensuring their availability aligns with the production availability of your {{ product_title }} clusters.