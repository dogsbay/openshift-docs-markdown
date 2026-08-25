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

You can customize the `install-config.yaml` file to specify more details about your {{ product_title }} cluster’s platform or modify the values of the required parameters.


:::important

This sample YAML file is provided for reference only. You must obtain your `install-config.yaml` file by using the installation program and modify it.

:::


```yaml {minja}
apiVersion: v1
baseDomain: example.com (1)
credentialsMode: Mint (2)
controlPlane: (3) (4)
  hyperthreading: Enabled (5)
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
        encryptionKey: (6)
          kmsKey:
            name: worker-key
            keyRing: test-machine-keys
            location: global
            projectID: project-id
      tags: (7)
      - control-plane-tag1
      - control-plane-tag2
      osImage: (8)
        project: example-project-name
        name: example-image-name
  replicas: 3
compute: (3) (4)
- hyperthreading: Enabled (5)
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
        encryptionKey: (6)
          kmsKey:
            name: worker-key
            keyRing: test-machine-keys
            location: global
            projectID: project-id
        tags: (7)
        - compute-tag1
        - compute-tag2
        osImage: (8)
          project: example-project-name
          name: example-image-name
  replicas: 3
metadata:
  name: test-cluster (1)
{%- if without_networking %}
networking:
{%- endif %}
{%- if with_networking %}
networking: (3)
{%- endif %}
  clusterNetwork:
  - cidr: 10.128.0.0/14
    hostPrefix: 23
  machineNetwork:
  - cidr: 10.0.0.0/16
  networkType: OVNKubernetes (9)
  serviceNetwork:
  - 172.30.0.0/16
platform:
  gcp:
    projectID: openshift-production (1)
    region: us-central1 (1)
    defaultMachinePlatform:
      tags: (7)
      - global-tag1
      - global-tag2
      osImage: (8)
        project: example-project-name
        name: example-image-name
{%- if vpc or restricted %}
    network: existing_vpc (10)
    controlPlaneSubnet: control_plane_subnet (11)
    computeSubnet: compute_subnet (12)
{%- endif %}
{%- if not restricted %}
pullSecret: '{"auths": ...}' (1)
{%- endif %}
{%- if restricted %}
pullSecret: '{"auths":{"<local_registry>": {"auth": "<credentials>","email": "you@example.com"}}}' (13)
{%- endif %}
{%- if not (vpc or restricted) %}
{% if not openshift_origin %}
fips: false (10)
sshKey: ssh-ed25519 AAAA... (11)
{% endif %}
{% if openshift_origin %}
sshKey: ssh-ed25519 AAAA... (10)
{% endif %}
{% endif %}
{% if vpc %}
{% if not openshift_origin %}
fips: false (13)
sshKey: ssh-ed25519 AAAA... (14)
{% endif %}
{% if openshift_origin %}
sshKey: ssh-ed25519 AAAA... (13)
{% endif %}
{% endif %}
{% if restricted %}
{% if not openshift_origin %}
fips: false (14)
sshKey: ssh-ed25519 AAAA... (15)
{% endif %}
{% if openshift_origin %}
sshKey: ssh-ed25519 AAAA... (14)
{% endif %}
{% endif %}
{% if private %}
{% if not openshift_origin %}
publish: Internal (15)
{% endif %}
{% if openshift_origin %}
publish: Internal (14)
{% endif %}
{% endif %}
{% if restricted %}
{% if not openshift_origin %}
additionalTrustBundle: | (16)
    -----BEGIN CERTIFICATE-----
    <MY_TRUSTED_CA_CERT>
    -----END CERTIFICATE-----
imageContentSources: (17)
- mirrors:
  - <local_registry>/<local_repository_name>/release
  source: quay.io/openshift-release-dev/ocp-release
- mirrors:
  - <local_registry>/<local_repository_name>/release
  source: quay.io/openshift-release-dev/ocp-v4.0-art-dev
{% endif %}
{% if openshift_origin %}
additionalTrustBundle: | (15)
  -----BEGIN CERTIFICATE-----
  <MY_TRUSTED_CA_CERT>
  -----END CERTIFICATE-----
imageContentSources: (16)
- mirrors:
  - <local_registry>/<local_repository_name>/release
  source: quay.io/openshift-release-dev/ocp-release
- mirrors:
  - <local_registry>/<local_repository_name>/release
  source: quay.io/openshift-release-dev/ocp-v4.0-art-dev
{% endif %}
{% endif %}
```
1.  Required. The installation program prompts you for this value.
1.  Optional: Add this parameter to force the Cloud Credential Operator (CCO) to use the specified mode. By default, the CCO uses the root credentials in the `kube-system` namespace to dynamically try to determine the capabilities of the credentials. For details about CCO modes, see the "About the Cloud Credential Operator" section in the _Authentication and authorization_ guide.
1.  If you do not provide these parameters and values, the installation program provides the default value.
1.  The `controlPlane` section is a single mapping, but the `compute` section is a sequence of mappings. To meet the requirements of the different data structures, the first line of the `compute` section must begin with a hyphen, `-`, and the first line of the `controlPlane` section must not. Only one control plane pool is used.
1.  Whether to enable or disable simultaneous multithreading, or `hyperthreading`. By default, simultaneous multithreading is enabled to increase the performance of your machines' cores. You can disable it by setting the parameter value to `Disabled`. If you disable simultaneous multithreading in some cluster machines, you must disable it in all cluster machines.

    :::important

    If you disable simultaneous multithreading, ensure that your capacity planning accounts for the dramatically decreased machine performance. Use larger machine types, such as `n1-standard-8`, for your machines if you disable simultaneous multithreading.
    
    :::

1.  Optional: The custom encryption key section to encrypt both virtual machines and persistent volumes. Your default compute service account must have the permissions granted to use your KMS key and have the correct IAM role assigned. The default service account name follows the `service-<project_number>@compute-system.iam.gserviceaccount.com` pattern. For more information about granting the correct permissions for your service account, see "Machine management" → "Creating compute machine sets" → "Creating a compute machine set on {{ gcp_short }}".
1.  Optional: A set of network tags to apply to the control plane or compute machine sets. The `platform.gcp.defaultMachinePlatform.tags` parameter will apply to both control plane and compute machines. If the `compute.platform.gcp.tags` or `controlPlane.platform.gcp.tags` parameters are set, they override the `platform.gcp.defaultMachinePlatform.tags` parameter.
1.  Optional: A custom {{ op_system_first }} that should be used to boot control plane and compute machines. The `project` and `name` parameters under `platform.gcp.defaultMachinePlatform.osImage` apply to both control plane and compute machines. If the `project` and `name` parameters under `controlPlane.platform.gcp.osImage` or `compute.platform.gcp.osImage` are set, they override the `platform.gcp.defaultMachinePlatform.osImage` parameters.
1.  The cluster network plugin to install. The default value `OVNKubernetes` is the only supported value.
{%- if vpc or restricted %}
1.  Specify the name of an existing VPC.
1.  Specify the name of the existing subnet to deploy the control plane machines to. The subnet must belong to the VPC that you specified.
1.  Specify the name of the existing subnet to deploy the compute machines to. The subnet must belong to the VPC that you specified.
{%- endif %}
{%- if restricted %}
1.  For `<local_registry>`, specify the registry domain name, and optionally the port, that your mirror registry uses to serve content. For example, `registry.example.com` or `registry.example.com:5000`. For `<credentials>`, specify the base64-encoded user name and password for your mirror registry.
{%- endif %}
{%- if vpc %}
{% if not openshift_origin %}
1.  Whether to enable or disable FIPS mode. By default, FIPS mode is not enabled. If FIPS mode is enabled, the {{ op_system_first }} machines that {{ product_title }} runs on bypass the default Kubernetes cryptography suite and use the cryptography modules that are provided with {{ op_system }} instead.

    :::important

    To enable FIPS mode for your cluster, you must run the installation program from a {{ op_system_base_full }} computer configured to operate in FIPS mode. For more information about configuring FIPS mode on RHEL, see [Installing the system in FIPS mode](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/security_hardening/assembly_installing-the-system-in-fips-mode_security-hardening).

    When running {{ op_system_base_full }} or {{ op_system_first }} booted in FIPS mode, {{ product_title }} core components use the {{ op_system_base }} cryptographic libraries that have been submitted to NIST for FIPS 140-2/140-3 Validation on only the x86_64, ppc64le, and s390x architectures.
    
    :::

1.  You can optionally provide the `sshKey` value that you use to access the machines in your cluster.
{% endif %}
{% if openshift_origin %}
1.  You can optionally provide the `sshKey` value that you use to access the machines in your cluster.
{% endif %}
{% endif %}
{% if restricted %}
{% if not openshift_origin %}
1.  Whether to enable or disable FIPS mode. By default, FIPS mode is not enabled. If FIPS mode is enabled, the {{ op_system_first }} machines that {{ product_title }} runs on bypass the default Kubernetes cryptography suite and use the cryptography modules that are provided with {{ op_system }} instead.

    :::important

    When running {{ op_system_base_full }} or {{ op_system_first }} booted in FIPS mode, {{ product_title }} core components use the {{ op_system_base }} cryptographic libraries that have been submitted to NIST for FIPS 140-2/140-3 Validation on only the x86_64, ppc64le, and s390x architectures.
    
    :::

1.  You can optionally provide the `sshKey` value that you use to access the machines in your cluster.
{% endif %}
{% if openshift_origin %}
1.  You can optionally provide the `sshKey` value that you use to access the machines in your cluster.
{% endif %}
{% endif %}
{% if not (vpc or restricted) %}
{% if not openshift_origin %}
1.  Whether to enable or disable FIPS mode. By default, FIPS mode is not enabled. If FIPS mode is enabled, the {{ op_system_first }} machines that {{ product_title }} runs on bypass the default Kubernetes cryptography suite and use the cryptography modules that are provided with {{ op_system }} instead.

    :::important

    When running {{ op_system_base_full }} or {{ op_system_first }} booted in FIPS mode, {{ product_title }} core components use the {{ op_system_base }} cryptographic libraries that have been submitted to NIST for FIPS 140-2/140-3 Validation on only the x86_64, ppc64le, and s390x architectures.
    
    :::

1.  You can optionally provide the `sshKey` value that you use to access the machines in your cluster.
{% endif %}
{% if openshift_origin %}
1.  You can optionally provide the `sshKey` value that you use to access the machines in your cluster.
{% endif %}
{% endif %}

    :::note

    For production {{ product_title }} clusters on which you want to perform installation debugging or disaster recovery, specify an SSH key that your `ssh-agent` process uses.
    
    :::

{% if private %}
{% if not openshift_origin %}
1.  How to publish the user-facing endpoints of your cluster. Set `publish` to `Internal` to deploy a private cluster, which cannot be accessed from the internet. The default value is `External`.
{% endif %}
{% if openshift_origin %}
1.  How to publish the user-facing endpoints of your cluster. Set `publish` to `Internal` to deploy a private cluster, which cannot be accessed from the internet. The default value is `External`.
{% endif %}
{% endif %}
{% if restricted %}
{% if not openshift_origin %}
1.  Provide the contents of the certificate file that you used for your mirror registry.
1.  Provide the `imageContentSources` section from the output of the command to mirror the repository.
{% endif %}
{% if openshift_origin %}
1.  Provide the contents of the certificate file that you used for your mirror registry.
1.  Provide the `imageContentSources` section from the output of the command to mirror the repository.
{% endif %}
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