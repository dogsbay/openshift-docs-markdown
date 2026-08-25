{%- set _mod_docs_content_type = "CONCEPT" %}
# OVN-Kubernetes IPv6 and dual-stack limitations {id="nw-ovn-kubernetes-limitations_{{ context }}"}

The OVN-Kubernetes network plugin has specific IPv6 and dual-stack networking configuration limitations. These limitations affect gateway configuration, routing layouts, and infrastructure environment stability. {._abstract}

{%- if not microshift %}
*   For clusters configured for dual-stack networking, both IPv4 and IPv6 traffic must use the same network interface as the default gateway.
{%- endif %}
{%- if microshift %}
*   For a cluster configured for dual-stack networking, both IPv4 and IPv6 traffic must use the same network interface as the default gateway.
{%- endif %}

    If this requirement is not met, pods on the host in the `ovnkube-node` daemon set enter the `CrashLoopBackOff` state.

    If you display a pod with a command such as `oc get pod -n openshift-ovn-kubernetes -l app=ovnkube-node -o yaml`, the `status` field has more than one message about the default gateway, as shown in the following output:
    ```terminal
    I1006 16:09:50.985852   60651 helper_linux.go:73] Found default gateway interface br-ex 192.168.127.1
    I1006 16:09:50.985923   60651 helper_linux.go:73] Found default gateway interface ens4 fe80::5054:ff:febe:bcd4
    F1006 16:09:50.985939   60651 ovnkube.go:130] multiple gateway interfaces detected: br-ex ens4
    ```

    The only resolution is to reconfigure the host networking so that both IP families use the same network interface for the default gateway.
{%- if not microshift %}
*   For clusters configured for dual-stack networking, both the IPv4 and IPv6 routing tables must contain the default gateway.
{%- endif %}
{%- if microshift %}
*   For a cluster configured for dual-stack networking, both the IPv4 and IPv6 routing tables must contain the default gateway.
{%- endif %}

    If this requirement is not met, pods on the host in the `ovnkube-node` daemon set enter the `CrashLoopBackOff` state.

    If you display a pod with a command such as `oc get pod -n openshift-ovn-kubernetes -l app=ovnkube-node -o yaml`, the `status` field has more than one message about the default gateway, as shown in the following output:
    ```terminal
    I0512 19:07:17.589083  108432 helper_linux.go:74] Found default gateway interface br-ex 192.168.123.1
    F0512 19:07:17.589141  108432 ovnkube.go:133] failed to get default gateway interface
    ```

    The only resolution is to reconfigure the host networking so that both IP families contain the default gateway.
*   If you set the `ipv6.disable` parameter to `1` in the `kernelArgument` section of the `MachineConfig` custom resource (CR) for your cluster, OVN-Kubernetes pods enter a `CrashLoopBackOff` state. Additionally, updating your cluster to a later version of {{ product_title }} fails because the Network Operator remains on a `Degraded` state. Red&#160;Hat does not support disabling IPv6 addresses for your cluster so do not set the `ipv6.disable` parameter to `1`.