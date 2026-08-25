{% if context == "installing-gcp-user-infra" %}
{%- set gcp = true -%}
{%- set three_node_cluster = true -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set gcp = true -%}
{%- set user_infra_vpc = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set gcp = true -%}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Logging in to the cluster by using the CLI {id="cli-logging-in-kubeadmin_{{ context }}"}

To log in to your cluster as the default system user, export the `kubeconfig` file. This configuration enables the CLI to authenticate and connect to the specific API server created during {{ product_title }} installation. {._abstract}

The `kubeconfig` file is specific to a cluster and {{ product_title }} generates it during installation.

**Prerequisites**

{%- if not gcp %}
*   You deployed an {{ product_title }} cluster.
{%- endif %}
* You installed the {{ oc_first }}.
{%- if gcp %}
* Ensure the bootstrap process completed successfully.
{%- endif %}

**Procedure**

1.  Export the `kubeadmin` credentials by running the following command:
    ```terminal
    $ export KUBECONFIG=<installation_directory>/auth/kubeconfig
    ```

    where:

    `<installation_directory>`
    :   Specifies the path to the directory that stores the installation files.

1.  Verify you can run `oc` commands successfully using the exported configuration by running the following command:
    ```terminal
    $ oc whoami
    ```
    ```terminal title="Example output"
    system:admin
    ```

**Next steps**

*   "Customize your cluster"
*   "Remote health reporting"

{% if context == "installing-gcp-user-infra" %}
{%- set gcp = "" -%}
{%- set three_node_cluster = "" -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set gcp = "" -%}
{%- set user_infra_vpc = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set gcp = "" -%}
{%- set restricted = "" -%}
{% endif %}