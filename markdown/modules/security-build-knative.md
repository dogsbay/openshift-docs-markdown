{%- set _mod_docs_content_type = "CONCEPT" %}
# Building Knative serverless applications {id="security-build-knative_{{ context }}"}

You can build, deploy, and manage serverless applications by using OpenShift Serverless in {{ product_title }}, relying on Kubernetes and Kourier,  leveraging S2I builder images and Knative services for scalable, event-driven workloads. {._abstract}

As with other builds, you can use S2I images to build your containers, then serve them using Knative services. View Knative application builds through the
**Topology** view of the {{ product_title }} web console.