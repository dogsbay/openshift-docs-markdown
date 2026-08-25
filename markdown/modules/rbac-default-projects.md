{%- set _mod_docs_content_type = "CONCEPT" %}
# Default projects {id="rbac-default-projects_{{ context }}"}

Default projects host critical cluster and infrastructure components. By understanding their purpose, you can avoid making changes that could disrupt essential cluster services. {._abstract}

{{ product_title }} includes several default projects, and projects starting with `openshift-` are the most essential to users. These projects host master components that run as pods and other infrastructure components. The pods created in these namespaces that have a critical pod annotation are considered critical, and they have guaranteed admission by kubelet.
Pods created for master components in these namespaces are already marked as critical.

{% include "./snippets/default-projects.md" %}