{%- set _mod_docs_content_type = "CONCEPT" %}
# About adding projects to a service mesh {id="ossm-about-adding-namespace_{{ context }}"}

After installing the Operators and creating the `ServiceMeshControlPlane` resource, add one or more projects to the service mesh.


:::note

In {{ product_title }}, a project is essentially a Kubernetes namespace with additional annotations, such as the range of user IDs that can be used in the project. Typically, the {{ product_title }} web console uses the term project, and the CLI uses the term namespace, but the terms are essentially synonymous.

:::


You can add projects to an existing service mesh using either the {{ product_title }} web console or the CLI. There are three methods to add a project to a service mesh:

*   Specifying the project name in the `ServiceMeshMemberRoll` resource.
*   Configuring label selectors in the `spec.memberSelectors` field of the `ServiceMeshMemberRoll` resource.
*   Creating the `ServiceMeshMember` resource in the project.

If you use the first method, then you must create the `ServiceMeshMemberRoll` resource.