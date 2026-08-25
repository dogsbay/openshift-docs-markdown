{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring your ServiceMeshControlPlane resource for production {id="ossm-smcp-prod_{{ context }}"}

If you have installed a basic `ServiceMeshControlPlane` resource to test {{ SMProductShortName }}, you must configure it to production specification before you use {{ SMProductName }} in production.

You cannot change the `metadata.name` field of an existing `ServiceMeshControlPlane` resource. For production deployments, you must customize the default template.

**Procedure**

1.  Configure the {{ JaegerShortName }} for production.
    1.  Edit the `ServiceMeshControlPlane` resource to use the `production` deployment strategy, by setting `spec.addons.jaeger.install.storage.type` to `Elasticsearch` and specify additional configuration options under `install`. You can create and configure your Jaeger instance and set `spec.addons.jaeger.name` to the name of the Jaeger instance.
        ```yaml title="Default Jaeger parameters including Elasticsearch" {minja}
        apiVersion: maistra.io/v2
        kind: ServiceMeshControlPlane
        metadata:
          name: basic
        spec:
          version: v{{ MaistraVersion }}
          tracing:
            sampling: 100
            type: Jaeger
          addons:
            jaeger:
              name: MyJaeger
              install:
                storage:
                  type: Elasticsearch
                ingress:
                  enabled: true
          runtime:
            components:
              tracing.jaeger.elasticsearch: # only supports resources and image name
                container:
                  resources: {}
        ```
    1.  Configure the sampling rate for production. For more information, see the Performance and scalability section.
1.  Ensure your security certificates are production ready by installing security certificates from an external certificate authority. For more information, see the Security section.

**Verification**

1.  Enter the following command to verify that the `ServiceMeshControlPlane` resource updated properly. In this example, `basic` is the name of the `ServiceMeshControlPlane` resource.
    ```terminal
    $ oc get smcp basic -o yaml
    ```