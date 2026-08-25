{%- set _mod_docs_content_type = "REFERENCE" %}
# About the OSToy application {id="learning-lab-overview-about-ostoy_{{ context }}"}

OSToy is a Node.js application that deploys to a {{ product_title }} cluster to help explore the functionality of Kubernetes. {._abstract}

This application has a user interface where you can:

*   Write messages to the log (stdout / stderr)
*   Intentionally crash the application to view self-healing
*   Toggle a liveness probe and monitor OpenShift behavior
*   Read ConfigMaps, secrets, and environment variables
*   Read and write files when connected to shared storage
*   Check network connectivity, intra-cluster Domain Name System (DNS), and intra-communication with the included microservice
*   Increase the load to view automatic scaling of the pods by using the Horizontal Pod Autoscaler (HPA)

![OSToy architecture diagram](/_assets/images/ostoy-arch.png)