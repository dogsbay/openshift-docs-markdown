{%- set _mod_docs_content_type = "CONCEPT" %}
# API compatibility common terminology {id="api-compatibility-common-terminology_{{ context }}"}

## Application Programming Interface (API) {id="api-compatibility-common-terminology-api_{{ context }}"}

An API is a public interface implemented by a software program that enables it to interact with other software. In {{ product_title }}, the API is served from a centralized API server and is used as the hub for all system interaction.

## Application Operating Environment (AOE) {id="api-compatibility-common-terminology-aoe_{{ context }}"}

An AOE is the integrated environment that executes the end-user application program. The AOE is a containerized environment that provides isolation from the host operating system (OS). At a minimum, AOE allows the application to run in an isolated manner from the host OS libraries and binaries, but still share the same OS kernel as all other containers on the host. The AOE is enforced at runtime and it describes the interface between an application and its operating environment. It includes intersection points between the platform, operating system and environment, with the user application including projection of downward API, DNS, resource accounting, device access, platform workload identity, isolation among containers, isolation between containers and host OS.

The AOE does not include components that might vary by installation, such as Container Network Interface (CNI) plugin selection or extensions to the product such as admission hooks. Components that integrate with the cluster at a level below the container environment might be subjected to additional variation between versions.

## Compatibility in a virtualized environment {id="api-compatibility-common-terminology-virtualized_{{ context }}"}

Virtual environments emulate bare-metal environments such that unprivileged applications that run on bare-metal environments will run, unmodified, in corresponding virtual environments. Virtual environments present simplified abstracted views of physical resources, so some differences might exist.

## Compatibility in a cloud environment {id="api-compatibility-common-terminology-cloud_{{ context }}"}

{{ product_title }} might choose to offer integration points with a hosting cloud environment via cloud provider specific integrations. The compatibility of these integration points are specific to the guarantee provided by the native cloud vendor and its intersection with the {{ product_title }} compatibility window.  Where {{ product_title }} provides an integration with a cloud environment natively as part of the default installation, Red Hat develops against stable cloud API endpoints to provide commercially reasonable support with forward looking compatibility that includes stable deprecation policies. Example areas of integration between the cloud provider and {{ product_title }} include, but are not limited to, dynamic volume provisioning, service load balancer integration, pod workload identity, dynamic management of compute, and infrastructure provisioned as part of initial installation.

## Major, minor, and z-stream releases {id="api-compatibility-common-terminology-releases_{{ context }}"}

A Red Hat major release represents a significant step in the development of a product. Minor releases appear more frequently within the scope of a major release and represent deprecation boundaries that might impact future application compatibility. A z-stream release is an update to a minor release which provides a stream of continuous fixes to an associated minor release. API and AOE compatibility is never broken in a z-stream release except when this policy is explicitly overridden in order to respond to an unforeseen security impact.

For example, in the release 4.13.2:

*   4 is the major release version
*   13 is the minor release version
*   2 is the z-stream release version

{% if not openshift_origin %}
## Extended user support (EUS) {id="api-compatibility-common-terminology-eus_{{ context }}"}

A minor release in an {{ product_title }} major release that has an extended support window for critical bug fixes. Users are able to migrate between EUS releases by incrementally adopting minor versions between EUS releases. It is important to note that the deprecation policy is defined across minor releases and not EUS releases. As a result, an EUS user might have to respond to a deprecation when migrating to a future EUS while sequentially upgrading through each minor release.
{% endif %}

## Developer Preview {id="api-compatibility-common-terminology-dev-preview_{{ context }}"}

An optional product capability that is not officially supported by Red Hat, but is intended to provide a mechanism to explore early phase technology. By default, Developer Preview functionality is opt-in, and subject to removal at any time. Enabling a Developer Preview feature might render a cluster unsupportable dependent upon the scope of the feature.

If you are a Red(&#160;)Hat customer or partner and have feedback about these developer preview versions, file an issue by using the [OpenShift Bugs tracker](https://issues.redhat.com/projects/OCPBUGS/issues). Do not use the formal Red(&#160;)Hat support service ticket process. You can read more about support handling in the following [knowledge article](https://access.redhat.com/support/offerings/devpreview).

## Technology Preview {id="api-compatibility-common-terminology-tech-preview_{{ context }}"}

An optional product capability that provides early access to upcoming product innovations to test functionality and provide feedback during the development process. The feature is not fully supported, might not be functionally complete, and is not intended for production use. Usage of a Technology Preview function requires explicit opt-in. Learn more about the [Technology Preview Features Support Scope](https://access.redhat.com/support/offerings/techpreview).