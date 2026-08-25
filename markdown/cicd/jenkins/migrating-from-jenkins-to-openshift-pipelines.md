---
title: Migrating from Jenkins to OpenShift Pipelines or Tekton
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Migrating from Jenkins to OpenShift Pipelines or Tekton {id="migrating-from-jenkins-to-openshift-pipelines_{{ context }}"}
{%- set context = "migrating-from-jenkins-to-openshift-pipelines" %}

You can migrate your CI/CD workflows from Jenkins to [{{ pipelines_title }}](https://docs.openshift.com/pipelines/latest/about/understanding-openshift-pipelines.html), a cloud-native CI/CD experience based on the Tekton project.

{% leveloffset +1 %}{% include "./modules/jt-comparison-of-jenkins-and-openshift-pipelines-concepts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/jt-migrating-a-sample-pipeline-from-jenkins-to-openshift-pipelines.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/jt-migrating-from-jenkins-plugins-to-openshift-pipelines-hub-tasks.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/jt-extending-openshift-pipelines-capabilities-using-custom-tasks-and-scripts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/jt-comparison-of-jenkins-openshift-pipelines-execution-models.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/jt-examples-of-common-use-cases.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}
*   [Understanding {{ pipelines_shortname }}](https://docs.openshift.com/pipelines/latest/about/understanding-openshift-pipelines.html)
*   [Role-based Access Control](/authentication/using-rbac#using-rbac)