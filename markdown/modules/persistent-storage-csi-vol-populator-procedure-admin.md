{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating CRDs for volume populators {id="persistent-storage-csi-vol-populator-procedure-admin_{{ context }}"}

To enable custom volume prepopulation, create a Custom Resource Definition (CRD) that defines a data source that users can instantiate to populate persistent volume claims (PVCs). {._abstract}

The following procedure explains how to create an example "hello, world" CRD for a volume populator.

Users can then create instances of this CRD to populate PVCs.

**Prerequisites**

*   Access to the {{ product_title }} web console.
*   Access to the cluster with cluster-admin privileges.

**Procedure**

1.  Create a namespace for the logical grouping and operation of the populator, and related resources, using the following example YAML file:
    ```yaml title="Example namespace YAML file"
    apiVersion: v1
    kind: Namespace
    metadata:
      name: hello
    ```
1.  Create a CRD for your data source using the following example YAML file:
    ```yaml title="Example CRD YAML file"
    apiVersion: apiextensions.k8s.io/v1
    kind: CustomResourceDefinition
    metadata:
      name: hellos.hello.example.com
    spec:
      group: hello.example.com
      names:
        kind: Hello
        listKind: HelloList
        plural: hellos
        singular: hello
      scope: Namespaced
      versions:
      - name: v1alpha1
        schema:
          openAPIV3Schema:
            description: Hello is a specification for a Hello resource
            properties:
              apiVersion:
                description: 'APIVersion defines the versioned schema of this representation
                  of an object. Servers should convert recognized schemas to the latest
                  internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources'
                type: string
              kind:
                description: 'Kind is a string value representing the REST resource this
                  object represents. Servers may infer this from the endpoint the client
                  submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds'
                type: string
              spec:
                description: HelloSpec is the spec for a Hello resource
                properties:
                  fileContents:
                    type: string
                  fileName:
                    type: string
                required:
                - fileContents
                - fileName
                type: object
            required:
            - spec
            type: object
        served: true
        storage: true
    ```
1.  Deploy the controller by creating a `ServiceAccount`, `ClusterRole`, `ClusterRoleBindering`, and `Deployment` to run the logic that implements the population:
    1.  Create a service account for the populator using the following example YAML file:
        ```yaml title="Example service account YAML file"
        apiVersion: v1
        kind: ServiceAccount
        metadata:
          name: hello-account
          namespace: hello
        ```

        Where `metadata.namespace` references the namespace that you created earlier.
    1.  Create a cluster role for the populator using the following example YAML file:
        ```yaml title="Example cluster role YAML file"
        kind: ClusterRole
        apiVersion: rbac.authorization.k8s.io/v1
        metadata:
          name: hello-role
        rules:
          - apiGroups: [hello.example.com]
            resources: [hellos]
            verbs: [get, list, watch]
        ```
    1.  Create a cluster role binding using the following example YAML file:
        ```yaml title="Example cluster role binding YAML file"
        kind: ClusterRoleBinding
        apiVersion: rbac.authorization.k8s.io/v1
        metadata:
          name: hello-binding
        subjects:
          - kind: ServiceAccount
            name: hello-account
            namespace: hello
        roleRef:
          kind: ClusterRole
          name: hello-role
          apiGroup: rbac.authorization.k8s.io
        ```
        *   `metadata.name`: Specifies the role binding name.
        *   `subjects.name`: References the name of the service account that you created earlier.
        *   `subjects.namespace`: References the name of the namespace for the service account that you created earlier.
        *   `roleRef.name`: References the cluster role you created earlier.
    1.  Create a Deployment for the populator using the following example YAML file:
        ```yaml title="Example deployment YAML file"
        kind: Deployment
        apiVersion: apps/v1
        metadata:
          name: hello-populator
          namespace: hello
        spec:
          selector:
            matchLabels:
              app: hello
          template:
            metadata:
              labels:
                app: hello
            spec:
              serviceAccount: hello-account
              containers:
                - name: hello
                  image: registry.k8s.io/sig-storage/hello-populator:v1.0.1
                  imagePullPolicy: IfNotPresent
                  args:
                    - --mode=controller
                    - --image-name=registry.k8s.io/sig-storage/hello-populator:v1.0.1
                    - --http-endpoint=:8080
                  ports:
                    - containerPort: 8080
                      name: http-endpoint
                      protocol: TCP
        ```
        *   `metadata.namespace`: References the namespace that you created earlier.
        *   `spec.template.spec.serviceAccount`: References the service account that you created earlier.
1.  Create a volume populator to register the `kind:Hello` resource as a valid data source for the volume using the following example YAML file:
    ```yaml title="Example volume populator YAML file"
    kind: VolumePopulator
    apiVersion: populator.storage.k8s.io/v1beta1
    metadata:
      name: hello-populator
    sourceKind:
      group: hello.example.com
      kind: Hello
    ```

    The `metadata.name` field specifies the Volume populator name.

    PVCs that use an unregistered populator generate an event: "The datasource for this PVC does not match any registered VolumePopulator", indicating that the PVC might not be provisioned because you are using an unknown (unregistered) populator. 

**Next steps**

*   You can now create CR instances of this CRD to populate PVCs

    For more information, see "Creating prepopulated volumes using volume populators".