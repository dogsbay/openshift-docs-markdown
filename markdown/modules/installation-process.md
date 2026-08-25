{%- set _mod_docs_content_type = "CONCEPT" %}
# Installation process {id="installation-process_{{ context }}"}

The {{ product_title }} installation program transforms a set of assets into a running cluster, using an installation process that varies depending on your installation method. {._abstract}

Except for the {{ ai_full }}, when you install an {{ product_title }} cluster, you must download the installation program from
{%- if not openshift_origin %}
the appropriate **Cluster Type** page on the {{ cluster_manager }} {{ hybrid_console_second }}. This console manages:

*   REST API for accounts.
*   Registry tokens, which are the pull secrets that you use to obtain the required components.
*   Cluster registration, which associates the cluster identity to your Red Hat account to facilitate the gathering of usage metrics.
{% endif %}
{% if openshift_origin %}
the OKD releases page.
{% endif %}

In {{ product_title }} {{ product_version }}, the installation program is a Go binary file that performs a series of file transformations on a set of assets. 
The way you interact with the installation program differs depending on your installation type. 
Consider the following installation use cases:

*   To deploy a cluster with the {{ ai_full }}, you must configure the cluster settings by using the {{ ai_full }}. 
There is no installation program to download and configure. 
After you finish setting the cluster configuration, you download a discovery ISO and then boot cluster machines with that image. 
You can install clusters with the {{ ai_full }} on Nutanix, vSphere, and bare metal with full integration, and other platforms without integration. 
If you install on bare metal, you must provide all of the cluster infrastructure and resources, including the networking, load balancing, storage, and individual cluster machines.
*   To deploy clusters with the Agent-based Installer, you can download the Agent-based Installer first. 
You can then configure the cluster and generate a discovery image. 
You boot cluster machines with the discovery image, which installs an agent that communicates with the installation program and handles the provisioning for you instead of you interacting with the installation program or setting up a provisioner machine yourself. 
You must provide all of the cluster infrastructure and resources, including the networking, load balancing, storage, and individual cluster machines. This approach is ideal for disconnected environments.
*   For clusters with installer-provisioned infrastructure, you delegate the infrastructure bootstrapping and provisioning to the installation program instead of doing it yourself. 
The installation program creates all of the networking, machines, and operating systems that are required to support the cluster, except if you install on bare metal. 
If you install on bare metal, you must provide all of the cluster infrastructure and resources, including the bootstrap machine, networking, load balancing, storage, and individual cluster machines.
*   If you provision and manage the infrastructure for your cluster, you must provide all of the cluster infrastructure and resources, including the bootstrap machine, networking, load balancing, storage, and individual cluster machines.

The installation program uses three sets of files during installation: an installation configuration file that is named `install-config.yaml`, Kubernetes manifests, and Ignition config files for your machine types.


:::important

You can modify Kubernetes and the Ignition config files that control the underlying {{ op_system }} operating system during installation. 
However, no validation is available to confirm the suitability of any modifications that you make to these objects. 
If you modify these objects, you might render your cluster non-functional. 
Because of this risk, modifying Kubernetes and Ignition config files is not supported unless you are following documented procedures or are instructed to do so by Red Hat support.

:::


The installation configuration file is transformed into Kubernetes manifests, and then the manifests are wrapped into Ignition config files. The installation program uses these Ignition config files to create the cluster.

The installation configuration files are all pruned when you run the installation program, ensure you back up all the configuration files that you want to use again.


:::important

You cannot modify the parameters that you set during installation, but you can modify many cluster attributes after installation.

:::



The installation process with the {{ ai_full }}
:   Installation with the {{ ai_full }} involves creating a cluster configuration interactively by using the web-based user interface or the RESTful API.
    The {{ ai_full }} user interface prompts you for required values and provides reasonable default values for the remaining parameters, unless you change them in the user interface or with the API.
    The {{ ai_full }} generates a discovery image, which you download and use to boot the cluster machines.
    The image installs {{ op_system }} and an agent, and the agent handles the provisioning for you.
    You can install {{ product_title }} with the {{ ai_full }} and full integration on Nutanix, vSphere, and bare metal. Additionally, you can install {{ product_title }} with the {{ ai_full }} on other platforms without integration.

    {{ product_title }} manages all aspects of the cluster, including the operating system itself. Each machine boots with a configuration that references resources hosted in the cluster that it joins. This configuration allows the cluster to manage itself as updates are applied.

    If possible, use the {{ ai_full }} feature to avoid having to download and configure the Agent-based Installer.


The installation process with Agent-based infrastructure
:   Agent-based installation is similar to using the {{ ai_full }}, except that you must initially download and install the Agent-based Installer. An Agent-based installation is useful when you want the convenience of the {{ ai_full }}, but you need to install a cluster in a disconnected environment.

    If possible, use the Agent-based installation feature to avoid having to create a provisioner machine with a bootstrap VM, and then provision and maintain the cluster infrastructure.


The installation process with installer-provisioned infrastructure
:   The default installation type uses installer-provisioned infrastructure.
    By default, the installation program acts as an installation wizard, prompting you for values that it cannot determine on its own and providing reasonable default values for the remaining parameters.
    You can also customize the installation process to support advanced infrastructure scenarios.
    The installation program provisions the underlying infrastructure for the cluster.

    You can install either a standard cluster or a customized cluster. With a standard cluster, you provide minimum details that are required to install the cluster.
    With a customized cluster, you can specify more details about the platform, such as the number of machines that the control plane uses, the type of virtual machine that the cluster deploys, or the CIDR range for the Kubernetes service network.

    If possible, use this feature to avoid having to provision and maintain the cluster infrastructure.
    In all other environments, you use the installation program to generate the assets that you require to provision your cluster infrastructure.

    With installer-provisioned infrastructure clusters, {{ product_title }} manages all aspects of the cluster, including the operating system itself. Each machine boots with a configuration that references resources hosted in the cluster that it joins. This configuration allows the cluster to manage itself as updates are applied.


The installation process with user-provisioned infrastructure
:   You can also install {{ product_title }} on infrastructure that you provide.
    You use the installation program to generate the assets that you require to provision the cluster infrastructure, create the cluster infrastructure, and then deploy the cluster to the infrastructure that you provided.

    If you do not use infrastructure that the installation program provisioned, you must manage and maintain the cluster resources yourself. The following list details some of these self-managed resources:
    *   The underlying infrastructure for the control plane and compute machines that make up the cluster
    *   Load balancers
    *   Cluster networking, including the DNS records and required subnets
    *   Storage for the cluster infrastructure and applications

    If your cluster uses user-provisioned infrastructure, you have the option of adding {{ op_system_base }} compute machines to your cluster.