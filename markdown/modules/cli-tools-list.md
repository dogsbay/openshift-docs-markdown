{%- set _mod_docs_content_type = "REFERENCE" %}
# List of CLI tools {id="cli-tools-list_{{ context }}"}

Manage your {{ product_title }} cluster, applications, and Operators from the terminal by using primary command-line interface (CLI) tools. {._abstract}

The following list details these primary CLI tools:

*   {{ oc_first }}:
{%- if not openshift_rosa %}
This is the most commonly used CLI tool by {{ product_title }} users.
{% endif %}
{% if openshift_rosa %}
This is one of the more commonly used developer CLI tools.
{%- endif %}
Cluster administrators and developers can use it to perform end-to-end operations across {{ product_title }} from the terminal, including working directly with project source code using command scripts.
*   Kubernetes CLI (`kubectl`): {{ product_title }} is conformant with Cloud Native Computing Foundation (CNCF) Kubernetes and fully supports `kubectl` as a client. The {{ oc_first }} is a superset of `kubectl`, where both CLI tools are included in the {{ product_title }} clients download. You can use the standard `kubectl` commands against {{ product_title }} clusters without any compatibility issues.
*   Helm CLI (`helm`): Helm is a package manager for Kubernetes. The `helm` CLI provides commands to install, upgrade, and manage Helm charts on a cluster.
{%- if openshift_rosa or openshift_rosa_hcp %}
*   ROSA CLI (`rosa`): Use the `rosa` CLI to create, update, manage, and delete {{ product_title }} clusters and resources.
{%- endif %}
*   opm CLI: The `opm` CLI tool helps Operator developers and cluster administrators create and maintain catalogs of Operators.
*   Knative CLI: The Knative (`kn`) CLI tool provides commands to interact with {{ ServerlessProductName }} components, such as Knative Serving and Eventing.
*   Pipelines CLI (tkn): {{ pipelines_shortname }} is a continuous integration and delivery (CI/CD) solution in {{ product_title }}, which internally uses Tekton. The `tkn` CLI tool provides commands to interact with {{ pipelines_shortname }}.

## Additional resources {id="_additional_resources" ._additional-resources}

*   [{{ product_title }} CLI (`oc`)](/cli_reference/openshift_cli/getting-started-cli#cli-getting-started)
*   [Helm CLI (`helm`)](/applications/working_with_helm_charts/installing-helm#installing-helm)
{%- if openshift_rosa or openshift_rosa_hcp %}
*   [ROSA CLI (`rosa`)](/cli_reference/rosa_cli/rosa-get-started-cli#rosa-get-started-cli)
{%- endif %}
*   [`opm` CLI](/cli_reference/opm/cli-opm-install#cli-opm-install)
*   [Knative CLI (`kn`)](/cli_reference/kn-cli-tools#kn-cli-tools)
*   [{{ pipelines_shortname }} CLI (`tkn`)](/cli_reference/tkn_cli/installing-tkn#installing-tkn)