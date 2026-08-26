{%- set _mod_docs_content_type = "REFERENCE" %}
# About the OSToy application {id="cloud-experts-deploying-application-lab-overview-ostoy-app_{{ context }}"}

OSToy is a simple Node.js application that you will deploy to a ROSA cluster to help explore the functionality of Kubernetes. This application has a user interface where you can: {._abstract}

*   Write messages to the log (stdout / stderr).
*   Intentionally crash the application to view self-healing.
*   Toggle a liveness probe and monitor OpenShift behavior.
*   Read config maps, secrets, and env variables.
*   If connected to shared storage, read and write files.
*   Check network connectivity, intra-cluster DNS, and intra-communication with the included microservice.
*   Increase the load to view automatic scaling of the pods to handle the load using the Horizontal Pod Autoscaler.
*   Optional: Connect to an AWS S3 bucket to read and write objects.

## OSToy Application Diagram {id="_ostoy_application_diagram"}

![OSToy architecture diagram](/images/ostoy-arch.png)