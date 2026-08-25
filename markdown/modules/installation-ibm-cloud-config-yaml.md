{% if context == "installing-ibm-cloud-customizations" %}
{%- set with_networking = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-customizations" %}
{%- set without_networking = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-vpc" %}
{%- set vpc = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-private" %}
{%- set private = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample customized install-config.yaml file for {{ ibm_cloud_title }} {id="installation-ibm-cloud-config-yaml_{{ context }}"}

You can customize the `install-config.yaml` file to specify more details about your {{ product_title }} cluster’s platform or change the values of the required parameters. {._abstract}


:::important

This sample YAML file is for reference only. You must obtain your `install-config.yaml` file by using the installation program and then change it.

:::


{% if with_networking or without_networking %}
```yaml
apiVersion: v1
baseDomain: example.com
controlPlane:
  hyperthreading: Enabled
  name: master
  platform:
    ibmcloud: {}
  replicas: 3
compute:
- hyperthreading: Enabled
  name: worker
  platform:
    ibmcloud: {}
  replicas: 3
metadata:
  name: test-cluster
{%- if without_networking %}
networking:
{% endif %}
{% if with_networking %}
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
  ibmcloud:
    region: us-south
credentialsMode: Manual
publish: External
pullSecret: '{"auths": ...}'
{%- if not openshift_origin %}
fips: false
sshKey: ssh-ed25519 AAAA...
{% endif %}
{% if openshift_origin %}
sshKey: ssh-ed25519 AAAA...
{%- endif %}
```

where:


`baseDomain`
:   Specifies the base domain of your cluster. The installation program prompts you for this value. This value is required.

`metadata.name`
:   Specifies the name of your cluster. The installation program prompts you for this value. This value is required.

`platform.ibmcloud.region`
:   Specifies the {{ ibm_cloud_name }} region to deploy the cluster to. The installation program prompts you for this value. This value is required.

`pullSecret`
:   Specifies your pull secret. The installation program prompts you for this value. This value is required.

`compute`
:   Specifies parameters where, if you do not supply values, the installation program uses the default value. The first line of the `compute` section must begin with a hyphen, `-`. Although both sections currently define a single machine pool, it is possible that {{ product_title }} will support defining multiple compute pools during installation.

`compute.hyperthreading`
:   Specifies whether to enable or disable simultaneous multithreading, also known as Hyper-Threading. By default, simultaneous multithreading is enabled to increase the performance of your machines' cores. You can disable it by setting the parameter value to `Disabled`. If you disable simultaneous multithreading in some cluster machines, you must disable it in all cluster machines.

`controlPlane`
:   Specifies parameters where, if you do not supply values, the installation program uses the default value. The `controlPlane` section is a single mapping, and its first line must not begin with a hyphen. Only one control plane pool is used.

`controlPlane.hyperthreading`
:   Specifies whether to enable or disable simultaneous multithreading, also known as Hyper-Threading. By default, simultaneous multithreading is enabled to increase the performance of your machines' cores. You can disable it by setting the parameter value to `Disabled`. If you disable simultaneous multithreading in some cluster machines, you must disable it in all cluster machines.

    :::important


    If you disable simultaneous multithreading, ensure that your capacity planning accounts for the dramatically decreased machine performance. Use larger machine types, such as `n1-standard-8`, for your machines if you disable simultaneous multithreading.
    
    :::

{%- if with_networking %}

`networking`
:   Specifies the cluster networking configuration. If you do not supply these parameters and values, the installation program uses the default value.
{%- endif %}

`networking.networkType`
:   Specifies the cluster network plugin to install. The default value `OVNKubernetes` is the only supported value.
{%- if not openshift_origin %}

`fips`
:   Specifies whether to enable or disable FIPS mode. By default, FIPS mode is not enabled. If FIPS mode is enabled, the {{ op_system_first }} machines that {{ product_title }} runs on bypass the default Kubernetes cryptography suite and use the cryptography modules that are provided with {{ op_system }} instead.

    :::important


    To enable FIPS mode for your cluster, you must run the installation program from a {{ op_system_base_full }} computer configured to operate in FIPS mode. For more information about configuring FIPS mode on RHEL, see [Installing the system in FIPS mode](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/security_hardening/assembly_installing-the-system-in-fips-mode_security-hardening).


    When running {{ op_system_base_full }} or {{ op_system_first }} booted in FIPS mode, {{ product_title }} core components use the {{ op_system_base }} cryptographic libraries that have been submitted to NIST for FIPS 140-2/140-3 Validation on only the x86_64, ppc64le, and s390x architectures.
    
    :::


`sshKey`
:   Specifies the SSH key to use to access the machines in your cluster. This value is optional.
{% endif %}
{% if openshift_origin %}

`sshKey`
:   Specifies the SSH key to use to access the machines in your cluster. This value is optional.
{%- endif %}

    :::note


    For production {{ product_title }} clusters on which you want to perform installation debugging or disaster recovery, specify an SSH key that your `ssh-agent` process uses.
    
    :::

{% endif %}

{% if vpc %}
```yaml
apiVersion: v1
baseDomain: example.com
controlPlane:
  hyperthreading: Enabled
  name: master
  platform:
    ibmcloud: {}
  replicas: 3
compute:
- hyperthreading: Enabled
  name: worker
  platform:
    ibmcloud: {}
  replicas: 3
metadata:
  name: test-cluster
networking:
  clusterNetwork:
  - cidr: 10.128.0.0/14
    hostPrefix: 23
  machineNetwork:
  - cidr: 10.0.0.0/16
  networkType: OVNKubernetes
  serviceNetwork:
  - 172.30.0.0/16
platform:
  ibmcloud:
    region: eu-gb
    resourceGroupName: eu-gb-example-cluster-rg
    networkResourceGroupName: eu-gb-example-existing-network-rg
    vpcName: eu-gb-example-network-1
    controlPlaneSubnets:
      - eu-gb-example-network-1-cp-eu-gb-1
      - eu-gb-example-network-1-cp-eu-gb-2
      - eu-gb-example-network-1-cp-eu-gb-3
    computeSubnets:
      - eu-gb-example-network-1-compute-eu-gb-1
      - eu-gb-example-network-1-compute-eu-gb-2
      - eu-gb-example-network-1-compute-eu-gb-3
credentialsMode: Manual
publish: External
pullSecret: '{"auths": ...}'
{%- if not openshift_origin %}
fips: false
sshKey: ssh-ed25519 AAAA...
{% endif %}
{% if openshift_origin %}
sshKey: ssh-ed25519 AAAA...
{%- endif %}
```

where:


`baseDomain`
:   Specifies the base domain of your cluster. The installation program prompts you for this value. This value is required.

`metadata.name`
:   Specifies the name of your cluster. The installation program prompts you for this value. This value is required.

`platform.ibmcloud.region`
:   Specifies the {{ ibm_cloud_name }} region to deploy the cluster to. The installation program prompts you for this value. This value is required.

`pullSecret`
:   Specifies your pull secret. The installation program prompts you for this value. This value is required.

`compute`
:   Specifies parameters where, if you do not supply values, the installation program uses the default value. The first line of the `compute` section must begin with a hyphen, `-`. Although both sections currently define a single machine pool, it is possible that {{ product_title }} will support defining multiple compute pools during installation.

`compute.hyperthreading`
:   Specifies whether to enable or disable simultaneous multithreading, also known as Hyper-Threading. By default, simultaneous multithreading is enabled to increase the performance of your machines' cores. You can disable it by setting the parameter value to `Disabled`. If you disable simultaneous multithreading in some cluster machines, you must disable it in all cluster machines.

`controlPlane`
:   Specifies parameters where, if you do not supply values, the installation program uses the default value. The `controlPlane` section is a single mapping, and its first line must not begin with a hyphen. Only one control plane pool is used.

`controlPlane.hyperthreading`
:   Specifies whether to enable or disable simultaneous multithreading, also known as Hyper-Threading. By default, simultaneous multithreading is enabled to increase the performance of your machines' cores. You can disable it by setting the parameter value to `Disabled`. If you disable simultaneous multithreading in some cluster machines, you must disable it in all cluster machines.

    :::important


    If you disable simultaneous multithreading, ensure that your capacity planning accounts for the dramatically decreased machine performance. Use larger machine types, such as `n1-standard-8`, for your machines if you disable simultaneous multithreading.
    
    :::


`networking.clusterNetwork.cidr`
:   Specifies the CIDR. The machine CIDR must contain the subnets for the compute machines and control plane machines.

`networking.networkType`
:   Specifies the cluster network plugin to install. The default value `OVNKubernetes` is the only supported value.

`platform.ibmcloud.resourceGroupName`
:   Specifies the name of an existing resource group. All installer-provisioned cluster resources are deployed to this resource group. If undefined, a new resource group is created for the cluster.

`platform.ibmcloud.networkResourceGroupName`
:   Specifies the name of the resource group that contains the existing virtual private cloud (VPC). The existing VPC and subnets must be in this resource group. The cluster is installed to this VPC.

`platform.ibmcloud.vpcName`
:   Specifies the name of an existing VPC.

`platform.ibmcloud.controlPlaneSubnets`
:   Specifies the name of the existing subnets to which to deploy the control plane machines. The subnets must belong to the VPC that you specified. Specify a subnet for each availability zone in the region.

`platform.ibmcloud.computeSubnets`
:   Specifies the name of the existing subnets to which to deploy the compute machines. The subnets must belong to the VPC that you specified. Specify a subnet for each availability zone in the region.
{%- if not openshift_origin %}

`fips`
:   Specifies whether to enable or disable FIPS mode. By default, FIPS mode is not enabled. If FIPS mode is enabled, the {{ op_system_first }} machines that {{ product_title }} runs on bypass the default Kubernetes cryptography suite and use the cryptography modules that are provided with {{ op_system }} instead.

    :::important


    When running {{ op_system_base_full }} or {{ op_system_first }} booted in FIPS mode, {{ product_title }} core components use the {{ op_system_base }} cryptographic libraries that have been submitted to NIST for FIPS 140-2/140-3 Validation on only the x86_64, ppc64le, and s390x architectures.
    
    :::


`sshKey`
:   Specifies the SSH key to use to access the machines in your cluster. This value is optional.
{% endif %}
{% if openshift_origin %}

`sshKey`
:   Specifies the SSH key to use to access the machines in your cluster. This value is optional.
{%- endif %}

    :::note


    For production {{ product_title }} clusters on which you want to perform installation debugging or disaster recovery, specify an SSH key that your `ssh-agent` process uses.
    
    :::

{% endif %}

{% if private %}
```yaml
apiVersion: v1
baseDomain: example.com
controlPlane:
  hyperthreading: Enabled
  name: master
  platform:
    ibmcloud: {}
  replicas: 3
compute:
- hyperthreading: Enabled
  name: worker
  platform:
    ibmcloud: {}
  replicas: 3
metadata:
  name: test-cluster
networking:
  clusterNetwork:
  - cidr: 10.128.0.0/14
    hostPrefix: 23
  machineNetwork:
  - cidr: 10.0.0.0/16
  networkType: OVNKubernetes
  serviceNetwork:
  - 172.30.0.0/16
platform:
  ibmcloud:
    region: eu-gb
    resourceGroupName: eu-gb-example-cluster-rg
    networkResourceGroupName: eu-gb-example-existing-network-rg
    vpcName: eu-gb-example-network-1
    controlPlaneSubnets:
      - eu-gb-example-network-1-cp-eu-gb-1
      - eu-gb-example-network-1-cp-eu-gb-2
      - eu-gb-example-network-1-cp-eu-gb-3
    computeSubnets:
      - eu-gb-example-network-1-compute-eu-gb-1
      - eu-gb-example-network-1-compute-eu-gb-2
      - eu-gb-example-network-1-compute-eu-gb-3
credentialsMode: Manual
publish: Internal
pullSecret: '{"auths": ...}'
{%- if not openshift_origin %}
fips: false
sshKey: ssh-ed25519 AAAA...
{% endif %}
{% if openshift_origin %}
sshKey: ssh-ed25519 AAAA...
{%- endif %}
```

where:


`baseDomain`
:   Specifies the base domain of your cluster. This value is required.

`metadata.name`
:   Specifies the name of your cluster. This value is required.

`platform.ibmcloud.region`
:   Specifies the {{ ibm_cloud_name }} region to deploy the cluster to. This value is required.

`pullSecret`
:   Specifies your pull secret. This value is required.

`compute`
:   Specifies parameters where, if you do not supply values, the installation program uses the default value. The first line of the `compute` section must begin with a hyphen, `-`. Both sections currently define a single machine pool.

`compute.hyperthreading`
:   Specifies whether to enable or disable simultaneous multithreading, also known as Hyper-Threading. By default, simultaneous multithreading is enabled to increase the performance of your machines' cores. You can disable it by setting the parameter value to `Disabled`. If you disable simultaneous multithreading in some cluster machines, you must disable it in all cluster machines.

`controlPlane`
:   Specifies parameters where, if you do not supply values, the installation program uses the default value. The `controlPlane` section is a single mapping, and its first line must not begin with a hyphen. Only one control plane pool is used.

`controlPlane.hyperthreading`
:   Specifies whether to enable or disable simultaneous multithreading, also known as Hyper-Threading. By default, simultaneous multithreading is enabled to increase the performance of your machines' cores. You can disable it by setting the parameter value to `Disabled`. If you disable simultaneous multithreading in some cluster machines, you must disable it in all cluster machines.

    :::important


    If you disable simultaneous multithreading, ensure that your capacity planning accounts for the dramatically decreased machine performance. Use larger machine types, such as `n1-standard-8`, for your machines if you disable simultaneous multithreading.
    
    :::


`networking.clusterNetwork.cidr`
:   Specifies the CIDR. The machine CIDR must contain the subnets for the compute machines and control plane machines.

`networking.machineNetwork.cidr`
:   Specifies the CIDR. The CIDR must contain the subnets defined in `platform.ibmcloud.controlPlaneSubnets` and `platform.ibmcloud.computeSubnets`.

`networking.networkType`
:   Specifies the cluster network plugin to install. The default value `OVNKubernetes` is the only supported value.

`platform.ibmcloud.resourceGroupName`
:   Specifies the name of an existing resource group. All installer-provisioned cluster resources are deployed to this resource group. If undefined, a new resource group is created for the cluster.

`platform.ibmcloud.networkResourceGroupName`
:   Specifies the name of the resource group that contains the existing virtual private cloud (VPC). The existing VPC and subnets must be in this resource group. The cluster is installed to this VPC.

`platform.ibmcloud.vpcName`
:   Specifies the name of an existing VPC.

`platform.ibmcloud.controlPlaneSubnets`
:   Specifies the name of the existing subnets to which to deploy the control plane machines. The subnets must belong to the VPC that you specified. Specify a subnet for each availability zone in the region.

`platform.ibmcloud.computeSubnets`
:   Specifies the name of the existing subnets to which to deploy the compute machines. The subnets must belong to the VPC that you specified. Specify a subnet for each availability zone in the region.

`publish`
:   Specifies how to publish the user-facing endpoints of your cluster. Set `publish` to `Internal` to deploy a private cluster. The default value is `External`.
{%- if not openshift_origin %}

`fips`
:   Specifies whether to enable or disable FIPS mode. By default, FIPS mode is not enabled. If FIPS mode is enabled, the {{ op_system_first }} machines that {{ product_title }} runs on bypass the default Kubernetes cryptography suite and use the cryptography modules that are provided with {{ op_system }} instead.

    :::important


    When running {{ op_system_base_full }} or {{ op_system_first }} booted in FIPS mode, {{ product_title }} core components use the {{ op_system_base }} cryptographic libraries that have been submitted to NIST for FIPS 140-2/140-3 Validation on only the x86_64, ppc64le, and s390x architectures.
    
    :::


`sshKey`
:   Specifies the SSH key to use to access the machines in your cluster. This value is optional.
{% endif %}
{% if openshift_origin %}

`sshKey`
:   Specifies the SSH key to use to access the machines in your cluster. This value is optional.
{%- endif %}

    :::note


    For production {{ product_title }} clusters on which you want to perform installation debugging or disaster recovery, specify an SSH key that your `ssh-agent` process uses.
    
    :::

{% endif %}

{% if restricted %}
```yaml
apiVersion: v1
baseDomain: example.com
controlPlane:
  hyperthreading: Enabled
  name: master
  platform:
    ibmcloud: {}
  replicas: 3
compute:
- hyperthreading: Enabled
  name: worker
  platform:
    ibmcloud: {}
  replicas: 3
metadata:
  name: test-cluster
networking:
  clusterNetwork:
  - cidr: 10.128.0.0/14
    hostPrefix: 23
  machineNetwork:
  - cidr: 10.0.0.0/16
  networkType: OVNKubernetes
  serviceNetwork:
  - 172.30.0.0/16
platform:
  ibmcloud:
    region: us-east
    resourceGroupName: us-east-example-cluster-rg
    serviceEndpoints:
      - name: IAM
        url: https://private.us-east.iam.cloud.ibm.com
      - name: VPC
        url: https://us-east.private.iaas.cloud.ibm.com/v1
      - name: ResourceController
        url: https://private.us-east.resource-controller.cloud.ibm.com
      - name: ResourceManager
        url: https://private.us-east.resource-controller.cloud.ibm.com
      - name: DNSServices
        url: https://api.private.dns-svcs.cloud.ibm.com/v1
      - name: COS
        url: https://s3.direct.us-east.cloud-object-storage.appdomain.cloud
      - name: GlobalSearch
        url: https://api.private.global-search-tagging.cloud.ibm.com
      - name: GlobalTagging
        url: https://tags.private.global-search-tagging.cloud.ibm.com
    networkResourceGroupName: us-east-example-existing-network-rg
    vpcName: us-east-example-network-1
    controlPlaneSubnets:
      - us-east-example-network-1-cp-us-east-1
      - us-east-example-network-1-cp-us-east-2
      - us-east-example-network-1-cp-us-east-3
    computeSubnets:
      - us-east-example-network-1-compute-us-east-1
      - us-east-example-network-1-compute-us-east-2
      - us-east-example-network-1-compute-us-east-3
        credentialsMode: Manual
        pullSecret: '{"auths":{"<local_registry>": {"auth": "<credentials>","email": "you@example.com"}}}'
        {%- if not openshift_origin %}
        fips: false
        sshKey: ssh-ed25519 AAAA...
        {% endif %}
        {% if openshift_origin %}
        sshKey: ssh-ed25519 AAAA...
        {% endif %}
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
{%- endif %}
```

where:


`baseDomain`
:   Specifies the base domain of your cluster. This value is required.

`metadata.name`
:   Specifies the name of your cluster. This value is required.

`platform.ibmcloud.region`
:   Specifies the {{ ibm_cloud_name }} region to deploy the cluster to. This value is required.

`pullSecret`
:   Specifies the pull secret for your mirror registry. For `<local_registry>`, specify the registry domain name, and optionally the port, that your mirror registry uses to serve content. For example, `registry.example.com` or `registry.example.com:5000`. For `<credentials>`, specify the base64-encoded user name and password for your mirror registry.

`compute`
:   Specifies parameters where, if you do not supply values, the installation program uses the default value. The first line of the `compute` section must begin with a hyphen, `-`. Both sections currently define a single machine pool.

`compute.hyperthreading`
:   Specifies whether to enable or disable simultaneous multithreading, also known as Hyper-Threading. By default, simultaneous multithreading is enabled to increase the performance of your machines' cores. You can disable it by setting the parameter value to `Disabled`. If you disable simultaneous multithreading in some cluster machines, you must disable it in all cluster machines.

`controlPlane`
:   Specifies parameters where, if you do not supply values, the installation program uses the default value. The `controlPlane` section is a single mapping, and its first line must not begin with a hyphen. Only one control plane pool is used.

`controlPlane.hyperthreading`
:   Specifies whether to enable or disable simultaneous multithreading, also known as Hyper-Threading. By default, simultaneous multithreading is enabled to increase the performance of your machines' cores. You can disable it by setting the parameter value to `Disabled`. If you disable simultaneous multithreading in some cluster machines, you must disable it in all cluster machines.

    :::important


    If you disable simultaneous multithreading, ensure that your capacity planning accounts for the dramatically decreased machine performance. Use larger machine types, such as `n1-standard-8`, for your machines if you disable simultaneous multithreading.
    
    :::


`networking.clusterNetwork.cidr`
:   Specifies the CIDR. The machine CIDR must contain the subnets for the compute machines and control plane machines.

`networking.machineNetwork.cidr`
:   Specifies the CIDR. The CIDR must contain the subnets defined in `platform.ibmcloud.controlPlaneSubnets` and `platform.ibmcloud.computeSubnets`.

`networking.networkType`
:   Specifies the cluster network plugin to install. The default value `OVNKubernetes` is the only supported value.

`platform.ibmcloud.resourceGroupName`
:   Specifies the name of an existing resource group. All installer-provisioned cluster resources are deployed to this resource group. If undefined, a new resource group is created for the cluster.

`platform.ibmcloud.serviceEndpoints`
:   Specifies alternate service endpoints based on the network restrictions of the VPC. This overrides the default public endpoint for the service.

`platform.ibmcloud.networkResourceGroupName`
:   Specifies the name of the resource group that contains the existing virtual private cloud (VPC). The existing VPC and subnets must be in this resource group. The cluster is installed to this VPC.

`platform.ibmcloud.vpcName`
:   Specifies the name of an existing VPC.

`platform.ibmcloud.controlPlaneSubnets`
:   Specifies the name of the existing subnets to which to deploy the control plane machines. The subnets must belong to the VPC that you specified. Specify a subnet for each availability zone in the region.

`platform.ibmcloud.computeSubnets`
:   Specifies the name of the existing subnets to which to deploy the compute machines. The subnets must belong to the VPC that you specified. Specify a subnet for each availability zone in the region.
{%- if not openshift_origin %}

`fips`
:   Specifies whether to enable or disable FIPS mode. By default, FIPS mode is not enabled. If FIPS mode is enabled, the {{ op_system_first }} machines that {{ product_title }} runs on bypass the default Kubernetes cryptography suite and use the cryptography modules that are provided with {{ op_system }} instead.

    :::important


    The use of FIPS Validated or Modules in Process cryptographic libraries is only supported on {{ product_title }} deployments on the `x86_64` architecture.
    
    :::


`sshKey`
:   Specifies the SSH key to use to access the machines in your cluster. This value is optional.

`additionalTrustBundle`
:   Specifies the contents of the certificate file that you used for your mirror registry.

`imageContentSources`
:   Specifies the values from the `metadata.name: release-0` section of the `imageContentSourcePolicy.yaml` file that was created when you mirrored the registry.
{% endif %}
{% if openshift_origin %}

`sshKey`
:   Specifies the SSH key to use to access the machines in your cluster. This value is optional.

`additionalTrustBundle`
:   Specifies the contents of the certificate file that you used for your mirror registry.

`imageContentSources`
:   Specifies the values from the `metadata.name: release-0` section of the `imageContentSourcePolicy.yaml` file that was created when you mirrored the registry.
{%- endif %}

    :::note


    For production {{ product_title }} clusters on which you want to perform installation debugging or disaster recovery, specify an SSH key that your `ssh-agent` process uses.
    
    :::

{% endif %}

{% if context == "installing-ibm-cloud-customizations" %}
{%- set with_networking = false -%}
{% endif %}
{% if context == "installing-ibm-cloud-customizations" %}
{%- set without_networking = false -%}
{% endif %}
{% if context == "installing-ibm-cloud-vpc" %}
{%- set vpc = false -%}
{% endif %}
{% if context == "installing-ibm-cloud-private" %}
{%- set private = false -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set restricted = false -%}
{% endif %}