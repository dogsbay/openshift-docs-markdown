{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring {{ FunctionsProductName }} {id="configuring-serverless-functions"}
{%- set context = "configuring-serverless-functions" %}

To improve the process of deployment of your application code, you can use {{ ServerlessProductName }} to deploy stateless, event-driven functions as a Knative service on {{ product_title }}. If you want to develop functions, you must complete the set up steps.

## Prerequisites {id="prerequisites_configuring-serverless-functions"}

To enable the use of {{ FunctionsProductName }} on your cluster, you must complete the following steps:

*   The {{ ServerlessOperatorName }} and Knative Serving are installed on your cluster.

    :::note

    Functions are deployed as a Knative service. If you want to use event-driven architecture with your functions, you must also install Knative Eventing.
    
    :::


{% if openshift_enterprise %}
*   You have the [`oc` CLI](/cli_reference/openshift_cli/getting-started-cli#cli-getting-started) installed.
{%- endif %}
{%- if openshift_dedicated or openshift_rosa %}
*   You have the `oc` CLI installed.
{%- endif %}
*   You have the [Knative (`kn`) CLI](/serverless/install/installing-kn#installing-kn) installed. Installing the Knative CLI enables the use of `kn func` commands which you can use to create and manage functions.
*   You have installed Docker Container Engine or Podman version 3.4.7 or higher.
*   You have access to an available image registry, such as the OpenShift Container Registry.

{% if openshift_enterprise %}
*   If you are using [Quay.io](https://quay.io/) as the image registry, you must ensure that either the repository is not private, or that you have followed the {{ product_title }} documentation on [Allowing pods to reference images from other secured registries](/openshift_images/managing_images/using-image-pull-secrets#images-allow-pods-to-reference-images-from-secure-registries_using-image-pull-secrets).
{%- endif %}
{%- if openshift_dedicated or openshift_rosa %}
*   If you are using [Quay.io](https://quay.io/) as the image registry, you must ensure that either the repository is not private, or that you have allowed pods on your cluster to reference images from other secured registries.
{%- endif %}

{% if openshift_enterprise %}
*   If you are using the OpenShift Container Registry, a cluster administrator must [expose the registry](/registry/securing-exposing-registry#securing-exposing-registry).
{%- endif %}
{%- if openshift_dedicated or openshift_rosa %}
*   If you are using the OpenShift Container Registry, a cluster or dedicated administrator must expose the registry.
{%- endif %}

{% leveloffset +1 %}{% include "./modules/serverless-functions-podman.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-functions-podman-macos.md" %}{% endleveloffset %}

## Next steps {id="next-steps_configuring-serverless-functions"}

{% if openshift_enterprise %}
*   For more information about Docker Container Engine or Podman, see [Container build tool options](/architecture/understanding-development#container-build-tool-options).
{%- endif %}

*   See [Getting started with functions](/serverless/functions/serverless-functions-getting-started#serverless-functions-getting-started).