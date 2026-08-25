{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = true -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z_kvm = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-ibm-power" %}
{%- set ibm_power = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-platform-agnostic" %}
{%- set agnostic = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
{%- if not (ibm_z or ibm_z_kvm or ibm_power or agnostic) %}
# Sample install-config.yaml file for bare metal {id="installation-bare-metal-config-yaml_{{ context }}"}
{% endif %}
{% if ibm_z or ibm_z_kvm %}
# Sample install-config.yaml file for {{ ibm_z_title }} {id="_sample_install-configyaml_file_for_ibm_z_title"}
{% endif %}
{% if ibm_power %}
# Sample install-config.yaml file for {{ ibm_power_title }} {id="_sample_install-configyaml_file_for_ibm_power_title"}
{% endif %}
{% if agnostic %}
# Sample install-config.yaml file for other platforms {id="_sample_install-configyaml_file_for_other_platforms"}
{% endif %}

You can customize the `install-config.yaml` file to specify more details about your {{ product_title }} cluster platform or modify the values of the required parameters. {._abstract}

```yaml
apiVersion: v1
baseDomain: example.com
compute:
- hyperthreading: Enabled
  name: worker
  replicas: 0
{%- if ibm_z or ibm_z_kvm %}
  architecture: s390x
{% endif %}
{% if ibm_power %}
  architecture: ppc64le
{%- endif %}
controlPlane:
  hyperthreading: Enabled
  name: master
  replicas: 3
{%- if ibm_z or ibm_z_kvm %}
  architecture: s390x
{% endif %}
{% if ibm_power %}
  architecture: ppc64le
{%- endif %}
metadata:
  name: test
networking:
  clusterNetwork:
  - cidr: 10.128.0.0/14
    hostPrefix: 23
  networkType: OVNKubernetes
  machineNetwork:
  - cidr: 192.168.0.0/16
  serviceNetwork:
  - 172.30.0.0/16
platform:
  none: {}
{%- if not openshift_origin %}
fips: false
{% endif %}
{% if not restricted %}
{% if not openshift_origin %}
pullSecret: '{"auths": ...}'
{% endif %}
{% if openshift_origin %}
pullSecret: '{"auths": ...}'
{% endif %}
{% if not openshift_origin %}
sshKey: 'ssh-ed25519 AAAA...'
{% endif %}
{% if openshift_origin %}
sshKey: 'ssh-ed25519 AAAA...'
{% endif %}
{% endif %}
{% if restricted %}
{% if not openshift_origin %}
pullSecret: '{"auths":{"<local_registry>": {"auth": "<credentials>","email": "you@example.com"}}}'
{% endif %}
{% if openshift_origin %}
pullSecret: '{"auths":{"<local_registry>": {"auth": "<credentials>","email": "you@example.com"}}}'
{% endif %}
{% if not openshift_origin %}
sshKey: 'ssh-ed25519 AAAA...'
{% endif %}
{% if openshift_origin %}
sshKey: 'ssh-ed25519 AAAA...'
{% endif %}
{% endif %}
{% if restricted %}
{% if not openshift_origin %}
additionalTrustBundle: |
  -----BEGIN CERTIFICATE-----
  ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
  -----END CERTIFICATE-----
imageContentSources:
- mirrors:
  {%- if ibm_z or ibm_z_kvm %}
  - <local_repository>/ocp4/openshift4
  source: quay.io/openshift-release-dev/ocp-release
- mirrors:
  - <local_repository>/ocp4/openshift4
  source: quay.io/openshift-release-dev/ocp-v4.0-art-dev
{% endif %}
{% if not (ibm_z or ibm_z_kvm) %}
  - <local_registry>/<local_repository_name>/release
  source: quay.io/openshift-release-dev/ocp-release
- mirrors:
  - <local_registry>/<local_repository_name>/release
  source: quay.io/openshift-release-dev/ocp-v4.0-art-dev
{% endif %}
{% endif %}
{% if openshift_origin %}
additionalTrustBundle: |
  -----BEGIN CERTIFICATE-----
  ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
  -----END CERTIFICATE-----
imageContentSources:
- mirrors:
  {%- if ibm_z or ibm_z_kvm %}
  - <local_repository>/ocp4/openshift4
  source: quay.io/openshift-release-dev/ocp-release
- mirrors:
  - <local_repository>/ocp4/openshift4
  source: quay.io/openshift-release-dev/ocp-v4.0-art-dev
{% endif %}
{% if not (ibm_z or ibm_z_kvm) %}
  - <local_registry>/<local_repository_name>/release
  source: quay.io/openshift-release-dev/ocp-release
- mirrors:
  - <local_registry>/<local_repository_name>/release
  source: quay.io/openshift-release-dev/ocp-v4.0-art-dev
{% endif %}
{% endif %}
{%- endif %}
```

where:


`baseDomain`
:   Specifies the base domain of the cluster. All DNS records must be sub-domains of this base and include the cluster name.

`compute`
:   Specifies the `compute` node configurations, which is a sequence of mappings. To meet the requirements of the different data structures, the first line of the `compute` section must begin with a hyphen, `-`.

`controlPlane`
:   Specifies the `controlPlane` node configurations, which is a single mapping. To meet the requirements of the different data structures, the first line of the `controlPlane` section must not. Only one control plane pool is used.
{%- if not ibm_power %}

`hyperthreading`
:   Specifies whether to enable or disable simultaneous multithreading (SMT), or hyperthreading. By default, SMT is enabled to increase the performance of the cores in your machines. You can disable it by setting the parameter value to `Disabled`. If you disable SMT, you must disable it in all cluster machines; this includes both control plane and compute machines.
{% endif %}
{% if ibm_power %}

`hyperthreading`
:   Specifies simultaneous multithreading (SMT), which you configure as a post-installation task.
{% endif %}
{% if not (ibm_z or ibm_z_kvm or ibm_power) %}


:::note

Simultaneous multithreading (SMT) is enabled by default. If SMT is not enabled in your BIOS settings, the `hyperthreading` parameter has no effect.

:::



:::important

If you disable `hyperthreading`, whether in the BIOS or in the `install-config.yaml` file, ensure that your capacity planning accounts for the dramatically decreased machine performance.

:::

{% endif %}
{% if ibm_z or ibm_z_kvm %}


:::note

Simultaneous multithreading (SMT) is enabled by default. If SMT is not available on your {{ product_title }} nodes, the `hyperthreading` parameter has no effect.

:::



:::important

If you disable `hyperthreading`, whether on your {{ product_title }} nodes or in the `install-config.yaml` file, ensure that your capacity planning accounts for the dramatically decreased machine performance.

:::


{%- endif %}

`compute.replicas`
:   Specifies the number of compute machines that the cluster creates and manages for you on installer-provisioned installations. You must set this value to `0` when you install {{ product_title }} on user-provisioned infrastructure. Additionally for user-provisioned installations, you must manually deploy the compute machines before you finish installing the cluster.


:::note

If you are installing a three-node cluster, do not deploy any compute machines when you install the {{ op_system_first }} machines.

:::



`controlPlane.replicas`
:   Specifies the number of control plane machines that you add to the cluster. Because the cluster uses these values as the number of etcd endpoints in the cluster, the value must match the number of control plane machines that you deploy.

`metadata.name`
:   Specifies the cluster name that you specified in your DNS records.

`networking.clusterNetwork.cidr`
:   Specifies a block of IP addresses from which pod IP addresses are allocated. This block must not overlap with existing physical networks. These IP addresses are used for the pod network. If you need to access the pods from an external network, you must configure load balancers and routers to manage the traffic.


:::note

Class E CIDR range is reserved for a future use. To use the Class E CIDR range, you must ensure your networking environment accepts the IP addresses within the Class E CIDR range.

:::



`networking.cidr.hostPrefix`
:   Specifies the subnet prefix length to assign to each individual node. For example, if `hostPrefix` is set to `23`, then each node is assigned a `/23` subnet out of the given `cidr`, which allows for 510 (2^(32 - 23) - 2) pod IP addresses. If you are required to provide access to nodes from an external network, configure load balancers and routers to manage the traffic.

`networking.networkType`
:   Specifies the cluster network plugin to install. The default value `OVNKubernetes` is the only supported value.

`networking.serviceNetwork`
:   Specifies the IP address pool to use for service IP addresses. You can enter only one IP address pool. This block must not overlap with existing physical networks. If you need to access the services from an external network, configure load balancers and routers to manage the traffic.

`platform`
:   Specifies the platform. You must set the platform to `none`. You cannot provide additional platform configuration variables for
{% if not (ibm_z or ibm_z_kvm or ibm_power) %}
    your platform.
{% endif %}
{% if ibm_z or ibm_z_kvm %}
    {{ ibm_z_name }} infrastructure.
{% endif %}
{% if ibm_power %}
    {{ ibm_power_name }} infrastructure.
{% endif %}


:::important

Clusters that are installed with the platform type `none` are unable to use some features, such as managing compute machines with the Machine API. This limitation applies even if the compute machines that are attached to the cluster are installed on a platform that would normally support the feature. This parameter cannot be changed after installation.

:::

{%- if not openshift_origin %}

`fips`
:   Specifies either enabling or disabling FIPS mode. By default, FIPS mode is not enabled. If FIPS mode is enabled, the {{ op_system_first }} machines that {{ product_title }} runs on bypass the default Kubernetes cryptography suite and use the cryptography modules that are provided with {{ op_system }} instead.

{% include "./snippets/fips-snippet.md" %}

{% endif %}
{% if not restricted %}
{% if not openshift_origin %}

`pullSecret`
:   Specifies the {{ cluster_manager_url_pull }}. This pull secret allows you to authenticate with the services that are provided by the included authorities, including Quay.io, which serves the container images for {{ product_title }} components.
{% endif %}
{% if openshift_origin %}

`pullSecret`
:   Specifies the {{ cluster_manager_url_pull }}. This pull secret allows you to authenticate with the services that are provided by the included authorities, including Quay.io, which serves the container images for {{ product_title }} components.
{% endif %}
{% endif %}
{% if restricted %}
{% if not openshift_origin %}

`pullSecret`
:   Specifies the registry domain name for `<local_registry>`, and optionally the port, that your mirror registry uses to serve content. For example, `registry.example.com` or `registry.example.com:5000`. For `<credentials>`, specify the base64-encoded user name and password for your mirror registry.
{% endif %}
{% if openshift_origin %}

`pullSecret`
:   Specifies the registry domain name for `<local_registry>`, and optionally the port, that your mirror registry uses to serve content. For example, `registry.example.com` or `registry.example.com:5000`. For `<credentials>`, specify the base64-encoded user name and password for your mirror registry.
{% endif %}
{% endif %}
{% if not openshift_origin %}

`sshKey`
:   Specifies the SSH public key for the `core` user in {{ op_system_first }}.
{% endif %}
{% if openshift_origin %}

`sshKey`
:   Specifies the SSH public key for the `core` user in {{ op_system_first }}.
{% endif %}


:::note

For production {{ product_title }} clusters on which you want to perform installation debugging or disaster recovery, specify an SSH key that your `ssh-agent` process uses.

:::


{% if restricted %}
{% if not (ibm_z or ibm_z_kvm) %}
{% if not openshift_origin %}

`additionalTrustBundle`
:   Specifies the contents of the certificate file that you used for your mirror registry.
{% endif %}
{% if openshift_origin %}

`additionalTrustBundle`
:   Specifies the contents of the certificate file that you used for your mirror registry.
{% endif %}
{% endif %}
{% if ibm_z or ibm_z_kvm %}

`additionalTrustBundle`
:   Specifies the `additionalTrustBundle` parameter and value. The value must be the contents of the certificate file that you used for your mirror registry. The certificate file can be an existing, trusted certificate authority or the self-signed certificate that you generated for the mirror registry.
{% endif %}
{% if not openshift_origin %}

`imageContentSources`
:   Specifies the `imageContentSources` section according to the output of the command that you used to mirror the repository.


:::important

*   When using the `oc adm release mirror` command, use the output from the `imageContentSources` section.
*   When using `oc mirror` command, use the `repositoryDigestMirrors` section of the `ImageContentSourcePolicy` file that results from running the command.
*   `ImageContentSourcePolicy` is deprecated. For more information see _Configuring image registry repository mirroring_.

:::

{% endif %}
{% if openshift_origin %}

`imageContentSources`
:   Specifies the `imageContentSources` section from the output of the command to mirror the repository.
{% endif %}
{% endif %}

{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = false -%}
{% endif %}
{% if openshift_origin %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = false -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z_kvm = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-ibm-power" %}
{%- set ibm_power = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = false -%}
{% endif %}
{% if context == "installing-platform-agnostic" %}
{%- set agnostic = false -%}
{% endif %}