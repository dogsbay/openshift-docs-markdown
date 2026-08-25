{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ SMProductName }} version 2.5.2 {id="ossm-release-2-5-2-only_{{ context }}"}

This release of {{ SMProductName }} updates the {{ SMProductName }} Operator version to 2.5.2, and includes the following `ServiceMeshControlPlane` resource version updates: 2.5.2, 2.4.8 and 2.3.12.
This release addresses Common Vulnerabilities and Exposures (CVEs), contains bug fixes, and is supported on {{ product_title }} 4.12 and later.

## Component updates {id="ossm-component-updates-2-5-2-only_{{ context }}"}

| Component | Version |
| --- | --- |
| Istio | 1.18.7 |
| Envoy Proxy | 1.26.8 |
| Kiali | 1.73.8 |

## Fixed issues {id="ossm-fixed-issues-2-5-2_{{ context }}"}

*   [OSSM-6331](https://issues.redhat.com/browse/OSSM-6331) Previously, the `smcp.general.logging.componentLevels` spec accepted invalid `LogLevel` values, and the `ServiceMeshControlPlane` resource was still created. Now, the terminal shows an error message if an invalid value is used, and the control plane is not created.
*   [OSSM-6290](https://issues.redhat.com/browse/OSSM-6290) Previously, the **Project** filter drop-down of the **Istio Config** list page did not work correctly. All `istio config` items were displayed from all namespaces even if you selected a specific project from the drop-down menu. Now, only the `istio config` items that belong to the selected project in the filter drop-down are displayed.
*   [OSSM-6298](https://issues.redhat.com/browse/OSSM-6298) Previously, when you clicked an item reference within the {{ SMPlugin }}, the console sometimes performed multiple redirects before opening the desired page. As a result, navigating back to the previous page that was open in the console caused your web browser to open the wrong page. Now, these redirects do not occur, and clicking **Back** in a web browser opens the correct page.
*   [OSSM-6299](https://issues.redhat.com/browse/OSSM-6299) Previously, in {{ product_title }} 4.15, when you clicked the **Node graph** menu option of any node menu within the traffic graph, the node graph was not displayed. Instead, the page refreshed with the same traffic graph. Now, clicking the **Node graph** menu option correctly displays the node graph.
*   [OSSM-6267](https://issues.redhat.com/browse/OSSM-6267) Previously, configuring a data source in {{ SMProductName }} 2.5 Grafana caused a data query authentication error, and users could not view data in the Istio service and workload dashboards. Now, upgrading an existing 2.5 SMCP to version 2.5.2 or later resolves the Grafana error.