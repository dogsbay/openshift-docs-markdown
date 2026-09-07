{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable the OVN-Kubernetes resource injector {id="nw-dpf-enabling-ovnk-resource-injector_{{ context }}"}

You can install the OVN-Kubernetes resource injector by using Helm to deploy a mutating webhook that automatically injects SR-IOV virtual function resource requests and network attachment annotations into each pod scheduled to a worker node. {._abstract}


:::note

Virtual function resource capacity on worker nodes is provided by the `NodeSRIOVDevicePluginConfig` resource, which replaces the manual SR-IOV device plugin `DaemonSet` and control plane node patching used in earlier DPF versions.

:::


**Prerequisites**

*   You have access to the management cluster as a user with the `cluster-admin` role.
*   You have installed the `oc` CLI.
*   You have installed the `helm` CLI.
*   You have set the DPF Operator environment variables. For details, see "DPF Operator installation environment variables".
*   You have created the `NodeSRIOVDevicePluginConfig` resource.

**Procedure**

1.  Install the OVN-Kubernetes resource injector by using Helm:
    ```terminal
    $ helm upgrade --install -n openshift-ovn-kubernetes ovn-kubernetes \
      "$OVN_TEMPLATE_CHART_URL/ovn-kubernetes-chart" \
      --version "${OVN_CHART_VERSION}" \
      --skip-crds \
      --set ovn-kubernetes-resource-injector.enabled=true \
      --set ovn-kubernetes-resource-injector.resourceName="openshift.io/bf3_vfs" \
      --set ovn-kubernetes-resource-injector.prioritizeOffloading=false \
      --set ovn-kubernetes-resource-injector.controllerManager.hostNetwork=true \
      --set ovn-kubernetes-resource-injector.controllerManager.webhookPort="19443" \
      --set ovn-kubernetes-resource-injector.controllerManager.healthProbeBindAddress=":18081" \
      --set ovn-kubernetes-resource-injector.controllerManager.webhook.image.pullPolicy=IfNotPresent \
      --set "ovn-kubernetes-resource-injector.controllerManager.webhook.args={--leader-elect,--metrics-bind-address=:29091}" \
      --set nodeWithDPUManifests.enabled=false \
      --set nodeWithoutDPUManifests.enabled=false \
      --set dpuManifests.enabled=false \
      --set controlPlaneManifests.enabled=false \
      --set commonManifests.enabled=false
    ```
    ```terminal title="Example output"
    Release "ovn-kubernetes" does not exist. Installing it now.
    NAME: ovn-kubernetes
    LAST DEPLOYED: Sun Nov  2 17:10:29 2025
    NAMESPACE: openshift-ovn-kubernetes
    STATUS: deployed
    REVISION: 1
    TEST SUITE: None
    ```

**Verification**

*   Verify the resource injector mutating webhook configuration was applied:
    ```terminal
    $ oc get mutatingwebhookconfiguration | grep ovn
    ```
    ```terminal title="Example output"
    NAME                                                    WEBHOOKS   AGE
    ovn-kubernetes-resource-injector                        1          22h
    ```