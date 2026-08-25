{%- set _mod_docs_content_type = "CONCEPT" %}
# About {{ servicebinding_title }} {id="sbo-about-service-binding-operator_{{ context }}"}

The {{ servicebinding_title }} consists of a controller and an accompanying custom resource definition (CRD) for service binding. It manages the data plane for workloads and backing services. The Service Binding Controller reads the data made available by the control plane of backing services. Then, it projects this data to workloads according to the rules specified through the `ServiceBinding` resource.

As a result, the {{ servicebinding_title }} enables workloads to use backing services or external services by automatically collecting and sharing binding data with the workloads. The process involves making the backing service bindable and binding the workload and the service together.

## Making an Operator-managed backing service bindable {id="making-an-operator-managed-backing-service-bindable_{{ context }}"}
To make a service bindable, as an Operator provider, you need to expose the binding data required by workloads to bind with the services provided by the Operator. You can provide the binding data either as annotations or as descriptors in the CRD of the Operator that manages the backing service.

## Binding a workload together with a backing service {id="binding-a-workload-together-with-a-backing-service_{{ context }}"}
By using the {{ servicebinding_title }}, as an application developer, you need to declare the intent of establishing a binding connection. You must create a `ServiceBinding` CR  that references the backing service. This action triggers the {{ servicebinding_title }} to project the exposed binding data into the workload. The {{ servicebinding_title }} receives the declared intent and binds the workload together with the backing service.

The CRD of the {{ servicebinding_title }} supports the following APIs:

*   **Service Binding** with the `binding.operators.coreos.com` API group.
*   **Service Binding (Spec API)** with the `servicebinding.io` API group.

With {{ servicebinding_title }}, you can:

*   Bind your workloads to Operator-managed backing services.
*   Automate configuration of binding data.
*   Provide service operators with a low-touch administrative experience to provision and manage access to services.
*   Enrich the development lifecycle with a consistent and declarative service binding method that eliminates discrepancies in cluster environments.