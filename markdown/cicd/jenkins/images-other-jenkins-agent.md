---
title: Jenkins agent
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Jenkins agent {id="images-other-jenkins-agent"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "images-other-jenkins-agent" %}

{{ product_title }} provides a base image for use as a Jenkins agent.

The Base image for Jenkins agents does the following:

*   Pulls in both the required tools, headless Java, the Jenkins JNLP client, and the useful ones, including `git`, `tar`, `zip`, and `nss`, among others.
*   Establishes the JNLP agent as the entry point.
*   Includes the `oc` client tool for invoking command-line operations from within Jenkins jobs.
*   Provides Dockerfiles for both Red Hat Enterprise Linux (RHEL) and `localdev` images.


:::important

Use a version of the agent image that is appropriate for your {{ product_title }} release version. Embedding an `oc` client version that is not compatible with the {{ product_title }} version can cause unexpected behavior.

:::


The {{ product_title }} Jenkins image also defines the following sample `java-builder` pod template to illustrate how you can use the agent image with the Jenkins Kubernetes plugin.

The `java-builder` pod template employs two containers:

*   A `jnlp` container that uses the {{ product_title }} Base agent image and handles the JNLP contract for starting and stopping Jenkins agents.
*   A `java` container that uses the `java` {{ product_title }} Sample ImageStream, which contains the various Java binaries, including the Maven binary `mvn`, for building code.

{% leveloffset +1 %}{% include "./modules/images-other-jenkins-agent-images.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-other-jenkins-agent-env-var.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-other-jenkins-agent-memory.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-other-jenkins-agent-gradle.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-other-jenkins-agent-pod-retention.md" %}{% endleveloffset %}