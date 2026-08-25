# Known issues {id="ossm-rn-known-issues-1x_{{ context }}"}

These limitations exist in {{ SMProductName }}:

*   [{{ SMProductName }} does not support IPv6](https://github.com/istio/old_issues_repo/issues/115), as it is not supported by the upstream Istio project, nor fully supported by {{ product_title }}.
*   Graph layout - The layout for the Kiali graph can render differently, depending on your application architecture and the data to display (number of graph nodes and their interactions). Because it is difficult if not impossible to create a single layout that renders nicely for every situation, Kiali offers a choice of several different layouts. To choose a different layout, you can choose a different **Layout Schema** from the **Graph Settings** menu.
*   The first time you access related services such as Jaeger and Grafana, from the Kiali console, you must accept the certificate and re-authenticate using your {{ product_title }} login credentials. This happens due to an issue with how the framework displays embedded pages in the console.

## {{ SMProductShortName }} known issues {id="ossm-rn-known-issues-ossm_{{ context }}"}

These are the known issues in {{ SMProductName }}:

*   [Jaeger/Kiali Operator upgrade blocked with operator pending](https://access.redhat.com/solutions/4970771) When upgrading the Jaeger or Kiali Operators with Service Mesh 1.0.x installed, the operator status shows as Pending.

    Workaround: See the linked Knowledge Base article for more information.
*   [Istio-14743](https://github.com/istio/istio/issues/14743) Due to limitations in the version of Istio that this release of {{ SMProductName }} is based on, there are several applications that are currently incompatible with {{ SMProductShortName }}. See the linked community issue for details.
*   [MAISTRA-858](https://issues.jboss.org/browse/MAISTRA-858) The following Envoy log messages describing [deprecated options and configurations associated with Istio 1.1.x](https://www.envoyproxy.io/docs/envoy/latest/intro/deprecated) are expected:
    *   [2019-06-03 07:03:28.943][19][warning][misc] [external/envoy/source/common/protobuf/utility.cc:129] Using deprecated option 'envoy.api.v2.listener.Filter.config'. This configuration will be removed from Envoy soon.
    *   [2019-08-12 22:12:59.001][13][warning][misc] [external/envoy/source/common/protobuf/utility.cc:174] Using deprecated option 'envoy.api.v2.Listener.use_original_dst' from file lds.proto. This configuration will be removed from Envoy soon.
*   [MAISTRA-806](https://issues.jboss.org/browse/MAISTRA-806) Evicted Istio Operator Pod causes mesh and CNI not to deploy.

    Workaround: If the `istio-operator` pod is evicted while deploying the control pane, delete the evicted `istio-operator` pod.
*   [MAISTRA-681](https://issues.jboss.org/browse/MAISTRA-681) When the control plane has many namespaces, it can lead to performance issues.
*   [MAISTRA-465](https://issues.jboss.org/browse/MAISTRA-465) The Maistra Operator fails to create a service for operator metrics.
*   [MAISTRA-453](https://issues.jboss.org/browse/MAISTRA-453) If you create a new project and deploy pods immediately, sidecar injection does not occur. The operator fails to add the `maistra.io/member-of` before the pods are created, therefore the pods must be deleted and recreated for sidecar injection to occur.
*   [MAISTRA-158](https://issues.jboss.org/browse/MAISTRA-158) Applying multiple gateways referencing the same hostname will cause all gateways to stop functioning.

## Kiali known issues {id="ossm-rn-known-issues-kiali_{{ context }}"}


:::note

New issues for Kiali should be created in the [OpenShift Service Mesh](https://issues.redhat.com/projects/OSSM/)  project with the `Component` set to `Kiali`.

:::


These are the known issues in Kiali:

*   [KIALI-2206](https://issues.jboss.org/browse/KIALI-2206) When you are accessing the Kiali console for the first time, and there is no cached browser data for Kiali, the “View in Grafana” link on the Metrics tab of the Kiali Service Details page redirects to the wrong location. The only way you would encounter this issue is if you are accessing Kiali for the first time.
*   [KIALI-507](https://github.com/kiali/kiali/issues/507) Kiali does not support Internet Explorer 11. This is because the underlying frameworks do not support Internet Explorer. To access the Kiali console, use one of the two most recent versions of the Chrome, Edge, Firefox or Safari browser.