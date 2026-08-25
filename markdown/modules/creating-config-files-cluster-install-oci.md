{% if context == "installing-pca-agent-based-installer" %}
{%- set pca = true -%}
{% endif %}

{% if context == "installing-c3-agent-based-installer" %}
{%- set c3 = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" -%}

{% if c3 %}
# Creating configuration files for installing a cluster on {{ oci_edge_no_rt }} {id="creating-config-files-cluster-install-c3_{{ context }}"}

You must create the `install-config.yaml` and the `agent-config.yaml` configuration files so that you can use the Agent-based Installer to generate a bootable ISO image. The Agent-based installation comprises a bootable ISO that has the Assisted discovery agent and the Assisted Service. {._abstract}

Both of these components are required to perform the cluster installation, but the latter component runs on only one of the hosts.
{% endif %}

{% if pca %}
# Creating configuration files for installing a cluster on {{ oci_pca_short }} {id="creating-config-files-cluster-install-pca_{{ context }}"}

You must create the `install-config.yaml` and the `agent-config.yaml` configuration files so that you can use the Agent-based Installer to generate a bootable ISO image. The Agent-based installation comprises a bootable ISO that has the Assisted discovery agent and the Assisted Service. {._abstract}

Both of these components are required to perform the cluster installation, but the latter component runs on only one of the hosts.
{% endif %}

{% if not (pca or c3) %}
# Creating configuration files for installing a cluster on {{ oci_distributed_no_rt }} {id="creating-config-files-cluster-install-oci_{{ context }}"}

You must create the `install-config.yaml` and the `agent-config.yaml` configuration files so that you can use the Agent-based Installer to generate a bootable ISO image. The Agent-based installation comprises a bootable ISO that has the Assisted discovery agent and the Assisted Service. {._abstract}

Both of these components are required to perform the cluster installation, but the latter component runs on only one of the hosts.

{% endif %}


:::note

You can also use the Agent-based Installer to generate or accept Zero Touch Provisioning (ZTP) custom resources.

:::


**Prerequisites**

*   You reviewed details about the {{ product_title }} installation and update processes.
*   You read the documentation on selecting a cluster installation method and preparing the method for users.
*   You have read the "Preparing to install with the Agent-based Installer" documentation.
*   You downloaded the Agent-Based Installer and the command-line interface (CLI) from the [{{ hybrid_console }}](https://console.redhat.com/openshift/install/metal/agent-based).
*   If you are installing in a disconnected environment, you have prepared a mirror registry in your environment and mirrored release images to the registry.

    :::important

    Check that your `openshift-install` binary version relates to your local image container registry and not a shared registry, such as {{ quay }}, by running the following command:

    ```terminal
    $ ./openshift-install version
    ```

    ```terminal title="Example output for a shared registry binary"
    ./openshift-install 4.22.0
    built from commit ae7977b7d1ca908674a0d45c5c243c766fa4b2ca
    release image registry.ci.openshift.org/origin/release:4.22ocp-release@sha256:0da6316466d60a3a4535d5fed3589feb0391989982fba59d47d4c729912d6363
    release architecture amd64
    ```
    
    :::

*   You have logged in to the {{ product_title }} with administrator privileges.

**Procedure**

1.  Create an installation directory to store configuration files in by running the following command:
    ```terminal
    $ mkdir ~/<directory_name>
    ```
1.  Configure the `install-config.yaml` configuration file to meet the needs of your organization and save the file in the directory you created.
    ```yaml title="install-config.yaml file that sets an external platform"
    # install-config.yaml
    apiVersion: v1
    baseDomain: <base_domain>
    networking:
      clusterNetwork:
      - cidr: 10.128.0.0/14
        hostPrefix: 23
      network type: OVNKubernetes
      machineNetwork:
      - cidr: <ip_address_from_cidr>
      serviceNetwork:
      - 172.30.0.0/16
    compute:
      - architecture: amd64
      hyperthreading: Enabled
      name: worker
      replicas: 0
    controlPlane:
      architecture: amd64
      hyperthreading: Enabled
      name: master
      replicas: 3
    platform:
       external:
        platformName: oci
        cloudControllerManager: External
    sshKey: <public_ssh_key>
    pullSecret: '<pull_secret>'
    # ...
    ```

    where:

    `baseDomain`
    :   Specifies the base domain of your cloud provider.

    `machineNetwork.cidr`
    :   Specifies the IP address from the virtual cloud network (VCN) that the CIDR allocates to resources and components that operate on your network.

    `compute.architecture`
    :   Specifies the `compute.architecture` parameter. Depending on your infrastructure, you can select either `arm64` or `amd64`.

    `controlPlane.architecture`
    :   Specifies the `controlPlane.architecture` parameter. Depending on your infrastructure, you can select either `arm64` or `amd64`.

    `platformName`
    :   Specifies `OCI` as the external platform, so that {{ product_title }} can integrate with {{ oci }}.

    `sshKey`
    :   Specifies you SSH public key.

    `pullSecret`
    :   Specifies the pull secret that you need for authenticate purposes when downloading container images for {{ product_title }} components and services, such as Quay.io. See [Install {{ product_title }} 4](https://console.redhat.com/openshift/install/pull-secret) from the {{ hybrid_console }}.

1.  Create a directory on your local system named `openshift`. This must be a subdirectory of the installation directory.

    :::important

    Do not move the `install-config.yaml` or `agent-config.yaml` configuration files to the `openshift` directory.
    
    :::


{% if not (c3 or pca) %}
1.  If you used a stack to provision OCI infrastructure resources: Copy and paste the `dynamic_custom_manifest` output of the OCI stack into a file titled `manifest.yaml` and save the file in the `openshift` directory.
1.  If you did not use a stack to provision OCI infrastructure resources: Download and prepare custom manifests to create an Agent ISO image:
    1.  Go to [Configuration Files](https://docs.oracle.com/iaas/Content/openshift-on-oci/install-prereq.htm#install-configuration-files) (Oracle documentation) and follow the link to the custom manifests directory on GitHub.
    1.  Copy the contents of the `condensed-manifest.yml` file and save it locally to a file in the `openshift` directory.
    1.  In the `condensed-manifest.yml` file, update the sections marked with `TODO` to specify the compartment {{ ocid_first }}, VCN {{ ocid }}, subnet {{ ocid }} from the load balancer, and the security lists {{ ocid }}.
{% endif %}

{% if c3 %}
1.  Configure the Oracle custom manifest files.
    1.  Go to "Prepare the OpenShift Master Images" in [OpenShift Cluster Setup with Agent Based Installer on Compute Cloud@Customer](https://www.oracle.com/a/otn/docs/compute_cloud_at_customer_agent_based_installation.pdf?source=:em:nl:mt::::PCATP) (Oracle documentation).
    1.  Copy and paste the `oci-ccm.yml`, `oci-csi.yml`, and `machineconfig-ccm.yml` files into your `openshift` directory.
    1.  Edit the `oci-ccm.yml` and `oci-csi.yml` files to specify the compartment {{ ocid_first }}, VCN {{ ocid }}, subnet {{ ocid }} from the load balancer, the security lists {{ ocid }}, and the `c3-cert.pem` section.
{% endif %}

{% if pca %}
1.  Configure the Oracle custom manifest files.
    1.  Go to "Prepare the OpenShift Master Images" in [OpenShift Cluster Setup with Agent Based Installer on Private Cloud Appliance](https://www.oracle.com/a/otn/docs/private_cloud_appliance_agent_based_installation.pdf?source=:em:nl:mt::::PCATP) (Oracle documentation).
    1.  Copy and paste the `oci-ccm.yml`, `oci-csi.yml`, and `machineconfig-ccm.yml` files into your `openshift` directory.
    1.  Edit the `oci-ccm.yml` and `oci-csi.yml` files to specify the compartment {{ ocid_first }}, VCN {{ ocid }}, subnet {{ ocid }} from the load balancer, the security lists {{ ocid }}, and the `c3-cert.pem` section.
{% endif %}
1.  Configure the `agent-config.yaml` configuration file to meet your organization’s requirements.
    ```yaml title="Sample agent-config.yaml file for an IPv4 network."
    apiVersion: v1beta1
    metadata:
      name: <cluster_name>
      namespace: <cluster_namespace>
    rendezvousIP: <ip_address_from_CIDR>
    bootArtifactsBaseURL: <server_URL>
    # ...
    ```

    where:

    `name`
    :   Specifies the cluster name that you specified in your DNS record.

    `namespace`
    :   Specifies the namespace of your cluster on {{ product_title }}.

    `rendezvousIP`
    :   Specifies the `rendezvousIP` parameter. If you use IPv4 as the network IP address format, ensure that you set the `rendezvousIP` parameter to an IPv4 address that the VCN’s Classless Inter-Domain Routing (CIDR) method allocates on your network. Also ensure that at least one instance from the pool of instances that you booted with the ISO matches the IP address value you set for the `rendezvousIP` parameter.

    `bootArtifactsBaseURL`
    :   Specifies the URL of the server where you want to upload the rootfs image. This parameter is required only for disconnected environments.

1.  Generate a minimal ISO image, which excludes the rootfs image, by entering the following command in your installation directory:
    ```terminal
    $ ./openshift-install agent create image --log-level debug
    ```

    The command also completes the following actions:
    *   Creates a subdirectory, `./<installation_directory>/auth directory:`, and places `kubeadmin-password` and `kubeconfig` files in the subdirectory.
    *   Creates a `rendezvousIP` file based on the IP address that you specified in the `agent-config.yaml` configuration file.
    *   Optional: Any modifications you made to `agent-config.yaml` and `install-config.yaml` configuration files get imported to the Zero Touch Provisioning (ZTP) custom resources.

        :::important

        The Agent-based Installer uses {{ op_system_first }}. The rootfs image, which is mentioned in a later step, is required for booting, recovering, and repairing your operating system.
        
        :::

1.  Disconnected environments only: Upload the rootfs image to a web server.
    1.  Go to the `./<installation_directory>/boot-artifacts` directory that was generated when you created the minimal ISO image.
    1.  Use your preferred web server, such as any Hypertext Transfer Protocol daemon (`httpd`), to upload the rootfs image to the location specified in the `bootArtifactsBaseURL` parameter of the `agent-config.yaml` file.

        For example, if the `bootArtifactsBaseURL` parameter states `http://192.168.122.20`, you would upload the generated rootfs image to this location so that the Agent-based installer can access the image from `http://192.168.122.20/agent.x86_64-rootfs.img`. After the Agent-based installer boots the minimal ISO for the external platform, the Agent-based Installer downloads the rootfs image from the `http://192.168.122.20/agent.x86_64-rootfs.img` location into the system memory.

        :::note

        The Agent-based Installer also adds the value of the `bootArtifactsBaseURL` to the minimal ISO Image’s configuration, so that when the Operator boots a cluster’s node, the Agent-based Installer downloads the rootfs image into system memory.
        
        :::


        :::important

        Consider that the full ISO image, which is in excess of `1` GB, includes the rootfs image. The image is larger than the minimal ISO Image, which is typically less than `150` MB.
        
        :::


{% if context == "installing-c3-agent-based-installer" %}
{%- set c3 = false -%}
{% endif %}

{% if context == "installing-pca-agent-based-installer" %}
{%- set pca = false -%}
{% endif %}