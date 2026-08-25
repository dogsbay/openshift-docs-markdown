{%- set _mod_docs_content_type = "CONCEPT" %}
# Methods of exposing binding data {id="sbo-methods-of-exposing-binding-data_{{ context }}"}

This section describes the methods you can use to expose the binding data. {._abstract}

Ensure that you know and understand your workload requirements and environment, and how it works with the provided services.

Binding data is exposed under the following circumstances:

*   Backing service is available as a provisioned service resource.

    The service you intend to connect to is compliant with the Service Binding specification. You must create a `Secret` resource with all the required binding data values and reference it in the backing service custom resource (CR). The detection of all the binding data values is automatic.
*   Backing service is not available as a provisioned service resource.

    You must expose the binding data from the backing service. Depending on your workload requirements and environment, you can choose any of the following methods to expose the binding data:
    *   Direct secret reference
    *   Declaring binding data through custom resource definition (CRD) or CR annotations
    *   Detection of binding data through owned resources

## Provisioned service {id="provisioned-service_{{ context }}"}
Provisioned service represents a backing service CR with a reference to a `Secret` resource placed in the `.status.binding.name` field of the backing service CR.

As an Operator provider or the user who creates backing services, you can use this method to be compliant with the Service Binding specification, by creating a `Secret` resource and referencing it in the `.status.binding.name` section of the backing service CR. This `Secret` resource must provide all the binding data values required for a workload to connect to the backing service.

The following examples show an `AccountService` CR that represents a backing service and a `Secret` resource referenced from the CR.

```yaml title="Example: AccountService CR"
apiVersion: example.com/v1alpha1
kind: AccountService
name: prod-account-service
spec:
# ...
status:
  binding:
    name: hippo-pguser-hippo
```

```yaml title="Example: Referenced Secret resource"
apiVersion: v1
kind: Secret
metadata:
  name: hippo-pguser-hippo
data:
  password: "<password>"
  user: "<username>"
# ...
```

When creating a service binding resource, you can directly give the details of the `AccountService` resource in the `ServiceBinding` specification as follows:

```yaml title="Example: ServiceBinding resource"
apiVersion: binding.operators.coreos.com/v1alpha1
kind: ServiceBinding
metadata:
  name: account-service
spec:
# ...
  services:
  - group: "example.com"
    version: v1alpha1
    kind: AccountService
    name: prod-account-service
  application:
    name: spring-petclinic
    group: apps
    version: v1
    resource: deployments
```

```yaml title="Example: ServiceBinding resource in Specification API"
apiVersion: servicebinding.io/v1beta1
kind: ServiceBinding
metadata:
  name: account-service
spec:
# ...
  service:
    apiVersion: example.com/v1alpha1
    kind: AccountService
    name: prod-account-service
  workload:
    apiVersion: apps/v1
    kind: Deployment
    name: spring-petclinic
```

This method exposes all the keys in the `hippo-pguser-hippo` referenced `Secret` resource as binding data that is to be projected into the workload.

## Direct secret reference {id="direct-secret-reference_{{ context }}"}
You can use this method, if all the required binding data values are available in a `Secret` resource that you can reference in your Service Binding definition. In this method, a `ServiceBinding` resource directly references a `Secret` resource to connect to a service. All the keys in the `Secret` resource are exposed as binding data.

```yaml title="Example: Specification with the binding.operators.coreos.com API"
apiVersion: binding.operators.coreos.com/v1alpha1
kind: ServiceBinding
metadata:
  name: account-service
spec:
# ...
  services:
  - group: ""
    version: v1
    kind: Secret
    name: hippo-pguser-hippo
```

```yaml title="Example: Specification that is compliant with the servicebinding.io API"
apiVersion: servicebinding.io/v1beta1
kind: ServiceBinding
metadata:
  name: account-service
spec:
# ...
  service:
    apiVersion: v1
    kind: Secret
    name: hippo-pguser-hippo
```

## Declaring binding data through CRD or CR annotations {id="declaring-binding-data-through-CRD-or-CR-annotations_{{ context }}"}
You can use this method to annotate the resources of the backing service to expose the binding data with specific annotations. Adding annotations under the `metadata` section alters the CRs and CRDs of the backing services. {{ servicebinding_title }} detects the annotations added to the CRs and CRDs and then creates a `Secret` resource with the values extracted based on the annotations.

The following examples show the annotations that are added under the `metadata` section and a referenced `ConfigMap` object from a resource:

```yaml title="Example: Exposing binding data from a Secret object defined in the CR annotations"
apiVersion: postgres-operator.crunchydata.com/v1beta1
kind: PostgresCluster
metadata:
  name: hippo
  namespace: my-petclinic
  annotations:
    service.binding: 'path={.metadata.name}-pguser-{.metadata.name},objectType=Secret'
# ...
```

The previous example places the name of the secret name in the `{.metadata.name}-pguser-{.metadata.name}` template that resolves to `hippo-pguser-hippo`. The template can contain multiple JSONPath expressions.

```yaml title="Example: Referenced Secret object from a resource"
apiVersion: v1
kind: Secret
metadata:
  name: hippo-pguser-hippo
data:
  password: "<password>"
  user: "<username>"
```

```yaml title="Example: Exposing binding data from a ConfigMap object defined in the CR annotations"
apiVersion: postgres-operator.crunchydata.com/v1beta1
kind: PostgresCluster
metadata:
  name: hippo
  namespace: my-petclinic
  annotations:
    service.binding: 'path={.metadata.name}-config,objectType=ConfigMap'
# ...
```

The previous example places the name of the config map in the `{.metadata.name}-config` template that resolves to `hippo-config`. The template can contain multiple JSONPath expressions.

```yaml title="Example: Referenced ConfigMap object from a resource"
apiVersion: v1
kind: ConfigMap
metadata:
  name: hippo-config
data:
  db_timeout: "10s"
  user: "hippo"
```

## Detection of binding data through owned resources {id="detection-of-binding-data-through-owned-resources_{{ context }}"}
You can use this method if your backing service owns one or more Kubernetes resources such as route, service, config map, or secret that you can use to detect the binding data. In this method, the {{ servicebinding_title }} detects the binding data from resources owned by the backing service CR.

The following examples show the `detectBindingResources` API option set to `true` in the `ServiceBinding` CR:

```yaml title="Example"
apiVersion: binding.operators.coreos.com/v1alpha1
kind: ServiceBinding
metadata:
  name: spring-petclinic-detect-all
  namespace: my-petclinic
spec:
  detectBindingResources: true
  services:
    - group: postgres-operator.crunchydata.com
      version: v1beta1
      kind: PostgresCluster
      name: hippo
  application:
    name: spring-petclinic
    group: apps
    version: v1
    resource: deployments
```

In the previous example, `PostgresCluster` custom service resource owns one or more Kubernetes resources such as route, service, config map, or secret.

The {{ servicebinding_title }} automatically detects the binding data exposed on each of the owned resources.