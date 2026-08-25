{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specifying GPU requirements for a service {id="serverless-gpu-resources-kn_{{ context }}"}

After GPU resources are enabled for your {{ product_title }} cluster, you can specify GPU requirements for a Knative service using the Knative (`kn`) CLI.

**Prerequisites**

*   The {{ ServerlessOperatorName }}, Knative Serving and Knative Eventing are installed on the cluster.
*   You have installed the Knative (`kn`) CLI.
*   GPU resources are enabled for your {{ product_title }} cluster.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

{% if not openshift_rosa %}

:::note

Using NVIDIA GPU resources is not supported for {{ ibm_z_name }} and {{ ibm_power_name }}.

:::


{%- endif %}

**Procedure**

1.  Create a Knative service and set the GPU resource requirement limit to `1` by using the `--limit nvidia.com/gpu=1` flag:
    ```terminal
    $ kn service create hello --image <service-image> --limit nvidia.com/gpu=1
    ```

    A GPU resource requirement limit of `1` means that the service has 1 GPU resource dedicated. Services do not share GPU resources. Any other services that require GPU resources must wait until the GPU resource is no longer in use.

    A limit of 1 GPU also means that applications exceeding usage of 1 GPU resource are restricted. If a service requests more than 1 GPU resource, it is deployed on a node where the GPU resource requirements can be met.
1.  Optional. For an existing service, you can change the GPU resource requirement limit to `3` by using the `--limit nvidia.com/gpu=3` flag:
    ```terminal
    $ kn service update hello --limit nvidia.com/gpu=3
    ```