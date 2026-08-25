{% if context == "installing-azure-user-infra" %}
{%- set cp = "Azure" -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set cp = "Azure Stack Hub" -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set cp = "Azure" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Completing an {{ cp }} installation on user-provisioned infrastructure {id="installation-azure-user-infra-completing_{{ context }}"}

After you start the {{ product_title }} installation on Microsoft {{ cp }} user-provisioned infrastructure, you can monitor cluster events with the installation program until the cluster is ready. {._abstract}

**Prerequisites**

*   Deploy the bootstrap machine for an {{ product_title }} cluster on user-provisioned {{ cp }} infrastructure.
*   Install the `oc` CLI and log in.

**Procedure**

*   Complete the cluster installation:
    ```terminal
    $ ./openshift-install --dir <installation_directory> wait-for install-complete
    ```

    For `<installation_directory>`, specify the path to the directory that you stored the installation files in.
    ```terminal title="Example output"
    INFO Waiting up to 30m0s for the cluster to initialize...
    ```

    :::important

    *   The Ignition config files that the installation program generates contain certificates that expire after 24 hours, which are then renewed at that time. If the cluster is shut down before renewing the certificates and the cluster is later restarted after the 24 hours have elapsed, the cluster automatically recovers the expired certificates. The exception is that you must manually approve the pending `node-bootstrapper` certificate signing requests (CSRs) to recover kubelet certificates. See the documentation for _Recovering from expired control plane certificates_ for more information.
    *   It is recommended that you use Ignition config files within 12 hours after they are generated because the 24-hour certificate rotates from 16 to 22 hours after the cluster is installed. By using the Ignition config files within 12 hours, you can avoid installation failure if the certificate update runs during installation.
    
    :::


{% if context == "installing-azure-user-infra" %}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{% endif %}