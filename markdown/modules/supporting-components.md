{%- set _mod_docs_content_type = "CONCEPT" %}
# Available supporting components {id="supporting-components_{{ context }}"}

The application you write might need supporting components, such as a database or a logging component. 
To fulfill that need, you might be able to obtain the required component from the Catalogs that 
are available in the {{ product_title }} web console. {._abstract}

The Catalogs include the following components:

*   The software catalog, which is available in each {{ product_title }} {{ product_version }} cluster. 
The software catalog makes Operators available from Red Hat,
certified Red Hat partners, and community members to the cluster operator. 
The cluster operator can make those Operators available in all or selected
namespaces in the cluster, so developers can launch them and configure them with their applications.
*   Templates, which are useful for a one-off type of application, where the
lifecycle of a component is not important after it is installed. 
A template provides an easy way to get started developing a Kubernetes application with minimal overhead.
A template can be a list of resource definitions, which could be `Deployment`,
`Service`, `Route`, or other objects. If you want to change names or resources,
you can set these values as parameters in the template.

You can configure the supporting Operators and templates to the specific needs of your development team 
and then make them available in the namespaces in which your developers work.
Many people add shared templates to the `openshift` namespace because it is accessible from all other namespaces.