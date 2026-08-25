{%- set _mod_docs_content_type = "CONCEPT" %}
# Deployment specifications for MetalLB {id="nw-metallb-operator-deployment-specifications-for-metallb_{{ context }}"}

Deployment specifications in the `MetalLB` custom resource control how the MetalLB `controller` and `speaker` pods deploy and run in {{ product_title }}. {._abstract}

Use deployment specifications to manage the following tasks:

*   Select nodes for MetalLB pod deployment.
*   Manage scheduling by using pod priority and pod affinity.
*   Assign CPU limits for MetalLB pods.
*   Assign a container RuntimeClass for MetalLB pods.
*   Assign metadata for MetalLB pods.