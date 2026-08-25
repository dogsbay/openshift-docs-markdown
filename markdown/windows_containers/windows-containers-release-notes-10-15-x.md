{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ productwinc }} release notes {id="windows-containers-release-notes-10-15-x"}
{%- set context = "windows-containers-release-notes" %}

## About {{ productwinc }} {id="about-windows-containers"}

Windows Container Support for Red&#160;Hat OpenShift enables running Windows compute nodes in an {{ product_title }} cluster. Running Windows workloads is possible by using the Red&#160;Hat Windows Machine Config Operator (WMCO) to install and manage Windows nodes. With Windows nodes available, you can run Windows container workloads in {{ product_title }}.

The release notes for Red&#160;Hat OpenShift for Windows Containers tracks the development of the WMCO, which provides all Windows container workload capabilities in {{ product_title }}.

{% if not openshift_origin %}
## Getting support {id="getting-support"}

Windows Container Support for Red&#160;Hat OpenShift is provided and available as an optional, installable component. Windows Container Support for Red&#160;Hat OpenShift is not part of the {{ product_title }} subscription. It requires an additional Red&#160;Hat subscription and is supported according to the [Scope of coverage](https://access.redhat.com/support/offerings/production/soc/) and [Service level agreements](https://access.redhat.com/support/offerings/production/sla).

You must have this separate subscription to receive support for Windows Container Support for Red&#160;Hat OpenShift. Without this additional Red&#160;Hat subscription, deploying Windows container workloads in production clusters is not supported. You can request support through the [Red&#160;Hat Customer Portal](http://access.redhat.com/).

For more information, see the Red&#160;Hat OpenShift Container Platform Life Cycle Policy document for [{{ productwinc }}](https://access.redhat.com/support/policy/updates/openshift#windows).

If you do not have this additional Red&#160;Hat subscription, you can use the Community Windows Machine Config Operator, a distribution that lacks official support.
{% endif %}

## Release notes for Red&#160;Hat Windows Machine Config Operator 10.15.0 {id="wmco-10-15-0"}

This release of the WMCO provides bug fixes for running Windows compute nodes in an {{ product_title }} cluster. The components of the WMCO 10.15.0 were released in [RHSA-2024:0954-09](https://access.redhat.com/errata/RHSA-2024:0954-09).

### New features and improvements {id="_new_features_and_improvements"}

#### New WMCO numbering {id="wmco-10-15-0-numbering"}

Starting with this release, y-stream releases of the WMCO will be in step with {{ product_title }}, with only z-stream releases between {{ product_title }} releases. The WMCO numbering will reflect the associated {{ product_title }} version in the y-stream position. For example, the current release of WMCO is associated with {{ product_title }} version 4.15. Thus, the numbering is WMCO 10.15.z.

#### CPU and memory usage metrics are now available {id="wmco-10-15-0-operator-metrics"}

CPU and memory usage metrics for Windows pods are now available in Prometheus. The metrics are shown in the {{ product_title }} web console on the **Metrics** tab for each Windows pod and can be queried by users.

#### Operator SDK upgrade {id="wmco-10-15-0-operator-sdk"}

The WMCO now uses the Operator SDK version 1.32.0.

#### Kubernetes upgrade {id="wmco-10-15-0-operator-kube"}

The WMCO now uses Kubernetes 1.28.

### Bug fixes {id="wmco-10-15-0-bug-fixes"}

*   Previously, there was a flaw in the handling of multiplexed streams in the HTTP/2 protocol, which is utilized by the WMCO. A client could repeatedly make a request for a new multiplex stream and then immediately send an `RST_STREAM` frame to cancel those requests. This activity created additional work for the server by setting up and dismantling streams, but avoided any server-side limitations on the maximum number of active streams per connection. As a result, a denial of service occurred due to server resource consumption. This issue has been fixed. ([**BZ-2243296**](https://bugzilla.redhat.com/show_bug.cgi?id=2243296))
*   Previously, there was a flaw in Kubernetes, where a user who can create pods and persistent volumes on Windows nodes was able to escalate to admin privileges on those nodes. Kubernetes clusters were only affected if they were using an in-tree storage plugin for Windows nodes. This issue has been fixed. ([**BZ-2247163**](https://bugzilla.redhat.com/show_bug.cgi?id=2247163))
*   Previously, there was a flaw in the SSH channel integrity. By manipulating sequence numbers during the handshake, an attacker could remove the initial messages on the secure channel without causing a MAC failure. For example, an attacker could disable the ping extension and thus disable the new countermeasure in OpenSSH 9.5 against keystroke timing attacks. This issue has been fixed. ([**BZ-2254210**](https://bugzilla.redhat.com/show_bug.cgi?id=2254210))
*   Previously, the routes from a Windows Bring-Your-Own-Host (BYOH) VM to the metadata endpoint were being added as non-persistent routes, so the routes were removed when a VM  was removed (deconfigured) or re-configured. This would cause the node to fail if configured again, as the metadata endpoint was unreachable. With this fix, the WMCO runs the AWS EC2 launch v2 service after removal or re-configuration. As a result, the routes are restored so that the VM can be configured into a node, as expected. ([**OCPBUGS-15988**](https://issues.redhat.com/browse/OCPBUGS-15988))

*   Previously, the WMCO did not properly wait for Windows virtual machines (VMs) to finish rebooting. This led to occasional timing issues where the WMCO would attempt to interact with a node that was in the middle of a reboot, causing WMCO to log an error and restart node configuration. Now, the WMCO waits for the instance to completely reboot. ([**OCPBUGS-17217**](https://issues.redhat.com/browse/OCPBUGS-17217))

*   Previously, the WMCO configuration was missing the `DeleteEmptyDirData: true` field, which is required for draining nodes that have `emptyDir` volumes attached. As a consequence, customers that had nodes with `emptyDir` volumes would see the following error in the logs: `cannot delete Pods with local storage`. With this fix, the `DeleteEmptyDirData: true` field was added to the node drain helper struct in the WMCO. As a result, customers are able to drain nodes with `emptyDir` volumes attached. ([**OCPBUGS-27300**](https://issues.redhat.com/browse/OCPBUGS-27300))
*   Previously, because of a lack of synchronization between Windows machine set nodes and BYOH instances, during an update the machine set nodes and the BYOH instances could update simultaneously. This could impact running workloads. This fix introduces a locking mechanism so that machine set nodes and BYOH instances update individually. ([**OCPBUGS-8996**](https://issues.redhat.com/browse/OCPBUGS-8996))
*   Previously, because of a missing secret, the WMCO could not configure proper credentials for the WICD on Nutanix clusters. As a consequence, the WMCO could not create Windows nodes. With this fix, the WMCO creates long-lived credentials for the WICD service account. As a result, the WMCO is able to configure a Windows node on Nutanix clusters. ([**OCPBUGS-25350**](https://issues.redhat.com/browse/OCPBUGS-25350))

*   Previously, because of bad logic in the networking configuration script, the WICD was incorrectly reading carriage returns in the CNI configuration file as changes, and identified the file as modified. This caused the CNI configuration to be unnecessarily reloaded, potentially resulting in container restarts and brief network outages. With this fix, the WICD now reloads the CNI configuration only when the CNI configuration is actually modified. ([**OCPBUGS-25756**](https://issues.redhat.com/browse/OCPBUGS-25756))

{% leveloffset +1 %}{% include "./modules/wmco-prerequisites.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/windows-containers-release-notes-limitations.md" %}{% endleveloffset %}