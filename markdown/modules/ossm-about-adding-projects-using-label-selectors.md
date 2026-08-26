{%- set _mod_docs_content_type = "CONCEPT" %}
# About adding projects using label selectors {id="ossm-about-adding-projects-using-label-selectors_{{ context }}"}

For cluster-wide deployments, you can use label selectors to add projects to the mesh. Label selectors specified in the `ServiceMeshMemberRoll` resource enable the {{ SMProductShortName }} Operator to add or remove namespaces to or from the mesh based on namespace labels. Unlike other standard {{ product_title }} resources that you can use to specify a single label selector, you can use the `ServiceMeshMemberRoll` resource to specify multiple label selectors.

![Adding project using label selector image](/images/ossm-adding-project-using-label-selector.png)

If the labels for a namespace match any of the selectors specified in the `ServiceMeshMemberRoll` resource, then the namespace is included in the mesh.


:::note

In {{ product_title }}, a project is essentially a Kubernetes namespace with additional annotations, such as the range of user IDs that can be used in the project. Typically, the {{ product_title }} web console uses the term _project_, and the CLI uses the term _namespace_, but the terms are essentially synonymous.

:::