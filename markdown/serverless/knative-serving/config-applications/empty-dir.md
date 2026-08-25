{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# EmptyDir volumes {id="empty-dir"}
{%- set context = "empty-dir" %}

`emptyDir` volumes are empty volumes that are created when a pod is created, and are used to provide temporary working disk space. `emptyDir` volumes are deleted when the pod they were created for is deleted.

{% leveloffset +1 %}{% include "./modules/serverless-config-emptydir.md" %}{% endleveloffset %}