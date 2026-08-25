{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/servicebinding-document-attributes.md" %}
# Binding workloads using Service Binding Operator {id="binding-workloads-using-sbo"}
{%- set context = "binding-workloads-using-sbo" %}

Application developers must bind a workload to one or more backing services by using a binding secret. This secret is generated for the purpose of storing information to be consumed by the workload.

As an example, consider that the service you want to connect to is already exposing the binding data. In this case, you would also need a workload to be used along with the `ServiceBinding` custom resource (CR). By using this `ServiceBinding` CR, the workload sends a binding request with the details of the services to bind with.

```yaml title="Example of ServiceBinding CR"
apiVersion: binding.operators.coreos.com/v1alpha1
kind: ServiceBinding
metadata:
    name: spring-petclinic-pgcluster
    namespace: my-petclinic
spec:
    services: (1)
    - group: postgres-operator.crunchydata.com
      version: v1beta1
      kind: PostgresCluster
      name: hippo
    application: (2)
      name: spring-petclinic
      group: apps
      version: v1
      resource: deployments
```
1.  Specifies a list of service resources.
1.  The sample application that points to a Deployment or any other similar resource with an embedded PodSpec.

As shown in the previous example, you can also directly use a `ConfigMap` or a `Secret` itself as a service resource to be used as a source of binding data.

{% leveloffset +1 %}{% include "./modules/sbo-naming-strategies.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sbo-advanced-binding-options.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sbo-binding-workloads-that-are-not-compliant-with-PodSpec.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sbo-unbinding-workloads-from-a-backing-service.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_binding-workloads-sbo" ._additional-resources}
*   [Binding a workload together with a backing service](/applications/connecting_applications_to_services/understanding-service-binding-operator#binding-a-workload-together-with-a-backing-service_understanding-service-binding-operator).
*   [Connecting the Spring PetClinic sample application to the PostgreSQL database service](/applications/connecting_applications_to_services/getting-started-with-service-binding#sbo-connecting-spring-petclinic-sample-app-to-postgresql-database-service_getting-started-with-service-binding).
*   [Creating custom resources from a file](/operators/understanding/crds/crd-managing-resources-from-crds#crd-creating-custom-resources-from-file_crd-managing-resources-from-crds)
*   [Example schema of the ClusterWorkloadResourceMapping resource](https://redhat-developer.github.io/service-binding-operator/userguide/binding-workloads-using-sbo/custom-path-injection.html#_workload_resource_mapping).