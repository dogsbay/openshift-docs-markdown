{% if context == "installing-aws-china-region" %}
{%- set aws = true -%}
{%- set aws_china = true -%}
{% endif %}
{% if context == "installing-aws-customizations" %}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-specialized-region" %}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-private" %}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-vpc" %}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-user-infra" %}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-government-region" %}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-restricted-networks-aws-installer-provisioned" %}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-restricted-networks-aws" %}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-secret-region" %}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-bare-metal" %}
{%- set bare_metal = true -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set bare_metal = true -%}
{% endif %}
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
{% if context == "installing-vsphere" %}
{%- set vsphere = true -%}
{% endif %}
{% if context == "installing-restricted-networks-vsphere" %}
{%- set vsphere = true -%}
{% endif %}
{% if context == "installing-vsphere-network-customizations" %}
{%- set vsphere = true -%}
{% endif %}
{% if context == "installing-vsphere-installer-provisioned-customizations" %}
{%- set vsphere = true -%}
{% endif %}
{% if context == "installing-restricted-networks-installer-provisioned-vsphere" %}
{%- set vsphere = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the cluster-wide proxy during installation {id="installation-configure-proxy_{{ context }}"}

Production environments can deny direct access to the internet and instead have an HTTP or HTTPS proxy available. You can configure a new {{ product_title }}
cluster to use a proxy by configuring the proxy settings in the `install-config.yaml` file. {._abstract}

{% if bare_metal %}

:::note

For bare-metal installations, if you do not assign node IP addresses from the range that is specified in the `networking.machineNetwork[].cidr` field in the `install-config.yaml` file, you must include them in the `proxy.noProxy` field.

:::

{% endif %}

**Prerequisites**

{%- if not gcp %}
*   You have an existing `install-config.yaml` file.

{%- endif %}
*   You have reviewed the sites that your cluster requires access to and determined whether any of them need to bypass the proxy. By default, the proxy handles all cluster egress traffic, including calls to hosting cloud provider APIs. You added sites to the `Proxy` object’s `spec.noProxy` field to bypass the proxy if necessary.

    :::note

    The `Proxy` object `status.noProxy` field includes the values of the `networking.machineNetwork[].cidr`, `networking.clusterNetwork[].cidr`, and `networking.serviceNetwork[]` fields from your installation configuration.

    For installations on {{ aws_first }}, {{ gcp_first }}, Microsoft Azure, and {{ rh_openstack_first }}, the `Proxy` object `status.noProxy` field also includes the instance metadata endpoint (`169.254.169.254`).
    
    :::


**Procedure**

1.  Edit your `install-config.yaml` file and add the proxy settings. For example:
    ```yaml {minja}
    apiVersion: v1
    baseDomain: my.domain.com
    proxy:
      httpProxy: http://<username>:<pswd>@<ip>:<port>
      httpsProxy: https://<username>:<pswd>@<ip>:<port>
    {%- if not aws %}
      noProxy: example.com
    {%- endif %}
    {%- if aws %}
      noProxy: ec2.<aws_region>.amazonaws.com,elasticloadbalancing.<aws_region>.amazonaws.com,s3.<aws_region>.amazonaws.com
    {%- endif %}
    additionalTrustBundle: |
        -----BEGIN CERTIFICATE-----
        <MY_TRUSTED_CA_CERT>
        -----END CERTIFICATE-----
    additionalTrustBundlePolicy: <policy_to_add_additionalTrustBundle>
    # ...
    ```

    where:

    `proxy.httpProxy`
    :   Specifies a proxy URL to use for creating HTTP connections outside the cluster. The URL scheme must be `http`.

    `proxy.httpsProxy`
    :   Specifies a proxy URL to use for creating HTTPS connections outside the cluster.

    `proxy.noProxy`
    :   Specifies a comma-separated list of destination domain names, IP addresses, or other network CIDRs to exclude from proxying. Preface a domain with `.` to match subdomains only. For example, `.y.com` matches `x.y.com`, but not `y.com`. Use `*` to bypass the proxy for all destinations.
{%- if aws %}
        If you have added the Amazon `EC2`, `Elastic Load Balancing`, and `S3` VPC endpoints to your VPC, you must add these endpoints to the `noProxy` field.
{%- endif %}
{%- if vsphere %}
        You must include vCenter’s IP address and the IP range that you use for its machines.
{%- endif %}

    `additionalTrustBundle`
    :   If you specify this value, the installation program generates a config map named `user-ca-bundle` in the `openshift-config` namespace to hold the additional CA certificates. If you specify `additionalTrustBundle` and at least one proxy setting, the `Proxy` object references the `user-ca-bundle` config map in the `trustedCA` field. The Cluster Network Operator then creates a `trusted-ca-bundle` config map that merges the contents specified for the `trustedCA` parameter with the {{ op_system }} trust bundle. You must set the `additionalTrustBundle` field unless an authority from the {{ op_system }} trust bundle signs the proxy’s identity certificate.

    `additionalTrustBundlePolicy`
    :   Specifies the policy that determines the configuration of the `Proxy` object to reference the `user-ca-bundle` config map in the `trustedCA` field. The allowed values are `Proxyonly` and `Always`. Use `Proxyonly` to reference the `user-ca-bundle` config map only when you configure an `http/https` proxy. Use `Always` to always reference the `user-ca-bundle` config map. The default value is `Proxyonly`. Optional parameter.

    :::note

    The installation program does not support the proxy `readinessEndpoints` field.
    
    :::


    :::note

    If the installation program times out, restart and then complete the deployment by using the `wait-for` command of the installation program. For example:

    ```terminal
    $ ./openshift-install wait-for install-complete --log-level debug
    ```
    
    :::


1.  Save the file and reference it when installing {{ product_title }}.

    The installation program creates a cluster-wide proxy named `cluster` that uses the proxy settings in the `install-config.yaml` file. If you do not give proxy settings, the installation program still creates a `cluster` `Proxy` object, but it has a nil `spec`.

    :::note

    Only the `Proxy` object named `cluster` is supported, and you cannot create additional proxies.
    
    :::


{% if context == "installing-aws-china-region" %}
{%- set aws = "" -%}
{%- set aws_china = "" -%}
{% endif %}
{% if context == "installing-aws-customizations" %}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-aws-private" %}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-aws-vpc" %}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-aws-specialized-region" %}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-aws-user-infra" %}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-aws-government-region" %}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-aws-installer-provisioned" %}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-aws" %}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-aws-secret-region" %}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-bare-metal" %}
{%- set bare_metal = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set bare_metal = "" -%}
{% endif %}
{% if context == "installing-vsphere" %}
{%- set vsphere = "" -%}
{% endif %}
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
{% if context == "installing-restricted-networks-vsphere" %}
{%- set vsphere = "" -%}
{% endif %}
{% if context == "installing-vsphere-network-customizations" %}
{%- set vsphere = "" -%}
{% endif %}
{% if context == "installing-vsphere-installer-provisioned-customizations" %}
{%- set vsphere = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-installer-provisioned-vsphere" %}
{%- set vsphere = "" -%}
{% endif %}