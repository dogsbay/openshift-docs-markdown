{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding device plugins {id="nodes-pods-plugins-about_{{ context }}"}

A device plugin is a gRPC service running on nodes that manages specific hardware resources through an extension mechanism, enabling containers to consume these devices. {._abstract}

The device plugin provides a consistent and portable solution to consume hardware devices across clusters. The device plugin provides support for these devices through an extension mechanism, which makes these devices available to Containers, provides health checks of these devices, and securely shares them.


:::important

{{ product_title }} supports the device plugin API, but the device plugin
Containers are supported by individual vendors.

:::


A device plugin is a gRPC service running on the nodes (external to
the `kubelet`) that is responsible for managing specific
hardware resources. Any device plugin must support following remote procedure
calls (RPCs):

```golang
service DevicePlugin {
      // GetDevicePluginOptions returns options to be communicated with Device
      // Manager
      rpc GetDevicePluginOptions(Empty) returns (DevicePluginOptions) {}

      // ListAndWatch returns a stream of List of Devices
      // Whenever a Device state change or a Device disappears, ListAndWatch
      // returns the new list
      rpc ListAndWatch(Empty) returns (stream ListAndWatchResponse) {}

      // Allocate is called during container creation so that the Device
      // Plug-in can run device specific operations and instruct Kubelet
      // of the steps to make the Device available in the container
      rpc Allocate(AllocateRequest) returns (AllocateResponse) {}

      // PreStartcontainer is called, if indicated by Device Plug-in during
      // registration phase, before each container start. Device plug-in
      // can run device specific operations such as resetting the device
      // before making devices available to the container
      rpc PreStartcontainer(PreStartcontainerRequest) returns (PreStartcontainerResponse) {}
}
```

## Example device plugins {id="example-device-plugins_{{ context }}"}

*   Nvidia GPU device plugin for COS-based operating system
*   Nvidia official GPU device plugin
*   Solarflare device plugin
*   KubeVirt device plugins: vfio and kvm
*   Kubernetes device plugin for {{ ibm_name }} Crypto Express (CEX) cards


:::note

For easy device plugin reference implementation, there is a stub device plugin
in the Device Manager code:
**_vendor/k8s.io/kubernetes/pkg/kubelet/cm/deviceplugin/device_plugin_stub.go_**.

:::


## Methods for deploying a device plugin {id="methods-for-deploying-a-device-plugin_{{ context }}"}

*   Daemon sets are the recommended approach for device plugin deployments.
*   Upon start, the device plugin will try to create a UNIX domain socket at
**_/var/lib/kubelet/device-plugin/_** on the node to serve RPCs from Device Manager.
*   Since device plugins must manage hardware resources, access to the host
file system, as well as socket creation, they must be run in a privileged
security context.
*   More specific details regarding deployment steps can be found with each device
plugin implementation.