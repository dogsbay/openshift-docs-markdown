{%- if context == "ipi-install-installation-workflow" %}
{%- set bare = true -%}
{% endif %}
{% if context == "installing-vsphere-installer-provisioned-customizations" %}
{%- set vSphere = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring network components to run on the control plane {id="configure-network-components-to-run-on-the-control-plane_{{ context }}"}

You can configure networking components to run exclusively on the control plane nodes. By default, {{ product_title }} allows any node in the machine config pool to host the `ingressVIP` virtual IP address. However, some environments deploy compute nodes in separate subnets from the control plane nodes, which requires configuring the `ingressVIP` virtual IP address to run on the control plane nodes. {._abstract}

{% if vSphere %}

:::note

You can scale the remote nodes by creating a compute machine set in a separate subnet.

:::

{% endif %}


:::important

When deploying remote nodes in separate subnets, you must place the `ingressVIP` virtual IP address exclusively with the control plane nodes.

:::


{% if bare %}
![Installer-provisioned networking](/images/161_OpenShift_Baremetal_IPI_Deployment_updates_0521.png)
{% endif %}
{% if vSphere %}
![Installer-provisioned networking](/images/325_OpenShift_vSphere_Deployment_updates_0323.png)
{% endif %}

**Procedure**

1.  Change to the directory storing the `install-config.yaml` file:
    ```terminal
    $ cd ~/clusterconfigs
    ```
1.  Switch to the `manifests` subdirectory:
    ```terminal
    $ cd manifests
    ```
1.  Create a file named `cluster-network-avoid-workers-99-config.yaml`:
    ```terminal
    $ touch cluster-network-avoid-workers-99-config.yaml
    ```
1.  Open the `cluster-network-avoid-workers-99-config.yaml` file in an editor and enter a custom resource (CR) that describes the Operator configuration:
    ```yaml
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineConfig
    metadata:
      name: 50-worker-fix-ipi-rwn
      labels:
        machineconfiguration.openshift.io/role: worker
    spec:
      config:
        ignition:
          version: 3.2.0
        storage:
          files:
            - path: /etc/kubernetes/manifests/keepalived.yaml
              mode: 0644
              contents:
                source: data:,
    ```

    This manifest places the `ingressVIP` virtual IP address on the control plane nodes. Additionally, this manifest deploys the following processes on the control plane nodes only:
    *   `openshift-ingress-operator`
    *   `keepalived`
1.  Save the `cluster-network-avoid-workers-99-config.yaml` file.
1.  Create a `manifests/cluster-ingress-default-ingresscontroller.yaml` file:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
      name: default
      namespace: openshift-ingress-operator
    spec:
      nodePlacement:
        nodeSelector:
          matchLabels:
            node-role.kubernetes.io/master: ""
    ```
1.  Consider backing up the `manifests` directory. The installation program deletes the `manifests/` directory when creating the cluster.
1.  Modify the `cluster-scheduler-02-config.yml` manifest to make the control plane nodes schedulable by setting the `mastersSchedulable` field to `true`. Control plane nodes are not schedulable by default. For example:
    ```
    $ sed -i "s;mastersSchedulable: false;mastersSchedulable: true;g" clusterconfigs/manifests/cluster-scheduler-02-config.yml
    ```

    :::note

    If control plane nodes are not schedulable after completing this procedure, deploying the cluster will fail.
    
    :::


{% if context == "ipi-install-installation-workflow" %}
{%- set bare = "" -%}
{% endif %}
{% if context == "installing-vsphere-installer-provisioned-customizations" %}
{%- set vSphere = "" -%}
{% endif %}