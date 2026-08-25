{%- set _mod_docs_content_type = "ASSEMBLY" %}

# Troubleshooting issues in {{ gitops_title }} {id="troubleshooting-issues-in-GitOps"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "troubleshooting-issues-in-GitOps" %}

When working with {{ gitops_title }}, you might face issues related to performance, monitoring, configuration, and other aspects. This section helps you to understand those issues and provide solutions to resolve them.

{% leveloffset +1 %}{% include "./modules/con_auto-reboot-during-argo-cd-sync-with-machine-configurations.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/performance-challenges-in-machine-configurations-and-argo-cd.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_troubleshooting-issues-in-GitOps" ._additional-resources}
*   [Preventing nodes from auto-rebooting during Argo CD sync with machine configs](https://developers.redhat.com/articles/2021/12/20/prevent-auto-reboot-during-argo-cd-sync-machine-configs#)