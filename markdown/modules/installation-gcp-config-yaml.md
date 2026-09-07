{% if context == "installing-gcp-network-customizations" %}
{%- set with_networking = true -%}
{% endif %}
{% if context != "installing-gcp-network-customizations" %}
{%- set without_networking = true -%}
{% endif %}
{% if context == "installing-gcp-vpc" %}
{%- set vpc = true -%}
{% endif %}
{% if context == "installing-gcp-private" %}
{%- set private = true -%}
{%- set vpc = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample customized install-config.yaml file for {{ gcp_short }} {id="installation-gcp-config-yaml_{{ context }}"}

You can customize the `install-config.yaml` file to specify more details about your {{ product_title }} cluster’s platform or to change the values of the required parameters. {._abstract}


:::important

This sample YAML file is provided for reference only. You must obtain your `install-config.yaml` file by using the installation program and modify it.

:::


```yaml {minja}
apiVersion: v1
baseDomain: example.com
credentialsMode: Mint
controlPlane:
  hyperthreading: Enabled
  name: master
  platform:
    gcp:
      type: n2-standard-4
      zones:
      - us-central1-a
      - us-central1-c
      osDisk:
        diskType: pd-ssd
        diskSizeGB: 1024
        encryptionKey:
          kmsKey:
            name: worker-key
            keyRing: test-machine-keys
            location: global
            projectID: project-id
      tags:
      - control-plane-tag1
      - control-plane-tag2
      osImage:
        project: example-project-name
        name: example-image-name
  replicas: 3
compute:
- hyperthreading: Enabled
  name: worker
  platform:
    gcp:
      type: n2-standard-4
      zones:
      - us-central1-a
      - us-central1-c
      osDisk:
        diskType: pd-standard
        diskSizeGB: 128
        encryptionKey:
          kmsKey:
            name: worker-key
            keyRing: test-machine-keys
            location: global
            projectID: project-id
        tags:
        - compute-tag1
        - compute-tag2
        osImage:
          project: example-project-name
          name: example-image-name
  replicas: 3
metadata:
  name: test-cluster
{%- if without_networking %}
networking:
{%- endif %}
{%- if with_networking %}
networking:
{%- endif %}
  clusterNetwork:
  - cidr: 10.128.0.0/14
    hostPrefix: 23
  machineNetwork:
  - cidr: 10.0.0.0/16
  networkType: OVNKubernetes
  serviceNetwork:
  - 172.30.0.0/16
platform:
  gcp:
    projectID: openshift-production
    region: us-central1
    defaultMachinePlatform:
      tags:
      - global-tag1
      - global-tag2
      osImage:
        project: example-project-name
        name: example-image-name
{%- if vpc or restricted %}
    network: existing_vpc
    controlPlaneSubnet: control_plane_subnet
    computeSubnet: compute_subnet
{%- endif %}
{%- if not restricted %}
pullSecret: '{"auths": ...}'
{%- endif %}
{%- if restricted %}
pullSecret: '{"auths":{"<local_registry>": {"auth": "<credentials>","email": "you@example.com"}}}'
{%- endif %}
{%- if not (vpc or restricted) %}
{% if not openshift_origin %}
fips: false
sshKey: ssh-ed25519 AAAA...
{% endif %}
{% if openshift_origin %}
sshKey: ssh-ed25519 AAAA...
{% endif %}
{% endif %}
{% if vpc %}
{% if not openshift_origin %}
fips: false
sshKey: ssh-ed25519 AAAA...
{% endif %}
{% if openshift_origin %}
sshKey: ssh-ed25519 AAAA...
{% endif %}
{% endif %}
{% if restricted %}
{% if not openshift_origin %}
fips: false
sshKey: ssh-ed25519 AAAA...
{% endif %}
{% if openshift_origin %}
sshKey: ssh-ed25519 AAAA...
{% endif %}
{% endif %}
{% if private %}
{% if not openshift_origin %}
publish: Internal
{% endif %}
{% if openshift_origin %}
publish: Internal
{% endif %}
{% endif %}
{% if restricted %}
{% if not openshift_origin %}
additionalTrustBundle: |
    -----BEGIN CERTIFICATE-----
    <MY_TRUSTED_CA_CERT>
    -----END CERTIFICATE-----
imageContentSources:
- mirrors:
  - <local_registry>/<local_repository_name>/release
  source: quay.io/openshift-release-dev/ocp-release
- mirrors:
  - <local_registry>/<local_repository_name>/release
  source: quay.io/openshift-release-dev/ocp-v4.0-art-dev
{% endif %}
{% if openshift_origin %}
additionalTrustBundle: |
  -----BEGIN CERTIFICATE-----
  <MY_TRUSTED_CA_CERT>
  -----END CERTIFICATE-----
imageContentSources:
- mirrors:
  - <local_registry>/<local_repository_name>/release
  source: quay.io/openshift-release-dev/ocp-release
- mirrors:
  - <local_registry>/<local_repository_name>/release
  source: quay.io/openshift-release-dev/ocp-v4.0-art-dev
{% endif %}
{% endif %}
```
where:

*   `baseDomain`, `metadata.name`, `platform.gcp.projectID`, `platform.gcp.region`, `pullSecret`: Specifies required values. The installation program prompts you for these values.
*   `credentialsMode`: Specifies the Cloud Credential Operator (CCO) mode. Optional. By default, the CCO uses the root credentials in the `kube-system` namespace to dynamically try to determine the capabilities of the credentials. For details about CCO modes, see the "About the Cloud Credential Operator" section in the _Authentication and authorization_ guide.
*   `controlPlane`, `compute`, `networking`: Specifies optional parameters. If you do not provide these parameters and values, the installation program provides the default value. The `controlPlane` section is a single mapping, but the `compute` section is a sequence of mappings. To meet the requirements of the different data structures, the first line of the `compute` section must begin with a hyphen, `-`, and the first line of the `controlPlane` section must not. Only one control plane pool is used.
*   `hyperthreading`: Specifies whether to enable or disable simultaneous multithreading. By default, simultaneous multithreading is enabled to increase the performance of your machines' cores. You can disable it by setting the parameter value to `Disabled`. If you disable simultaneous multithreading in some cluster machines, you must disable it in all cluster machines.

    :::important

    If you disable simultaneous multithreading, ensure that your capacity planning accounts for the dramatically decreased machine performance. Use larger machine types, such as `n1-standard-8`, for your machines if you disable simultaneous multithreading.
    
    :::

*   `encryptionKey`: Specifies the custom encryption key section to encrypt both virtual machines and persistent volumes. Optional. Your default compute service account must have the permissions granted to use your KMS key and have the correct IAM role assigned. The default service account name follows the `service-<project_number>@compute-system.iam.gserviceaccount.com` pattern. For more information about granting the correct permissions for your service account, see "Machine management" → "Creating compute machine sets" → "Creating a compute machine set on {{ gcp_short }}".
*   `tags`: Specifies a set of network tags to apply to the control plane or compute machine sets. Optional. The `platform.gcp.defaultMachinePlatform.tags` parameter applies to both control plane and compute machines. If the `compute.platform.gcp.tags` or `controlPlane.platform.gcp.tags` parameters are set, they override the `platform.gcp.defaultMachinePlatform.tags` parameter.
*   `osImage`: Specifies a custom {{ op_system_first }} to boot control plane and compute machines. Optional. The `project` and `name` parameters under `platform.gcp.defaultMachinePlatform.osImage` apply to both control plane and compute machines. If the `project` and `name` parameters under `controlPlane.platform.gcp.osImage` or `compute.platform.gcp.osImage` are set, they override the `platform.gcp.defaultMachinePlatform.osImage` parameters.
*   `networkType`: Specifies the cluster network plugin to install. The default value `OVNKubernetes` is the only supported value.
{%- if vpc or restricted %}
*   `network`: Specifies the name of an existing VPC.
*   `controlPlaneSubnet`: Specifies the name of the existing subnet to deploy the control plane machines to. The subnet must belong to the VPC that you specified.
*   `computeSubnet`: Specifies the name of the existing subnet to deploy the compute machines to. The subnet must belong to the VPC that you specified.
{%- endif %}
{%- if restricted %}
*   `pullSecret`: Specifies the pull secret for your mirror registry. For `<local_registry>`, specify the registry domain name, and optionally the port, that your mirror registry uses to serve content. For example, `registry.example.com` or `registry.example.com:5000`. For `<credentials>`, specify the base64-encoded user name and password for your mirror registry.
{%- endif %}
{%- if not openshift_origin %}
*   `fips`: Specifies whether to enable or disable FIPS mode. By default, FIPS mode is not enabled. If FIPS mode is enabled, the {{ op_system_first }} machines that {{ product_title }} runs on bypass the default Kubernetes cryptography suite and use the cryptography modules that are provided with {{ op_system }} instead.

    :::important

{% if vpc %}
    To enable FIPS mode for your cluster, you must run the installation program from a {{ op_system_base_full }} computer configured to operate in FIPS mode. For more information about configuring FIPS mode on RHEL, see [Installing the system in FIPS mode](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/security_hardening/assembly_installing-the-system-in-fips-mode_security-hardening).

{%- endif %}
    When running {{ op_system_base_full }} or {{ op_system_first }} booted in FIPS mode, {{ product_title }} core components use the {{ op_system_base }} cryptographic libraries that have been submitted to NIST for FIPS 140-2/140-3 Validation on only the x86_64, ppc64le, and s390x architectures.
    
    :::

{%- endif %}
*   `sshKey`: Specifies the public SSH key that you use to access the machines in your cluster. Optional.

    :::note

    For production {{ product_title }} clusters on which you want to perform installation debugging or disaster recovery, specify an SSH key that your `ssh-agent` process uses.
    
    :::

{% if private %}
*   `publish`: Specifies how to publish the user-facing endpoints of your cluster. Set `publish` to `Internal` to deploy a private cluster, which cannot be accessed from the internet. The default value is `External`.
{% endif %}
{% if restricted %}
*   `additionalTrustBundle`: Specifies the contents of the certificate file that you used for your mirror registry.
*   `imageContentSources`: Specifies the image content sources from the output of the command to mirror the repository.
{% endif %}

{% if context == "installing-gcp-network-customizations" %}
{%- set with_networking = "" -%}
{% endif %}
{% if context != "installing-gcp-network-customizations" %}
{%- set without_networking = "" -%}
{% endif %}
{% if context == "installing-gcp-vpc" %}
{%- set vpc = "" -%}
{% endif %}
{% if context == "installing-gcp-private" %}
{%- set private = "" -%}
{%- set vpc = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set restricted = "" -%}
{% endif %}