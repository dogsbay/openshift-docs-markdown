---
title: Securing the build process
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Securing the build process {id="security-build"}
{%- set context = "security-build" %}

You can secure your software supply chain by using trusted base images, integrating security testing, and building once to deploy everywhere. Managing this build process ensures production deployments match verified builds and protects the software stack where code and libraries integrate. {._abstract}

{% leveloffset +1 %}{% include "./modules/security-build-once.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-build-management.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-build-inputs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-build-designing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-build-knative.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_security-build" ._additional-resources}

*   [Understanding image builds](/cicd/builds/understanding-image-builds#understanding-image-builds)
*   [Triggering and modifying builds](/cicd/builds/triggering-builds-build-hooks#triggering-builds-build-hooks)
*   [Creating build inputs](/cicd/builds/creating-build-inputs#creating-build-inputs)
*   [Input secrets and config maps](/cicd/builds/creating-build-inputs#builds-input-secrets-configmaps_creating-build-inputs)
{%- if not openshift_origin %}
*   [OpenShift Serverless overview](https://docs.openshift.com/serverless/1.28/about/about-serverless.html)
{%- endif %}
*   [Viewing application composition using the Topology view](/applications/odc-viewing-application-composition-using-topology-view#odc-viewing-application-composition-using-topology-view)