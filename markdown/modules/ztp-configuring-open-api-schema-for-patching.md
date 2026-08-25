{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring an OpenAPI schema for patching list fields by using the PolicyGenerator CR {id="ztp-configuring-open-api-schema-for-patching_{{ context }}"}

You can configure an OpenAPI schema in the `PolicyGenerator` custom resource (CR) to control how list fields are merged when patching non-core Kubernetes objects. {._abstract}

By default, patching list fields can replace entire lists when the resource does not define merge behavior. An OpenAPI schema defines how list items are uniquely identified and merged during policy generation.

**Prerequisites**

*   You have created a `PolicyGenerator` CR.
*   You have access to a running cluster if you need to generate a schema.

**Procedure**

1.  Obtain an OpenAPI schema for the resources that you want to patch:
    1.  If an OpenAPI schema is available for the custom resource that you want to patch, use that schema file.
    1.  If a schema is not available, generate it from an active cluster by running the following command:
        ```bash
        kustomize openapi fetch
        ```
1.  Edit the generated schema file to keep only the resource definitions that you need to patch.

    Removing unrelated definitions simplifies the schema and reduces maintenance effort.
1.  Define merge behavior for list fields that you want to patch. For each list of objects that you want to patch, add fields that specify how list items are uniquely identified and merged. For example:
    ```yaml
    "x-kubernetes-patch-merge-key": "name"
    "x-kubernetes-patch-strategy": "merge"
    ```
    *   `x-kubernetes-patch-merge-key` specifies the field that uniquely identifies an object in the list.  
      For example, setting this field to `name` uses the `name` field to identify list items.
    *   `x-kubernetes-patch-strategy` specifies how the patch is applied to the identified list item. The following are the supported values:
        *   `merge`: Merges the fields from the patch into the existing list item.
        *   `replace`: Replaces the entire list item identified by the merge key with the patch content.
1.  Save the schema file in the directory that contains the `kustomization.yaml` file.
1.  Reference the OpenAPI schema in the `kustomization.yaml` file:
    ```yaml
    openapi:
      path: schema.json
    ```
1.  Configure the OpenAPI schema path in the `PolicyGenerator` CR:
    ```yaml title="Example PolicyGenerator CR for patching list fields by using an OpenAPI schema"
    apiVersion: policy.open-cluster-management.io/v1
    kind: PolicyGenerator
    metadata:
      name: policy-generator-example
    policies:
      - name: myapp
        manifests:
          - path: input-kustomize/
            patches: []
            openapi:
              path: schema.json
    ```
1.  Generate or apply the policies by using the policy generator.

    The policy generator passes the OpenAPI schema to Kustomize to control how list fields are patched.