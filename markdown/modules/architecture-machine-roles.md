{%- set _mod_docs_content_type = "CONCEPT" %}
# Machine roles in {{ product_title }} {id="architecture-machine-roles_{{ context }}"}

{{ product_title }} assigns hosts different roles. 
These roles define the function of the machine within the cluster. 
The cluster contains definitions for the standard `master` and `worker` role types. {._abstract}

{% if not (openshift_dedicated or openshift_rosa) %}

:::note

The cluster also contains the definition for the `bootstrap` role.
The installation program uses the bootstrap machine only during cluster deployment. 
See the cluster installation documentation to learn more about its role.

:::

{% endif %}

{% if not (openshift_dedicated or openshift_rosa) %}

Control plane and node host compatibility
:   The {{ product_title }} version must match between control plane host and node host. 
    For example, in a {{ product_version }} cluster, all control plane hosts must be {{ product_version }} and all nodes must be {{ product_version }}.

    Temporary mismatches during cluster upgrades are acceptable. 
    For example, when upgrading from the previous {{ product_title }} version to {{ product_version }}, some nodes upgrade to {{ product_version }} before others. 
    Prolonged skewing of control plane hosts and node hosts might expose older compute machines to bugs and missing features. 
    Users can resolve skewed control plane hosts and node hosts as soon as possible.

    The `kubelet` service must not be newer than `kube-apiserver`, and can be up to two minor versions older depending on whether your {{ product_title }} version is odd or even. The table below shows the appropriate version compatibility:
    | {{ product_title }} version | Supported `kubelet` skew |
    | --- | --- |
    | Odd {{ product_title }} minor versions ^[1]^ | Up to one version older |
    | Even {{ product_title }} minor versions ^[2]^ | Up to two versions older |
    1.  For example, {{ product_title }} 4.11, 4.13.
    1.  For example, {{ product_title }} 4.10, 4.12.
{% endif %}


Cluster workers
:   <a name="defining-workers_{{ context }}"></a>

    In a Kubernetes cluster, worker nodes run and manage the actual workloads requested by Kubernetes users. 
    The worker nodes advertise their capacity and the scheduler, which is a control plane service, determines on which nodes to start pods and containers. The following important services run on each worker node:
    *   CRI-O, which is the container engine.
    *   kubelet, which is the service that accepts and fulfills requests for running and stopping container workloads.
    *   A service proxy, which manages communication for pods across workers.
    *   The crun or runC low-level container runtime, which creates and runs containers.

    :::note


    For information about how to enable runC instead of the default crun, see the documentation for creating a `ContainerRuntimeConfig` CR.
    
    :::


    In {{ product_title }}, compute machine sets control the compute machines, which are assigned the `worker` machine role. 
    Machines with the `worker` role drive compute workloads that are governed by a specific machine pool that autoscales them. 
    Because {{ product_title }} has the capacity to support multiple machine types, the machines with the `worker` role are classed as _compute_ machines. 
    In this release, the terms _worker machine_ and _compute machine_ are used interchangeably because the only default type of compute machine is the worker machine. 
    In future versions of {{ product_title }}, different types of compute machines, such as infrastructure machines, might be used by default.

    :::note


    Compute machine sets are groupings of compute machine resources under the `machine-api` namespace. 
    Compute machine sets are configurations that start new compute machines on a specific cloud provider. 
    Conversely, machine config pools (MCPs) are part of the Machine Config Operator (MCO) namespace. 
    An MCP is used to group machines together so the MCO can manage their configurations and facilitate their upgrades.
    
    :::


Cluster control planes
    :   In a Kubernetes cluster, the _master_ nodes run services that are required to control the Kubernetes cluster. In {{ product_title }}, the control plane consists of control plane machines that have a `master` machine role. They contain more than just the Kubernetes services for managing the {{ product_title }} cluster.
    For most {{ product_title }} clusters, control plane machines are defined by a series of standalone machine API resources.
{%- if not (openshift_dedicated or openshift_rosa) %}
    For supported cloud provider and {{ product_title }} version combinations, control planes can be managed with control plane machine sets.
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
    Control planes are managed with control plane machine sets.
{%- endif %}
    Extra controls apply to control plane machines to prevent you from deleting all of the control plane machines and making the cluster inoperable.

    :::note

{%- if not (openshift_dedicated or openshift_rosa) %}
    Exactly three control plane nodes must be used for all production deployments. However, on bare metal platforms, clusters can be scaled up to five control plane nodes.
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
    Single availability zone clusters and multiple availability zone clusters require a minimum of three control plane nodes.
{%- endif %}
    
    :::

    Services that fall under the Kubernetes category on the control plane include the Kubernetes API server, etcd, the Kubernetes controller manager, and the Kubernetes scheduler.
    **Kubernetes services that run on the control plane**

    | Component | Description |
    | --- | --- |
    | Kubernetes API server | The Kubernetes API server validates and configures the data for pods, services, and replication controllers. It also provides a focal point for the shared state of the cluster. |
    | etcd | etcd stores the persistent control plane state while other components watch etcd for changes to bring themselves into the specified state. |
    | Kubernetes controller manager | The Kubernetes controller manager watches etcd for changes to objects such as replication, namespace, and service account controller objects, and then uses the API to enforce the specified state. Several such processes create a cluster with one active leader at a time. |
    | Kubernetes scheduler | The Kubernetes scheduler watches for newly created pods without an assigned node and selects the best node to host the pod. |
    There are also OpenShift services that run on the control plane, which include the OpenShift API server, OpenShift controller manager, OpenShift OAuth API server, and OpenShift OAuth server.
    **OpenShift services that run on the control plane**

    | Component | Description |
    | --- | --- |
    | OpenShift API server | The OpenShift API server validates and configures the data for OpenShift resources, such as projects, routes, and templates. The OpenShift API server is managed by the OpenShift API Server Operator. |
    | OpenShift controller manager | The OpenShift controller manager watches etcd for changes to OpenShift objects, such as project, route, and template controller objects, and then uses the API to enforce the specified state. The OpenShift controller manager is managed by the OpenShift Controller Manager Operator. |
    | OpenShift OAuth API server | The OpenShift OAuth API server validates and configures the data to authenticate to {{ product_title }}, such as users, groups, and OAuth tokens. The OpenShift OAuth API server is managed by the Cluster Authentication Operator. |
    | OpenShift OAuth server | Users request tokens from the OpenShift OAuth server to authenticate themselves to the API. The OpenShift OAuth server is managed by the Cluster Authentication Operator. |
    Some of these services on the control plane machines run as systemd services, while others run as static pods.
    Systemd services are appropriate for services that must always start on that particular system shortly after it starts. For control plane machines, such as those include sshd, that allow remote login. It also includes services such as:
    * The CRI-O container engine (crio), which runs and manages the containers. {{ product_title }} {{ product_version }} uses CRI-O instead of the Docker Container Engine.
    * Kubelet (kubelet), which accepts requests for managing containers on the machine from control plane services.
    CRI-O and Kubelet must run directly on the host as systemd services because they need to be running before you can run other containers.
    The `installer-**` and `revision-pruner-**` control plane pods must run with root permissions because they write to the `/etc/kubernetes` directory, which is owned by the root user. These pods are in the following namespaces:

*   `openshift-etcd`
*   `openshift-kube-apiserver`
*   `openshift-kube-controller-manager`
*   `openshift-kube-scheduler`