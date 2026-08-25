{% if context == "installing-restricted-networks-ibm-z" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-vsphere" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Waiting for the bootstrap process to complete {id="installation-installing-bare-metal_{{ context }}"}

The {{ product_title }} bootstrap process begins after the cluster nodes first boot into the persistent {{ op_system }} environment that has been installed to disk. The configuration information provided through the Ignition config files is used to initialize the bootstrap process and install {{ product_title }} on the machines. You must wait for the bootstrap process to complete. {._abstract}

**Prerequisites**

*   You have created the Ignition config files for your cluster.
*   You have configured suitable network, DNS, and load balancing infrastructure.
*   You have obtained the installation program and generated the Ignition config files for your cluster.
*   You installed {{ op_system }} on your cluster machines and provided the Ignition config files that the {{ product_title }} installation program generated.
{%- if not restricted %}
*   Your machines have direct internet access or have an HTTP or HTTPS proxy available.
{% endif %}

**Procedure**

1.  Monitor the bootstrap process:
    ```terminal
    $ ./openshift-install --dir <installation_directory> wait-for bootstrap-complete \
        --log-level=info
    ```

    where:

    `<installation_directory>`
    :   Specifies the path to the directory that stores the installation files.

    `--log-level=info`
    :   Specifies `warn`, `debug`, or `error` instead of `info` to view different installation details.
    ```terminal title="Example output"
    INFO Waiting up to 20m0s for the Kubernetes API at https://api.test.example.com:6443...
    INFO API v1.35.4 up
    INFO Waiting up to 1h0m0s for bootstrapping to complete...
    INFO It is now safe to remove the bootstrap resources
    ```
    The command succeeds when the Kubernetes API server signals that it has been
    bootstrapped on the control plane machines.

1.  After the bootstrap process is complete, remove the bootstrap machine from the
load balancer.

    :::important

    You must remove the bootstrap machine from the load balancer at this point. You
    can also remove or reformat the bootstrap machine itself.
    
    :::


{% if context == "installing-restricted-networks-ibm-z" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-vsphere" %}
{%- set restricted = false -%}
{% endif %}