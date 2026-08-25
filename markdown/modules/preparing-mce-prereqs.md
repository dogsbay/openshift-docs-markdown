{%- set _mod_docs_content_type = "CONCEPT" %}
# Prerequisites {id="prerequisites_{{ context }}"}

Before installing the {{ mce_short }} and deploying a hub cluster with the Agent-based Installer, you must complete several prerequisites. {._abstract}

The following prerequisites must be completed:

*   You have read the following documentation:
    *   "Cluster lifecycle with multicluster engine operator overview"
    *   "Persistent storage using local volumes"
    *   "Using {{ ztp }} to provision clusters at the network far edge"
    *   "Preparing to install with the Agent-based Installer"
    *   "About disconnected installation mirroring"
*   You have access to the internet to obtain the necessary container images.
*   You have installed the OpenShift CLI (`oc`).
*   If you are installing in a disconnected environment, you must have a configured local mirror registry for disconnected installation mirroring.