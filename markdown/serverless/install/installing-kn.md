{% include "./_attributes/common-attributes.md" %}
# Installing the Knative CLI {id="installing-kn"}
{%- set context = "installing-kn" %}

The Knative (`kn`) CLI does not have its own login mechanism. To log in to the cluster, you must install the OpenShift CLI (`oc`) and use the `oc login` command. Installation options for the CLIs may vary depending on your operating system.

{% if openshift_enterprise %}
For more information on installing the OpenShift CLI (`oc`) for your operating system and logging in with `oc`, see the [OpenShift CLI getting started](/cli_reference/openshift_cli/getting-started-cli#cli-getting-started) documentation.
{%- endif %}

{{ ServerlessProductName }} cannot be installed using the Knative (`kn`) CLI. A cluster administrator must install the {{ ServerlessOperatorName }} and set up the Knative components, as described in the [Installing the {{ ServerlessOperatorName }}](/serverless/install/install-serverless-operator#install-serverless-operator) documentation.


:::important

If you try to use an older version of the Knative (`kn`) CLI with a newer {{ ServerlessProductName }} release, the API is not found and an error occurs.

For example, if you use the 1.23.0 release of the Knative (`kn`) CLI, which uses version 1.2, with the 1.24.0 {{ ServerlessProductName }} release, which uses the 1.3 versions of the Knative Serving and Knative Eventing APIs, the CLI does not work because it continues to look for the outdated 1.2 API versions.

Ensure that you are using the latest Knative (`kn`) CLI version for your {{ ServerlessProductName }} release to avoid issues.

:::


{% leveloffset +1 %}{% include "./modules/serverless-installing-cli-web-console.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-installing-cli-linux-rpm-package-manager.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-installing-cli-linux.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-installing-cli-macos.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-installing-cli-windows.md" %}{% endleveloffset %}