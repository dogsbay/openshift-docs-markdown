---
title: "PackageManifest [packages.operators.coreos.com/v1]"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# PackageManifest [packages.operators.coreos.com/v1] {id="packagemanifest-packages-operators-coreos-com-v1"}
{%- set toc = "macro" -%}
{%- set toc_title = true %}


Description
:   PackageManifest holds information about a package, which is a reference to one (or more) channels under a single package.


Type
:     `object`

## Specification {id="_specification"}

| Property | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds |
| `metadata` | [`ObjectMeta`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-ObjectMeta) |  |
| `spec` | `object` | PackageManifestSpec defines the desired state of PackageManifest |
| `status` | `object` | PackageManifestStatus represents the current status of the PackageManifest |

### .spec {id="_spec"}

Description
:   PackageManifestSpec defines the desired state of PackageManifest


Type
:     `object`

### .status {id="_status"}

Description
:   PackageManifestStatus represents the current status of the PackageManifest


Type
:     `object`


Required
:   *   `catalogSource`
    *   `catalogSourceDisplayName`
    *   `catalogSourcePublisher`
    *   `catalogSourceNamespace`
    *   `packageName`
    *   `channels`
    *   `defaultChannel`

| Property | Type | Description |
| --- | --- | --- |
| `catalogSource` | `string` | CatalogSource is the name of the CatalogSource this package belongs to |
| `catalogSourceDisplayName` | `string` |  |
| `catalogSourceNamespace` | `string` | CatalogSourceNamespace is the namespace of the owning CatalogSource |
| `catalogSourcePublisher` | `string` |  |
| `channels` | `array` | Channels are the declared channels for the package, ala `stable` or `alpha`. |
| `channels[]` | `object` | PackageChannel defines a single channel under a package, pointing to a version of that package. |
| `defaultChannel` | `string` | DefaultChannel is, if specified, the name of the default channel for the package. The default channel will be installed if no other channel is explicitly given. If the package has a single channel, then that channel is implicitly the default. |
| `deprecation` | `object` | Deprecation conveys information regarding a deprecated resource. |
| `packageName` | `string` | PackageName is the name of the overall package, ala `etcd`. |
| `provider` | `object` | AppLink defines a link to an application |

### .status.channels {id="_statuschannels"}

Description
:   Channels are the declared channels for the package, ala `stable` or `alpha`.


Type
:     `array`

### .status.channels[] {id="_statuschannels"}

Description
:   PackageChannel defines a single channel under a package, pointing to a version of that package.


Type
:     `object`


Required
:   *   `name`
    *   `currentCSV`
    *   `entries`

| Property | Type | Description |
| --- | --- | --- |
| `currentCSV` | `string` | CurrentCSV defines a reference to the CSV holding the version of this package currently for the channel. |
| `currentCSVDesc` | `object` | CSVDescription defines a description of a CSV |
| `deprecation` | `object` | Deprecation conveys information regarding a deprecated resource. |
| `entries` | `array` | Entries lists all CSVs in the channel, with their upgrade edges. |
| `entries[]` | `object` | ChannelEntry defines a member of a package channel. |
| `name` | `string` | Name is the name of the channel, e.g. `alpha` or `stable` |

### .status.channels[].currentCSVDesc {id="_statuschannelscurrentcsvdesc"}

Description
:   CSVDescription defines a description of a CSV


Type
:     `object`

| Property | Type | Description |
| --- | --- | --- |
| `annotations` | `object (string)` |  |
| `apiservicedefinitions` | [`APIServiceDefinitions`](/rest_api/objects/index#com-github-operator-framework-api-pkg-operators-v1alpha1-APIServiceDefinitions) |  |
| `customresourcedefinitions` | [`CustomResourceDefinitions`](/rest_api/objects/index#com-github-operator-framework-api-pkg-operators-v1alpha1-CustomResourceDefinitions) |  |
| `description` | `string` | LongDescription is the CSV’s description |
| `displayName` | `string` | DisplayName is the CSV’s display name |
| `icon` | `array` | Icon is the CSV’s base64 encoded icon |
| `icon[]` | `object` | Icon defines a base64 encoded icon and media type |
| `installModes` | [`array (InstallMode)`](/rest_api/objects/index#com-github-operator-framework-api-pkg-operators-v1alpha1-InstallMode) | InstallModes specify supported installation types |
| `keywords` | `array (string)` |  |
| `links` | `array` |  |
| `links[]` | `object` | AppLink defines a link to an application |
| `maintainers` | `array` |  |
| `maintainers[]` | `object` | Maintainer defines a project maintainer |
| `maturity` | `string` |  |
| `minKubeVersion` | `string` | Minimum Kubernetes version for operator installation |
| `nativeApis` | [`array (GroupVersionKind)`](/rest_api/objects/index#io-k8s-apimachinery-pkg-apis-meta-v1-GroupVersionKind) |  |
| `provider` | `object` | AppLink defines a link to an application |
| `relatedImages` | `array (string)` | List of related images |
| `version` | [`OperatorVersion`](/rest_api/objects/index#com-github-operator-framework-api-pkg-operators-lib-version-OperatorVersion) | Version is the CSV’s semantic version |

### .status.channels[].currentCSVDesc.icon {id="_statuschannelscurrentcsvdescicon"}

Description
:   Icon is the CSV’s base64 encoded icon


Type
:     `array`

### .status.channels[].currentCSVDesc.icon[] {id="_statuschannelscurrentcsvdescicon"}

Description
:   Icon defines a base64 encoded icon and media type


Type
:     `object`

| Property | Type | Description |
| --- | --- | --- |
| `base64data` | `string` |  |
| `mediatype` | `string` |  |

### .status.channels[].currentCSVDesc.links {id="_statuschannelscurrentcsvdesclinks"}

Description


Type
:     `array`

### .status.channels[].currentCSVDesc.links[] {id="_statuschannelscurrentcsvdesclinks"}

Description
:   AppLink defines a link to an application


Type
:     `object`

| Property | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `url` | `string` |  |

### .status.channels[].currentCSVDesc.maintainers {id="_statuschannelscurrentcsvdescmaintainers"}

Description


Type
:     `array`

### .status.channels[].currentCSVDesc.maintainers[] {id="_statuschannelscurrentcsvdescmaintainers"}

Description
:   Maintainer defines a project maintainer


Type
:     `object`

| Property | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `name` | `string` |  |

### .status.channels[].currentCSVDesc.provider {id="_statuschannelscurrentcsvdescprovider"}

Description
:   AppLink defines a link to an application


Type
:     `object`

| Property | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `url` | `string` |  |

### .status.channels[].deprecation {id="_statuschannelsdeprecation"}

Description
:   Deprecation conveys information regarding a deprecated resource.


Type
:     `object`


Required
:   *   `message`

| Property | Type | Description |
| --- | --- | --- |
| `message` | `string` | Message is a human readable message describing the deprecation. |

### .status.channels[].entries {id="_statuschannelsentries"}

Description
:   Entries lists all CSVs in the channel, with their upgrade edges.


Type
:     `array`

### .status.channels[].entries[] {id="_statuschannelsentries"}

Description
:   ChannelEntry defines a member of a package channel.


Type
:     `object`


Required
:   *   `name`

| Property | Type | Description |
| --- | --- | --- |
| `deprecation` | `object` | Deprecation conveys information regarding a deprecated resource. |
| `name` | `string` | Name is the name of the bundle for this entry. |
| `version` | `string` | Version is the version of the bundle for this entry. |

### .status.channels[].entries[].deprecation {id="_statuschannelsentriesdeprecation"}

Description
:   Deprecation conveys information regarding a deprecated resource.


Type
:     `object`


Required
:   *   `message`

| Property | Type | Description |
| --- | --- | --- |
| `message` | `string` | Message is a human readable message describing the deprecation. |

### .status.deprecation {id="_statusdeprecation"}

Description
:   Deprecation conveys information regarding a deprecated resource.


Type
:     `object`


Required
:   *   `message`

| Property | Type | Description |
| --- | --- | --- |
| `message` | `string` | Message is a human readable message describing the deprecation. |

### .status.provider {id="_statusprovider"}

Description
:   AppLink defines a link to an application


Type
:     `object`

| Property | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `url` | `string` |  |

## API endpoints {id="_api_endpoints"}

The following API endpoints are available:

*   `/apis/packages.operators.coreos.com/v1/packagemanifests`
    *   `GET`: list objects of kind PackageManifest
*   `/apis/packages.operators.coreos.com/v1/namespaces/{{ namespace }}/packagemanifests`{minja}
    *   `GET`: list objects of kind PackageManifest
*   `/apis/packages.operators.coreos.com/v1/namespaces/{{ namespace }}/packagemanifests/{{ name }}`{minja}
    *   `GET`: read the specified PackageManifest
*   `/apis/packages.operators.coreos.com/v1/namespaces/{{ namespace }}/packagemanifests/{{ name }}/icon`{minja}
    *   `GET`: connect GET requests to icon of PackageManifest

### /apis/packages.operators.coreos.com/v1/packagemanifests {id="_apispackagesoperatorscoreoscomv1packagemanifests"}


HTTP method
:     `GET`


Description
:     list objects of kind PackageManifest

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`PackageManifestList`](/rest_api/objects/index#com-github-operator-framework-operator-lifecycle-manager-pkg-package-server-apis-operators-v1-PackageManifestList) schema |

### /apis/packages.operators.coreos.com/v1/namespaces/{{ namespace }}/packagemanifests {id="_apispackagesoperatorscoreoscomv1namespaces_namespace_packagemanifests"}


HTTP method
:     `GET`


Description
:     list objects of kind PackageManifest

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`PackageManifestList`](/rest_api/objects/index#com-github-operator-framework-operator-lifecycle-manager-pkg-package-server-apis-operators-v1-PackageManifestList) schema |

### /apis/packages.operators.coreos.com/v1/namespaces/{{ namespace }}/packagemanifests/{{ name }} {id="_apispackagesoperatorscoreoscomv1namespaces_namespace_packagemanifests_name"}

**Global path parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `string` | name of the PackageManifest |


HTTP method
:     `GET`


Description
:     read the specified PackageManifest

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | [`PackageManifest`](/rest_api/operatorhub_apis/packagemanifest-packages-operators-coreos-com-v1#packagemanifest-packages-operators-coreos-com-v1) schema |

### /apis/packages.operators.coreos.com/v1/namespaces/{{ namespace }}/packagemanifests/{{ name }}/icon {id="_apispackagesoperatorscoreoscomv1namespaces_namespace_packagemanifests_name_icon"}

**Global path parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `string` | name of the PackageManifest |


HTTP method
:     `GET`


Description
:     connect GET requests to icon of PackageManifest

**HTTP responses**

| HTTP code | Reponse body |
| --- | --- |
| 200 - OK | `string` |